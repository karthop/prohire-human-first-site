import { Button } from "@/components/ui/button";
import { usePersona } from "@/context/PersonaContext";

export function PersonaSelector() {
  const { persona, setPersona } = usePersona();

  const handleSelect = (p: 'employer' | 'professional') => {
    setPersona(p);
    try {
      localStorage.setItem('persona', p);
    } catch {}
  };

  return (
    <div className="mt-2 flex items-center gap-2 text-white/80">
      <span className="text-sm">I am a</span>
      <div className="inline-flex rounded-md border border-white/20 overflow-hidden">
        <Button
          variant={persona === 'employer' ? 'hero' : 'outline'}
          size="sm"
          onClick={() => handleSelect('employer')}
          className="rounded-none"
          aria-pressed={persona === 'employer'}
        >
          Employer
        </Button>
        <Button
          variant={persona === 'professional' ? 'professional' : 'outline'}
          size="sm"
          onClick={() => handleSelect('professional')}
          className="rounded-none border-l border-white/20"
          aria-pressed={persona === 'professional'}
        >
          Professional
        </Button>
      </div>
    </div>
  );
}
