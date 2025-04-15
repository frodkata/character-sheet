import React from "react";

interface InventoryItemProps {
	name: string;
	quantity: number;
	itemDescription?: string;
}

const styles: { [key: string]: React.CSSProperties } = {
	listItem: {
		backgroundColor: "#f9f9f9",
		border: "1px solid #ddd",
		borderRadius: "5px",
		padding: "10px",
		marginBottom: "10px",
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
	},
	itemName: {
		fontWeight: "bold",
		color: "#333",
	},
	itemDescription: {
		color: "#555",
		fontStyle: "italic",
	},
};

const InventoryItem: React.FC<InventoryItemProps> = ({
	name,
	quantity,
	itemDescription,
}) => {
	return (
		<li style={styles.listItem}>
			<span style={styles.itemName}>{name}</span> (x{quantity}) -{" "}
			<span style={styles.itemDescription}>
				{itemDescription || "No description"}
			</span>
		</li>
	);
};

export default InventoryItem;
