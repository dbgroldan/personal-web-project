import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeName =
	| "dark"
	| "nord"
	| "night"
	| "autumn"
	| "dim"
	| "dracula"
	| "business"
	| "synthwave"
	| "retro"
	| "abyss"
	| "coffee"
	| "emerald"
	| "corporate";

interface ThemeContextType {
	theme: ThemeName;
	setTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType>({
	theme: "dark",
	setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [theme, setTheme] = useState<ThemeName>("dark");

	useEffect(() => {
		document.documentElement.classList.remove(
			"dark",
			"nord",
			"night",
			"autumn",
			"dim",
			"dracula",
			"business",
			"synthwave",
			"retro",
			"abyss",
			"coffee",
			"emerald",
			"corporate",
		);
		document.documentElement.classList.add(theme);
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
