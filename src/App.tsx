import React from "react";
import { HashRouter, Link } from "react-router-dom";
import AppRoutes from "./AppRoutes";

const styles: { [key: string]: React.CSSProperties } = {
	nav: {
		backgroundColor: "#8b0000", // Dark red for a magical feel
		padding: "10px 20px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
	},
	navList: {
		listStyleType: "none",
		padding: 0,
		margin: 0,
		display: "flex",
		gap: "15px",
		justifyContent: "center",
	},
	navItem: {
		textDecoration: "none",
		color: "#f4e4c1", // Parchment-like text color
		fontFamily: "'Cinzel', serif",
		fontSize: "1.2rem",
		fontWeight: "bold",
		textShadow: "1px 1px 2px #000",
	},
	navItemHover: {
		color: "#fff",
	},
};

function App() {
	return (
		<HashRouter>
			<div className="App">
				<header className="App-header">
					<nav style={styles.nav}>
						<ul style={styles.navList}>
							<li>
								<Link
									to="/character"
									style={styles.navItem}
									onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
									onMouseOut={(e) => (e.currentTarget.style.color = "#f4e4c1")}
								>
									Character
								</Link>
							</li>
							<li>
								<Link
									to="/spells"
									style={styles.navItem}
									onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
									onMouseOut={(e) => (e.currentTarget.style.color = "#f4e4c1")}
								>
									Spells
								</Link>
							</li>
							<li>
								<Link
									to="/inventory"
									style={styles.navItem}
									onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
									onMouseOut={(e) => (e.currentTarget.style.color = "#f4e4c1")}
								>
									Inventory
								</Link>
							</li>
						</ul>
					</nav>
				</header>
				<main>
					<AppRoutes />
				</main>
			</div>
		</HashRouter>
	);
}

export default App;
