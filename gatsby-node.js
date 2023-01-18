const path = require("path");
const PostTemplate = require.resolve("./src/template.tsx");
const { createFilePath } = require("gatsby-source-filesystem");
const { allPages } = require("./query.js");

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === "Mdx") {
		const slug = createFilePath({ node, getNode, basePath: "pages" });
		const group = slug.split("/")[1];
		createNodeField({
			node,
			name: "slug",
			value: slug,
		});
		createNodeField({
			node,
			name: "group",
			value: group,
		});
	}
};

exports.createPages = async function ({ actions, graphql }) {
	const { data } = await graphql(allPages);
	data.allMdx.edges.forEach((post) => {
		const filePath = post.node.internal.contentFilePath;
		const previous = post.previous !== null ? post.previous.fields.slug : null;
		const next = post.next !== null ? post.next.fields.slug : null;
		actions.createPage({
			path: post.node.fields.slug,
			component: `${PostTemplate}?__contentFilePath=${filePath}`,
			context: {
				slug: post.node.slug,
				title: post.node.frontmatter.title,
				tableOfContents: post.node.tableOfContents,
				previous,
				next,
			},
		});
	});
};

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				"@components": path.resolve(__dirname, "src/components"),
				"@lib": path.resolve(__dirname, "src/lib"),
				"@styles": path.resolve(__dirname, "src/styles"),
				"@pages": path.resolve(__dirname, "src/pages"),
				"@posts": path.resolve(__dirname, "posts"),
			},
		},
	});
};
