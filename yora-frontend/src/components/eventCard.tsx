export function EventCard() {
  return (
    <div className="w-24px border border-white/10 rounded-lg">
      <img
        className="w-full h-24 bg-zinc-800 rounded-t-lg"
        src="https://source.unsplash.com/random"
        alt=""
      />
      <p className="p-3 text-emerald-300">Evento</p>
      <p>Esse é um evento que via incentivar você a ser um DEV front-end</p>
    </div>
  );
}
