import { useNavigate, useParams } from "react-router-dom";

export function EventPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`/EventRegistrationPage/${id}`);
  };
  return (
    <div>
      <button
        onClick={handleButtonClick}
        className="ml-auto bg-emerald-600 text-slate-50 px-4 py-2 rounded-lg hover:bg-emerald-700 transition duration-150 ease-in-out">
        Criar evento
      </button>
      <h1>{id}</h1>
    </div>
  );
}
