import React from "react";
import { CharacterAttributes as CharacterAttributesModel } from "../../models/MainSheet";

interface CharacterAttributesProps {
	attributes: CharacterAttributesModel;
}

const styles: { [key: string]: React.CSSProperties } = {
	section: {
		padding: "15px",
		textAlign: "center",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
		borderRadius: "8px",
		backgroundColor: "#fff",
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
