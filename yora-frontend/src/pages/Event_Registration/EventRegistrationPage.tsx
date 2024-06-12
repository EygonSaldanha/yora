import React, { useEffect, useState } from "react";
import { EventRegistrationForm } from "./EventRegistrationForm";
import { useParams } from "react-router-dom";

interface Event {
  id: string;
  title: string;
  date: string;
  maximumAttendees: number;
  attendeesAmount: number;
  details: string;
}

export const EventRegistrationPage: React.FC = () => {
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();

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
        setEvent(eventData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando informações do evento...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <div>
      {event && <EventRegistrationForm event={event} onRegister={() => {}} />}
    </div>
  );
};
