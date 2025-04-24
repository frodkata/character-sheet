import React from "react";
import { MainSkills as MainSkillsModel } from "../../models/MainSheet";
import RibbonSkill from "./RibbonSkill";

interface MainSkillsProps {
	mainSkills: MainSkillsModel;
}

const styles: { [key: string]: React.CSSProperties } = {
	section: {
		marginBottom: "20px",
	},
	heading: {
		color: "#8b0000",
		fontSize: "1.5rem",
		fontWeight: "bold",
		marginBottom: "10px",
		textShadow: "0.5px 0.5px 1px #000",
		textAlign: "center",
	},
	ribbonContainer: {
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		flexWrap: "wrap",
		gap: "10px",
	},
};

const MainSkills: React.FC<MainSkillsProps> = ({ mainSkills }) => {
	return (
		<section style={styles.section}>
			<div style={styles.ribbonContainer}>
				{Object.entries(mainSkills).map(([skill, [base, modifier]]) => (
					<RibbonSkill
						key={skill}
						skill={skill}
						base={base}
						modifier={modifier}
					/>
				))}
			</div>
		</section>
	);
};

export default MainSkills;
