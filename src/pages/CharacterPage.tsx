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
import Feats from "../components/characterSheet/Feats";
import "../styles/characterPage.css";

const CharacterPage: React.FC = () => {
	const {
		title,
		mainSkills,
		savingThrows,
		hitPoints,
		secondarySkills,
		proficiencies,
		characterAtributes,
		feats,
	} = CharacterSheet;

	return (
		<div className="container">
			<div className="ribbon-container">
				<RibbonTitle title={title.name} />
			</div>
			<div className="full-width">
				<CharacterTitle title={title} />
			</div>
			<MainSkills mainSkills={mainSkills} />
			<CharacterAttributes attributes={characterAtributes} />

			<div className="grid">
				<div className="left-column">
					<SecondarySkills skills={secondarySkills} />
				</div>
				<div className="right-column">
					<HitPoints hitPoints={hitPoints} />
					<SavingThrows throws={savingThrows} />
					<Feats feats={feats} />
				</div>
				<div className="proficiencies">
					<Proficiencies proficiencies={proficiencies} />
				</div>
			</div>
		</div>
	);
};

export default CharacterPage;
