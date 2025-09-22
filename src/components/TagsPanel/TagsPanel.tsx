import { useTranslation } from "react-i18next";

import { Container, Card, Tag } from "./TagsPanel.style";

type Tag = {
	name: string;
	type: string;
};

const TagsPanel = () => {
	const { t } = useTranslation();

	const supportedTags: Array<Tag> = [
		{
			name: t("categoriesPanel.titles.ia"),
			type: "badge-info",
		},
		{
			name: t("categoriesPanel.titles.web"),
			type: "badge-neutral",
		},
		{
			name: t("categoriesPanel.titles.iot"),
			type: "badge-info",
		},
		{
			name: t("categoriesPanel.titles.experiments"),
			type: "badge-neutral",
		},
		{
			name: t("categoriesPanel.titles.research"),
			type: "badge-info",
		},
	];

	return (
		<Card className="card w-full bg-base-100 card-md shadow-sm ">
			<div className="card-body">
				<h2 className="card-title">{t("tagsPanel.title")}</h2>
				<Container>
					{supportedTags.map((tag: Tag) => (
						<Tag key={tag.name} className={`badge ${tag.type}`}>
							{tag.name}
						</Tag>
					))}
				</Container>
			</div>
		</Card>
	);
};

export default TagsPanel;
