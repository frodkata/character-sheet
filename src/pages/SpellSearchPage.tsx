import React, { useState } from "react";
import Spell from "../components/Spell";
import AllSpells from "../data/AllSpells";

const styles: { [key: string]: React.CSSProperties } = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		padding: "20px",
		fontFamily: "'Cinzel', serif",
		backgroundColor: "#8b0000",
		minHeight: "100vh",
	},
	searchBar: {
		width: "50%", // Contain the search bar to 50% of the page width
		maxWidth: "400px", // Set a maximum width for larger screens
		padding: "10px",
		marginBottom: "20px",
		fontSize: "1rem",
		border: "2px solid #8b0000",
		borderRadius: "8px",
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
	},
	spellList: {
		listStyleType: "none",
		padding: 0,
		margin: 0,
		width: "100%",
	},
};

const SpellSearchPage: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredSpells = AllSpells.filter((spell) =>
		spell.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div style={styles.container}>
			<input
				type="text"
				placeholder="Search for a spell..."
				style={styles.searchBar}
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<ul style={styles.spellList}>
				{filteredSpells.map((spell, index) => (
					<Spell
						key={index}
						name={spell.name}
						level={spell.level}
						school={spell.school}
						castingTime={spell.castingTime}
						range={spell.range}
						components={spell.components}
						duration={spell.duration}
						description={spell.description}
						higherLevel={spell.higherLevel}
					/>
				))}
			</ul>
		</div>
	);
};

export default SpellSearchPage;
