import React from "react";
import { EventRegistrationForm } from "./EventRegistrationForm";

export const EventRegistrationPage: React.FC = () => {
  const handleRegistration = (name: string, email: string, eventId: string) => {
    console.log("Registro:", { name, email, eventId });
    // Lógica de registro aqui
  };

  const handleCheckIn = (email: string, eventId: string) => {
    console.log("Check-in:", { email, eventId });
    // Lógica de check-in aqui
  };

  const attendees = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Smith", email: "jane@example.com" },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <EventRegistrationForm onSubmit={handleRegistration} />
    </div>
  );
};
