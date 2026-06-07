import { useEffect } from "react";

interface SeoProps {
  title: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
}

export function Seo({ title, description, canonical, noindex = false }: SeoProps) {
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

    let robots = document.querySelector('meta[name="robots"]');
    if (noindex) {
      if (!robots) {
        robots = document.createElement('meta');
        robots.setAttribute('name', 'robots');
        document.head.appendChild(robots);
      }
      robots.setAttribute('content', 'noindex, follow');
    } else if (robots?.getAttribute('content') === 'noindex, follow') {
      robots.remove();
    }
  }, [title, description, canonical, noindex]);

  return null;
}

export default Seo;
