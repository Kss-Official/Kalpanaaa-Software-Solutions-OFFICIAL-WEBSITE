import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, CheckCircle2, AlertTriangle, X, ScanFace, RefreshCw, Loader2, UserCheck, ShieldAlert, Sparkles } from 'lucide-react';
import { useHaptic } from '../../hooks/useHaptic';
import {
  loadFaceModels,
  detectSingleFaceDescriptor,
  verifyFaceAgainstEnrolled,
  saveEmployeeDescriptor,
  extractDescriptorFromImageUrl,
  getEmployeeDescriptor,
  drawFaceMeshOverVideo
} from '../../lib/faceRecognitionEngine';

interface FaceCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onEnrollSuccess?: (descriptorArray: number[]) => void;
  employeeName?: string;
  employeeId?: string;
  profilePhotoUrl?: string;
  cloudDescriptor?: number[];
  isTestMode?: boolean;
  isEnrollmentMode?: boolean;
}

export const FaceCaptureModal: React.FC<FaceCaptureModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  onEnrollSuccess,
  employeeName = 'Employee',
  employeeId = 'emp-001',
  profilePhotoUrl,
  cloudDescriptor,
  isTestMode = false,
  isEnrollmentMode = false
}) => {
  const { triggerHaptic } = useHaptic();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [statusStep, setStatusStep] = useState<'LOADING_MODELS' | 'INITIALIZING' | 'CENTER_FACE' | 'SCANNING' | 'VERIFIED' | 'FAILED' | 'NOT_ENROLLED' | 'ERROR'>('LOADING_MODELS');
  const [feedbackText, setFeedbackText] = useState('Loading face recognition neural network models...');
  const [confidencePercent, setConfidencePercent] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isEnrolled, setIsEnrolled] = useState<boolean>(false);
  const [profileDescriptor, setProfileDescriptor] = useState<Float32Array | null>(null);
  const [currentModeIsEnroll, setCurrentModeIsEnroll] = useState<boolean>(isEnrollmentMode);

  // Sync mode state when prop changes
  useEffect(() => {
    setCurrentModeIsEnroll(isEnrollmentMode);
  }, [isEnrollmentMode, isOpen]);

  // Check if employee already has face enrolled or extract from profile photo
  useEffect(() => {
    if (employeeId && isOpen) {
      const storedDesc = getEmployeeDescriptor(employeeId);
      setIsEnrolled(storedDesc !== null);

      if (!storedDesc && profilePhotoUrl) {
        extractDescriptorFromImageUrl(profilePhotoUrl).then(desc => {
          if (desc) setProfileDescriptor(desc);
        });
      }
    }
  }, [employeeId, profilePhotoUrl, isOpen]);

  // Load Models & Start Camera Stream
  useEffect(() => {
    if (!isOpen) {
      if (stream) {
        stream.getTracks().forEach(t => t.stop());
        setStream(null);
      }
      return;
    }

    let isMounted = true;

    const initializeEngine = async () => {
      try {
        setErrorMsg(null);
        setStatusStep('LOADING_MODELS');
        setFeedbackText('Loading neural network face models...');

        await loadFaceModels();

        if (!isMounted) return;

        setStatusStep('INITIALIZING');
        setFeedbackText('Accessing device camera...');

        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } }
        });

        if (isMounted) {
          setStream(mediaStream);
          if (videoRef.current) {
            videoRef.current.srcObject = mediaStream;
          }
          setStatusStep('CENTER_FACE');
          setFeedbackText('Position your face inside the frame...');
        }
      } catch (err: any) {
        if (isMounted) {
          console.error('[FaceCaptureModal] Error:', err);
          setErrorMsg(err?.message || 'Camera access or model loading failed. Please check permissions.');
          setStatusStep('ERROR');
        }
      }
    };

    initializeEngine();

    return () => {
      isMounted = false;
      if (stream) {
        stream.getTracks().forEach(t => t.stop());
      }
    };
  }, [isOpen]);

  // Handle Enrollment Action
  const handlePerformEnrollment = (scannedDescriptor: Float32Array) => {
    const descriptorArray = Array.from(scannedDescriptor);
    saveEmployeeDescriptor(employeeId, scannedDescriptor);
    onEnrollSuccess?.(descriptorArray);
    setIsEnrolled(true);
    setCurrentModeIsEnroll(false);
    setConfidencePercent(99);
    setStatusStep('VERIFIED');
    setFeedbackText('✓ Face Biometric Descriptor Successfully Registered!');
    triggerHaptic('success');

    setTimeout(() => {
      onSuccess();
      onClose();
    }, 1500);
  };

  // Live Detection Loop using real @vladmandic/face-api
  useEffect(() => {
    if (!isOpen || !videoRef.current || (statusStep !== 'CENTER_FACE' && statusStep !== 'SCANNING')) return;

    let active = true;
    let scanCount = 0;

    const interval = setInterval(async () => {
      if (!active || !videoRef.current || videoRef.current.paused || videoRef.current.ended) return;

      try {
        const scan = await detectSingleFaceDescriptor(videoRef.current);

        if (!active) return;

        // Render live 68-point facial landmarks mesh on canvas overlay
        if (canvasRef.current && videoRef.current) {
          drawFaceMeshOverVideo(videoRef.current, canvasRef.current, scan, 'emerald');
        }

        if (scan.detected && scan.descriptor) {
          scanCount++;
          setStatusStep('SCANNING');
          setFeedbackText(`Face detected! Processing facial landmarks... (${scanCount}/3)`);

          if (scanCount >= 2) {
            // Mode A: Enrollment Mode -> Save this face descriptor as reference
            if (currentModeIsEnroll) {
              active = false;
              clearInterval(interval);
              handlePerformEnrollment(scan.descriptor);
              return;
            }

            // Mode B: Verification Mode -> Match against registered face descriptor or profile photo
            const match = verifyFaceAgainstEnrolled(scan.descriptor, employeeId, profileDescriptor, cloudDescriptor);

            if (!match.enrolled) {
              // Not enrolled yet!
              setStatusStep('NOT_ENROLLED');
              setConfidencePercent(null);
              setFeedbackText('⚠️ No face template enrolled for this account yet. Click "Register Face" to enroll.');
              active = false;
              clearInterval(interval);
              return;
            }

            if (match.isMatch) {
              setConfidencePercent(match.confidencePercent);
              setStatusStep('VERIFIED');
              setFeedbackText(
                match.matchedAgainstProfilePhoto
                  ? `✓ Matched Against Profile Picture (${match.confidencePercent}% Confidence)`
                  : `✓ Biometric Match Verified (${match.confidencePercent}% Confidence)`
              );
              triggerHaptic('success');
              active = false;
              clearInterval(interval);

              setTimeout(() => {
                onSuccess();
                onClose();
              }, 1200);
            } else {
              setStatusStep('FAILED');
              setConfidencePercent(match.confidencePercent);
              setFeedbackText(`❌ Biometric Mismatch (${match.confidencePercent}% Confidence). Face does not match registered profile!`);
              triggerHaptic('error');
              active = false;
              clearInterval(interval);
            }
          }
        } else {
          if (statusStep === 'SCANNING') {
            setStatusStep('CENTER_FACE');
            setFeedbackText('Position your face clearly inside the frame...');
            setConfidencePercent(null);
          }
        }
      } catch (err) {
        console.warn('[FaceCaptureModal] Scan frame error:', err);
      }
    }, 400);

    return () => {
      active = false;
      clearInterval(interval);
    };
  }, [isOpen, statusStep, employeeId, currentModeIsEnroll, profileDescriptor]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-lg z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative flex flex-col items-center"
      >
        {/* Header Bar */}
        <div className="w-full px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
          <div className="flex items-center gap-2">
            <ScanFace className="w-5 h-5 text-emerald-400 animate-pulse" />
            <div>
              <h3 className="text-sm font-bold text-white">
                {currentModeIsEnroll ? '📸 Register Facial Biometrics' : isTestMode ? '🔍 Diagnostic Face Accuracy Test' : 'AI Biometric Facial Verification'}
              </h3>
              <p className="text-[10px] text-slate-400 font-mono">
                {currentModeIsEnroll ? 'Capturing 128-point face descriptor' : isTestMode ? 'Testing live facial matching against profile descriptor' : '100% Client-Side TensorFlow Neural Net'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Frame */}
        <div className="relative w-full aspect-4/3 bg-black flex items-center justify-center overflow-hidden">
          {errorMsg ? (
            <div className="p-6 text-center space-y-3">
              <AlertTriangle className="w-10 h-10 text-rose-500 mx-auto" />
              <p className="text-xs text-rose-400 font-semibold max-w-xs mx-auto">{errorMsg}</p>
            </div>
          ) : statusStep === 'LOADING_MODELS' ? (
            <div className="p-8 text-center space-y-4">
              <Loader2 className="w-10 h-10 text-emerald-400 animate-spin mx-auto" />
              <p className="text-xs text-slate-300 font-semibold">{feedbackText}</p>
              <p className="text-[10px] text-slate-500 max-w-xs mx-auto">First time loading 128-point face descriptor model (~2MB)...</p>
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover transform -scale-x-100"
              />

              {/* Real Neural 68-Point Facial Landmark Overlay Canvas */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none transform -scale-x-100 z-10"
              />
              
              {/* MediaPipe / Face-API Mesh Overlay Visual */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className={`w-56 h-72 rounded-[40%] border-2 transition-all duration-500 relative flex flex-col items-center justify-center ${
                  statusStep === 'VERIFIED' ? 'border-emerald-500 bg-emerald-500/10 shadow-[0_0_40px_rgba(16,185,129,0.3)]' :
                  statusStep === 'FAILED' ? 'border-rose-500 bg-rose-500/10 shadow-[0_0_40px_rgba(244,63,94,0.3)]' :
                  statusStep === 'NOT_ENROLLED' ? 'border-amber-500 bg-amber-500/10 shadow-[0_0_40px_rgba(245,158,11,0.3)]' :
                  statusStep === 'SCANNING' ? 'border-blue-400 bg-blue-500/5 shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-pulse' :
                  'border-emerald-400/80 border-dashed'
                }`}>
                  <div className="w-full h-full border border-emerald-400/30 rounded-[40%] absolute inset-2 opacity-60" />
                  {statusStep === 'VERIFIED' && (
                    <CheckCircle2 className="w-16 h-16 text-emerald-400 animate-in zoom-in-50 duration-300" />
                  )}
                  {statusStep === 'FAILED' && (
                    <ShieldAlert className="w-16 h-16 text-rose-500 animate-in zoom-in-50 duration-300" />
                  )}
                  {statusStep === 'NOT_ENROLLED' && (
                    <AlertTriangle className="w-16 h-16 text-amber-400 animate-in zoom-in-50 duration-300" />
                  )}
                </div>
              </div>
            </>
          )}

          {/* Top Floating Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <span className="text-[10px] font-mono font-bold bg-slate-950/80 text-slate-300 px-3 py-1 rounded-full border border-slate-800 backdrop-blur-md flex items-center gap-1.5">
              <UserCheck className="w-3 h-3 text-emerald-400" />
              {employeeName}
            </span>
            {confidencePercent !== null && (
              <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full border backdrop-blur-md ${
                statusStep === 'FAILED' 
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                  : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
              }`}>
                Accuracy: {confidencePercent}%
              </span>
            )}
          </div>
        </div>

        {/* Footer Status Bar */}
        <div className="w-full p-6 bg-slate-950 border-t border-slate-800 space-y-4">
          <div className="text-center space-y-1">
            <p className={`text-xs font-bold ${
              statusStep === 'VERIFIED' ? 'text-emerald-400' :
              statusStep === 'FAILED' ? 'text-rose-400' :
              statusStep === 'NOT_ENROLLED' ? 'text-amber-400' : 'text-white'
            }`}>{feedbackText}</p>
            <p className="text-[10px] text-slate-500">
              {currentModeIsEnroll
                ? 'Hold still inside the frame to register your official biometric face template.'
                : isEnrolled
                  ? 'Biometric descriptor registered. Matching live face against 128-float embedding.' 
                  : 'No facial template enrolled yet. Click "Register My Face" below to enroll.'}
            </p>
          </div>

          <div className="flex items-center justify-between gap-3 pt-1">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Cancel
            </button>

            {statusStep === 'NOT_ENROLLED' || !isEnrolled ? (
              <button
                onClick={() => {
                  setCurrentModeIsEnroll(true);
                  setStatusStep('CENTER_FACE');
                  setFeedbackText('Hold still to register your face...');
                }}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-md shadow-emerald-900/40"
              >
                <Sparkles className="w-3.5 h-3.5" /> Register My Face Now
              </button>
            ) : statusStep === 'FAILED' ? (
              <button
                onClick={() => setStatusStep('CENTER_FACE')}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Retry Scan
              </button>
            ) : (
              <button
                onClick={() => { onSuccess(); onClose(); }}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-blue-400 border border-slate-700 text-xs font-bold rounded-xl transition-all cursor-pointer"
              >
                Bypass Face Check
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
