import { Card } from "./components/Card"
import { BattleButton, CardsContainer, HomeContainer } from "./styles"
import logo from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom";
import { Footer } from "./components/Footer";
import { useUser } from "../../contexts/UserProvider";

export const Home = () => {
    const navigate = useNavigate();
    const { characters } = useUser();

    const goToBattlePage = () => {

        if (characters.length > 0) {
            navigate("/battle");
        } else {
            navigate("/generate");
        }

    }

    return (
        <HomeContainer>
            <div>
                <img src={logo} />
                <p>Enter a turn-based battle with your favorite characters!</p>
                <BattleButton onClick={goToBattlePage}>
                    BATTLE
                </BattleButton>
            </div>

            <CardsContainer>
                <Card />
                <Card />
                <Card />
            </CardsContainer>

            <Footer />
        </HomeContainer>
    )
}