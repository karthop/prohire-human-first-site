import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ClientDashboard = () => {
  const { client } = useParams<{ client: string }>();
  const key = (client || "").toLowerCase();

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
      <iframe
        title="Client search status dashboard"
        src={`/dashboard/template.html?client=${encodeURIComponent(key)}`}
        className="h-full w-full border-0"
      />
    </div>
  );
};

export default ClientDashboard;
