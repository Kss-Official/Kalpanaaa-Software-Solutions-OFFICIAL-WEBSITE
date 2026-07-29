import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { SERVICES, FOUNDERS, NAP } from "../data/site";

export function Footer() {
  return (
    <footer className="site-surface border-t border-line mt-12">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Col 1 — Logo + tagline */}
        <div className="space-y-4">
          <div className="mb-1">
            <img
              src="/logo.webp"
              alt="Kalpanaaa Software Solutions Logo"
              className="h-12 sm:h-14 md:h-16 lg:h-28 w-auto max-w-[240px] sm:max-w-[300px] md:max-w-[380px] object-contain"
            />
          </div>
          <p className="text-sm text-muted leading-relaxed max-w-xs">
            Bespoke engineering partner providing full-lifecycle IT automation, RAG systems,
            multi-agent automation, and software solutions for government, healthcare, finance, and education.
          </p>
        </div>

        {/* Col 2 — Services */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-widest text-ink">Services</h3>
          <ul className="space-y-2 text-sm text-muted">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`} className="hover:text-brand transition-colors">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Leadership */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-widest text-ink">Leadership</h3>
          <ul className="space-y-3 text-sm text-muted">
            {FOUNDERS.map((founder) => (
              <li key={founder.name} className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full overflow-hidden bg-gradient-to-br from-brand to-brand-light flex-shrink-0">
                  {founder.image ? (
                    <img src={founder.image} alt={founder.name} className="w-full h-full object-cover object-top" />
                  ) : (
                    <span className="w-full h-full flex items-center justify-center text-white text-xs font-bold">
                      {founder.name.split(" ").map((t: string) => t[0]).slice(0, 2).join("")}
                    </span>
                  )}
                </div>
                <div>
                  <span className="block text-ink font-medium text-sm">{founder.name}</span>
                  <span className="text-xs text-muted">{founder.role}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-widest text-ink">Operations base</h3>
          <p className="text-sm text-muted leading-relaxed">
            {NAP.name}<br />
            <span className="text-xs">{NAP.addressLine}</span>
          </p>
          <div className="pt-2 space-y-2">
            <div className="flex items-start gap-2 text-xs text-muted">
              <MapPin size={12} className="text-brand mt-0.5 flex-shrink-0" />
              <span>{NAP.city}, {NAP.region}, India — {NAP.pincode}</span>
            </div>
            <a href={`mailto:${NAP.email}`} className="flex items-center gap-2 text-xs text-muted hover:text-brand transition-colors">
              <Mail size={12} className="text-brand" />
              <span>{NAP.email}</span>
            </a>
            <a href={`https://wa.me/${NAP.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-muted hover:text-brand transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-brand flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>+91 {NAP.whatsapp}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted">
          <div>© {NAP.founded} {NAP.name}. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/blog" className="hover:text-brand">Insights</Link>
            <Link to="/privacy" className="hover:text-brand">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand">Terms of Service</Link>
            <a href={`mailto:${NAP.email}`} className="hover:text-brand">{NAP.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
