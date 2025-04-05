import styled from "styled-components";

interface NavigationProps {
    scrolled?: boolean;
}

export const NavigationContainer = styled.nav.withConfig(
    {
        shouldForwardProp: (prop) => prop !== "scrolled",
    }) <NavigationProps>`
    position: fixed;
    z-index: 999;

    width: ${props => props.scrolled ? "90%" : "100%"};
    background-color: ${props => props.scrolled ? props.theme["blue-500"] : "transparent"};
    box-shadow: ${props => props.scrolled ? "5px 5px 5px #00000050" : "none"};

    margin-top: 1rem;
    border-radius: 1rem;
    height: 10vh;
    padding: ${props => props.scrolled ? "1rem" : "1rem 3rem"};

    display: flex;
    flex-direction: column;
    justify-content: center;

    transition: 0.5s ease-in-out;
    
    > ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
    }
`;

export const LinksContainer = styled.li`
    display: flex;
    gap: 5rem;

    a {
        text-decoration: none;
        color: ${props => props.theme.white};
        font-family: "Reem Kufi Fun", comic sans MS;

        display: flex;
        align-items: center;
        gap: 1rem;
        transition: 0.3s ease-in-out;

        &:hover {
            color: ${props => props.theme["yellow"]};
            text-shadow: 0 0 10px ${props => props.theme["yellow"]};
        }
    }
`;

export const LinkBattle = styled.li`
    a {
        text-decoration: none;
        font-family: "Luckiest Guy", comic sans MS;
        background-color: ${props => props.theme["yellow"]};
        color: ${props => props.theme["blue-800"]};
        padding: 0.5rem 2rem;
        border-radius: 8px;
    }
`;

export const LinkLogo = styled.li`
    a {
        text-decoration: none;
        font-family: "Luckiest Guy", comic sans MS;
        color: ${props => props.theme["yellow"]};
        text-shadow: 0 0 10px ${props => props.theme["yellow"]};
    }
`;