{
	allContentfulPage(filter: { node_locale: { regex: "/da-DK/" } }) {
		// (filter: { node_locale: { eq: 'da-DK'}})
		edges {
			node {
				menuName
				link {
					relativeUrl
				}
			}
		}
	}
	contentfulWrapCategory(slug: { eq: "vikler" }) {
		wrap___library {
			name
		}
	}
}
