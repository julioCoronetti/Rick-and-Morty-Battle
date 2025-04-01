import { Card } from "./components/Card"
import { ButtonPicles, CardsContainer, HomeContainer } from "./styles"

import logo from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();

    const goToBattlePage = () => {
        navigate("/battle");
    }

    return (
        <HomeContainer>
            <div>
                <img src={logo} />
                <p>Enter a turn-based battle with your favorite characters!</p>
            </div>

            <ButtonPicles onClick={goToBattlePage}>
                <p>BATTLE!</p>
            </ButtonPicles>

            <CardsContainer>
                <Card />
                <Card />
                <Card />
            </CardsContainer>
        </HomeContainer>
    )
}