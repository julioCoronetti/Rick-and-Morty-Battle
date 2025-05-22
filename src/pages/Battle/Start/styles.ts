import styled from "styled-components";

export const StartBattleContainer = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        font-size: 3rem;
        font-family: "Luckiest Guy", sans-serif;
    }
`;

export const BattleField = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-around;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
`;