import React from "react";
import { CharacterSheet } from "../data/CharacterSheet";
import Spell from "../components/Spell";

const styles: { [key: string]: React.CSSProperties } = {
	page: {
		padding: "20px",
		fontFamily: "'Cinzel', serif", // Fantasy-style font
		color: "#3e2a1c", // Dark brown text
		minHeight: "100vh", // Full-page height
	},
	header: {
		textAlign: "center",
		color: "#8b0000", // Dark red for a magical feel
		fontSize: "2.5rem",
		textShadow: "1px 1px 2px #000", // Subtle shadow for depth
		marginBottom: "20px",
	},
	spellList: {
		listStyleType: "none",
		padding: 0,
		margin: 0,
	},
};

const SpellsPage: React.FC = () => {
	const spells = CharacterSheet.spells;
	return (
		<div style={styles.page}>
			<h1 style={styles.header}>Spellbook</h1>
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
					/>
				))}
			</ul>
		</div>
	);
};

export default SpellsPage;
