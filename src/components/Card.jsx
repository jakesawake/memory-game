export default function Card({ pokemonId, name, onClick }) {
  return (
    <div
      className="flex flex-col items-center justify-center"
      onClick={() => onClick(pokemonId)}
    >
      <img
        className="h-60 w-60"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
        alt={name}
      />
      <strong>{name}</strong>
    </div>
  );
}
