import React from 'react'
import { Link } from 'react-router-dom'

import { Text } from '../Text'

export default function LinkToPersonalPage(url, name) {
	return (
		<Text externalLink>
			<Link to={{ pathname: `${url}` }} target='_blank'>
				{name}'s website
			</Link>
		</Text>
	)
}
