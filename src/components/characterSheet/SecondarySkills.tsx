import React from "react";
import { SecondarySkills as SecondarySkillsModel } from "../../models/MainSheet";

interface SecondarySkillsProps {
	skills: SecondarySkillsModel;
}

const styles: { [key: string]: React.CSSProperties } = {
	section: {
		padding: "15px",
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

const SecondarySkills: React.FC<SecondarySkillsProps> = ({ skills }) => {
	return (
		<section style={styles.section}>
			<h2 style={styles.heading}>Secondary Skills</h2>
			<ul style={styles.list}>
				{Object.entries(skills).map(([skill, value]) => (
					<li key={skill} style={styles.listItem}>
						<strong>{skill.charAt(0).toUpperCase() + skill.slice(1)}:</strong>{" "}
						<span style={styles.statValue}>{value}</span>
					</li>
				))}
			</ul>
		</section>
	);
};

export default SecondarySkills;
