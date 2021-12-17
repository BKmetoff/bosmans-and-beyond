import React from 'react'
import ReactPlayer from 'react-player'
import styled, { css } from 'styled-components'

import useWindowDimensions from '../backbone/_hooks/useWindowDimensions'

import { MARGIN, SHADOW } from '../theme/Theme'

import { VIDEO_TITLES, mapTitlesToVideos } from '../../data/Video/Videos'
import { Title, Text } from '../backbone/Text'
import {
	ContentWrapper,
	MotionWrapper,
	SectionWrapper,
} from '../backbone/Wrapper'

const PageWrapper = styled(SectionWrapper)`
	margin-top: ${MARGIN.XXL};
`

const VideoWrapper = styled.div`
	align-self: center;
	margin-bottom: ${MARGIN.M};
	box-shadow: ${SHADOW.L};
`

const MusiciansWrapper = styled.div`
	font-weight: 300;
	margin-right: ${MARGIN.S};
	margin-top: ${MARGIN.S};
	margin-bottom: ${MARGIN.M};

	p {
		font-size: 16px;
		text-align: end;
		padding: 0;
	}
`

const VideoTitle = styled(Title)`
	margin-top: ${MARGIN.M};
	margin-right: ${MARGIN.S};

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

function PieceTitle(title, author, width) {
	return (
		<>
			<VideoTitle windowWidth={width}>{title}</VideoTitle>
			<Title windowWidth={width} secondary>
				{author}
			</Title>
		</>
	)
}

function PiecePerformers(performers, width) {
	return (
		<MusiciansWrapper windowWidth={width}>
			{performers.map((performer, index) => {
				const { name, instrument } = performer
				return (
					<Text key={`${instrument}-${index}`}>{`${name}, ${instrument}`}</Text>
				)
			})}
		</MusiciansWrapper>
	)
}

function VideoClipPlayer(url, width) {
	// crappy, hail mary solution for a responsive player.
	// the ReactPlayer docs method doesn't work for some reason.

	let calculatedWidth = width * 0.65
	let calculatedHeight = calculatedWidth * (9 / 16)

	return (
		<VideoWrapper windowWidth={width}>
			<ReactPlayer
				url={url}
				controls={true}
				width={calculatedWidth + 'px'}
				height={calculatedHeight + 'px'}
			/>
		</VideoWrapper>
	)
}

function VideoClipContainer(video, width) {
	const { author, title, url, musicians } = video
	return (
		<React.Fragment key={title}>
			{PieceTitle(title, author, width)}
			{PiecePerformers(musicians, width)}
			{VideoClipPlayer(url, width)}
		</React.Fragment>
	)
}

function VideoClipMapper(videos, mapTitlesToVideos, componentWidth) {
	return Object.values(videos).map((video) => {
		return VideoClipContainer(mapTitlesToVideos[video], componentWidth)
	})
}

export default function Video() {
	const { width } = useWindowDimensions()

	return (
		<MotionWrapper>
			<PageWrapper>
				<ContentWrapper videoWidth={width + 'px'}>
					{VideoClipMapper(VIDEO_TITLES, mapTitlesToVideos, width)}
				</ContentWrapper>
			</PageWrapper>
		</MotionWrapper>
	)
}
