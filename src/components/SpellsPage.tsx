import React from "react";
import { CharacterSheet } from "../CharacterSheet";
import Spell from "../components/Spell";

const SpellsPage: React.FC = () => {
	return (
		<div>
			<h1>Spells</h1>
			<ul style={{ listStyleType: "none", padding: 0 }}>
				{CharacterSheet.spells.map((spell, index) => (
					<Spell
						key={index}
						name={spell.name}
						level={spell.level}
						description={spell.description}
					/>
				))}
			</ul>
		</div>
	);
};

export default SpellsPage;
