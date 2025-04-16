import React from "react";
import { CharacterSheet } from "../data/CharacterSheet";
import RibbonTitle from "../components/characterSheet/RibbonTitle";
import CharacterAttributes from "../components/characterSheet/CharacterAttributes";
import MainSkills from "../components/characterSheet/MainSkills";
import SavingThrows from "../components/characterSheet/SavingThrows";
import HitPoints from "../components/characterSheet/HitPoints";
import SecondarySkills from "../components/characterSheet/SecondarySkills";
import Proficiencies from "../components/characterSheet/Proficiencies";
import CharacterTitle from "../components/characterSheet/CharacterTitle";
import backgroundImage from "../assets/papyrus.jpg";

const styles: { [key: string]: React.CSSProperties } = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "20px",
		backgroundColor: "#f9f9f9",
		minHeight: "100vh",
		boxSizing: "border-box",
		backgroundImage: `url(${backgroundImage})`, // Add your background image path
	},
	ribbonContainer: {
		display: "flex",
		justifyContent: "center",
		width: "100%",
		marginBottom: "20px",
	},
	grid: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr", // Two equal columns
		gap: "20px",
		width: "100%",
		maxWidth: "1200px",
	},
	leftColumn: {
		gridColumn: "1 / 2", // Left column for SecondarySkills
		display: "flex",
		flexDirection: "column",
		gap: "20px",
	},
	rightColumn: {
		gridColumn: "2 / 3", // Right column for CharacterAttributes, SavingThrows, and HitPoints
		display: "flex",
		flexDirection: "column",
		gap: "20px",
	},
	proficiencies: {
		gridColumn: "1 / -1", // Span the entire width of the grid
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
		characterAtributes,
	} = CharacterSheet;

	return (
		<div style={styles.container}>
			<div style={styles.ribbonContainer}>
				<RibbonTitle title={title.name} />
			</div>
			<div style={styles.fullWidth}>
				<CharacterTitle title={title} />
			</div>
			<MainSkills mainSkills={mainSkills} />

			<div style={styles.grid}>
				<HitPoints hitPoints={hitPoints} />
				<CharacterAttributes attributes={characterAtributes} />
				<div style={styles.leftColumn}>
					<SecondarySkills skills={secondarySkills} />
				</div>
				<div style={styles.rightColumn}>
					<SavingThrows throws={savingThrows} />
				</div>
				<div style={styles.proficiencies}>
					<Proficiencies proficiencies={proficiencies} />
				</div>
			</div>
		</div>
	);
};

export default CharacterPage;
