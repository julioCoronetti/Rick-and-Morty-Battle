export type Character = {
	id: number | string;
	name: string;
	image: string;
	attack: number | "??";
	defense: number | "??";
	life: number | "??";
	specialAttribute: "attack" | "defense" | "life";
};
