import React from "react";

interface SpellProps {
	name: string;
	level: number;
	description: string;
}

const Spell: React.FC<SpellProps> = ({ name, level, description }) => {
	return (
		<li
			style={{
				border: "1px solid #ccc",
				borderRadius: "8px",
				padding: "10px",
				margin: "10px 0",
				backgroundColor: "#f9f9f9",
				textAlign: "left",
			}}
		>
			<h3 style={{ margin: "0 0 5px" }}>{name}</h3>
			<p style={{ margin: "0" }}>
				<strong>Level:</strong> {level}
			</p>
			<div
				style={{ margin: "5px 0 0" }}
				dangerouslySetInnerHTML={{ __html: description }}
			></div>
		</li>
	);
};

export default Spell;
