import { readFile } from 'fs';
import matter from 'gray-matter';

export default async function handler(req, res) {
  const { filePath, language } = req.query;

  try {

    const fileContent = await new Promise((resolve, reject) => {
      readFile(filePath, 'utf-8', (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });

    const { data, content } = matter(fileContent);

    res.status(200).json({
      title: data.title,
      description: data.description,
      content,
      tags: data.tags,
      author: data.author,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to load article' });
  }
}
