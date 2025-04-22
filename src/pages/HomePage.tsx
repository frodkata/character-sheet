import React from "react";
import D20 from "../components/svg components/D20";

const styles: { [key: string]: React.CSSProperties } = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		padding: "20px",
		fontFamily: "'Cinzel', serif",
		backgroundColor: "#8b0000", // Updated to red background color
		minHeight: "100vh",
	},
};

const HomePage: React.FC = () => {
	return (
		<div style={styles.container}>
			<D20 width="100px" height="100px" fill="#f4e4c1" />
		</div>
	);
};

export default HomePage;
