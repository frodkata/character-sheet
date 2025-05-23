import React from "react";
import D20 from "../components/svg components/D20";
import { Link } from "react-router";

const styles: { [key: string]: React.CSSProperties } = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
		padding: "20px",
		fontFamily: "'Cinzel', serif",
		backgroundColor: "#8b0000",
		minHeight: "100vh",
	},
	link: {
		position: "absolute",
		top: "10%",
		textAlign: "center",
		padding: "10px 20px",
		backgroundColor: "#8b0000",
		color: "#fff",
		textDecoration: "none",
		borderRadius: "8px",
		fontWeight: "bold",
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
	},
};

const HomePage: React.FC = () => {
	return (
		<div style={styles.container}>
			<Link to="/spell-search" style={styles.link}>
				Search for a Spell 🔍
			</Link>
			<D20 width="100px" height="100px" fill="#f4e4c1" />
		</div>
	);
};

export default HomePage;
