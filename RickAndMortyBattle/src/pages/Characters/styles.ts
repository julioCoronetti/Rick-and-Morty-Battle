import styled from "styled-components";

export const CharactersContainer = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    
    h2 {
        margin-top: 6rem;
        font-size: 2.5rem;
        font-family: "Luckiest Guy";
        color: ${props => props.theme["yellow"]};
    }
`;

export const CharactersShelf = styled.div`
    border-radius: 10px;
    background-color: ${props => props.theme["gray-300"]};
    padding: 2rem 2rem;
    box-shadow: 5px 5px 25px #00000050;

    display: flex;
    flex-wrap: wrap;
`;