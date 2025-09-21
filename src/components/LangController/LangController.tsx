import "/node_modules/flag-icons/css/flag-icons.min.css";
import { TiWorld } from "react-icons/ti";

import { useTranslation } from "react-i18next";

type LanguageMetadata = {
	name: string;
	value: string;
	icon: any;
};

const supportedLanguages: Array<LanguageMetadata> = [
	{
		name: "English",
		value: "en",
		icon: "fi fi-gb",
	},
	{
		name: "Spanish",
		value: "es",
		icon: "fi fi-es",
	},
	{
		name: "Italiano",
		value: "it",
		icon: "fi fi-it",
	},
];

const LangController = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div className="dropdown">
			<div tabIndex={0} role="button" className="btn m-1">
				<TiWorld />
			</div>
			<ul
				tabIndex={0}
				className="dropdown-content menu bg-base-100 rounded-box"
			>
				{supportedLanguages.map((language: LanguageMetadata) => (
					<li key={language.value}>
						<a
							className="tooltip tooltip-left"
							data-tip={language.name}
							onClick={() => changeLanguage(language.value)}
						>
							<span className={language.icon} />
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default LangController;
