import { ThemeProvider } from "./components/ThemeController/ThemeContext";
import "./App.css";
import AppContainer from "./components/AppContainer/AppContainer";
import NavigationBar from "./components/NavBar/NavBar";

import Home from "./pages/Home/Home";

const App = () => {
	return (
		<ThemeProvider>
			<AppContainer>
				<NavigationBar />
				<Home />
			</AppContainer>
		</ThemeProvider>
	);
};

export default App;
