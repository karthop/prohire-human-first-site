import { useParams } from "react-router-dom";
import { useEffect } from "react";

/* Client keys with a dashboard file at public/dashboard/<key>.html.
   Unknown keys must not reach the iframe: the host serves the SPA for
   unmatched paths, so the app would load itself and nest indefinitely. */
const CLIENT_FILES: readonly string[] = ["knight", "ridge"];

const ClientDashboard = () => {
  const { client } = useParams<{ client: string }>();
  const key = (client || "").toLowerCase();
  const known = CLIENT_FILES.includes(key);

  useEffect(() => {
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, nofollow");
    return () => {
      robots?.setAttribute("content", "index, follow");
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-white">
      {known ? (
        <iframe
          title="Client search status dashboard"
          src={`/dashboard/${encodeURIComponent(key)}.html`}
          className="h-full w-full border-0"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center px-[18px] py-[50px] text-center">
          <div>
            <b className="mb-[5px] block text-[17px] font-semibold text-[#1D2655]">
              No dashboard at this address
            </b>
            <span className="text-[#697489]">
              Check the link, or contact proHIRE Resources.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientDashboard;
