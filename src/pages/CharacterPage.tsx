import React from "react";
import { CharacterSheet } from "../data/CharacterSheet";
import RibbonTitle from "../components/characterSheet/RibbonTitle";
import CharacterAttributes from "../components/characterSheet/CharacterAttributes";
import MainStats from "../components/characterSheet/MainSkills";
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
		alignItems: "center", // Center all child components horizontally
		padding: "20px",
		backgroundColor: "#f9f9f9", // Fallback background color
		backgroundImage: `url(${backgroundImage})`, // Add the background image
		backgroundSize: "cover", // Ensure the image covers the entire page
		backgroundPosition: "center", // Center the image
		backgroundRepeat: "no-repeat", // Prevent the image from repeating
		minHeight: "100vh", // Full-page height
		boxSizing: "border-box",
	},
	ribbonContainer: {
		display: "flex",
		justifyContent: "center", // Center the RibbonTitle horizontally
		width: "100%",
		marginBottom: "20px",
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
			<CharacterTitle title={title} />
			<CharacterAttributes attributes={characterAtributes} />
			<MainStats mainSkills={mainSkills} />
			<SavingThrows throws={savingThrows} />
			<HitPoints hitPoints={hitPoints} />
			<SecondarySkills skills={secondarySkills} />
			<Proficiencies proficiencies={proficiencies} />
		</div>
	);
};

export default CharacterPage;
