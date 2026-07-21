import { useEffect } from "react";

type Props = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object | object[];
};

const SITE_NAME = "Kalpanaaaa Software Solutions";
const DEFAULT_OG = "https://kalpanaaasoftwaresolutions.in/logo_full.png";
const DEFAULT_CANONICAL = "https://kalpanaaasoftwaresolutions.in/";

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function SEO({ title, description, canonical, ogImage, jsonLd }: Props) {
  useEffect(() => {
    document.title = title;

    setMeta("description", description);
    setMeta("author", "Kalpanaaaa Software Solutions Pvt. Ltd.");
    setMeta("keywords", "software development company India, enterprise software engineering, RAG, multi-agent automation, Next.js, government software, healthcare software, Jaipur software company");

    setLink("canonical", canonical ?? DEFAULT_CANONICAL);

    // Open Graph
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", canonical ?? DEFAULT_CANONICAL, "property");
    setMeta("og:image", ogImage ?? DEFAULT_OG, "property");
    setMeta("og:site_name", SITE_NAME, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:locale", "en_US", "property");

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage ?? DEFAULT_OG);

    // JSON-LD
    const ids: string[] = [];
    const blocks = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
    blocks.forEach((data, i) => {
      const id = `dynamic-jsonld-${i}`;
      ids.push(id);
      let el = document.getElementById(id) as HTMLScriptElement | null;
      if (!el) {
        el = document.createElement("script");
        el.type = "application/ld+json";
        el.id = id;
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(data);
    });

    return () => {
      ids.forEach((id) => document.getElementById(id)?.remove());
    };
  }, [title, description, canonical, ogImage, jsonLd]);

  return null;
}
