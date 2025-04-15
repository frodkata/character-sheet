import React from "react";

const styles: React.CSSProperties = {
	fontSize: "28px", // Font size
	fontWeight: "bold", // Bold text
	backgroundColor: "black", // Dark red for a magical feel
	"--r": "1em", // Increase the cutout size for a taller ribbon
	borderInline: "0.5em solid transparent", // Transparent border on both sides
	padding: "1em 0.5em calc(var(--r) + 0.5em)", // Increase padding for a taller ribbon
	clipPath: `
        polygon(
          0 0, 100% 0, 100% 100%, calc(100% - 0.5em) calc(100% - var(--r)), 
          50% 100%, 0.5em calc(100% - var(--r)), 0 100%
        )
      `, // Clip path for the ribbon shape
	background: `
        radial-gradient(50% 0.2em at top, #000a, #0000) border-box,
        #bd1550 padding-box
      `, // Background with gradient and color
	width: 100, // Fit content width
	display: "flex", // Use flexbox for layout
	flexDirection: "column", // Arrange content in a column
	justifyContent: "center", // Center content vertically
	alignItems: "center", // Center content horizontally
	gap: "5px", // Add spacing between items
} as React.CSSProperties;

const textStyles: React.CSSProperties = {
	fontWeight: "bold",
	fontSize: "1.0rem", // Smaller font size for details
	color: "#f4e4c1", // Dark red for a magical feel
	fontFamily: "'Cinzel', serif", // Fantasy-style font
};

const modifierStyles: React.CSSProperties = {
	fontSize: "1.5rem", // Slightly larger font for the modifier
	color: "#FFD700", // Gold color for the modifier
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
