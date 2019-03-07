import postcss from 'postcss'
import postcssSimpleVars from 'postcss-simple-vars'
import postcssScssSyntax from 'postcss-scss'

export default function(/* domain */) {
	// NOTE: `domain` is useful for debugging if it is SSR or DOM
	return {
		style: async({ content, attributes, filename }) => {
			if (attributes.type !== 'text/scss') {
				return { code: content/* , map: '' */ }
			}
			try {
				const result = await postcss([ postcssSimpleVars ])
					// NOTE I'm hard coding a variable here...the same problem exists
					// if I import external stylesheets from elsewhere w/ vars...
					.process('$red:#ef5750;\n' + content, {
						from: 'src',
						syntax: postcssScssSyntax,
						// TODO: unclear if maps are needed. ASK in the forum
						// map: true,
					})
				if (result.css && typeof result.css === 'string') {
					return {
						code: result.css.toString(),
						// map: result.map.toString(),
					}
				} else {
					return { code: ''/* , map: '' */ }
				}

			} catch (error) {
				console.log('Error: something went wrong')
				console.log(error)
				return { code: ''/* , map: '' */ }
			}
		},
	}
}
