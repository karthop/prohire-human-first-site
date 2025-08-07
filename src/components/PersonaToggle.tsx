import { Button } from "@/components/ui/button";
import { usePersona } from "@/context/PersonaContext";
import { Briefcase, User } from "lucide-react";

interface PersonaToggleProps {
  className?: string;
}

export function PersonaToggle({ className }: PersonaToggleProps) {
  const { persona, setPersona } = usePersona();

  return (
    <div className={`inline-flex items-center gap-2 ${className ?? ''}`} role="group" aria-label="Choose your persona">
      <Button
        variant={persona === 'employer' ? 'hero' : 'outline'}
        size="sm"
        onClick={() => setPersona(persona === 'employer' ? null : 'employer')}
        aria-pressed={persona === 'employer'}
      >
        <Briefcase className="w-4 h-4 mr-1" /> Employer
      </Button>
      <Button
        variant={persona === 'professional' ? 'professional' : 'outline'}
        size="sm"
        onClick={() => setPersona(persona === 'professional' ? null : 'professional')}
        aria-pressed={persona === 'professional'}
      >
        <User className="w-4 h-4 mr-1" /> Professional
      </Button>
    </div>
  );
}
