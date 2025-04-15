import React from "react";
import { Proficiencies as ProficienciesModel } from "../../models/MainSheet";

interface ProficienciesProps {
	proficiencies: ProficienciesModel;
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
	statValue: {
		color: "#FF4500",
		fontWeight: "bold",
		fontSize: "1.2rem",
		marginRight: "5px",
	},
};

const Proficiencies: React.FC<ProficienciesProps> = ({ proficiencies }) => {
	return (
		<section style={styles.section}>
			<h2 style={styles.heading}>Proficiencies</h2>
			<p>
				<strong>Languages:</strong>{" "}
				{proficiencies.languageProficiencies.map((item, index) => (
					<span key={index} style={styles.statValue}>
						{item}
					</span>
				))}
			</p>
			<p>
				<strong>Tools:</strong>{" "}
				{proficiencies.toolProficiencies.map((item, index) => (
					<span key={index} style={styles.statValue}>
						{item}
					</span>
				))}
			</p>
			<p>
				<strong>Weapons:</strong>{" "}
				{proficiencies.weaponProficiencies.map((item, index) => (
					<span key={index} style={styles.statValue}>
						{item}
					</span>
				))}
			</p>
		</section>
	);
};

export default Proficiencies;
