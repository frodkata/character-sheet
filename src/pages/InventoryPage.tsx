import React from "react";
import { CharacterSheet } from "../data/CharacterSheet";
import InventoryItem from "../components/InventoryItem";

const styles: { [key: string]: React.CSSProperties } = {
	container: {
		padding: "20px",
		fontFamily: "'Arial', sans-serif",
		backgroundColor: "#f4f4f9",
		borderRadius: "10px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
		maxWidth: "800px",
		margin: "20px auto",
	},
	header: {
		color: "#333",
		textAlign: "center",
		marginBottom: "20px",
	},
	gold: {
		color: "#DAA520",
		fontWeight: "bold",
		fontSize: "1.5rem",
		textAlign: "center",
		marginBottom: "20px",
	},
	subHeader: {
		color: "#555",
		marginBottom: "10px",
	},
	list: {
		listStyleType: "none",
		padding: 0,
	},
};

const InventoryPage: React.FC = () => {
	const inventory = CharacterSheet.inventory;

	return (
		<div style={styles.container}>
			<h1 style={styles.header}>Inventory</h1>
			<div style={styles.gold}>💰 Gold: {inventory.gold}</div>
			<h3 style={styles.subHeader}>Items:</h3>
			<ul style={styles.list}>
				{inventory.items.map((item, index) => (
					<InventoryItem
						key={index}
						name={item.name}
						quantity={item.quantity}
						itemDescription={item.itemDescription}
					/>
				))}
			</ul>
			{inventory.specialItems && (
				<>
					<h3 style={styles.subHeader}>Special Items:</h3>
					<ul style={styles.list}>
						{inventory.specialItems.map((specialItem, index) => (
							<InventoryItem
								key={index}
								name={specialItem.itemName}
								quantity={1} // Assuming special items don't have a quantity
								itemDescription={specialItem.itemDescription}
							/>
						))}
					</ul>
				</>
			)}
		</div>
	);
};

export default InventoryPage;
