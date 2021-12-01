import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import styled, { css } from 'styled-components'

import { Theme } from '../theme/Theme'
import {
	ContentWrapper,
	MotionWrapper,
	SectionWrapper,
} from '../backbone/Wrapper'

import { Title } from '../backbone/Text'

import { VIDEO_TITLES, mapTitlesToVideos } from '../../data/Video/Videos'

const _ = require('lodash')

const PageWrapper = styled(SectionWrapper)`
	margin-top: ${Theme.margin.XXL};
`

const VideoWrapper = styled.div`
	align-self: center;
	margin-bottom: ${Theme.margin.M};
	box-shadow: ${Theme.shadow.L};
`

const MusiciansWrapper = styled.div`
	text-align: end;
	font-weight: 300;
	font-size: ${({ windowWidth }) => windowWidth < 768 && '13px'};
	margin-right: ${Theme.margin.S};
	margin-top: ${Theme.margin.XS};
	margin-bottom: ${Theme.margin.S};
`

const VideoTitle = styled(Title)`
	margin-top: ${Theme.margin.M};
	margin-right: ${Theme.margin.S};

	${({ windowWidth }) =>
		windowWidth < 768
			? css`
					font-size: 22px;
					width: 230px;
			  `
			: css`
					font-size: 26px;
					width: 270px;
			  `}
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

function PiecePerformers(performers) {}

function PieceTitle(title) {}

function VideoClip(video) {}

function VideoClipMapper(videos) {}

export default function Video({ videos }) {
	// crappy, hail mary solution for a responsive player.
	// the ReactPlayer docs method doesn't work for some reason.

	const { width } = useWindowDimensions()
	let calculatedWidth = width * 0.65
	let calculatedHeight = calculatedWidth * (9 / 16)

	Object.values(VIDEO_TITLES).map((title) => {
		console.log(mapTitlesToVideos[VIDEO_TITLES[title]])
	})

	return (
		<MotionWrapper>
			<PageWrapper>
				<ContentWrapper width={width + 'px'}>
					{_.map(videos.clips, (clip) => {
						return (
							<React.Fragment key={clip.title}>
								<VideoTitle windowWidth={width}>{clip.title}</VideoTitle>
								<MusiciansWrapper windowWidth={width}>
									{_.map(clip.musicians, (musician) => {
										return <p key={musician}>{musician}</p>
									})}
								</MusiciansWrapper>
								<VideoWrapper windowWidth={width}>
									<ReactPlayer
										url={clip.url}
										controls={true}
										width={calculatedWidth + 'px'}
										height={calculatedHeight + 'px'}
									/>
								</VideoWrapper>
							</React.Fragment>
						)
					})}
				</ContentWrapper>
			</PageWrapper>
		</MotionWrapper>
	)
}
