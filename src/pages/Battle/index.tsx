import { useEffect } from "react";
import { HomeButton } from "../../components/HomeButton";
import { BattleContainer, CharacterSelector } from "./styles";
import { useUser } from "../../contexts/UserProvider";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { useBattleHistory } from "../../contexts/BattleHistoryProvider";
import { v4 as uuidv4 } from "uuid";
import { Character } from "../../types/Character";
import { useCharacter } from "../../contexts/CharacterProvider";

export const Battle = () => {
	const { characters } = useUser();
	const navigate = useNavigate();
	const { addBattle } = useBattleHistory();
	const { generateCharacter } = useCharacter();

	useEffect(() => {
		if (characters.length === 0) {
			navigate("/generate");
		}
	}, [characters, navigate]);

	const handleCardClick = async (selectedCharacter: Character) => {
		const opponent = await generateCharacter();

		const battle = {
			id: uuidv4(),
			player: selectedCharacter,
			opponent,
			result: null,
		};

		addBattle(battle);
		navigate("/battle/start", { state: { battleId: battle.id } });
	};

	return (
		<BattleContainer>
			<h2>Select your character</h2>
			<CharacterSelector>
				{characters.map((character: Character) => (
					<Card
						key={character.id}
						image={character.image}
						name={character.name}
						attack={character.attack}
						defense={character.defense}
						life={character.life}
						specialAttribute={character.specialAttribute}
						onClick={() => handleCardClick(character)}
					/>
				))}
			</CharacterSelector>
			<HomeButton />
		</BattleContainer>
	);
};
