{
	allContentfulPage(filter: { node_locale: { eq: "da-DK" } }) {
		edges {
			node {
				title
				link {
					relativeUrl
				}
				extraData {
					test
				}
			}
		}
	}
	allContentfulBlogPost(filter: { node_locale: { eq: "da-DK" } }) {
		edges {
			node {
				title
				slug
				createdAt(formatString: " [d.] DD. MMMM YYYY")
				content {
					childMarkdownRemark {
						html
					}
				}
				author {
					name
					email
				}
			}
		}
	}
	contentfulBlogPost(slug: { eq: "ny-blog-post" }) {
		title
		content {
			content
		}
	}
}
