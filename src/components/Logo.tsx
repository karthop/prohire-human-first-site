import logo from "@/assets/proHIRE_Logo_circle_full.png";

interface LogoProps {
  className?: string;
  priority?: boolean;
  alt?: string;
}

export const Logo = ({ 
  className = "w-8 h-8", 
  priority = false, 
  alt = "proHIRE Resources logo" 
}: LogoProps) => {
  return (
    <img
      src={logo}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      {...(priority ? { fetchPriority: "high" as const } : {})}
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;
