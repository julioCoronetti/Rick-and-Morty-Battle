import { useEffect, useState } from "react";
import { HomeButton } from "../../components/HomeButton"
import { BattleContainer } from "./styles"
import { useUser } from "../../contexts/UserProvider";
import { useNavigate } from "react-router-dom";

export const Battle = () => {
    const { characters } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (characters.length === 0) {
            alert('Você precisa montar seu time antes de iniciar a batalha!');
            navigate('/teams'); // ou a página que faz sentido pro seu fluxo
        }
    }, [characters, navigate]);

    return (
        <BattleContainer>
            <HomeButton />
        </BattleContainer>
    )
}