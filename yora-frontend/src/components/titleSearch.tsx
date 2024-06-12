import { Search } from "lucide-react";
import { ChangeEvent } from "react";

interface TitleSearchProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode; // Corrigido para React.ReactNode
}

export function TitleSearch({ value, onChange, children }: TitleSearchProps) {
  return (
    <div className="flex gap-3 items-center">
      <h1 className="text-2xl font-bold">Participantes</h1>
      <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
        <Search className="size-4 text-emerald-300" />
        <input
          className="bg-transparent focus:ring-0 flex-1 outline-none border-0 p-0 text-sm"
          placeholder="Buscar participante..."
          value={value}
          onChange={onChange}
        />
      </div>
      {children} {/* Renderizando children corretamente */}
    </div>
  );
}
