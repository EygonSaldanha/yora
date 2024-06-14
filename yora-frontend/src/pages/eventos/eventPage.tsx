import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TypeEventos } from "../../typing/types";

export function EventPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [evento, setEvento] = useState<TypeEventos | null>(null);

  useEffect(() => {
    const url = "http://localhost:3333/events/" + id;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar dados do evento");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Dados do evento recebidos:", data);
        const eventData = data?.event;
        if (!eventData || !eventData.id || !eventData.title) {
          throw new Error("Dados do evento inválidos");
        }
        setEvento(eventData);
      });
  }, []);

  if (!evento) {
    return <div>Loading...</div>;
  }

  const handleButtonClick = () => {
    navigate(`/EventRegistrationPage/${id}`);
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="text-center">
        <div className="text-3xl font-bold">{evento.title}</div>
      </div>
      <div className="border border-gray-300 rounded p-4">
        <div className="flex flex-col gap-2">
          <div>
            <span className="text-1xl font-semibold">ID do Evento:</span>{" "}
            {evento.id}
          </div>
          <div>
            <span className="text-1xl font-semibold">Data:</span>{" "}
            {evento.startTime
              ? new Date(evento.startTime).toLocaleString()
              : ""}
          </div>
          <div>
            <span className="text-1xl font-semibold">Vagas Totais:</span>{" "}
            {evento.maximumAttendees}
          </div>
          <div>
            <span className="text-1xl font-semibold">Vagas disponíveis:</span>{" "}
            {evento.maximumAttendees - evento.attendeesAmount}
          </div>
          <div>
            <span className="text-1xl font-semibold">Localização:</span>{" "}
            {evento.location}
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="text 2xl font-bold">Descrição do evento:</div>
        <div className="text-1xlfont-semibold">{evento.details}</div>
      </div>
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
        <button
          onClick={handleButtonClick}
          className="text-2xl rounded-lg bg-emerald-600 hover:bg-emerald-700 font-bold px-8 w-72 py-1.5 border-2 border-white/[0.5]">
          ir para inscrição
        </button>
      </div>
    </div>
  );
}
