import React from "react";
import { HitPoints as HitPointsModel } from "../../models/MainSheet";

interface HitPointsProps {
	hitPoints: HitPointsModel;
}

const styles: { [key: string]: React.CSSProperties } = {
	section: {
		padding: "15px",
		marginBottom: "5px",
		textAlign: "center",
		color: "#8b0000", // Parchment-like text color
		fontFamily: "'Cinzel', serif", // Fantasy-style font
		fontSize: "1.2rem",
		fontWeight: "bold",
		textShadow: "1px 1px 2px #000", // Subtle shadow for readability
	},
	statValue: {
		color: "#8b0000",
		fontWeight: "bold",
		fontSize: "1.2rem",
		fontFamily: "'Cinzel', serif", // Fantasy-style font
	},
};

const HitPoints: React.FC<HitPointsProps> = ({ hitPoints }) => {
	return (
		<section style={styles.section}>
			<p>
				<strong>Current HP:</strong>{" "}
				<span style={styles.statValue}>{hitPoints.currentHitPoints} ❤️ </span>
			</p>
			<p>
				<strong>Max HP:</strong>{" "}
				<span style={styles.statValue}>{hitPoints.maxHitPoints} ❤️ </span>
			</p>
			<p>
				<strong>Hit Dice:</strong>{" "}
				<span style={styles.statValue}>{hitPoints.hitDice}</span>
			</p>
		</section>
	);
};

export default HitPoints;
