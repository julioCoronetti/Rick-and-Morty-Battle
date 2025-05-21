import { useEffect } from "react";
import { HomeButton } from "../../components/HomeButton";
import { BattleContainer, CharacterSelector } from "./styles";
import { useUser } from "../../contexts/UserProvider";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";

export const Battle = () => {
	const { characters } = useUser();
	const navigate = useNavigate();

	useEffect(() => {
		if (characters.length === 0) {
			navigate("/generate");
		}
	}, [characters, navigate]);

	return (
		<BattleContainer>
            <h2>Select your character</h2>
			<CharacterSelector>
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
			</CharacterSelector>

			<HomeButton />
		</BattleContainer>
	);
};
