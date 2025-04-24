import React from "react";

const styles: React.CSSProperties = {
	fontSize: "28px",
	fontWeight: "bold",
	"--r": "1em",
	borderInline: "0.5em solid transparent",
	padding: "1em 0.5em calc(var(--r) + 0.5em)",
	clipPath: `
        polygon(
          0 0, 100% 0, 100% 100%, calc(100% - 0.5em) calc(100% - var(--r)), 
          50% 100%, 0.5em calc(100% - var(--r)), 0 100%
        )
      `,
	background: `
        radial-gradient(50% 0.2em at top, #000a, #0000) border-box,
	#222222 padding-box
      `,
	width: 100,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: "5px",
} as React.CSSProperties;

const textStyles: React.CSSProperties = {
	fontWeight: "bold",
	fontSize: "1.0rem",
	color: "#f4e4c1", // Dark red
	fontFamily: "'Cinzel', serif",
};

const modifierStyles: React.CSSProperties = {
	fontSize: "1.5rem",
	color: "#FFD700", // Gold color
	fontWeight: "bold",
	marginTop: 20,
};

interface RibbonSkillProps {
	skill: string;
	base: number;
	modifier: number;
}

const RibbonSkill: React.FC<RibbonSkillProps> = ({ skill, base, modifier }) => {
	return (
		<div style={styles}>
			<span style={textStyles}>{skill}</span>
			<span style={textStyles}>{base}</span>
			<span style={modifierStyles}>
				{modifier < 0 ? `${modifier}` : `+${modifier}`}
			</span>
		</div>
	);
};

export default RibbonSkill;
