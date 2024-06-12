import { TypeEventos } from "../typing/types";

interface EventoProps {
  evento: TypeEventos;
}
//TODO: colocar btn para editar caso o usuario seja adm
export function EventCard({ evento }: EventoProps) {
  console.log("evento", evento.id);
  const url = `/eventpage/${evento.id}`;
  return (
    <a href={url} className="w-24px border border-white/10 rounded-lg">
      <img
        className="w-full h-24 bg-zinc-800 rounded-t-lg"
        src="https://source.unsplash.com/random"
        alt=""
      />
      <p className="p-3 text-emerald-300">{evento.title}</p>
      <p>
        {evento.details
          ? evento.details
          : "Esse é um evento que via incentivar você a ser um DEV front-end"}
      </p>
    </a>
  );
}
