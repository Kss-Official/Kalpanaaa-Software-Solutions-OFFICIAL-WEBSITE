import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { doc, setDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../../../lib/firebase';
import L from 'leaflet';
import { 
  MapPin, 
  Compass, 
  Save, 
  CheckCircle2, 
  ShieldCheck, 
  Radio, 
  Sliders, 
  LocateFixed, 
  Building2, 
  AlertTriangle, 
  RefreshCw,
  Info,
  Navigation
} from 'lucide-react';

const OFFICE_PRESETS = [
  {
    name: "Kalpanaaa HQ — Bhoganahalli, Bengaluru",
    latitude: 13.014333,
    longitude: 77.646000,
    radiusMeters: 500
  },
  {
    name: "Hitec City Cyber Towers Office",
    latitude: 17.450417,
    longitude: 78.380847,
    radiusMeters: 150
  },
  {
    name: "Financial District Tech Hub",
    latitude: 17.414000,
    longitude: 78.348000,
    radiusMeters: 200
  },
  {
    name: "Bengaluru Innovation Center",
    latitude: 12.971598,
    longitude: 77.594562,
    radiusMeters: 120
  }
];

export const WorkLocation: React.FC = () => {
  const { 
    companyWorkZone, 
    saveCompanyWorkZone, 
    activeEmployee, 
    role, 
    addAuditLog, 
    isFirestoreConnected 
  } = useAuth();

  const isExecutive = role === 'SUPER_ADMIN' || 
    activeEmployee?.employeeId === 'CEO001' || 
    activeEmployee?.employeeId === 'CTO001' || 
    activeEmployee?.designation?.toLowerCase().includes('ceo') || 
    activeEmployee?.designation?.toLowerCase().includes('cto');

  const [officeName, setOfficeName] = useState(companyWorkZone.name || 'Kalpanaaa Software Solutions — Main Office');
  const [latitude, setLatitude] = useState<number>(companyWorkZone.latitude ?? 13.014333);
  const [longitude, setLongitude] = useState<number>(companyWorkZone.longitude ?? 77.646000);
  const [radiusMeters, setRadiusMeters] = useState<number>(companyWorkZone.radiusMeters ?? 100);
  const [isActive, setIsActive] = useState<boolean>(companyWorkZone.active ?? true);

  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [isAcquiringGps, setIsAcquiringGps] = useState(false);
  const [gpsError, setGpsError] = useState<string | null>(null);

  // Leaflet Map References
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const circleRef = useRef<L.Circle | null>(null);

  // Sync internal state if companyWorkZone changes from Firestore
  useEffect(() => {
    if (companyWorkZone) {
      setOfficeName(companyWorkZone.name || 'Kalpanaaa Software Solutions — Main Office');
      setLatitude(companyWorkZone.latitude ?? 13.014333);
      setLongitude(companyWorkZone.longitude ?? 77.646000);
      setRadiusMeters(companyWorkZone.radiusMeters ?? 100);
      setIsActive(companyWorkZone.active ?? true);
    }
  }, [companyWorkZone]);

  // Load Leaflet CSS CDN dynamically
  useEffect(() => {
    if (!document.getElementById('leaflet-css-cdn')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css-cdn';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }
  }, []);

  // Initialize Map Instance
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const initialLat = latitude || 13.014333;
      const initialLng = longitude || 77.646000;

      const map = L.map(mapContainerRef.current, {
        center: [initialLat, initialLng],
        zoom: 16,
        zoomControl: true,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      // Custom Pin Icon
      const customPinIcon = L.divIcon({
        className: 'custom-company-pin',
        html: `
          <div style="
            background: linear-gradient(135deg, #2563eb, #1d4ed8);
            width: 34px;
            height: 34px;
            border-radius: 50%;
            border: 3px solid #ffffff;
            box-shadow: 0 8px 16px rgba(0,0,0,0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          ">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
        `,
        iconSize: [34, 34],
        iconAnchor: [17, 34],
        popupAnchor: [0, -34],
      });

      // Draggable marker
      const marker = L.marker([initialLat, initialLng], {
        draggable: true,
        icon: customPinIcon,
      }).addTo(map);

      marker.bindPopup(`<b>${officeName}</b><br/>Allowed Radius: ${radiusMeters}m`);

      marker.on('dragend', () => {
        const position = marker.getLatLng();
        const newLat = parseFloat(position.lat.toFixed(6));
        const newLng = parseFloat(position.lng.toFixed(6));
        setLatitude(newLat);
        setLongitude(newLng);
      });

      // Allowed Radius Geofence Circle
      const circle = L.circle([initialLat, initialLng], {
        color: '#3b82f6',
        fillColor: '#60a5fa',
        fillOpacity: 0.25,
        radius: radiusMeters,
      }).addTo(map);

      // Interactive Click to Reposition
      map.on('click', (e: L.LeafletMouseEvent) => {
        const clickLat = parseFloat(e.latlng.lat.toFixed(6));
        const clickLng = parseFloat(e.latlng.lng.toFixed(6));
        setLatitude(clickLat);
        setLongitude(clickLng);
      });

      mapInstanceRef.current = map;
      markerRef.current = marker;
      circleRef.current = circle;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Synchronize Map visuals when state coordinates or radius change
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    const latLng: [number, number] = [latitude, longitude];

    if (markerRef.current) {
      markerRef.current.setLatLng(latLng);
      markerRef.current.getPopup()?.setContent(`<b>${officeName}</b><br/>Allowed Radius: ${radiusMeters}m`);
    }

    if (circleRef.current) {
      circleRef.current.setLatLng(latLng);
      circleRef.current.setRadius(radiusMeters);
    }

    mapInstanceRef.current.panTo(latLng);
  }, [latitude, longitude, radiusMeters, officeName]);

  // Handle Acquire Current Location
  const handleAcquireCurrentGps = () => {
    setGpsError(null);
    if (!('geolocation' in navigator)) {
      setGpsError('Geolocation is not supported by your browser.');
      return;
    }

    setIsAcquiringGps(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const curLat = parseFloat(pos.coords.latitude.toFixed(6));
        const curLng = parseFloat(pos.coords.longitude.toFixed(6));
        setLatitude(curLat);
        setLongitude(curLng);
        setIsAcquiringGps(false);
      },
      (err) => {
        setIsAcquiringGps(false);
        setGpsError(`GPS Error: ${err.message}`);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  // Apply Preset Location
  const handleSelectPreset = (preset: typeof OFFICE_PRESETS[0]) => {
    setOfficeName(preset.name);
    setLatitude(preset.latitude);
    setLongitude(preset.longitude);
    setRadiusMeters(preset.radiusMeters);
  };

  // Handle Saving to Firestore 'workZones/company'
  const handleSaveToFirestore = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!isExecutive) {
      alert('Access Denied: Only CEO (Akshit) or CTO (Gaurav) can update executive work locations.');
      return;
    }

    setIsSaving(true);
    setSaveSuccess(false);

    try {
      const updatedWorkZone = {
        name: officeName.trim() || 'Kalpanaaa Software Solutions — Main Office',
        latitude: Number(latitude),
        longitude: Number(longitude),
        radiusMeters: Number(radiusMeters),
        active: isActive,
        updatedBy: activeEmployee?.fullName || activeEmployee?.email || 'Executive Admin (CEO/CTO)',
        updatedAt: new Date().toISOString()
      };

      // 1. Context Sync & Local Cache
      await saveCompanyWorkZone(updatedWorkZone);

      // 2. Direct Explicit Firestore Write to `workZones/company`
      await setDoc(doc(db, 'workZones', 'company'), updatedWorkZone, { merge: true }).catch(err => {
        handleFirestoreError(err, OperationType.WRITE, 'workZones/company');
      });

      addAuditLog(
        'WORKZONE_SAVED',
        'workZones/company',
        `CEO/CTO Updated Office Geofence (${updatedWorkZone.name}): Lat ${updatedWorkZone.latitude}, Lon ${updatedWorkZone.longitude}, Radius ${updatedWorkZone.radiusMeters}m`
      );

      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3500);
    } catch (err: any) {
      setIsSaving(false);
      console.error('Failed to save company work location:', err);
      alert('Failed to save to Firestore: ' + (err.message || 'Unknown error'));
    }
  };

  return (
    <div className="max-w-5xl space-y-6 text-slate-100 font-sans">
      
      {/* Top Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/60 p-6 rounded-3xl border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Compass className="w-5 h-5" />
            </span>
            <h1 className="text-xl font-bold text-white tracking-tight">
              Company Work Location & Geofence
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 font-mono text-[10px] uppercase font-bold">
              workZones/company
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
            Authoritative office coordinates & attendance boundary managed directly by Executive Leadership (<strong className="text-slate-200">CEO Akshit & CTO Gaurav</strong>). Synced live to Firestore.
          </p>
        </div>

        {/* Executive Access Check Badge */}
        <div className="flex items-center gap-2 shrink-0">
          {isExecutive ? (
            <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-950/80 border border-emerald-800/80 rounded-2xl text-emerald-300 text-xs font-bold shadow-lg">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>CEO / CTO Grant Verified</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 px-3.5 py-2 bg-rose-950/80 border border-rose-800/80 rounded-2xl text-rose-300 text-xs font-bold">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>Executive Auth Required</span>
            </div>
          )}
        </div>
      </div>

      {/* Save Success Alert */}
      {saveSuccess && (
        <div className="p-4 bg-emerald-950/90 border border-emerald-500/50 rounded-2xl flex items-center justify-between text-xs text-emerald-200 font-bold shadow-xl animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <p className="text-white text-sm">Company Work Location Saved to Firestore!</p>
              <p className="text-[11px] text-emerald-300 font-normal mt-0.5">
                Collection <code className="font-mono font-bold bg-emerald-900/60 px-1.5 py-0.5 rounded">workZones/company</code> updated successfully. All employee QR scans will now evaluate against this geofence.
              </p>
            </div>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-900/40 px-2.5 py-1 rounded-xl border border-emerald-700/50">
            Synced Live
          </span>
        </div>
      )}

      {/* Main Form & Map Interface Grid */}
      <form onSubmit={handleSaveToFirestore} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Coordinates & Controls (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Work Zone Information Box */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-5 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-xs uppercase tracking-wider text-blue-400 flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Office Parameters
              </h3>
              
              <div className="flex items-center gap-1.5 text-[11px] font-bold">
                <Radio className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400 animate-pulse' : 'text-slate-500'}`} />
                <span className={isActive ? 'text-emerald-400' : 'text-slate-400'}>
                  {isActive ? 'Active Perimeter' : 'Disabled'}
                </span>
              </div>
            </div>

            <div className="space-y-3.5 text-xs">
              
              {/* Office Name */}
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Office / WorkZone Label
                </label>
                <input
                  type="text"
                  value={officeName}
                  onChange={(e) => setOfficeName(e.target.value)}
                  placeholder="e.g. Kalpanaaa Software Solutions — Main Office"
                  required
                  disabled={!isExecutive}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl font-bold text-white focus:outline-none focus:border-blue-500 disabled:opacity-60"
                />
              </div>

              {/* Latitude & Longitude Inputs */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Latitude (°N)
                  </label>
                  <input
                    type="number"
                    step="any"
                    value={latitude}
                    onChange={(e) => setLatitude(parseFloat(e.target.value) || 0)}
                    required
                    disabled={!isExecutive}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl font-mono font-bold text-white focus:outline-none focus:border-blue-500 text-xs disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Longitude (°E)
                  </label>
                  <input
                    type="number"
                    step="any"
                    value={longitude}
                    onChange={(e) => setLongitude(parseFloat(e.target.value) || 0)}
                    required
                    disabled={!isExecutive}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl font-mono font-bold text-white focus:outline-none focus:border-blue-500 text-xs disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Allowed Radius Input & Slider */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between">
                  <label className="text-slate-300 font-semibold">
                    Allowed Radius (Meters)
                  </label>
                  <span className="font-mono font-bold text-blue-400 bg-blue-950 px-2 py-0.5 rounded-lg border border-blue-800/80 text-[11px]">
                    {radiusMeters} meters
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="20"
                    max="1000"
                    step="10"
                    value={radiusMeters}
                    onChange={(e) => setRadiusMeters(Number(e.target.value))}
                    disabled={!isExecutive}
                    className="flex-1 h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-blue-500 disabled:opacity-50"
                  />
                  <input
                    type="number"
                    min="10"
                    max="5000"
                    value={radiusMeters}
                    onChange={(e) => setRadiusMeters(Number(e.target.value) || 10)}
                    required
                    disabled={!isExecutive}
                    className="w-20 px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded-xl font-bold text-center text-white text-xs focus:outline-none focus:border-blue-500 disabled:opacity-60"
                  />
                </div>
                <p className="text-[11px] text-slate-400">
                  Employees within this radius can successfully check in via QR code.
                </p>
              </div>

              {/* Active Toggle */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                <span className="text-slate-300 font-semibold">Enforce Geofence Active</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={isActive} 
                    onChange={(e) => setIsActive(e.target.checked)}
                    disabled={!isExecutive}
                    className="sr-only peer" 
                  />
                  <div className="w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

            </div>
          </div>

          {/* Quick Actions & Presets */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-5 space-y-3.5 shadow-xl">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-blue-400" />
              Location Tools & Presets
            </h4>

            {/* GPS Fetch Button */}
            <button
              type="button"
              onClick={handleAcquireCurrentGps}
              disabled={isAcquiringGps || !isExecutive}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-950 hover:bg-slate-800 text-blue-300 border border-slate-800 rounded-2xl font-bold text-xs transition-all cursor-pointer disabled:opacity-50"
            >
              <LocateFixed className={`w-4 h-4 text-blue-400 ${isAcquiringGps ? 'animate-spin' : ''}`} />
              <span>{isAcquiringGps ? 'Acquiring GPS Signal...' : 'Use My Current GPS Position'}</span>
            </button>

            {gpsError && (
              <p className="text-[11px] text-rose-400 bg-rose-950/50 p-2 rounded-xl border border-rose-900">
                {gpsError}
              </p>
            )}

            {/* Preset Options */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] text-slate-400 font-semibold block">
                Quick Corporate Presets:
              </span>
              <div className="space-y-1.5">
                {OFFICE_PRESETS.map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectPreset(preset)}
                    disabled={!isExecutive}
                    className="w-full text-left p-2 rounded-xl bg-slate-950 hover:bg-blue-950/40 border border-slate-800/80 hover:border-blue-800/60 transition-all text-xs flex items-center justify-between group cursor-pointer disabled:opacity-50"
                  >
                    <span className="font-semibold text-slate-300 group-hover:text-blue-200 truncate pr-2">
                      {preset.name}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 shrink-0">
                      {preset.radiusMeters}m
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Save Button */}
          <button
            type="submit"
            disabled={isSaving || !isExecutive}
            className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-bold text-sm transition-all shadow-xl cursor-pointer ${
              isSaving
                ? 'bg-blue-800 text-slate-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-900/50 scale-[1.01]'
            } disabled:opacity-50`}
          >
            {isSaving ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-white" />
                <span>Writing to Firestore (workZones/company)...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4 text-white" />
                <span>Save Work Location to Firestore</span>
              </>
            )}
          </button>

        </div>

        {/* Right Column: Interactive Map Display (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-5 flex-1 flex flex-col space-y-4 shadow-xl">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-blue-400 flex items-center gap-2">
                  <Navigation className="w-4 h-4" />
                  Interactive Map & Geofence Visualizer
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Drag the marker pin or click anywhere on the map to set exact company office coordinates.
                </p>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-xl text-[11px] font-mono text-blue-300">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{latitude.toFixed(4)}, {longitude.toFixed(4)}</span>
              </div>
            </div>

            {/* Map Container Element */}
            <div className="relative flex-1 min-h-[420px] rounded-2xl overflow-hidden border border-slate-800 shadow-inner bg-slate-950">
              <div 
                ref={mapContainerRef} 
                className="w-full h-full min-h-[420px] z-0"
              />

              {/* Map Floating Status Card */}
              <div className="absolute bottom-3 left-3 right-3 z-10 bg-slate-950/90 backdrop-blur-md border border-slate-800 p-3 rounded-2xl flex items-center justify-between gap-3 text-xs shadow-2xl">
                <div className="flex items-center gap-2.5 truncate">
                  <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse shrink-0" />
                  <div className="truncate">
                    <span className="font-bold text-white block truncate">{officeName}</span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Radius: {radiusMeters} meters | Lat: {latitude} | Lon: {longitude}
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[10px] text-emerald-400 font-mono block">
                    {isFirestoreConnected ? 'Firestore Online' : 'Local Fallback'}
                  </span>
                  {companyWorkZone.updatedAt && (
                    <span className="text-[9px] text-slate-500">
                      Last: {new Date(companyWorkZone.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Explanatory Footer Note */}
            <div className="p-3 bg-slate-950/60 rounded-2xl border border-slate-800/80 flex items-start gap-2 text-[11px] text-slate-400">
              <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>
                <strong>Attendance Security Note:</strong> When employees scan their QR code at check-in or check-out, their GPS location is compared against these exact coordinates. If their distance is greater than {radiusMeters} meters, the scan will be flagged as out-of-bounds according to the company geofence policy.
              </span>
            </div>

          </div>

        </div>

      </form>

    </div>
  );
};
