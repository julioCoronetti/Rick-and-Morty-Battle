import styled from "styled-components";

export const HomeContainer = styled.main`
    width: 100%;
    height: 170vh;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
    align-items: center;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            font-size: 1.2rem;
        }
    }

    main {
        
    }
`;

export const ButtonPicles = styled.button`
    width: 237px;
    height: 60px;
    background: url('/src/assets/buttonPicle.svg') no-repeat center;
    background-size: cover;
    border-radius: 10px;
    border: 0;
    cursor: pointer;
    box-shadow: 0 0 15px #4D8024,0 0 60px #4D8024;
    transition: 0.3s ease-in-out;

    display: flex;
    align-items: center;
    
    margin-bottom: 5rem;
    
    p {
        font-family: "Luckiest Guy", sans-serif;
        font-size: 1.5rem;
        margin-left: 20%;
        color: ${props => props.theme.white}
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 30px #4D8024,0 0 60px #4D8024;
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

