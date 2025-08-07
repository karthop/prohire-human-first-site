import { useEffect } from "react";

interface SeoProps {
  title: string;
  description?: string;
  canonical?: string;
}

export function Seo({ title, description, canonical }: SeoProps) {
  useEffect(() => {
    document.title = title;

    // Description meta
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.setAttribute('name', 'description');
      document.head.appendChild(desc);
    }
    if (description) desc.setAttribute('content', description);

    // Canonical link
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    const url = canonical || window.location.origin + window.location.pathname;
    link.setAttribute('href', url);
  }, [title, description, canonical]);

  return null;
}

export default Seo;
