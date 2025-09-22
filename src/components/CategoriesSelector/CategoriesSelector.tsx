import { useTranslation } from "react-i18next";
import {
	CategoryBox,
	CategoryImage,
	Container,
	CategoryDescription,
} from "./CategoriesSelector.style";

type Category = {
	name: string;
	icon: string;
};

const CategoriesSelector = () => {
	const { t } = useTranslation();

	const supportedCategories: Array<Category> = [
		{
			name: t("categoriesPanel.titles.ia"),
			icon: "images/categories/ia.png",
		},
		{
			name: t("categoriesPanel.titles.web"),
			icon: "images/categories/web.png",
		},
		{
			name: t("categoriesPanel.titles.iot"),
			icon: "images/categories/iot.png",
		},
		{
			name: t("categoriesPanel.titles.experiments"),
			icon: "images/categories/experiments.png",
		},
		{
			name: t("categoriesPanel.titles.research"),
			icon: "images/categories/research.png",
		},
	];

	return (
		<div className="card w-full bg-base-100 card-md shadow-sm ">
			<div className="card-body">
				<h2 className="card-title">{t("categoriesPanel.header")}</h2>
				<Container>
					{supportedCategories.map((category: Category) => (
						<CategoryBox key={category.name}>
							<CategoryImage src={category.icon} />
							<CategoryDescription>{category.name}</CategoryDescription>
						</CategoryBox>
					))}
				</Container>
			</div>
		</div>
	);
};

export default CategoriesSelector;
