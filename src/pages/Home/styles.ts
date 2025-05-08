import styled from "styled-components";

export const HomeContainer = styled.main`
    width: 100%;
    height: 250vh;
    
    display: flex;
    flex-direction: column;
    gap: 5rem;
    align-items: center;
    justify-content: space-between;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20vh;

        p {
            font-size: 1.2rem;
        }
    }
`;

export const BattleButton = styled.button`
    background-color: ${props => props.theme["yellow"]};
    border: 5px solid transparent;
    outline: 1px solid ${props => props.theme.white};
    background-clip: padding-box;
    font-size: 2rem;
    font-family: "Luckiest Guy", sans-serif;
    padding: 0.5rem 2rem;
    color: ${props => props.theme["blue-800"]};
    cursor: pointer;
    border-radius: 10px;
    margin-top: 5rem;
    transition: 0.3s ease-in-out;

    &:hover {
        background-color: ${props => props.theme.white};
        
    }
`;

export const CardsContainer = styled.section`
    display: flex;
    gap: 6px;

    > div:nth-child(1) {
        margin-top: 2.5rem;
        transform: rotate(-15deg);
        z-index: 1;
    }

    > div:nth-child(2) {
        margin-left: -2rem;
        margin-right: -2rem;
        z-index: 2;
    }

    > div:nth-child(3) {
        margin-top: 2rem;
        transform: rotate(10deg);
        z-index: 3;
    }
`;