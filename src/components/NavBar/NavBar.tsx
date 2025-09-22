import { useTranslation } from "react-i18next";

import { Title, PageControllers } from "./NavBar.style";
import LangController from "../LangController/LangController";
import ThemeController from "../ThemeController/ThemeController";
const NavigationBar = () => {
	const { t } = useTranslation();

	let articlesTags = [];

	return (
		<div className="navbar bg-base-100 shadow-sm">
			<div className="navbar-start">
				<a className="btn btn-ghost text-xl">
					<div className="avatar">
						<div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
							<img src="/images/avatar.png" />
						</div>
					</div>
					<Title>{t("navbar.title")}</Title>
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a>{t("navbar.home")}</a>
					</li>
					{articlesTags.length > 0 && (
						<li>
							<details>
								<summary>{t("navbar.articles")}</summary>
								<ul className="p-2">
									<li>
										<a>Submenu 1</a>
									</li>
									<li>
										<a>Submenu 2</a>
									</li>
								</ul>
							</details>
						</li>
					)}
					{articlesTags.length == 0 && (
						<li>
							<a>{t(t("navbar.articles"))}</a>
						</li>
					)}
					<li>
						<a>{t(t("navbar.me"))}</a>
					</li>
					<li>
						<a>{t("navbar.contact")}</a>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<PageControllers>
					<ThemeController />
					<LangController />
				</PageControllers>
			</div>
		</div>
	);
};

export default NavigationBar;
