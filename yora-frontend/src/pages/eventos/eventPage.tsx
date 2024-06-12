import { useParams } from "react-router-dom";

export function EventPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
