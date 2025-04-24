import React from "react";

interface TipsProps {
	intelligenceModifier: number;
	characterLevel: number;
	proficiency: number;
}

const styles: { [key: string]: React.CSSProperties } = {
	container: {
		backgroundColor: "#f4e4c1", // Parchment-like background
		border: "2px solid #8b0000", // Red border
		borderRadius: "8px",
		padding: "15px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
		color: "#3e2a1c",
		marginBottom: "20px",
	},
	header: {
		color: "#8b0000",
		fontSize: "1.5rem",
		fontWeight: "bold",
		marginBottom: "10px",
		textAlign: "center",
		fontFamily: "'Cinzel', serif",
	},
	list: {
		listStyleType: "none",
		padding: 0,
		margin: 0,
	},
	listItem: {
		marginBottom: "10px",
		fontSize: "1rem",
		lineHeight: "1.5",
	},
	bold: {
		fontWeight: "bold",
		color: "#8b0000",
	},
	italic: {
		fontStyle: "italic",
	},
};

const Tips: React.FC<TipsProps> = ({
	characterLevel,
	intelligenceModifier,
	proficiency,
}) => {
	return (
		<div style={styles.container}>
			<h3 style={styles.header}>Tips:</h3>
			<ul style={styles.list}>
				<li style={styles.listItem}>
					<span style={styles.bold}>Spell Save DC:</span> Difficulty for enemies
					to avoid my spell [8 + proficiency modifier + int. modifier]
					<span style={styles.bold}>
						[{8 + proficiency + intelligenceModifier}]
					</span>
				</li>
				<li style={styles.listItem}>
					<span style={styles.bold}>Enemy Saving Throw:</span> Creatures make a
					dexterity saving throw against my{" "}
					<span style={styles.italic}>spell save DC</span>.
				</li>
				<li style={styles.listItem}>
					<span style={styles.bold}>Hit:</span> 1d20 + [intelligence mod.] +
					[proficiency mod.]
					<span style={styles.bold}>
						1d20 + [{proficiency + intelligenceModifier}]
					</span>
				</li>
				<li style={styles.listItem}>
					<span style={styles.bold}>Disadvantage / Advantage roll:</span> 2
					rolls - take the lowest/highest.
				</li>
			</ul>
		</div>
	);
};

export default Tips;
