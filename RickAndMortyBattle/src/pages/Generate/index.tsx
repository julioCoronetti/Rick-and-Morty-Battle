import { Card } from "../../components/Card"
import { HomeButton } from "../../components/HomeButton"
import { ButtonGenerate, GenerateContainer } from "./styles"
import { getRandomCharacter } from "../../services/api";
import { useState } from "react";
import { useUser } from "../../contexts/UserProvider";

export const Generate = () => {
    const [character, setCharacter] = useState({ image: "", name: "" });
    const { generationKey, useKey } = useUser();

    const handleGenerate = async () => {
        if (generationKey > 0) {
            const data = await getRandomCharacter();
            setCharacter({ image: data.image, name: data.name });
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