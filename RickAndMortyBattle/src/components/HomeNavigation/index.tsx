import { useNavigate } from "react-router-dom";
import { HomeNavigationContainer } from "./styles";
import { House } from "phosphor-react";

export const HomeNavigation = () => {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate("/");
    }

    return (
        <HomeNavigationContainer onClick={goToHomePage}>
            <House size={30} />
        </HomeNavigationContainer>
    )
}