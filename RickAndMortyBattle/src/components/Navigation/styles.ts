import styled from "styled-components";

export const NavigationContainer = styled.nav`
    width: 100%;
    height: 10vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
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