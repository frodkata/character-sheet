import React from "react";
import { Proficiencies as ProficienciesModel } from "../../models/MainSheet";

interface ProficienciesProps {
	proficiencies: ProficienciesModel;
}

const styles: { [key: string]: React.CSSProperties } = {
	section: {
		padding: "15px",
		display: "flex",
		flexDirection: "column",
		gap: "2px",
	},
	category: {
		display: "flex",
		flexWrap: "wrap",
		gap: "10px",
	},
	item: {
		padding: "8px",
		borderRadius: "6px",
		backgroundColor: "#222222", // Light gray
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
		fontSize: "1rem",
		color: "#FFD700", // Gold color
		fontWeight: "bold",
		textAlign: "center",
		minWidth: "100px",
		fontFamily: "'Cinzel', serif",
	},
	heading: {
		color: "#8b0000",
		fontSize: "1.2rem",
		fontWeight: "bold",
		marginBottom: "1px",
		textShadow: "0.5px 0.5px 1px #000",
	},
};

const Proficiencies: React.FC<ProficienciesProps> = ({ proficiencies }) => {
	return (
		<section style={styles.section}>
			<div>
				<h3 style={styles.heading}>Languages</h3>
				<div style={styles.category}>
					{proficiencies.languageProficiencies.map((item, index) => (
						<div key={index} style={styles.item}>
							{item}
						</div>
					))}
				</div>
			</div>
			<div>
				<h3 style={styles.heading}>Tools</h3>
				<div style={styles.category}>
					{proficiencies.toolProficiencies.map((item, index) => (
						<div key={index} style={styles.item}>
							{item}
						</div>
					))}
				</div>
			</div>
			<div>
				<h3 style={styles.heading}>Weapons</h3>
				<div style={styles.category}>
					{proficiencies.weaponProficiencies.map((item, index) => (
						<div key={index} style={styles.item}>
							{item}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Proficiencies;
