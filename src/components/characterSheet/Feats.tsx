import React from "react";
import { Feat } from "../../models/Feats/Feat";

interface FeatsProps {
	feats: Feat[];
}

const styles: { [key: string]: React.CSSProperties } = {
	section: {
		backgroundColor: "#222222",
		paddingRight: "15px",
		paddingLeft: "15px",
		paddingBottom: "15px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
		borderRadius: "8px",
		textAlign: "center",
	},
	heading: {
		color: "#FF4500",
		fontSize: "1.5rem",
		fontWeight: "bold",
		marginBottom: "10px",
		textShadow: "0.5px 0.5px 1px #000",
	},
	list: {
		listStyleType: "none",
		padding: 0,
		margin: 0,
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
		gap: "10px",
	},
	listItem: {
		backgroundColor: "#333333",
		color: "#f4e4c1",
		padding: "10px",
		borderRadius: "6px",
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
		textAlign: "left",
	},
	featName: {
		fontWeight: "bold",
		color: "#FF4500",
		marginBottom: "5px",
	},
	featDescription: {
		fontSize: "0.9rem",
		color: "#f4e4c1",
	},
};

const Feats: React.FC<FeatsProps> = ({ feats }) => {
	return (
		<section style={styles.section}>
			<h2 style={styles.heading}>Feats</h2>
			<ul style={styles.list}>
				{feats.map((feat, index) => (
					<li key={index} style={styles.listItem}>
						<div style={styles.featName}>{feat.name}</div>
						{feat.description && (
							<div style={styles.featDescription}>{feat.description}</div>
						)}
					</li>
				))}
			</ul>
		</section>
	);
};

export default Feats;
