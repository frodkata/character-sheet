import React from "react";
import { CharacterAttributes as CharacterAttributesModel } from "../../models/MainSheet";

interface CharacterAttributesProps {
	attributes: CharacterAttributesModel;
}

const styles: { [key: string]: React.CSSProperties } = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "10px", // Add spacing between items
		padding: "15px",
	},
	listItem: {
		padding: "10px 20px", // Add padding inside the item
		backgroundColor: "#8b0000", // Dark red for a magical feel
		color: "#f4e4c1", // Parchment-like text color
		fontWeight: "bold",
		fontSize: "1rem",
		fontFamily: "'Cinzel', serif", // Fantasy-style font
		textAlign: "center",
		borderRadius: "8px", // Rounded corners for a polished look
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Add shadow for depth
		width: "100%", // Ensure the item takes full width
		maxWidth: "300px", // Limit the width for better appearance
	},
	statName: {
		marginBottom: "5px",
	},
	statValue: {
		color: "#FFD700", // Gold color for the value
		fontWeight: "bold",
		fontSize: "1.2rem",
	},
};

const CharacterAttributes: React.FC<CharacterAttributesProps> = ({
	attributes,
}) => {
	const {
		armorClass,
		initiative,
		inspiration,
		passiveWisdom,
		proficiencyBonus,
		speed,
	} = attributes;
	return (
		<div style={styles.container}>
			<div style={styles.listItem}>
				<div style={styles.statName}>Armor Class</div>
				<div style={styles.statValue}>{armorClass}</div>
			</div>

			<div style={styles.listItem}>
				<div style={styles.statName}>Initiative</div>
				<div style={styles.statValue}>{initiative}</div>
			</div>

			<div style={styles.listItem}>
				<div style={styles.statName}>Inspiration</div>
				<div style={styles.statValue}>{inspiration}</div>
			</div>

			<div style={styles.listItem}>
				<div style={styles.statName}>Passive Wisdom</div>
				<div style={styles.statValue}>{passiveWisdom}</div>
			</div>

			<div style={styles.listItem}>
				<div style={styles.statName}>Proficiency Bonus</div>
				<div style={styles.statValue}>{proficiencyBonus}</div>
			</div>

			<div style={styles.listItem}>
				<div style={styles.statName}>Speed</div>
				<div style={styles.statValue}>{speed}</div>
			</div>
		</div>
	);
};

export default CharacterAttributes;
