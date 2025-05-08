import {
	CardContainer,
	CardHeader,
	CardImage,
	CardsStatus,
	CardStatus,
} from "./styles";

interface CardProps {
	image: string;
	name: string;
	attack: number | "??";
	defense: number | "??";
	life: number | "??";
	specialAttribute: "attack" | "defense" | "life";
}

export const Card = ({
	image,
	name,
	attack,
	defense,
	life,
	//specialAttribute,
}: CardProps) => {
	if (name === "" || image === "") {
		name = "unknown";
		image = "src/assets/characters/unknown.svg";
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
					<div>{attack}</div>
					<div>Atack</div>
				</CardStatus>

				<CardStatus>
					<div>{defense}</div>
					<div>Defense</div>
				</CardStatus>

				<CardStatus>
					<div>{life}</div>
					<div>Life</div>
				</CardStatus>
			</CardsStatus>
		</CardContainer>
	);
};
