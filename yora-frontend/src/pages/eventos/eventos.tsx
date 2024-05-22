import { ChangeEvent, useEffect, useState } from "react";
import { EventCard } from "../../components/eventCard";
import { TitleSearch } from "../../components/titleSearch";

interface Eventos {
  id: string;
  title: string;
  description: string;
  image: string;
}
export function Eventos() {
  const [search, setSearch] = useState(() => {
    const url = new URL(window.location.toString());

    if (url.searchParams.has("search")) {
      return url.searchParams.get("search") ?? "";
    }

    return "";
  });
  const [eventos, setEventos] = useState<Eventos[]>();
  useEffect(() => {
    const url = new URL(
      "http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees"
    );

    if (search.length > 1) {
      url.searchParams.set("query", search);
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setEventos(data.attendees);
      });
  }, [search]);

  function setCurrentSearch(search: string) {
    const url = new URL(window.location.toString());

    url.searchParams.set("search", search);

    window.history.pushState({}, "", url);

    setSearch(search);
  }
  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setCurrentSearch(event.target.value);
  }
  return (
    <div className="flex flex-col gap-4">
      <TitleSearch onChange={onSearchInputChanged} value={search} />
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}
