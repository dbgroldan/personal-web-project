export type ArticleType = {
  title: string;
  slug: string;
  description: string;
  content: string;  // si el artículo tiene un contenido HTML o Markdown
  tags: string[];
  author: string;
}
