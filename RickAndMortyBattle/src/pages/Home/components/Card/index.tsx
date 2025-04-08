import { CardContainer, CardHeader, CardImage, StatusContainer } from "./styles"

interface CardProps {
    image: string;
    name: string;
}

export const Card = ({ image, name }: CardProps) => {
    return (
        <CardContainer>
            <CardHeader>
                <CardImage src={image} />
                <p>{name}</p>
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