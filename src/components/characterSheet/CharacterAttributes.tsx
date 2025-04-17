import React from "react";
import { CharacterAttributes as CharacterAttributesModel } from "../../models/MainSheet";
import ShieldImpact from "../svg components/ShieldImpact";
import D20 from "../svg components/D20";
import WisdomIcon from "../svg components/WisdomIcon";
import BullseyeIcon from "../svg components/BullseyeIcon";
import InspirationIcon from "../svg components/InspirationIcon";
import SpeedIcon from "../svg components/SpeedIcon";

interface CharacterAttributesProps {
	attributes: CharacterAttributesModel;
}

const styles: { [key: string]: React.CSSProperties } = {
	container: {
		display: "flex", // Use flexbox for layout
		flexWrap: "wrap", // Allow items to wrap into a new row
		justifyContent: "space-between", // Space items evenly
		gap: "10px", // Add spacing between items
		padding: "15px",
	},
	listItem: {
		display: "flex", // Use flexbox for statName and statValue
		justifyContent: "space-between", // Space statName and statValue evenly
		alignItems: "center", // Align items vertically
		padding: "8px 12px", // Smaller padding for compact items
		backgroundColor: "#8b0000", // Dark red for a magical feel
		color: "#f4e4c1", // Parchment-like text color
		fontWeight: "bold",
		fontSize: "0.9rem", // Smaller font size for compact items
		fontFamily: "'Cinzel', serif", // Fantasy-style font
		textAlign: "center",
		borderRadius: "6px", // Slightly smaller rounded corners
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
		flex: "1 1 calc(33.33% - 10px)", // Take up one-third of the container width
		boxSizing: "border-box", // Include padding and border in width calculation
		minWidth: "120px", // Ensure a smaller minimum width for compact design
	},
	statName: {
		display: "flex", // Use flexbox to align text and icon
		alignItems: "center", // Align text and icon vertically
		gap: "5px", // Add spacing between text and icon
	},
	statValue: {
		color: "#FFD700", // Gold color for the value
		fontWeight: "bold",
		fontSize: "1rem", // Slightly smaller font size for the value
	},
};

const CharacterAttributes: React.FC<CharacterAttributesProps> = ({
	attributes,
}) => {
	const {
		armorClass,
		initiative,
		inspiration,
		passiveWisdom,
		proficiencyBonus,
		speed,
	} = attributes;

	return (
		<div style={styles.container}>
			<div style={styles.listItem}>
				<div style={styles.statName}>
					<ShieldImpact fill="#FFD700" />
					Armor Class
				</div>
				<div style={styles.statValue}>{armorClass}</div>
			</div>

			<div style={styles.listItem}>
				<div style={styles.statName}>
					<D20 fill="#FFD700" />
					Initiative
				</div>
				<div style={styles.statValue}>{initiative}</div>
			</div>

			<div style={styles.listItem}>
				<div style={styles.statName}>
					<InspirationIcon fill="#FFD700" />
					Inspiration
				</div>
				<div style={styles.statValue}>{inspiration}</div>
			</div>

			<div style={styles.listItem}>
				<div style={styles.statName}>
					<WisdomIcon fill="#FFD700" />
					Passive Wisdom
				</div>
				<div style={styles.statValue}>{passiveWisdom}</div>
			</div>

			<div style={styles.listItem}>
				<div style={styles.statName}>
					<BullseyeIcon fill="#FFD700" />
					Proficiency Bonus
				</div>
				<div style={styles.statValue}>{proficiencyBonus}</div>
			</div>

			<div style={styles.listItem}>
				<div style={styles.statName}>
					<SpeedIcon fill="#FFD700" />
					Speed
				</div>
				<div style={styles.statValue}>{speed}</div>
			</div>
		</div>
	);
};

export default CharacterAttributes;
