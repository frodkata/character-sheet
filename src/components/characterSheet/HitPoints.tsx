import React from "react";
import { HitPoints as HitPointsModel } from "../../models/MainSheet";
import HealthPotionIcon from "../svg components/HealthPotionIcon";

interface HitPointsProps {
	hitPoints: HitPointsModel;
}

const styles: { [key: string]: React.CSSProperties } = {
	section: {
		padding: "10px",
		marginBottom: "5px",
		textAlign: "center",
		color: "#8b0000",
		fontFamily: "'Cinzel', serif",
		fontSize: "1.2rem",
		fontWeight: "bold",
		textShadow: "1px 1px 2px #000",
	},
	statValue: {
		color: "#8b0000",
		fontWeight: "bold",
		fontSize: "1.2rem",
		fontFamily: "'Cinzel', serif",
	},
	currentHp: {
		color: "#555",
		fontSize: "1rem",
		fontWeight: "normal",
	},
};

const HitPoints: React.FC<HitPointsProps> = ({ hitPoints }) => {
	return (
		<section style={styles.section}>
			<strong>Max HP:</strong>
			<span style={styles.statValue}>
				{hitPoints.maxHitPoints} <HealthPotionIcon fill="#8b0000" />
			</span>
			<br />
			<span style={styles.currentHp}>
				<strong>Current HP:</strong> {hitPoints.currentHitPoints}
			</span>
			<p>
				<strong>Hit Dice: </strong>
				<span style={styles.statValue}> {hitPoints.hitDice}</span>
			</p>
		</section>
	);
};

export default HitPoints;
