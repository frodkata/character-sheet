import React from "react";
import { CharacterSheet } from "../data/CharacterSheet";
import Spell from "../components/Spell";
import backgroundImage from "../assets/papyrus.jpg";
import { Link } from "react-router-dom";

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
};

const SpellsPage: React.FC = () => {
	const spells = CharacterSheet.spells;
	return (
		<div style={styles.page}>
			<Link to="/spell-search" style={styles.link}>
				Search for a Spell 🔍
			</Link>
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
						concentration={spell.concentration}
					/>
				))}
			</ul>
		</div>
	);
};

export default SpellsPage;
