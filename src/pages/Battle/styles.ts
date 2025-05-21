import styled from "styled-components";

export const BattleContainer = styled.section`
    width: 100%;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h2 {
        font-size: 25pt;
        font-family: "Luckiest Guy", sans-serif;
    }
`;

export const CharacterSelector = styled.div`
    width: 1024px;
    max-height: 100vw;
    padding: 2rem;
    background-color: ${(props) => props.theme["gray-300"]};
    border-radius: 10px;
    overflow-x: auto;
    
    display: flex;
    flex-direction: row;
    gap: 2rem;

    &::-webkit-scrollbar {
        background-color: ${(props) => props.theme.white};
        border-radius: 0 0 10px 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.yellow};
        border-radius: 0 0 10px 10px;
    }
`;
