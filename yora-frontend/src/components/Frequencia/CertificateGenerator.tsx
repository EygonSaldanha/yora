import { FC } from "react";
import jsPDF from "jspdf";

interface CertificateGeneratorProps {
  name: string;
  eventName: string;
}

export const CertificateGenerator: FC<CertificateGeneratorProps> = ({ name, eventName }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Certificado de Participação`, 20, 20);
    doc.text(`Certificamos que ${name}`, 20, 30);
    doc.text(`participou do evento ${eventName}.`, 20, 40);
    doc.save(`${name}-certificado.pdf`);
  };

  return (
    <button
      onClick={generatePDF}
      className="text-2xl font-bold rounded-lg bg-transparent hover:bg-gray-50/[0.7] px-8 py-1.5 border-2 border-white/[0.5]"
    >
      Gerar Certificado
    </button>
  );
};
