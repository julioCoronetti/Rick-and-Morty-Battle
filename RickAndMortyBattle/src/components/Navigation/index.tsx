import { NavLink } from "react-router-dom";
import { LinksContainer, NavigationContainer } from "./styles";

export const Navigation = () => {
    return (
        <NavigationContainer>
            <ul>
                <li>
                    <LinksContainer>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/Favorites">Favorites</NavLink></li>
                        <li><NavLink to="/Teams">Teams</NavLink></li>
                        <li><NavLink to="/History">History</NavLink></li>
                    </LinksContainer>
                </li>
                <li>
                    <NavLink to="/Battle">BATTLE</NavLink>
                </li>
            </ul>
        </NavigationContainer>
    );
}