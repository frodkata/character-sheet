import React from "react";
import { CharacterSheet } from "../data/CharacterSheet";
import InventoryItem from "../components/InventoryItem";
import backgroundImage from "../assets/papyrus.jpg";

const styles: { [key: string]: React.CSSProperties } = {
	page: {
		padding: "20px",
		fontFamily: "'Cinzel', serif",
		color: "#3e2a1c",
		minHeight: "100vh",
		backgroundImage: `url(${backgroundImage})`,

		boxSizing: "border-box",
	},
	header: {
		textAlign: "center",
		color: "#8b0000",
		fontSize: "2.5rem",
		textShadow: "1px 1px 2px #000",
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
		color: "#8b0000",
		fontSize: "1.2rem",
		fontWeight: "bold",
		marginBottom: "10px",
		textShadow: "0.5px 0.5px 1px #000",
	},
	list: {
		listStyleType: "none",
		padding: 0,
		margin: 0,
	},
};

const InventoryPage: React.FC = () => {
	const inventory = CharacterSheet.inventory;

	return (
		<div style={styles.page}>
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
