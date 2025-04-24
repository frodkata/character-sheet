import React from "react";

interface InventoryItemProps {
	name: string;
	quantity: number;
	itemDescription?: string;
}

const styles: { [key: string]: React.CSSProperties } = {
	listItem: {
		backgroundColor: "#f4e4c1", // Parchment-like background
		border: "2px solid #5a3825", // Dark brown
		borderRadius: "8px",
		padding: "10px 15px",
		marginBottom: "10px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
		color: "#3e2a1c",
	},
	itemName: {
		fontWeight: "bold",
		color: "#8b0000",
		fontSize: "1.2rem",
		fontFamily: "'Cinzel', serif",
	},
	itemDescription: {
		color: "#3e2a1c",
		fontSize: "1.00rem",
		fontFamily: "serif",
	},
	quantity: {
		color: "#DAA520", // Gold color
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
