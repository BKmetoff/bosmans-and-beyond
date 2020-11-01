import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

import { SectionWrapper, MotionWrapper } from './backbone/Wrapper'
import { Theme } from './theme/Theme'

const _ = require('lodash')

const VideoWrapper = styled.div`
	align-self: center;
	margin-bottom: ${Theme.margin.M};
`

export default function Video({ videos }) {
	return (
		<MotionWrapper>
			<SectionWrapper>
				{_.map(videos.clips, (clip) => {
					return (
						<VideoWrapper key={clip.title}>
							<ReactPlayer url={clip.url} controls={true} />
						</VideoWrapper>
					)
				})}
			</SectionWrapper>
		</MotionWrapper>
	)
}
