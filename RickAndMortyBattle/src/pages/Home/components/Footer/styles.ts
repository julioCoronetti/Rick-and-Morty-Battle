import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    height: 20vh;
    border-radius: 100% 100% 0 0;
    margin-top: 5rem;

    background-color: ${props => props.theme["gray-300"]};

    img {
        margin-top: -2%;
        margin-left: -20%;
        width: 80%;
        height: 80%;
    }
`;