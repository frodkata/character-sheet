import { Sheet } from "../models/Sheet";
import { Spell } from "../models/Spells";
import AllSpells from "./AllSpells";

export const transformSpellData = (spellName: string): Spell => {
	const spell = AllSpells.find((spell) => spell.name === spellName);

	return {
		castingTime: spell?.castingTime || "",
		components: spell?.components || "",
		description: spell?.description || "",
		duration: spell?.duration || "",
		higherLevel: spell?.higherLevel || "",
		level: spell?.level || 0,
		name: spell?.name || "",
		range: spell?.range || "",
		school: spell?.school || "",
	};
};

export const CharacterSheet: Sheet = {
	title: {
		name: "Valamir Storme",
		class: "Wizard",
		level: 8,
		alignment: "Chaotic Good",
		background: "Cowboy/Desert",
		race: "HalfElf",
	},
	mainSkills: {
		strength: [8, -1],
		dexterity: [14, 2],
		constitution: [16, 3],
		intelligence: [18, 4],
		wisdom: [12, 1],
		charisma: [10, 0],
	},
	characterAtributes: {
		inspiration: 1,
		proficiencyBonus: 3,
		armorClass: 12,
		initiative: 2,
		speed: 30,
		passiveWisdom: 14,
	},
	hitPoints: {
		currentHitPoints: 45,
		maxHitPoints: 45,
		hitDice: "6x(1d6+3)",
	},
	savingThrows: {
		strength: -1,
		dexterity: 2,
		constitution: 3,
		intelligence: 7,
		wisdom: 4,
		charisma: 0,
	},
	secondarySkills: {
		acrobatics: 2,
		animalHandling: 1,
		arcana: 7,
		athletics: -1,
		deception: 0,
		history: 7,
		insight: 4,
		intimidation: 0,
		investigation: 7,
		medicine: 1,
		nature: 4,
		perception: 4,
		performance: 0,
		persuasion: 0,
		religion: 7,
		sleightOfHand: 2,
		stealth: 2,
		survival: 1,
	},
	proficiencies: {
		languageProficiencies: ["Celestial", "Common", "Elvish", "Undercommon"],
		toolProficiencies: ["Tinker's tools"],
		weaponProficiencies: [
			"Light Crossbow",
			"Dagger",
			"Dart",
			"Quarterstaff",
			"Sling",
		],
	},
	feats: [
		{
			name: "Darkvision 60ft",
		},
		{
			name: "Fey Ancestry",
			description: "Advantage on charmed saves and immune to sleep magic",
		},
		{
			name: "Arcane Recovery",
			description:
				"Once per day during a short rest, you can recover spell slots with a combined level equal to or less than half of your wizard level (rounded up). \n At level 6, you can recover 3 levels of spell slots",
		},
		{
			name: "Divination Servant",
			description:
				"The time and gold required to copy Divination spells into your spellbook are halved.",
		},
		{
			name: "Portent",
			description:
				"After a long rest, roll two d20s and record the results. You must decide to replace the roll before the roll is made",
		},
		{
			name: "Expert Divination",
			description:
				"When you cast a Divination spell of 2nd level or higher, you regain a spell slot of a lower level than the spell you just cast.",
		},
		{
			name: "Lucky",
			description:
				"The Lucky feat gives you 3 luck points per long rest. You can spend a point to roll an extra d20 and choose which die to use for: Your attack roll, ability check, or saving throw or an enemy's attack roll against you",
		},
	],
	inventory: {
		gold: 304,
		items: [
			{ name: "Backpack", quantity: 1, itemDescription: "A standard backpack" },
			{ name: "Bedroll", quantity: 1, itemDescription: "A standard bedroll" },
			{ name: "Mess Kit", quantity: 1, itemDescription: "A standard mess kit" },
			{ name: "Rations", quantity: 10, itemDescription: "A standard ration" },
			{ name: "Rope", quantity: 1, itemDescription: "Hemp rope, 50ft" },
			{
				name: "Spellbook",
				quantity: 1,
				itemDescription: "A standard spellbook",
			},
			{
				name: "Tinderboox",
				quantity: 1,
				itemDescription: "A standard tinderbox",
			},
			{ name: "Torch", quantity: 10, itemDescription: "A standard torch" },
			{
				name: "Waterskin",
				quantity: 1,
				itemDescription: "Filled with potion of growth!",
			},
			{
				name: "Health Potion",
				quantity: 1,
				itemDescription: "A standard health potion",
			},
			{
				name: "Guild Trinket",
				quantity: 1,
				itemDescription: "A standard guild trinket",
			},
			{
				name: "Hand Mirror",
				quantity: 1,
				itemDescription: "A standard hand mirror",
			},
			{
				name: "Acid Vial",
				quantity: 1,
				itemDescription: "A standard acid vial",
			},
			{
				name: "Gemstone",
				quantity: 2,
				itemDescription: "A standard gemstone worth something",
			},
			{ name: "Oil Flask", quantity: 2, itemDescription: "Flammable" },
			{
				name: "Ruby",
				quantity: 1,
				itemDescription: "A standard ruby worth 50gp",
			},
			{
				name: "Weird book from church",
				quantity: 1,
				itemDescription: "A weird book from the church",
			},
			{
				name: "Cleansing Crystal",
				quantity: 1,
				itemDescription: "A cleansing crystal",
			},
			{
				name: "Chimera Amulet",
				quantity: 1,
				itemDescription:
					"A cracked, non-magical amulet with an etched symbol of an amalgamated beast. A grim keepsake worth 50 gp to a collector or scholar",
			},
			{
				name: "Crude Fusing Wand",
				quantity: 1,
				itemDescription:
					"A broken non-magical wand with runes. Uselesss, but an interesting artefact worth 50gp",
			},
		],
		specialItems: [
			{
				itemName:
					"Mindweaver’s Grimoire (Very Rare, Attunement, Requires Wizard)",
				itemDescription:
					"• +2 Spell Save DC for Enchantment & Illusion spells. • Cast Hold Monster once per day without a spell slot. • Copy spells into your spellbook for half the gold & time.",
			},
			{
				itemName: "Bandolier of Arcane Bullets",
				itemDescription:
					"The bandolier holds 6 charges. Each charge can be used to imbue a stone or bullet with elemental energy (force, fire, or cold) via the Magic Stone cantrip. Once all charges are used, the bandolier’s magic fades, and it becomes a mundane leather bandolier.",
			},
			{
				itemName: "Waterskin - Filled with [Potion/Elixir of Growth 5] 5/5",
				itemDescription: "Same effect as Enlarge.",
			},
		],
	},
	spells: [
		transformSpellData("Fire Bolt"),
		transformSpellData("Minor Illusion"),
		transformSpellData("Mage Hand"),
		transformSpellData("Prestidigitation"),
		transformSpellData("Feather Fall"),
		transformSpellData("Burning Hands"),
		transformSpellData("Mage Armor"),
		transformSpellData("Detect Magic"),
		transformSpellData("Sleep"),
		transformSpellData("Magic Missile"),
		transformSpellData("Hold Person"),
		transformSpellData("Knock"),
		transformSpellData("Invisibility"),
		transformSpellData("Mirror Image"),
		transformSpellData("Scorching Ray"),
		transformSpellData("Misty Step"),
		transformSpellData("Dust Devil"),
		transformSpellData("Fireball"),
		transformSpellData("Counterspell"),
		transformSpellData("Haste"),
		transformSpellData("Leomund's Tiny Hut"),
		transformSpellData("Hypnotic Pattern"),
		transformSpellData("Fly"),
		transformSpellData("Polymorph"),
		transformSpellData("Storm Sphere"),
	],
};
