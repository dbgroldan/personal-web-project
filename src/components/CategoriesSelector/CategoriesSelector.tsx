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
			name: t("categories.title.ia"),
			icon: "images/categories/ia.png",
		},
		{
			name: t("categories.title.web"),
			icon: "images/categories/web.png",
		},
		{
			name: t("categories.title.iot"),
			icon: "images/categories/iot.png",
		},
		{
			name: t("categories.title.experiments"),
			icon: "images/categories/experiments.png",
		},
		{
			name: t("categories.title.research"),
			icon: "images/categories/research.png",
		},
	];

	return (
		<div className="card w-full bg-base-100 card-md shadow-sm ">
			<div className="card-body">
				<h2 className="card-title">{t("categories.selector.title")}</h2>
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
