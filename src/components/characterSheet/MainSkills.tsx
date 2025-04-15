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
		display: "flex", // Arrange RibbonSkill components in a row
		justifyContent: "space-around", // Space them evenly
		alignItems: "center", // Align them vertically
		flexWrap: "wrap", // Allow wrapping on smaller screens
		gap: "10px", // Add spacing between ribbons
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
