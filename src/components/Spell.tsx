import React from "react";

const styles: { [key: string]: React.CSSProperties } = {
	container: {
		border: "2px solid #5a3825",
		borderRadius: "12px",
		padding: "15px",
		margin: "15px 0",
		backgroundColor: "#f4e4c1",
		textAlign: "left",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
		fontFamily: "'Cinzel', serif",
	},
	title: {
		margin: "0 0 10px",
		color: "#8b0000",
		fontSize: "1.8rem",
		fontWeight: "bold",
		textShadow: "0.5px 0.5px 1px #000",
	},
	text: {
		margin: "5px 0",
		color: "#3e2a1c",
	},
	levelBadge: {
		display: "inline-block",
		padding: "5px 10px",
		backgroundColor: "#8b0000", // Dark red for a bold look
		color: "#fff", // White text for contrast
		borderRadius: "8px", // Rounded edges for a badge-like appearance
		fontWeight: "bold",
		fontSize: "0.9rem",
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
	},
	description: {
		margin: "10px 0 0",
		color: "#3e2a1c",
		fontSize: "0.95rem",
	},
	higherLevel: {
		margin: "10px 0 0",
		fontStyle: "italic",
		color: "#3e2a1c",
		fontSize: "0.9rem",
	},
};

interface SpellProps {
	name: string;
	level: number;
	school: string;
	castingTime: string;
	range: string;
	components: string;
	duration: string;
	description: string;
	higherLevel?: string;
}

const Spell: React.FC<SpellProps> = ({
	name,
	level,
	school,
	castingTime,
	range,
	components,
	duration,
	description,
	higherLevel,
}) => {
	return (
		<li style={styles.container}>
			<h3 style={styles.title}>{name}</h3>
			<p style={styles.text}>
				<span style={styles.levelBadge}>
					<strong>Level:</strong> {level === 0 ? "Cantrip" : level}
				</span>
			</p>
			<p style={styles.text}>
				<strong>School:</strong> {school}
			</p>
			<p style={styles.text}>
				<strong>Casting Time:</strong> {castingTime}
			</p>
			<p style={styles.text}>
				<strong>Range:</strong> {range}
			</p>
			<p style={styles.text}>
				<strong>Components:</strong> {components}
			</p>
			<p style={styles.text}>
				<strong>Duration:</strong> {duration}
			</p>
			<div
				style={styles.description}
				dangerouslySetInnerHTML={{ __html: description }}
			></div>
			{higherLevel && (
				<div
					style={styles.higherLevel}
					dangerouslySetInnerHTML={{ __html: higherLevel }}
				></div>
			)}
		</li>
	);
};

export default Spell;
