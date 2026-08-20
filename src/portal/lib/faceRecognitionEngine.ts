// 100% Client-Side Real Facial Recognition Engine
// Powered by @vladmandic/face-api (TensorFlow.js backend)
// Provides 128-float biometric embedding vector extraction & euclidean distance matching

import * as faceapi from '@vladmandic/face-api';

const MODEL_URL = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/';

let isModelsLoaded = false;
let modelLoadingPromise: Promise<void> | null = null;

// Initialize and load lightweight face recognition models from CDN
export const loadFaceModels = async (): Promise<void> => {
  if (isModelsLoaded) return;
  if (modelLoadingPromise) return modelLoadingPromise;

  modelLoadingPromise = (async () => {
    try {
      console.log('[FaceEngine] Loading neural models from CDN...');
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68TinyNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL)
      ]);
      isModelsLoaded = true;
      console.log('[FaceEngine] Models loaded successfully!');
    } catch (err) {
      console.error('[FaceEngine] Failed to load models:', err);
      modelLoadingPromise = null;
      throw err;
    }
  })();

  return modelLoadingPromise;
};

export interface FaceScanResult {
  detected: boolean;
  descriptor?: Float32Array;
  detectionBox?: { x: number; y: number; width: number; height: number };
  score?: number;
  landmarks?: faceapi.FaceLandmarks68;
  fullResult?: any;
}

// Extract real 128-point face descriptor vector from a live HTMLVideoElement
export const detectSingleFaceDescriptor = async (
  video: HTMLVideoElement
): Promise<FaceScanResult> => {
  if (!isModelsLoaded) {
    await loadFaceModels();
  }

  const options = new faceapi.TinyFaceDetectorOptions({ inputSize: 320, scoreThreshold: 0.5 });
  const result = await faceapi
    .detectSingleFace(video, options)
    .withFaceLandmarks(true)
    .withFaceDescriptor();

  if (!result) {
    return { detected: false };
  }

  const { box, score } = result.detection;
  return {
    detected: true,
    descriptor: result.descriptor,
    detectionBox: { x: box.x, y: box.y, width: box.width, height: box.height },
    score,
    landmarks: result.landmarks,
    fullResult: result
  };
};

// Render real-time 68-point facial landmark mesh & bounding box on a target HTMLCanvasElement
export const drawFaceMeshOverVideo = (
  video: HTMLVideoElement,
  canvas: HTMLCanvasElement,
  scanResult: FaceScanResult,
  color: 'emerald' | 'rose' | 'blue' = 'emerald'
): void => {
  if (!scanResult.detected || !scanResult.fullResult) {
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    return;
  }

  const displaySize = { width: video.clientWidth || video.videoWidth || 640, height: video.clientHeight || video.videoHeight || 480 };
  faceapi.matchDimensions(canvas, displaySize);

  const resizedResult = faceapi.resizeResults(scanResult.fullResult, displaySize);

  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Draw face landmarks (eye dots, nose bridge, lip contour)
  const drawOptions = {
    drawLines: true,
    lineWidth: 1.5,
    color: color === 'rose' ? '#f43f5e' : color === 'blue' ? '#3b82f6' : '#10b981'
  };
  
  const landmarkDrawBox = new faceapi.draw.DrawFaceLandmarks(resizedResult.landmarks, drawOptions);
  landmarkDrawBox.draw(canvas);
};

// Extract face descriptor from an image URL (e.g. Employee's official profile photo)
export const extractDescriptorFromImageUrl = async (
  imageUrl: string
): Promise<Float32Array | null> => {
  try {
    if (!isModelsLoaded) await loadFaceModels();
    const img = await faceapi.fetchImage(imageUrl);
    const options = new faceapi.TinyFaceDetectorOptions({ inputSize: 320, scoreThreshold: 0.4 });
    const result = await faceapi
      .detectSingleFace(img, options)
      .withFaceLandmarks(true)
      .withFaceDescriptor();

    return result ? result.descriptor : null;
  } catch (err) {
    console.warn('[FaceEngine] Could not extract descriptor from profile photo URL:', err);
    return null;
  }
};

// Biometric Profile Storage (IndexedDB / localStorage fallback)
const STORAGE_PREFIX = 'kss_face_descriptor_v1_';

export const saveEmployeeDescriptor = (employeeId: string, descriptor: Float32Array): void => {
  const arrayData = Array.from(descriptor);
  localStorage.setItem(`${STORAGE_PREFIX}${employeeId}`, JSON.stringify(arrayData));
};

export const getEmployeeDescriptor = (employeeId: string, cloudDescriptor?: number[]): Float32Array | null => {
  const stored = localStorage.getItem(`${STORAGE_PREFIX}${employeeId}`);
  if (stored) {
    try {
      const arrayData = JSON.parse(stored) as number[];
      return new Float32Array(arrayData);
    } catch {}
  }
  
  if (cloudDescriptor && cloudDescriptor.length > 0) {
    // Restore from Cloud Firestore backup!
    saveEmployeeDescriptor(employeeId, new Float32Array(cloudDescriptor));
    return new Float32Array(cloudDescriptor);
  }

  return null;
};

export const clearEmployeeDescriptor = (employeeId: string): void => {
  localStorage.removeItem(`${STORAGE_PREFIX}${employeeId}`);
};

export interface MatchVerificationResult {
  isMatch: boolean;
  confidencePercent: number;
  distance: number;
  enrolled: boolean;
  matchedAgainstProfilePhoto?: boolean;
  message?: string;
}

// Compare scanned face descriptor strictly against employee's enrolled descriptor or profile photo
// Standard face-api Euclidean distance threshold: < 0.48 = SAME PERSON (Match), > 0.48 = DIFFERENT PERSON
export const verifyFaceAgainstEnrolled = (
  scannedDescriptor: Float32Array,
  employeeId: string,
  profilePhotoDescriptor?: Float32Array | null,
  cloudDescriptor?: number[]
): MatchVerificationResult => {
  let referenceDescriptor = getEmployeeDescriptor(employeeId, cloudDescriptor);
  let isProfilePhoto = false;

  // Fallback to Profile Photo descriptor if no local biometric enrolled yet
  if (!referenceDescriptor && profilePhotoDescriptor) {
    referenceDescriptor = profilePhotoDescriptor;
    isProfilePhoto = true;
  }

  // If NO reference is enrolled or available for this employee:
  if (!referenceDescriptor) {
    return {
      isMatch: false,
      confidencePercent: 0,
      distance: 1.0,
      enrolled: false,
      message: 'No face template enrolled for this account yet.'
    };
  }

  // Calculate Euclidean Distance between 128-float descriptors
  const distance = faceapi.euclideanDistance(scannedDescriptor, referenceDescriptor);
  
  const isMatch = distance < 0.48;
  
  let confidencePercent = 0;
  if (isMatch) {
    confidencePercent = Math.max(75, Math.min(99, Math.round((1 - distance / 0.55) * 100)));
  } else {
    confidencePercent = Math.max(5, Math.min(45, Math.round((1 - distance) * 100)));
  }

  return {
    isMatch,
    confidencePercent,
    distance,
    enrolled: true,
    matchedAgainstProfilePhoto: isProfilePhoto
  };
};
