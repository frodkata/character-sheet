import React from "react";
import { Title } from "../../models/MainSheet";

interface CharacterTitleProps {
	title: Title;
}

const styles: { [key: string]: React.CSSProperties } = {
	container: {
		padding: "15px",
		marginBottom: "20px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
		borderRadius: "8px",
		backgroundColor: "#fff",
		display: "flex", // Use flexbox for horizontal alignment
		justifyContent: "space-around", // Space out the items evenly
		alignItems: "center", // Align items vertically in the center
		textAlign: "center",
		gap: "10px", // Add spacing between items
		flexWrap: "wrap", // Allow wrapping on smaller screens
	},
	item: {
		fontSize: "1.2rem", // Slightly larger font for details
		fontFamily: "'Roboto', sans-serif", // Clean and modern font for details
	},
	label: {
		color: "#8b0000",
		fontSize: "1.5rem",
		fontWeight: "bold",
		marginBottom: "10px",
		textShadow: "0.5px 0.5px 1px #000",
	},
};

const CharacterTitle: React.FC<CharacterTitleProps> = ({ title }) => {
	return (
		<div style={styles.container}>
			<div style={styles.item}>
				<span style={styles.label}>Class:</span> {title.class} (Level{" "}
				{title.level})
			</div>
			<div style={styles.item}>
				<span style={styles.label}>Alignment:</span> {title.alignment}
			</div>
			<div style={styles.item}>
				<span style={styles.label}>Background:</span> {title.background}
			</div>
			<div style={styles.item}>
				<span style={styles.label}>Race:</span> {title.race}
			</div>
		</div>
	);
};

export default CharacterTitle;
