import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/SignUp";
import Home from "../components/Home";
import AuthRoute from "../components/AuthRoute";
import { useSelector } from "react-redux";
import { selectUser } from "../store/reducer-slices";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
	const user = useSelector(selectUser);

	return (
		<div className="App">
			<CssBaseline />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route
					path="/home"
					element={
						<AuthRoute user={user}>
							<Home />
						</AuthRoute>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
