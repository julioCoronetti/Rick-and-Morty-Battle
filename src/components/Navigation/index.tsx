import { NavLink } from "react-router-dom";
import { LinkBattle, LinksContainer, NavigationContainer } from "./styles";
import { useEffect, useState } from "react";
import { ClockCounterClockwise, Flask, Person } from "phosphor-react";

export const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <NavigationContainer scrolled={scrolled}>
            <ul>
                <LinksContainer>
                    <NavLink to="/Generate">Generate <Flask size={20} /> </NavLink>
                    <NavLink to="/Characters">Characters <Person size={20} /> </NavLink>
                    <NavLink to="/History">History <ClockCounterClockwise size={20} /> </NavLink>
                </LinksContainer>

                <LinkBattle>
                    <NavLink to="/Battle">BATTLE</NavLink>
                </LinkBattle>
            </ul>
        </NavigationContainer>
    );
};