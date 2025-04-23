import { Card } from "../../components/Card"
import { HomeButton } from "../../components/HomeButton"
import { ButtonGenerate, GenerateContainer } from "./styles"
import { getRandomCharacter } from "../../services/axios";
import { useState } from "react";
import { Character, useUser } from "../../contexts/UserProvider";

export const Generate = () => {
    const [character, setCharacter] = useState<Character>({ id: 0, image: "", name: "" });
    const { generationKey, useKey, addCharacter } = useUser();

    const handleGenerate = async () => {
        if (generationKey > 0) {
            const data = await getRandomCharacter();
            const newCharacter = { id: data.id, image: data.image, name: data.name };
            setCharacter(newCharacter);
            addCharacter(newCharacter);
            useKey();
        } else {
            alert("Você não tem chaves suficientes para gerar um personagem!");
        }

    }

    return (
        <GenerateContainer>
            <Card image={character.image} name={character.name} />
            <ButtonGenerate onClick={handleGenerate}>Gerar</ButtonGenerate>
            <HomeButton />
        </GenerateContainer>
    )
}