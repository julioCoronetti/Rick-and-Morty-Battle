import styled from "styled-components";

export const CardContainer = styled.div`
    width: 210px;
    height: 310px;
    background-color: ${(props) => props.theme["blue-800"]};
    border-radius: 10px;
    outline: 10px solid ${(props) => props.theme.white};
    box-shadow: 0 5px 25px #000000;
    padding: 1rem 0;
    flex-shrink: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }
`;

export const CardHeader = styled.div`
    width: 150px;
    font-size: 1rem;
    position: relative;

    hr {
        background-color: white;
        border: 1px solid ${(props) => props.theme.white};
        border-radius: 2rem;
    }

    p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
    }
`;

export const CardImage = styled.img`
    width: 150px;
    height: 150px;
    border: 2px solid ${(props) => props.theme.white};
    border-radius: 10px;
    object-fit: cover;
`;

export const CardsStatus = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const CardStatus = styled.div`
    position: relative;
    width: 100px;
    font-size: 0.8rem;
    font-family: "Luckiest Guy";
    display: flex;

    > div:nth-child(1) {
        margin-left: -10%;
        width: 30%;
        border: 2px solid ${(props) => props.theme.white};
        border-radius: 8px;
        display: flex;
        justify-content: center;
    }

    > div:nth-child(2) {
        width: 70%;
        display: flex;
        justify-content: center;
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 100%;
        background-color: ${(props) => props.theme.white};
        border-top-right-radius: 2rem;
        border-bottom-right-radius: 2rem;
    }
`;
