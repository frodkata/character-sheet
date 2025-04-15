import React from "react";
import { CharacterSheet } from "../data/CharacterSheet";

// Define styles as an object
const styles: { [key: string]: React.CSSProperties } = {
	body: {
		margin: 0,
		fontFamily: "Arial, sans-serif",
		backgroundColor: "#f4f4f4",
		color: "#333",
		padding: "20px",
	},
	heading: {
		color: "#222",
	},
	section: {
		border: "1px solid #ccc",
		borderRadius: "8px",
		padding: "15px",
		backgroundColor: "#fff",
		marginBottom: "20px",
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
	},
	list: {
		listStyleType: "none",
		padding: 0,
	},
};

const CharacterPage: React.FC = () => {
	const {
		title,
		mainSkills,
		savingThrows,
		hitPoints,
		secondarySkills,
		proficiencies,
	} = CharacterSheet;

	return (
		<div style={styles.body}>
			{/* Character Information */}
			<section style={styles.section}>
				<h1 style={styles.heading}>{title.name}</h1>
				<p>
					<strong>Class:</strong> {title.class} (Level {title.level})
				</p>
				<p>
					<strong>Alignment:</strong> {title.alignment}
				</p>
				<p>
					<strong>Background:</strong> {title.background}
				</p>
				<p>
					<strong>Race:</strong> {title.race}
				</p>
			</section>

			{/* Main Stats */}
			<section style={styles.section}>
				<h2 style={styles.heading}>Main Stats</h2>
				<ul style={styles.list}>
					{Object.entries(mainSkills).map(([stat, value]) => {
						if (Array.isArray(value)) {
							return (
								<li key={stat}>
									<strong>
										{stat.charAt(0).toUpperCase() + stat.slice(1)}:
									</strong>{" "}
									{value[0]} (Modifier: {value[1]})
								</li>
							);
						}
						return null;
					})}
				</ul>
			</section>

			{/* Saving Throws */}
			<section style={styles.section}>
				<h2 style={styles.heading}>Saving Throws</h2>
				<ul style={styles.list}>
					{Object.entries(savingThrows).map(([stat, value]) => (
						<li key={stat}>
							<strong>{stat.charAt(0).toUpperCase() + stat.slice(1)}:</strong>{" "}
							{value}
						</li>
					))}
				</ul>
			</section>

			{/* Hit Points */}
			<section style={styles.section}>
				<h2 style={styles.heading}>Hit Points</h2>
				<p>
					<strong>Current HP:</strong> {hitPoints.currentHitPoints}
				</p>
				<p>
					<strong>Max HP:</strong> {hitPoints.maxHitPoints}
				</p>
				<p>
					<strong>Hit Dice:</strong> {hitPoints.hitDice}
				</p>
			</section>

			{/* Secondary Skills */}
			<section style={styles.section}>
				<h2 style={styles.heading}>Secondary Skills</h2>
				<ul style={styles.list}>
					{Object.entries(secondarySkills).map(([skill, value]) => (
						<li key={skill}>
							<strong>{skill.charAt(0).toUpperCase() + skill.slice(1)}:</strong>{" "}
							{value}
						</li>
					))}
				</ul>
			</section>

			{/* Proficiencies */}
			<section style={styles.section}>
				<h2 style={styles.heading}>Proficiencies</h2>
				<p>
					<strong>Languages:</strong>{" "}
					{proficiencies.languageProficiencies.join(", ")}
				</p>
				<p>
					<strong>Tools:</strong> {proficiencies.toolProficiencies.join(", ")}
				</p>
				<p>
					<strong>Weapons:</strong>{" "}
					{proficiencies.weaponProficiencies.join(", ")}
				</p>
			</section>
		</div>
	);
};

export default CharacterPage;
