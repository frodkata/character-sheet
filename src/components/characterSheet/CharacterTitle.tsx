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
	},
	detail: {
		fontSize: "1rem",
		color: "#333",
		marginBottom: "5px",
	},
};

const CharacterTitle: React.FC<CharacterTitleProps> = ({ title }) => {
	return (
		<div style={styles.container}>
			<p style={styles.detail}>
				<strong>Class:</strong> {title.class} (Level {title.level})
			</p>
			<p style={styles.detail}>
				<strong>Alignment:</strong> {title.alignment}
			</p>
			<p style={styles.detail}>
				<strong>Background:</strong> {title.background}
			</p>
			<p style={styles.detail}>
				<strong>Race:</strong> {title.race}
			</p>
		</div>
	);
};

export default CharacterTitle;
