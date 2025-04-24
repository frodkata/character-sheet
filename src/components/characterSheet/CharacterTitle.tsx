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
		backgroundColor: "#8b0000", // Dark red for a magical feel
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		textAlign: "center",
		gap: "10px",
		flexWrap: "wrap",
	},
	item: {
		fontSize: "1.2rem",
		fontFamily: "'Roboto', sans-serif",
	},
	label: {
		color: "#f4e4c1",
		fontFamily: "'Cinzel', serif",
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
