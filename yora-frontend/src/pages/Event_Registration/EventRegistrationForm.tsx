// EventRegistrationForm.tsx
import React from "react";

interface EventRegistrationFormProps {
  event: {
    id: string;
    title: string;
    date: string;
    maximumAttendees: number;
    attendeesAmount: number;
    details: string | null;
  };
  onRegister: () => void;
}

export const EventRegistrationForm: React.FC<EventRegistrationFormProps> = ({
  event,
  onRegister,
}) => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Detalhes do Evento</h1>
      </div>
      <div className="border border-gray-300 rounded p-4">
        <div className="flex flex-col gap-2">
          <div>
            <span className="font-semibold">ID do Evento:</span> {event.id}
          </div>
          <div>
            <span className="font-semibold">Título:</span> {event.title}
          </div>
          <div>
            <span className="font-semibold">Data:</span> {event.date}
          </div>
          <div>
            <span className="font-semibold">Vagas totais:</span>{" "}
            {event.maximumAttendees}
          </div>
          <div>
            <span className="font-semibold">Vagas disponíveis:</span>{" "}
            {event.maximumAttendees - event.attendeesAmount}
          </div>
        </div>
      </div>
      {event.details && (
        <div className="text-center">
          <h1 className="text-2xl font-bold">Resumo</h1>
          <span className="font-semibold">{event.details}</span>
        </div>
      )}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}>
        <button
          onClick={onRegister}
          className="text-2xl rounded-lg bg-transparent hover:bg-gray-50/[0.7] font-bold px-8 w-72 py-1.5 border-2 border-white/[0.5]">
          Inscrever-se
        </button>
      </div>
    </div>
  );
};
