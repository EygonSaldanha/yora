import { EventRegistrationForm } from './EventRegistrationForm';

export const EventRegistrationPage: React.FC = () => {
  const handleRegistration = (name: string, email: string, eventId: string) => {
    // Lógica para enviar os dados de inscrição para a API
    console.log(`Registration submitted: Name - ${name}, Email - ${email}, Event ID - ${eventId}`);
  };

  return (
    <div >
      <EventRegistrationForm onSubmit={handleRegistration} />
    </div>
  );
};
