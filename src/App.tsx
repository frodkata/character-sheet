import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<nav>
						<ul
							style={{
								listStyleType: "none",
								padding: 0,
								display: "flex",
								gap: "10px",
								color: "black",
							}}
						>
							<li>
								<Link to="/" style={{ textDecoration: "none" }}>
									Character
								</Link>
							</li>
							<li>
								<Link to="/spells" style={{ textDecoration: "none" }}>
									Spells
								</Link>
							</li>
							<li>
								<Link to="/inventory" style={{ textDecoration: "none" }}>
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
		</Router>
	);
}

export default App;
