export function Character({ character }) {
	return (
		<div className="text-center p-3">
			<h2>{character.name}</h2>
			<img
				src={character.image}
				alt={character.name}
				className="img-fluid rounded-pill"
			/>
			<p>{`Origin: ${character.origin && character.origin.name}`}</p>
			<p>{`Status: ${character.status}`}</p>
		</div>
	);
}
