import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

interface WorkZoneMapPreviewProps {
  latitude: number;
  longitude: number;
  radiusMeters: number;
  officeName: string;
  onChangeLocation: (lat: number, lon: number) => void;
}

export const WorkZoneMapPreview: React.FC<WorkZoneMapPreviewProps> = ({
  latitude,
  longitude,
  radiusMeters,
  officeName,
  onChangeLocation,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const circleRef = useRef<L.Circle | null>(null);

  // Ensure Leaflet CSS is loaded
  useEffect(() => {
    if (!document.getElementById('leaflet-css-cdn')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css-cdn';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }
  }, []);

  // Custom high contrast marker icon
  const customIcon = L.divIcon({
    className: 'custom-map-pin',
    html: `
      <div style="
        background-color: #2563eb;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 3px solid #ffffff;
        box-shadow: 0 4px 12px rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      ">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -28],
  });

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [latitude, longitude],
        zoom: 16,
        zoomControl: true,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      // Draggable marker
      const marker = L.marker([latitude, longitude], {
        draggable: true,
        icon: customIcon,
      }).addTo(map);

      marker.bindPopup(`<b>${officeName || 'Company Office'}</b><br/>Allowed Radius: ${radiusMeters}m`);

      marker.on('dragend', () => {
        const position = marker.getLatLng();
        onChangeLocation(
          parseFloat(position.lat.toFixed(6)),
          parseFloat(position.lng.toFixed(6))
        );
      });

      // Geofence Circle
      const circle = L.circle([latitude, longitude], {
        color: '#3b82f6',
        fillColor: '#60a5fa',
        fillOpacity: 0.25,
        radius: radiusMeters,
      }).addTo(map);

      // Click on map to set position
      map.on('click', (e: L.LeafletMouseEvent) => {
        const lat = parseFloat(e.latlng.lat.toFixed(6));
        const lon = parseFloat(e.latlng.lng.toFixed(6));
        onChangeLocation(lat, lon);
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

  // Update map center, marker position & radius when props change
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    const latLng: [number, number] = [latitude, longitude];

    if (markerRef.current) {
      markerRef.current.setLatLng(latLng);
      markerRef.current.getPopup()?.setContent(`<b>${officeName || 'Company Office'}</b><br/>Allowed Radius: ${radiusMeters}m`);
    }

    if (circleRef.current) {
      circleRef.current.setLatLng(latLng);
      circleRef.current.setRadius(radiusMeters);
    }

    mapInstanceRef.current.panTo(latLng);
  }, [latitude, longitude, radiusMeters, officeName]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span className="font-semibold text-slate-300">
          Interactive Geofence Map Preview
        </span>
        <span className="text-[11px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md border border-blue-500/20">
          Drag marker or click map to reposition
        </span>
      </div>

      <div
        ref={mapContainerRef}
        className="w-full h-64 rounded-2xl border border-slate-800 shadow-inner overflow-hidden z-0"
        style={{ minHeight: '260px' }}
      />
    </div>
  );
};
