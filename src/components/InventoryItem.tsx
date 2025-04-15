import React from "react";

interface InventoryItemProps {
	name: string;
	quantity: number;
	itemDescription?: string;
}

const styles: { [key: string]: React.CSSProperties } = {
	listItem: {
		backgroundColor: "#f4e4c1", // Parchment-like background
		border: "2px solid #5a3825", // Dark brown border
		borderRadius: "8px", // Rounded edges for a polished look
		padding: "10px 15px",
		marginBottom: "10px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
		fontFamily: "'Cinzel', serif", // Fantasy-style font
		color: "#3e2a1c", // Dark brown text
	},
	itemName: {
		fontWeight: "bold",
		color: "#8b0000", // Dark red for emphasis
		fontSize: "1.2rem",
	},
	itemDescription: {
		color: "#3e2a1c", // Dark brown for consistency
		fontStyle: "italic",
		fontSize: "0.95rem",
	},
	quantity: {
		color: "#DAA520", // Gold color for quantity
		fontWeight: "bold",
	},
};

const InventoryItem: React.FC<InventoryItemProps> = ({
	name,
	quantity,
	itemDescription,
}) => {
	return (
		<li style={styles.listItem}>
			<span style={styles.itemName}>{name}</span>{" "}
			<span style={styles.quantity}>(x{quantity})</span> -{" "}
			<span style={styles.itemDescription}>
				{itemDescription || "No description"}
			</span>
		</li>
	);
};

export default InventoryItem;
