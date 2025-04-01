import styled from "styled-components";

export const FooterContainer = styled.footer`
    position: absolute;
    left: 0;

    width: 100%;
    height: 30vh;
    border-radius: 50% 50% 0 0;

    background-color: ${props => props.theme["gray-300"]};

    img {
        margin-top: -3%;
        margin-left: -20%;
        width: 80%;
        height: 80%;
    }
`;