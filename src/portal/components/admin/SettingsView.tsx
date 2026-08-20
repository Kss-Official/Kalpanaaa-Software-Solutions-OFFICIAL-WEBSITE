import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { WorkZoneMapPreview } from './WorkZoneMapPreview';
import { WorkLocation } from './settings/WorkLocation';
import { 
  Building2, 
  MapPin, 
  Clock, 
  QrCode, 
  FileText, 
  Save, 
  Compass, 
  Check, 
  ShieldAlert,
  Globe,
  Radio,
  Sliders,
  Map
} from 'lucide-react';

export const SettingsView: React.FC = () => {
  const { settings, updateSettings, companyWorkZone, saveCompanyWorkZone } = useAuth();

  const [activeSubTab, setActiveSubTab] = useState<'work_location' | 'general_policy'>('work_location');

  const [formState, setFormState] = useState({ 
    ...settings,
    officeName: companyWorkZone.name || settings.officeName,
    officeLatitude: companyWorkZone.latitude ?? settings.officeLatitude,
    officeLongitude: companyWorkZone.longitude ?? settings.officeLongitude,
    allowedRadiusMeters: companyWorkZone.radiusMeters ?? settings.allowedRadiusMeters
  });

  const [savedSuccess, setSavedSuccess] = useState(false);
  const [gettingLocation, setGettingLocation] = useState(false);

  useEffect(() => {
    setFormState(prev => ({
      ...prev,
      officeName: companyWorkZone.name || prev.officeName,
      officeLatitude: companyWorkZone.latitude ?? prev.officeLatitude,
      officeLongitude: companyWorkZone.longitude ?? prev.officeLongitude,
      allowedRadiusMeters: companyWorkZone.radiusMeters ?? prev.allowedRadiusMeters
    }));
  }, [companyWorkZone]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormState(prev => ({ ...prev, [e.target.name]: value }));
  };

  const handleFetchCurrentGps = () => {
    if ('geolocation' in navigator) {
      setGettingLocation(true);
      navigator.geolocation.getCurrentPosition(
        pos => {
          setFormState(prev => ({
            ...prev,
            officeLatitude: parseFloat(pos.coords.latitude.toFixed(6)),
            officeLongitude: parseFloat(pos.coords.longitude.toFixed(6))
          }));
          setGettingLocation(false);
        },
        err => {
          alert('Could not retrieve current location: ' + err.message);
          setGettingLocation(false);
        },
        { enableHighAccuracy: true }
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Save authoritative Work Zone in Firestore (workZones/company)
    await saveCompanyWorkZone({
      name: formState.officeName,
      latitude: Number(formState.officeLatitude),
      longitude: Number(formState.officeLongitude),
      radiusMeters: Number(formState.allowedRadiusMeters),
      active: true
    });

    // 2. Save remaining global settings
    updateSettings({
      ...formState,
      allowedRadiusMeters: Number(formState.allowedRadiusMeters),
      gracePeriodMinutes: Number(formState.gracePeriodMinutes),
      qrTokenLifetimeMinutes: Number(formState.qrTokenLifetimeMinutes),
      officeLatitude: Number(formState.officeLatitude),
      officeLongitude: Number(formState.officeLongitude),
    });

    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="max-w-5xl space-y-6">
      {/* Top Header & Sub-Tab Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/80 p-4 rounded-3xl border border-slate-800">
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">Admin Settings & Geofence Policy</h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Configure company office location (workZones/company), GPS attendance perimeter, and corporate policies
          </p>
        </div>

        {/* Sub-Tab Buttons */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-950 rounded-2xl border border-slate-800/80 shrink-0">
          <button
            type="button"
            onClick={() => setActiveSubTab('work_location')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeSubTab === 'work_location'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-900/50'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Work Location & Geofence</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('general_policy')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeSubTab === 'general_policy'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-900/50'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>General Policies</span>
          </button>
        </div>
      </div>

      {/* Render Selected SubTab */}
      {activeSubTab === 'work_location' ? (
        <WorkLocation />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 text-xs">
          
          {/* Section 1: Organization Details */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 space-y-4 shadow-xl">
            <h3 className="font-bold text-sm uppercase tracking-wider text-blue-400 border-b border-slate-800 pb-2 flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              1. Corporate Organization Profile
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formState.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl font-bold text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Company Contact Email</label>
                <input
                  type="email"
                  name="companyEmail"
                  value={formState.companyEmail}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Company Phone</label>
                <input
                  type="text"
                  name="companyPhone"
                  value={formState.companyPhone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Company Registered Address</label>
                <input
                  type="text"
                  name="companyAddress"
                  value={formState.companyAddress}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Authoritative Company Work Location */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 space-y-5 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-blue-400 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-blue-400" />
                  2. Company Work Location (Single Authoritative Geofence)
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Single source of truth saved in Firestore (<code className="text-blue-300 font-mono">workZones/company</code>). Applies automatically to all employee attendance sessions.
                </p>
              </div>

              <button
                type="button"
                onClick={handleFetchCurrentGps}
                className="self-start sm:self-auto flex items-center gap-1.5 px-3 py-1.5 bg-blue-600/20 text-blue-300 border border-blue-500/30 text-xs font-bold rounded-xl hover:bg-blue-600/30 transition-all cursor-pointer shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{gettingLocation ? 'Acquiring GPS...' : 'Use My Current Location'}</span>
              </button>
            </div>

            {/* Active Work Zone Indicator Badge */}
            <div className="p-3 bg-blue-950/40 border border-blue-800/60 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-emerald-400 animate-pulse shrink-0" />
                <div>
                  <span className="font-bold text-white">Active Work Zone: </span>
                  <span className="text-blue-300 font-semibold">{companyWorkZone.name || formState.officeName}</span>
                </div>
              </div>
              {companyWorkZone.updatedAt && (
                <span className="text-[10px] text-slate-400 font-mono">
                  Updated by: {companyWorkZone.updatedBy || 'Admin'} ({new Date(companyWorkZone.updatedAt).toLocaleDateString()})
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-3">
                <label className="block text-slate-300 font-semibold mb-1">Office Name</label>
                <input
                  type="text"
                  name="officeName"
                  value={formState.officeName}
                  onChange={handleChange}
                  placeholder="e.g. Kalpanaaa Software Solutions — Main Office"
                  required
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl font-bold text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Exact Latitude</label>
                <input
                  type="number"
                  step="any"
                  name="officeLatitude"
                  value={formState.officeLatitude}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl font-mono font-bold text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Exact Longitude</label>
                <input
                  type="number"
                  step="any"
                  name="officeLongitude"
                  value={formState.officeLongitude}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl font-mono font-bold text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Allowed Radius (Meters)</label>
                <input
                  type="number"
                  name="allowedRadiusMeters"
                  value={formState.allowedRadiusMeters}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl font-semibold text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Office Static IP (Optional)</label>
                <input
                  type="text"
                  name="officeStaticIp"
                  value={formState.officeStaticIp || ''}
                  onChange={handleChange}
                  placeholder="e.g. 192.168.1.100"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl font-mono text-white focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            {/* Interactive Map Preview with Draggable Marker */}
            <div className="pt-2">
              <WorkZoneMapPreview
                latitude={Number(formState.officeLatitude) || 17.385044}
                longitude={Number(formState.officeLongitude) || 78.486671}
                radiusMeters={Number(formState.allowedRadiusMeters) || 100}
                officeName={formState.officeName || 'Kalpanaaa Software Solutions — Main Office'}
                onChangeLocation={(lat, lon) => {
                  setFormState(prev => ({
                    ...prev,
                    officeLatitude: lat,
                    officeLongitude: lon
                  }));
                }}
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="gpsRequired"
                name="gpsRequired"
                checked={formState.gpsRequired}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 rounded-md focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="gpsRequired" className="font-bold text-white cursor-pointer text-xs">
                Enforce Strict GPS Geofence Verification for Employee Check-In
              </label>
            </div>
          </div>

          {/* Section 3: Work Timings & QR Rotation */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 space-y-4 shadow-xl">
            <h3 className="font-bold text-sm uppercase tracking-wider text-blue-400 border-b border-slate-800 pb-2 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              3. Work Timings & Anti-Abuse QR Rules
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Work Start Time</label>
                <input
                  type="time"
                  name="workStartTime"
                  value={formState.workStartTime}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl font-mono text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Work End Time</label>
                <input
                  type="time"
                  name="workEndTime"
                  value={formState.workEndTime}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl font-mono text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Grace Period (Minutes)</label>
                <input
                  type="number"
                  name="gracePeriodMinutes"
                  value={formState.gracePeriodMinutes}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl font-semibold text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">QR Token Lifetime (Minutes)</label>
                <input
                  type="number"
                  name="qrTokenLifetimeMinutes"
                  value={formState.qrTokenLifetimeMinutes}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl font-semibold text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Authorized Signature Name</label>
                <input
                  type="text"
                  name="authorizedSignatureName"
                  value={formState.authorizedSignatureName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Authorized Signature Title</label>
                <input
                  type="text"
                  name="authorizedSignatureTitle"
                  value={formState.authorizedSignatureTitle}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all cursor-pointer shadow-md shadow-blue-900/40"
            >
              <Save className="w-4 h-4" />
              Save Policy & System Settings
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
