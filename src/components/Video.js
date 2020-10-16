import React from 'react'
import ReactPlayer from 'react-player'

import { SectionWrapper } from './backbone/Wrapper'
import Sheet from './backbone/Sheet'

const _ = require('lodash')

export default function Video({ videos }) {
	return (
		<SectionWrapper>
			{_.map(videos.clips, (clip) => {
					return (
						<Sheet key={clip.title}>
							<ReactPlayer controls url={clip.url} />
						</Sheet>
					)
				})}
		</SectionWrapper>
	)
}
