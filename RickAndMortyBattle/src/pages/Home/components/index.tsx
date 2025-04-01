import { CardContainer, CardHeader, CardImage, StatusContainer } from "./styles"

export const Card = () => {
    return (
        <CardContainer>
            <CardHeader>
                <CardImage />
                <p>Rick Sanchez</p>
            </CardHeader>

            <StatusContainer>
                <li>
                    <p>Ataque: </p>
                    <div>99</div>
                </li>

                <li>
                    <p>Defesa: </p>
                    <div>99</div>
                </li>

                <li>
                    <p>Vida</p>
                    <div>99</div>
                </li>
            </StatusContainer>
        </CardContainer>
    )
}