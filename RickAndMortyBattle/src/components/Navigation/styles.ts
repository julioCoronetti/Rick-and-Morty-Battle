import styled from "styled-components";

export const NavigationContainer = styled.nav`
    width: 100%;
    height: 3rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    > ul {
        list-style: none;
        display: flex;
        justify-content: space-between;

        > li:nth-child(2) {
            a {
                text-decoration: none;
                font-family: "Luckiest Guy", comic sans MS;
                background-color: ${props => props.theme["yellow"]};
                color: ${props => props.theme["blue-800"]};
                padding: 0.5rem 2rem;
                border-radius: 8px;
            }
        }
    }
`;

export const LinksContainer = styled.ul`
    width: 200%;
    list-style: none;
            
    display: flex;
    justify-content: space-between;

    li {
        a {
            text-decoration: none;
            color: ${props => props.theme["white"]};
            font-family: "Reem Kufi Fun", comic sans MS;
        }
    }
`;