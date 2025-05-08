import styled from "styled-components";

export const GenerateContainer = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

export const ButtonGenerate = styled.button`
    font-size: 1.3rem;
    text-decoration: none;
    font-family: "Luckiest Guy", comic sans MS;
    background-color: ${props => props.theme["yellow"]};
    color: ${props => props.theme["blue-800"]};
    padding: 0.75rem 2.5rem;
    border-radius: 8px;
    border: 0;
    box-shadow: 0 0 15px ${props => props.theme["yellow"]};
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
    }
`;
