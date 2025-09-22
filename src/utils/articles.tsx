const extractFrontMatter = (markdown: string) => {
	const frontMatterRegex = /^---\n([\s\S]+?)\n---/;
	const match = markdown.match(frontMatterRegex);
	if (match) {
		const metadata = match[1];
		const data: { [key: string]: string | string[] } = {};
		metadata.split("\n").forEach((line) => {
			const [key, value] = line.split(":").map((str) => str.trim());
			if (key && value) {
				// Si el campo es "tags", lo convertimos a un array de strings
				if (key === "tags") {
					data[key] = value.split(",").map((tag) => tag.trim());
				} else {
					data[key] = value;
				}
			}
		});
		return data;
	}
	return {};
};

export { extractFrontMatter };
