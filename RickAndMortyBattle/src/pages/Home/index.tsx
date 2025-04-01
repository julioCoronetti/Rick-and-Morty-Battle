import logo from "../../assets/logo.svg"
import { HomeContainer } from "./styles"

export const Home = () => {
    return (
        <HomeContainer>
            <img src={logo} />
            <p>Entre em uma batalha de turnos com seus personagens favoritos!</p>
        </HomeContainer>
    )
}