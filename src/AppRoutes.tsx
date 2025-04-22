import React from "react";
import { Routes, Route } from "react-router-dom";
import CharacterPage from "./pages/CharacterPage";
import SpellsPage from "./pages/SpellsPage";
import InventoryPage from "./pages/InventoryPage";
import SpellSearchPage from "./pages/SpellSearchPage";
import HomePage from "./pages/HomePage";

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/character" element={<CharacterPage />} />
			<Route path="/spells" element={<SpellsPage />} />
			<Route path="/inventory" element={<InventoryPage />} />
			<Route path="/spell-search" element={<SpellSearchPage />} />
			<Route path="/" element={<HomePage />} />
		</Routes>
	);
};

export default AppRoutes;
