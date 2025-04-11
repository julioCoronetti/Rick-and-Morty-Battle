import { CardContainer, CardHeader, CardImage, CardsStatus, CardStatus } from "./styles"

interface CardProps {
    image: string;
    name: string;
}

export const Card = ({ image, name }: CardProps) => {
    return (
        <CardContainer>
            <CardHeader>
                <h1>{name}</h1>
                <hr />
            </CardHeader>

            <CardImage src={image} />

            <CardsStatus>
                <CardStatus>
                    <div>99</div>
                    <div>Ataque</div>
                </CardStatus>

                <CardStatus>
                    <div>99</div>
                    <div>Defesa</div>
                </CardStatus>

                <CardStatus>
                    <div>99</div>
                    <div>Vida</div>
                </CardStatus>
            </CardsStatus>
        </CardContainer>
    )
}