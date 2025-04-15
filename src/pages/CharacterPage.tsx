import React from "react";
import { CharacterSheet } from "../data/CharacterSheet";

// Define styles as an object
const styles: { [key: string]: React.CSSProperties } = {
	body: {
		backgroundColor: "#f4e4c1", // Parchment-like background
		color: "#3e2a1c", // Dark brown text
		fontFamily: "'Cinzel', serif", // Fantasy-style font
		padding: "20px",
		minHeight: "100vh", // Full-page height
		boxSizing: "border-box", // Include padding in width/height calculations
	},
	heading: {
		color: "#8b0000", // Dark red for a magical feel
		fontSize: "2.5rem",
		textAlign: "center",
		textShadow: "1px 1px 2px #000", // Subtle shadow for depth
		marginBottom: "20px",
	},
	section: {
		backgroundColor: "#fff", // Slightly lighter background for sections
		border: "2px solid #5a3825", // Dark brown border
		borderRadius: "12px", // Rounded edges for a polished look
		padding: "15px",
		marginBottom: "20px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
	},
	sectionHeading: {
		color: "#8b0000", // Dark red for section headers
		fontSize: "1.5rem",
		fontWeight: "bold",
		marginBottom: "10px",
		textShadow: "0.5px 0.5px 1px #000", // Subtle shadow for depth
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
		color: "#DAA520", // Gold color for stat values
		fontWeight: "bold",
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
				<h2 style={styles.sectionHeading}>Main Stats</h2>
				<ul style={styles.list}>
					{Object.entries(mainSkills).map(([stat, value]) => {
						if (Array.isArray(value)) {
							return (
								<li key={stat} style={styles.listItem}>
									<strong>
										{stat.charAt(0).toUpperCase() + stat.slice(1)}:
									</strong>{" "}
									<span style={styles.statValue}>
										{value[0]} (Modifier: {value[1]})
									</span>
								</li>
							);
						}
						return null;
					})}
				</ul>
			</section>

			{/* Saving Throws */}
			<section style={styles.section}>
				<h2 style={styles.sectionHeading}>Saving Throws</h2>
				<ul style={styles.list}>
					{Object.entries(savingThrows).map(([stat, value]) => (
						<li key={stat} style={styles.listItem}>
							<strong>{stat.charAt(0).toUpperCase() + stat.slice(1)}:</strong>{" "}
							<span style={styles.statValue}>{value}</span>
						</li>
					))}
				</ul>
			</section>

			{/* Hit Points */}
			<section style={styles.section}>
				<h2 style={styles.sectionHeading}>Hit Points</h2>
				<p>
					<strong>Current HP:</strong>{" "}
					<span style={styles.statValue}>{hitPoints.currentHitPoints}</span>
				</p>
				<p>
					<strong>Max HP:</strong>{" "}
					<span style={styles.statValue}>{hitPoints.maxHitPoints}</span>
				</p>
				<p>
					<strong>Hit Dice:</strong>{" "}
					<span style={styles.statValue}>{hitPoints.hitDice}</span>
				</p>
			</section>

			{/* Secondary Skills */}
			<section style={styles.section}>
				<h2 style={styles.sectionHeading}>Secondary Skills</h2>
				<ul style={styles.list}>
					{Object.entries(secondarySkills).map(([skill, value]) => (
						<li key={skill} style={styles.listItem}>
							<strong>{skill.charAt(0).toUpperCase() + skill.slice(1)}:</strong>{" "}
							<span style={styles.statValue}>{value}</span>
						</li>
					))}
				</ul>
			</section>

			{/* Proficiencies */}
			<section style={styles.section}>
				<h2 style={styles.sectionHeading}>Proficiencies</h2>
				<p>
					<strong>Languages:</strong>{" "}
					<span style={styles.statValue}>
						{proficiencies.languageProficiencies.join(", ")}
					</span>
				</p>
				<p>
					<strong>Tools:</strong>{" "}
					<span style={styles.statValue}>
						{proficiencies.toolProficiencies.join(", ")}
					</span>
				</p>
				<p>
					<strong>Weapons:</strong>{" "}
					<span style={styles.statValue}>
						{proficiencies.weaponProficiencies.join(", ")}
					</span>
				</p>
			</section>
		</div>
	);
};

export default CharacterPage;
