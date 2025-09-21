import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { CardContainer, Content } from "./ArticlesPanel.style";
import type { ArticleType } from "../Article/Article";

const ArticlesPanel = () => {
	const { t, i18n } = useTranslation();
	const currentLanguage = i18n.language;

	const [articles, setArticles] = useState<Array<ArticleType|null>>([]);

	useEffect(() => {
		const loadArticles = async () => {
			const files = [`/articles/${currentLanguage}/article1.md`];

			const fetchedArticles = await Promise.all(
				files.map(async (filePath) => {
					const url = `/api/fetchArticle?slug=${filePath}&language=${currentLanguage}`
					const res = await fetch(url);
					const data = await res.json();
					return data;
				}),
			);

			setArticles(fetchedArticles);
		};

		loadArticles();
	}, [currentLanguage]);

	return (
		<CardContainer className="card bg-base-100 card-md shadow-sm ">
			<div className="card-body">
				<h2 className="card-title">{t("articles.panel.title")}</h2>
				<Content>
					<ul>
						{articles.map((article) => (
							article && <li key={article.title}>
								<a href={`/articles/${article.slug}`}>{article.title}</a>
							</li>
						))}
					</ul>
				</Content>
			</div>
		</CardContainer>
	);
};

export default ArticlesPanel;
