import styled from "styled-components";

export const CharactersContainer = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    
    h2 {
        margin-top: 6rem;
        font-size: 2.5rem;
        font-family: "Luckiest Guy";
        color: ${(props) => props.theme["yellow"]};
    }
`;

export const CharactersShelf = styled.div`
    border-radius: 10px;
    background-color: ${(props) => props.theme["gray-300"]};
    padding: 2rem;
    box-shadow: 5px 5px 25px #00000050;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    
    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;
