import { useEffect, useState } from "react";
import { HomeButton } from "../../components/HomeButton"
import { BattleContainer } from "./styles"

interface Character {
    id: number;
    name: string;
    image: string;
}

export const Battle = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [characters, setCharacters] = useState<Character[]>([]);
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${randomNumber}`);
        const data = await response.json();
        setCharacters(data.results.slice(0, 3));
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <BattleContainer>
            {isLoading ? (
                <p>Carregando...</p>
            ) : (
                characters.map((character) => (
                    <div key={character.id}>
                        <img src={character.image} alt={character.name} />
                        <p>{character.name}</p>
                    </div>
                ))
            )}

            <HomeButton />
        </BattleContainer>
    )
}