import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { remark } from "remark";
import remarkHtml from "remark-html";

import { CardContainer, Content } from "./ArticlesPanel.style";
import type { ArticleType } from "../Article/Article";
import { extractFrontMatter } from "../../utils/articles";
import ArticleCard from "./ArticleCard/ArticleCard";

const ArticlesPanel = () => {
	const { t, i18n } = useTranslation();
	const [loading, setLoading] = useState(true);

	const [articles, setArticles] = useState<ArticleType[]>([]);

	useEffect(() => {
		const loadArticles = async () => {
			const filesList: Array<ArticleType> = [];
			const files = [`article1.md`];

			for (let file of files) {
				const response = await fetch(`/articles/${i18n.language}/${file}`);
				const markdownText = await response.text();

				const htmlContent = await remark()
					.use(remarkHtml)
					.process(markdownText);

				const frontMatter = extractFrontMatter(markdownText);
				filesList.push({
					id: file,
					title: frontMatter.title,
					image: frontMatter.image,
					content: htmlContent.toString(),
					description: frontMatter.description,
					tags: frontMatter.tags,
				});
			}

			setArticles(filesList);
			setLoading(false);
		};

		setLoading(true);
		loadArticles();
	}, [i18n.language]);

	return (
		<>
			{loading ? (
				<div className="skeleton h-32 w-32" />
			) : (
				<CardContainer className="card bg-base-100 card-md shadow-sm ">
					<div className="card-body">
						<h2 className="card-title">{t("articles.list.title")}</h2>
						<Content>
							<ul>
								{articles.map((article) => (
									<li key={article.title}>
										<ArticleCard article={article} />
									</li>
								))}
							</ul>
						</Content>
					</div>
				</CardContainer>
			)}
		</>
	);
};

export default ArticlesPanel;
