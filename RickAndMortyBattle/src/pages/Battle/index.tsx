import { useEffect } from "react";
import { HomeButton } from "../../components/HomeButton"
import { BattleContainer } from "./styles"
import { useUser } from "../../contexts/UserProvider";
import { useNavigate } from "react-router-dom";

export const Battle = () => {
    const { characters } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (characters.length === 0) {
            navigate('/generate');
        }
    }, [characters, navigate]);

    return (
        <BattleContainer>
            <HomeButton />
        </BattleContainer>
    )
}