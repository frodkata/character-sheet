import React from "react";
import { CharacterSheet } from "../data/CharacterSheet";
import Spell from "../components/Spell";
import backgroundImage from "../assets/papyrus.jpg";
import { Link } from "react-router-dom";
import D20 from "../components/svg components/D20";

const styles: { [key: string]: React.CSSProperties } = {
	page: {
		padding: "20px",
		fontFamily: "'Cinzel', serif",
		color: "#3e2a1c",
		minHeight: "100vh",
		backgroundImage: `url(${backgroundImage})`,
	},
	header: {
		textAlign: "center",
		color: "#8b0000",
		fontSize: "2.5rem",
		textShadow: "1px 1px 2px #000",
		marginBottom: "20px",
	},
	spellSlotsContainer: {
		display: "flex",
		flexWrap: "wrap",
		gap: "10px",
		justifyContent: "center",
		marginBottom: "20px",
	},
	spellSlotItem: {
		padding: "10px",
		borderRadius: "6px",
		backgroundColor: "#222222",
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
		fontSize: "1rem",
		color: "#fff",
		fontWeight: "bold",
		minWidth: "120px",
		fontFamily: "'Cinzel', serif",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	spellSlotLevel: {
		color: "#f4e4c1", // Parchment-like text color
		fontWeight: "bold",
		marginRight: "10px",
		marginLeft: "10px",
	},
	spellSlotValue: {
		color: "#FFA500", // Orange
		fontWeight: "bold",
	},
	spellList: {
		listStyleType: "none",
		padding: 0,
		margin: 0,
	},
	link: {
		display: "inline-block",
		marginTop: "20px",
		padding: "10px 20px",
		backgroundColor: "#8b0000",
		color: "#fff",
		textDecoration: "none",
		borderRadius: "8px",
		fontWeight: "bold",
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
		marginRight: 10,
	},
	tip: {
		color: "#222222",
		fontSize: "1.0rem",
		textShadow: "1px 1px 1px #000",
		marginBottom: "20px",
	},
};

const SpellsPage: React.FC = () => {
	const spellSlots = {
		"Level 1 slots": 4,
		"Level 2 slots": 3,
		"Level 3 slots": 3,
		"Level 4 slots": 2,
	};

	const spells = CharacterSheet.spells;

	return (
		<div style={styles.page}>
			<Link to="/spell-search" style={styles.link}>
				Search for a Spell 🔍
			</Link>
			<h1 style={styles.header}>Spellbook</h1>
			{/* Spell Slots Section */}
			<div style={styles.spellSlotsContainer}>
				{Object.entries(spellSlots).map(([level, slots]) => (
					<div key={level} style={styles.spellSlotItem}>
						<D20 fill="#FFA500" />
						<span style={styles.spellSlotLevel}>{level}:</span>
						<span style={styles.spellSlotValue}>{slots}</span>
					</div>
				))}
			</div>

			<span style={styles.tip}>
				[ITEM] +2 Spell Save DC for Enchantment & Illusion spells
				<span style={{ color: "#FFA500" }}> [Phantasmal Killer]</span>
				<span style={{ color: "#FFA500" }}> [Hypnotic Pattern]</span>
			</span>
			{/* Spell List */}
			<ul style={styles.spellList}>
				{spells.map((spell, index) => (
					<Spell
						key={index}
						name={spell.name}
						level={spell.level}
						description={spell.description}
						castingTime={spell.castingTime}
						range={spell.range}
						components={spell.components}
						duration={spell.duration}
						school={spell.school}
						concentration={spell.concentration}
					/>
				))}
			</ul>
		</div>
	);
};

export default SpellsPage;
