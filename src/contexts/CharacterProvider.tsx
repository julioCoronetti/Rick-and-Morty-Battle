import { createContext, ReactNode, useContext, useState } from "react";
import { getRandomCharacter } from "../services/axios";
import { Character } from "../types/Character";

type CharacterContexType = {
	userCharacter: Character | null;
	opponentCharacter: Character | null;
	setUserCharacter: (c: Character) => void;
	setOpponentCharacter: (c: Character) => void;
	generateCharacter: () => Promise<Character>;
};

const CharacterContext = createContext<CharacterContexType | undefined>(
	undefined,
);

const randomSpecialAttribute = (): "attack" | "defense" | "life" => {
	const attributes = ["attack", "defense", "life"] as const;
	const random = Math.floor(Math.random() * 3);
	return attributes[random];
};

const randomAttributes = (specialAttribute: "attack" | "defense" | "life") => {
	const getRandomValue = (min: number, max: number) =>
		Math.floor(Math.random() * (max - min + 1)) + min;

	return {
		attack:
			specialAttribute === "attack"
				? getRandomValue(20, 30)
				: getRandomValue(10, 20),
		defense:
			specialAttribute === "defense"
				? getRandomValue(20, 30)
				: getRandomValue(10, 20),
		life:
			specialAttribute === "life"
				? getRandomValue(20, 30)
				: getRandomValue(10, 20),
		specialAttribute,
	};
};

const generateCharacter = async () => {
	const data = await getRandomCharacter();
	const specialAttr = randomSpecialAttribute();
	const characterStats = randomAttributes(specialAttr);
	return {
		id: data.id,
		image: data.image,
		name: data.name,
		...characterStats,
	};
};

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
	const [userCharacter, setUserCharacter] = useState<Character | null>(null);
	const [opponentCharacter, setOpponentCharacter] = useState<Character | null>(
		null,
	);

	return (
		<CharacterContext.Provider
			value={{
				userCharacter,
				opponentCharacter,
				setUserCharacter,
				setOpponentCharacter,
				generateCharacter,
			}}
		>
			{children}
		</CharacterContext.Provider>
	);
};

export const useCharacter = () => {
	const context = useContext(CharacterContext);
	if (!context) {
		throw new Error("useCharacter must be used within a CharacterProvider");
	}
	return context;
};
