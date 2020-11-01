import React from 'react'
import styled from 'styled-components'

import { Theme } from './theme/Theme'
import Image from './backbone/Image'
import { MotionWrapper, ContentWrapper } from './backbone/Wrapper'
import Sheet from './backbone/Sheet'
import { Text, Title } from './backbone/Text'

import HomePhotoDesktop from '../assets/photos/rsz_home.png'
import HomeLogoMobile from '../assets/logo/MainText.png'

import patronImage from '../assets/Patron.png'

const HomeImageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: ${Theme.margin.L};
`

const MainPhoto = styled(Image)`
	width: 100vw;
	@media (max-width: 768px) {
		display: none;
	}
`
const MainLogo = styled(Image)`
	width: 70vw;
	border-bottom: 1px solid #fcd0884f;
	padding-left: 10px;
	padding-right: 10px;
	padding-bottom: 15px;
	@media (min-width: 769px) {
		display: none;
	}
`

export default function Home({ mission, patron }) {
	return (
		<MotionWrapper>
			<HomeImageWrapper>
				<MainPhoto main shadow src={HomePhotoDesktop} />
				<MainLogo main src={HomeLogoMobile} />
			</HomeImageWrapper>

			<ContentWrapper>
				<Title>Our Mission</Title>
				<Sheet>
					<Text>{mission}</Text>
				</Sheet>

				<Title>Our Patron</Title>
				<Sheet>
					<Image round shadow src={patronImage} width='300px' height='300px' />
					<Text>{patron}</Text>
				</Sheet>
			</ContentWrapper>
		</MotionWrapper>
	)
}
