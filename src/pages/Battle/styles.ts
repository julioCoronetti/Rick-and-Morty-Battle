import styled from "styled-components";

export const BattleContainer = styled.section`
    width: 100%;
    height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    div {
        width: 150px;
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        img {
            width: 100px;
            height: 100px;
        }

        p {
            text-align: center;
            width: 100px;
        }
    }

    
`;