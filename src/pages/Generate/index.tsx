import { Card } from "../../components/Card"
import { HomeButton } from "../../components/HomeButton"
import { ButtonGenerate, GenerateContainer } from "./styles"
import { getRandomCharacter } from "../../services/axios";
import { useState } from "react";
import { Character, useUser } from "../../contexts/UserProvider";

const randomSpecialAttribute = (): "attack" | "defense" | "life" => {
    const attributes = ["attack", "defense", "life"] as const;
    const random = Math.floor(Math.random() * 3);
    return attributes[random];
};

const randomAttributes = (specialAttribute: "attack" | "defense" | "life") => {
    const getRandomValue = (min: number, max: number) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    return {
        attack: specialAttribute === "attack" ? getRandomValue(20, 30) : getRandomValue(10, 20),
        defense: specialAttribute === "defense" ? getRandomValue(20, 30) : getRandomValue(10, 20),
        life: specialAttribute === "life" ? getRandomValue(20, 30) : getRandomValue(10, 20),
        specialAttribute,
    };
};

const specialAttr = randomSpecialAttribute();
const characterStats = randomAttributes(specialAttr);
console.log(characterStats);

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