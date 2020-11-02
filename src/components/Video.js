import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

import { SectionWrapper, MotionWrapper } from './backbone/Wrapper'
import { Theme } from './theme/Theme'

const _ = require('lodash')

const VideoWrapper = styled.div`
	align-self: center;
	background: ${Theme.colors.accentBorder};
	padding: ${({ windowWidth }) =>
		windowWidth > 768 ? Theme.padding.S : Theme.padding.XS};
	border-radius: ${Theme.borderRadiusM};
	margin-bottom: ${Theme.margin.M};
	box-shadow: ${Theme.shadow.S};
`

// the method below is from
// https://codesandbox.io/s/34kr2rw285?file=/src/index.js
const getWindowDimensions = () => {
	const { innerWidth: width } = window
	return { width }
}

const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	)

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions())
		}

		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowDimensions
}

export default function Video({ videos }) {
	// crappy, hail mary solution for a responsive player.
	// the ReactPlayer docs method doesn't work for some reason.

	const { width } = useWindowDimensions()
	let calculatedWidth = width * 0.65
	let calculatedHeight = calculatedWidth * (9 / 16)

	return (
		<MotionWrapper>
			<SectionWrapper>
				{_.map(videos.clips, (clip) => {
					return (
						<VideoWrapper key={clip.title} windowWidth={width}>
							<ReactPlayer
								url={clip.url}
								controls={true}
								width={calculatedWidth + 'px'}
								height={calculatedHeight + 'px'}
							/>
						</VideoWrapper>
					)
				})}
			</SectionWrapper>
		</MotionWrapper>
	)
}
