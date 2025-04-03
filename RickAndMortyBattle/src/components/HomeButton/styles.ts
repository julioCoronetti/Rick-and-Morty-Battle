import styled from "styled-components";

export const HomeNavigationContainer = styled.button`
    width: 3rem;
    height: 3rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    background-color: ${props => props.theme["yellow"]};
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    transition: transform 0.2s ease-in-out;
    position: fixed;
    bottom: 3vh;
    right: 2vw;

    &:hover {
        transform: translateY(-5px);
    }
`;