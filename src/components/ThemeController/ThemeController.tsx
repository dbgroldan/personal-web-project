import { FaPaintBrush } from "react-icons/fa";

import { useTheme, type ThemeName } from "./ThemeContext";

type ThemeMetadata = {
	name: string;
	value: ThemeName;
};

const supportedThemes: Array<ThemeMetadata> = [
	{
		name: "Default",
		value: "dark",
	},
	{
		name: "Nord",
		value: "nord",
	},
	{
		name: "Corporate",
		value: "corporate",
	},
	{
		name: "Night",
		value: "night",
	},
	{
		name: "Autumn",
		value: "autumn",
	},
	{
		name: "Dim",
		value: "dim",
	},
	{
		name: "Dracula",
		value: "dracula",
	},
	{
		name: "Business",
		value: "business",
	},
	{
		name: "Synthwave",
		value: "synthwave",
	},
	{
		name: "Emerald",
		value: "emerald",
	},
	{
		name: "Retro",
		value: "retro",
	},
	{
		name: "Abyss",
		value: "abyss",
	},
	{
		name: "Coffee",
		value: "coffee",
	},
];

const ThemeController = () => {
	const { setTheme } = useTheme();
	return (
		<div className="dropdown ">
			<div tabIndex={0} role="button" className="btn m-1">
				<FaPaintBrush />
				<svg
					width="12px"
					height="12px"
					className="inline-block h-2 w-2 fill-current opacity-60"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 2048 2048"
				>
					<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
				</svg>
			</div>
			<ul
				tabIndex={0}
				className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"
			>
				{supportedThemes.map((availableTheme: ThemeMetadata) => (
					<li key={availableTheme.value}>
						<input
							type="radio"
							name="theme-dropdown"
							className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
							aria-label={availableTheme.name}
							value={availableTheme.value}
							onClick={() => setTheme(availableTheme.value)}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ThemeController;
