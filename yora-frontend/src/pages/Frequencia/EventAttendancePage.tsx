import React from "react";
import { CheckInForm } from "./CheckInForm";
import { AttendanceAdmin } from "./AttendanceAdmin";
import { CertificateGenerator } from "./CertificateGenerator";

const EventAttendancePage: React.FC = () => {
  const handleCheckIn = (email: string, eventId: string) => {
    console.log("Check-in:", { email, eventId });
    // Lógica de check-in aqui
  };

  const attendees = [
    { name: "Pedro Sampaio", email: "PedroS@example.com" },
    { name: "Thais Carla", email: "ThaisC@example.com" },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Frequência</h1>
      <CheckInForm onSubmit={handleCheckIn} />
      <AttendanceAdmin attendees={attendees} />
      <CertificateGenerator participants={attendees} eventName="Evento Exemplo" />
    </div>
  );
};

export default EventAttendancePage;
