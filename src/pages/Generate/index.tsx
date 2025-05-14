import { Card } from "../../components/Card";
import { HomeButton } from "../../components/HomeButton";
import { ButtonGenerate, GenerateContainer } from "./styles";
import { useUser } from "../../contexts/UserProvider";
import { useCharacter } from "../../contexts/CharacterProvider";

export const Generate = () => {
	const { userCharacter, setUserCharacter, generateCharacter } = useCharacter();
	const { generationKey, useKey, addCharacter } = useUser();

	const handleGenerate = async () => {
		if (generationKey > 0) {
			const newCharacter = await generateCharacter();
			setUserCharacter(newCharacter);
			addCharacter(newCharacter);
			setUserCharacter(newCharacter);
			useKey();
		} else {
			alert("Você não tem chaves suficientes para gerar um personagem!");
		}
	};

	return (
		<GenerateContainer>
			<Card
				image={userCharacter?.image || ""}
				name={userCharacter?.name || ""}
				attack={
					userCharacter?.attack === 0 ? "??" : (userCharacter?.attack ?? "??")
				}
				defense={
					userCharacter?.defense === 0 ? "??" : (userCharacter?.defense ?? "??")
				}
				life={userCharacter?.life === 0 ? "??" : (userCharacter?.life ?? "??")}
				specialAttribute={userCharacter?.specialAttribute || "attack"}
			/>
			<ButtonGenerate onClick={handleGenerate}>Gerar</ButtonGenerate>
			<HomeButton />
		</GenerateContainer>
	);
};
