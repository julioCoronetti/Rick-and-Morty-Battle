import { Card } from "../../components/Card";
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
                <Card
                    image="src/assets/characters/summer.webp"
                    name="Summer Smith"
                    attack={13}
                    defense={25}
                    life={16}
                    specialAttribute="attack"
                />
                <Card
                    image="src/assets/characters/rick.png"
                    name="Rick Sanchez"
                    attack={26}
                    defense={12}
                    life={11}
                    specialAttribute="attack"
                />
                <Card
                    image="src/assets/characters/morty.webp"
                    name="Morty Smith"
                    attack={11}
                    defense={15}
                    life={27}
                    specialAttribute="attack"
                />
            </CardsContainer>

            <Footer />
        </HomeContainer>
    )
}