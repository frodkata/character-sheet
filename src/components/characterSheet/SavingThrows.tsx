import React from "react";
import { SavingThrows as SavingThrowsModel } from "../../models/MainSheet";

interface SavingThrowsProps {
	throws: SavingThrowsModel;
}

const styles: { [key: string]: React.CSSProperties } = {
	section: {
		padding: "15px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
		borderRadius: "8px",
		textAlign: "right",
		backgroundColor: "#222222",
	},
	heading: {
		color: "#FF4500",
		fontSize: "1.5rem",
		fontWeight: "bold",
		marginBottom: "10px",
		textShadow: "0.5px 0.5px 1px #000",
		textAlign: "center",
	},
	list: {
		listStyleType: "none",
		padding: 0,
		margin: 0,
	},
	listItem: {
		color: "#f4e4c1", // Parchment-like text color
		marginBottom: "5px",
	},
	statValue: {
		color: "#FF4500",
		fontWeight: "bold",
		fontSize: "1.2rem",
	},
};

const SavingThrows: React.FC<SavingThrowsProps> = ({ throws }) => {
	return (
		<section style={styles.section}>
			<h2 style={styles.heading}>Saving Throws</h2>
			<ul style={styles.list}>
				{Object.entries(throws).map(([stat, value]) => (
					<li key={stat} style={styles.listItem}>
						<strong>{stat.charAt(0).toUpperCase() + stat.slice(1)}:</strong>{" "}
						<span style={styles.statValue}>
							{value < 0 ? `${value}` : `+${value}`}
						</span>
					</li>
				))}
			</ul>
		</section>
	);
};

export default SavingThrows;
