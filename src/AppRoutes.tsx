import React from "react";
import { Routes, Route } from "react-router-dom";
import CharacterPage from "./pages/CharacterPage";
import SpellsPage from "./pages/SpellsPage";

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<CharacterPage />} />
			<Route path="/spells" element={<SpellsPage />} />
		</Routes>
	);
};

export default AppRoutes;
