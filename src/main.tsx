import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

if (window.location.hostname === "www.prohireresources.com") {
  window.location.replace(
    `https://prohireresources.com${window.location.pathname}${window.location.search}${window.location.hash}`,
  );
}

createRoot(document.getElementById("root")!).render(<App />);
