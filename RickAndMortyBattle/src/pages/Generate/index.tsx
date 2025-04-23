import { Card } from "../../components/Card"
import { HomeButton } from "../../components/HomeButton"
import { ButtonGenerate, GenerateContainer } from "./styles"
import { getRandomCharacter } from "../../services/api";
import { useState } from "react";

export const Generate = () => {
    const [character, setCharacter] = useState({ image: "", name: "" });

    const handleGenerate = async () => {
        const data = await getRandomCharacter();
        setCharacter({ image: data.image, name: data.name });
    }

    return (
        <GenerateContainer>
            <Card image={character.image} name= {character.name}/>
            <ButtonGenerate onClick={handleGenerate}>Gerar</ButtonGenerate>
            <HomeButton />
        </GenerateContainer>
    )
}