import {
	HitPoints,
	MainSkills,
	Proficiencies,
	SavingThrows,
	SecondarySkills,
	Title,
} from "./MainSheet";

import { Inventory } from "./Inventory";
import { Spell } from "./Spells";
import { Feat } from "./Feats";

export interface Sheet {
	title: Title;
	mainSkills: MainSkills;
	secondarySkills: SecondarySkills;
	savingThrows: SavingThrows;
	hitPoints: HitPoints;
	proficiencies: Proficiencies;
	inventory: Inventory;
	spells: Spell[];
	feats: Feat[];
}
