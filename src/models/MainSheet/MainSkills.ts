export interface MainSkills {
	//Total score and bonus for each skill
	strength: [number, number];
	dexterity: [number, number];
	constitution: [number, number];
	intelligence: [number, number];
	wisdom: [number, number];
	charisma: [number, number];
	inspiration: number;
	proficiencyBonus: number;
	armorClass: number;
	initiative: number;
	speed: number;
	passiveWisdom: number; // Passive Wisdom (Perception)
}
