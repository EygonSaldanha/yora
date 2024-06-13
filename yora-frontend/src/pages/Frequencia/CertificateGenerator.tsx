import { FC, useState } from "react";
import jsPDF from "jspdf";

interface Participant {
  name: string;
  email: string;
}

interface CertificateGeneratorProps {
  participants: Participant[];
  eventName: string;
}

export const CertificateGenerator: FC<CertificateGeneratorProps> = ({ participants, eventName }) => {
  const [selectedParticipant, setSelectedParticipant] = useState<Participant | null>(null);

  const generatePDF = () => {
    if (!selectedParticipant) return;
    
    const { name } = selectedParticipant;
    const doc = new jsPDF();
    doc.text(`Certificado de Participação`, 20, 20);
    doc.text(`Certificamos que ${name}`, 20, 30);
    doc.text(`participou do evento ${eventName}.`, 20, 40);
    doc.save(`${name}-certificado.pdf`);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-4">
        <select
          value={selectedParticipant ? selectedParticipant.email : ''}
          onChange={(e) => {
            const email = e.target.value;
            const participant = participants.find(p => p.email === email);
            setSelectedParticipant(participant || null);
          }}
          className="rounded-lg bg-transparent hover:bg-gray-50/[0.7] font-bold px-3 w-full py-1.5 border-2 border-white/[0.5]"
        >
          <option value="">Selecione um participante</option>
          {participants.map(participant => (
            <option key={participant.email} value={participant.email}>
              {participant.name}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={generatePDF}
        className="text-2xl font-bold rounded-lg bg-transparent hover:bg-gray-50/[0.7] px-8 py-1.5 border-2 border-white/[0.5]"
        disabled={!selectedParticipant}
      >
        Gerar Certificado
      </button>
    </div>
  );
};
