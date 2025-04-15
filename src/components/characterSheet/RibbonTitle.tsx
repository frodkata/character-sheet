import React from "react";

const styles: React.CSSProperties = {
	fontSize: "1.2rem",
	fontWeight: "bold",
	textAlign: "center",
	fontFamily: "'Cinzel', serif", // Fantasy-style font
	color: "#f4e4c1", // Parchment-like text color
	textShadow: "1px 1px 2px #000", // Subtle shadow for readability
	"--s": "2.5em", // the ribbon size
	"--d": "0.8em", // the depth
	"--c": "0.8em", // the cutout part
	padding: "0 calc(var(--s) + 0.5em) var(--d)",
	lineHeight: "2.8",
	background: `
    conic-gradient(at left var(--s) bottom var(--d), #0000 25%, #0008 0 37.5%, #0004 0) 0 / 50% 100% no-repeat,
    conic-gradient(at right var(--s) bottom var(--d), #0004 62.5%, #0008 0 75%, #0000 0) 100% / 50% 100% no-repeat
  `,
	clipPath: `
    polygon(
      0 var(--d), var(--s) var(--d), var(--s) 0, calc(100% - var(--s)) 0, calc(100% - var(--s)) var(--d), 
      100% var(--d), calc(100% - var(--c)) calc(50% + var(--d) / 2), 100% 100%, 
      calc(100% - var(--s) - var(--d)) 100%, calc(100% - var(--s) - var(--d)) calc(100% - var(--d)), 
      calc(var(--s) + var(--d)) calc(100% - var(--d)), calc(var(--s) + var(--d)) 100%, 
      0 100%, var(--c) calc(50% + var(--d) / 2)
    )
  `,
	backgroundColor: "#CC333F", // the main color
	width: "fit-content",
} as React.CSSProperties;

interface RibbonTitleProps {
	title: string;
}

const RibbonTitle: React.FC<RibbonTitleProps> = ({ title }) => {
	return <div style={styles}>{title}</div>;
};

export default RibbonTitle;
