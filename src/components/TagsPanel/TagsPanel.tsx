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
			name: t("categories.title.ia"),
			type: "badge-info",
		},
		{
			name: t("categories.title.web"),
			type: "badge-neutral",
		},
		{
			name: t("categories.title.iot"),
			type: "badge-info",
		},
		{
			name: t("categories.title.experiments"),
			type: "badge-neutral",
		},
		{
			name: t("categories.title.research"),
			type: "badge-info",
		},
	];

	return (
		<Card className="card w-full bg-base-100 card-md shadow-sm ">
			<div className="card-body">
				<h2 className="card-title">{t("tags.panel.title")}</h2>
				<Container>
					{supportedTags.map((tag: Tag) => (
						<Tag className={`badge ${tag.type}`}>{tag.name}</Tag>
					))}
				</Container>
			</div>
		</Card>
	);
};

export default TagsPanel;
