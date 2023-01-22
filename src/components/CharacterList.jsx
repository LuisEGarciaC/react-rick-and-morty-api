import { useEffect, useState } from "react";
import { Character } from "./Character";


function NavPage({ page, setPage }) {
	return (
		<header className="d-flex justify-content-between align-items-center">
			<p>Page: {page}</p>

			<button
				className="btn btn-primary btn-sm"
				onClick={() => setPage(page + 1)}
			>
				Page {page + 1}
			</button>
		</header>
	);
}

export function CharacterList() {
	// personajes
	const [characters, setCharacters] = useState([]);
	// loading
	const [loading, setLoading] = useState(true);
	// pagina actual
	  const [page, setPage] = useState(1);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				`https://rickandmortyapi.com/api/character?page=${page}`
			);
			const data = await response.json();
			setCharacters(data.results);
			setLoading(false);
		}

		fetchData();
	}, [page]);

	return (
		<div className="container">
			<NavPage page={page} setPage={setPage} />
			<div className="row">
				{loading ? (
					<div>Loading...</div>
				) : (
					characters.map((character) => {
						return (
							<div className="col-md-4" key={character.id}>
								<Character character={character} />
							</div>
						);
					})
				)}
			</div>
			<NavPage page={page} setPage={setPage} />
		</div>
	);
}
