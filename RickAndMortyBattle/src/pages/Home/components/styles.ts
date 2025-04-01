import styled from "styled-components";

export const CardContainer = styled.div`
    width: 210px;
    height: 300px;
    background-color: ${props => props.theme["gray-300"]};
    border-radius: 6px;
    border: 3px solid ${props => props.theme["blue-500"]};
    outline: 3px solid ${props => props.theme["gray-300"]};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
`;

export const CardHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    p {
        font-family: "Luckiest Guy";
    }
`;

export const CardImage = styled.div`
    width: 85px;
    height: 85px;
    border-radius: 100%;
    background-color: white;
    border: 3px solid ${props => props.theme["blue-500"]};
`;

export const StatusContainer = styled.ul`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;

    li {
        width: 80%;
        display: flex;
        justify-content: space-between;

        div {
            width: 25px;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${props => props.theme["blue-500"]};
            border-radius: 6px;
            font-family: "Luckiest Guy";
        }
    }
`;