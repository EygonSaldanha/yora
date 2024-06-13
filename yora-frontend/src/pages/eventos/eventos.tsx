import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventCard } from "../../components/eventCard";
import { TitleSearch } from "../../components/titleSearch";
import { TypeEventos } from "../../typing/types";

export function Eventos() {
  const navigate = useNavigate();

  const [search, setSearch] = useState(() => {
    const url = new URL(window.location.toString());
    if (url.searchParams.has("search")) {
      return url.searchParams.get("search") ?? "";
    }
    return "";
  });

  const [eventos, setEventos] = useState<TypeEventos[]>([]);

  function setCurrentSearch(search: string) {
    const url = new URL(window.location.toString());
    url.searchParams.set("search", search);
    window.history.pushState({}, "", url);
    setSearch(search);
  }

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setCurrentSearch(event.target.value);
  }

  useEffect(() => {
    const url = new URL("http://localhost:3333/list-events");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setEventos(data);
        console.log(data);
      });
  }, [search]);

  const handleButtonClick = () => {
    navigate("/create-event");
  };
  console.log("eventos>>>>>>>>>>>>>>>>>>", eventos);

  return (
    <div className="flex flex-col gap-4">
      <TitleSearch onChange={onSearchInputChanged} value={search}>
        <button
          onClick={handleButtonClick}
          className="ml-auto bg-emerald-600 text-slate-50 px-4 py-2 rounded-lg hover:bg-emerald-700 transition duration-150 ease-in-out">
          Criar evento
        </button>
      </TitleSearch>

      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
        {eventos?.map((evento) => (
          <EventCard evento={evento} />
        ))}
      </div>
    </div>
  );
}
