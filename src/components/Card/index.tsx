import { CardContainer, CardHeader, CardImage, CardsStatus, CardStatus } from "./styles"

interface CardProps {
    image: string;
    name: string;
}

export const Card = ({ image, name }: CardProps) => {

    if (name === "" || image === "") {
        name = "unknown"
        image = "src/assets/characters/unknown.svg"
    }

    return (
        <CardContainer>
            <div>
                <CardHeader>
                    <p>{name}</p>
                    <hr />
                </CardHeader>

                <CardImage src={image} />
            </div>

            <CardsStatus>
                <CardStatus>
                    <div>??</div>
                    <div>Atack</div>
                </CardStatus>

                <CardStatus>
                    <div>??</div>
                    <div>Defense</div>
                </CardStatus>

                <CardStatus>
                    <div>??</div>
                    <div>Life</div>
                </CardStatus>
            </CardsStatus>
        </CardContainer>
    )
}