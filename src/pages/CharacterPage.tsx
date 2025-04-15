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
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		minHeight: "100vh",
		boxSizing: "border-box",
	},
	ribbonContainer: {
		display: "flex",
		justifyContent: "center",
		width: "100%",
		marginBottom: "20px",
	},
	grid: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
		gap: "20px",
		width: "100%",
		maxWidth: "1200px",
	},
	fullWidth: {
		gridColumn: "1 / -1",
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
				<CharacterAttributes attributes={characterAtributes} />
				<SavingThrows throws={savingThrows} />
				<HitPoints hitPoints={hitPoints} />
				<SecondarySkills skills={secondarySkills} />
				<Proficiencies proficiencies={proficiencies} />
			</div>
		</div>
	);
};

export default CharacterPage;
