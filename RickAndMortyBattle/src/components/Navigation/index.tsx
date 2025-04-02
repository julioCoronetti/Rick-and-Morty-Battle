import { NavLink } from "react-router-dom";
import { LinkBattle, LinksContainer, NavigationContainer } from "./styles";
import { useEffect, useState } from "react";

export const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <NavigationContainer scrolled={scrolled}>
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