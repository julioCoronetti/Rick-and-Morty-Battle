import { Card } from "../../components/Card";
import { HomeButton } from "../../components/HomeButton";
import { useUser } from "../../contexts/UserProvider";
import { CharactersContainer, CharactersShelf } from "./styles";

export const Characters = () => {
	const { characters } = useUser();

	return (
		<>
			<CharactersContainer>
				<h2>My Characters</h2>
				{characters.length > 0 && (
					<CharactersShelf>
					{characters.map((character) => (
						<Card
							key={character.id}
							image={character.image}
							name={character.name}
							attack={character.attack}
							defense={character.defense}
							life={character.life}
							specialAttribute={character.specialAttribute}
						/>
					))}
				</CharactersShelf>
				)}
			</CharactersContainer>
			<HomeButton />
		</>
	);
};
