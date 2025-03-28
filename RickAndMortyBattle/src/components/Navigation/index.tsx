import { NavLink } from "react-router-dom";
import { LinkBattle, LinksContainer, NavigationContainer } from "./styles";

export const Navigation = () => {
    return (
        <NavigationContainer>
            <ul>
                <LinksContainer>
                    <NavLink to="/Favorites">Favorites</NavLink>
                    <NavLink to="/Teams">Teams</NavLink>
                    <NavLink to="/History">History</NavLink>
                </LinksContainer>

                <LinkBattle>
                    <NavLink to="/Battle">BATTLE</NavLink>
                </LinkBattle>
            </ul>
        </NavigationContainer>
    );
}