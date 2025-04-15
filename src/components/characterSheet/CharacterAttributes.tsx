import React from "react";
import { CharacterAttributes as CharacterAttributesModel } from "../../models/MainSheet";

interface CharacterAttributesProps {
	attributes: CharacterAttributesModel;
}

const styles: { [key: string]: React.CSSProperties } = {
	section: {
		padding: "15px",
		marginBottom: "20px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
		borderRadius: "8px",
		backgroundColor: "#fff",
	},
	heading: {
		color: "#8b0000",
		fontSize: "1.5rem",
		fontWeight: "bold",
		marginBottom: "10px",
		textShadow: "0.5px 0.5px 1px #000",
	},
	list: {
		listStyleType: "none",
		padding: 0,
		margin: 0,
	},
	listItem: {
		marginBottom: "5px",
	},
	statValue: {
		color: "#FF4500",
		fontWeight: "bold",
		fontSize: "1.2rem",
	},
};

const CharacterAttributes: React.FC<CharacterAttributesProps> = ({
	attributes,
}) => {
	return (
		<section style={styles.section}>
			<h2 style={styles.heading}>Character Attributes</h2>
			<ul style={styles.list}>
				{Object.entries(attributes).map(([stat, value]) => (
					<li key={stat} style={styles.listItem}>
						<strong>{stat.charAt(0).toUpperCase() + stat.slice(1)}:</strong>{" "}
						<span style={styles.statValue}>{value}</span>
					</li>
				))}
			</ul>
		</section>
	);
};

export default CharacterAttributes;
