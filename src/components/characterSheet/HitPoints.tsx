import React from "react";
import { HitPoints as HitPointsModel } from "../../models/MainSheet";
interface HitPointsProps {
	hitPoints: HitPointsModel;
}

const styles: { [key: string]: React.CSSProperties } = {
	section: {
		padding: "15px",
		marginBottom: "20px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
		borderRadius: "8px",
		backgroundColor: "#fff",
	},
	heading: {
		color: "#8b0000",
		fontSize: "1.5rem",
		fontWeight: "bold",
		marginBottom: "10px",
		textShadow: "0.5px 0.5px 1px #000",
	},
	statValue: {
		color: "#FF4500",
		fontWeight: "bold",
		fontSize: "1.2rem",
	},
};

const HitPoints: React.FC<HitPointsProps> = ({ hitPoints }) => {
	return (
		<section style={styles.section}>
			<h2 style={styles.heading}>Hit Points</h2>
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
	);
};

export default HitPoints;
