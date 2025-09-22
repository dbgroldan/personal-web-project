import { useTranslation } from "react-i18next";

import { Tag, ImageContainer } from "./ArticleCard.style";
import type { ArticleType } from "../../Article/Article";

const ArticleCard = ({ article }: ArticleType) => {
	const { t } = useTranslation();
	return (
		<div className="card lg:card-side bg-base-100 shadow-sm">
			<ImageContainer>
				<img src={article.image} alt={t("articles.list.card.imageNotFound")} />
			</ImageContainer>
			<div className="card-body">
				<h2 className="card-title">{article.title}</h2>
				<p>{article.description}</p>
				<div className="card-actions justify-end">
					{article.tags && article.tags.length > 0 ? (
						article.tags.map((tagName) => (
							<Tag key={tagName} className="badge badge-soft badge-info">
								{tagName}
							</Tag>
						))
					) : (
						<span>No tags available</span>
					)}
					<button className="btn btn-primary">
						{t("articles.list.card.read")}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ArticleCard;
