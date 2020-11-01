import React from 'react'
import styled from 'styled-components'

import { Theme } from './theme/Theme'
import Image from './backbone/Image'
import {
	MotionWrapper,
	ContentWrapper,
	SectionWrapper,
} from './backbone/Wrapper'
import Sheet from './backbone/Sheet'
import { Text, Title } from './backbone/Text'

import HomePhotoDesktop from '../assets/photos/rsz_home.png'
import HomeLogoMobile from '../assets/logo/MainText.png'

import patronImage from '../assets/Patron.png'

const HomeImageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const MainPhoto = styled(Image)`
	width: 100vw;
	margin-bottom: ${Theme.margin.L};
	@media (max-width: 768px) {
		display: none;
	}
`

const MainLogo = styled(Image)`
	width: 70vw;
	margin-top: ${Theme.margin.XL};
	margin-bottom: ${Theme.margin.S};
	border-bottom: 1px solid ${Theme.colors.accentBorder};
	padding-left: ${Theme.padding.XS};
	padding-right: ${Theme.padding.SX};
	padding-bottom: ${Theme.padding.S};
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
				<SectionWrapper>
					<Title>Our Mission</Title>
					<Sheet>
						<Text>{mission}</Text>
					</Sheet>
				</SectionWrapper>

				<SectionWrapper>
					<Title>Our Patron</Title>
					<Sheet>
						<Image
							round
							shadow
							src={patronImage}
							width='300px'
							height='300px'
						/>
						<Text>{patron}</Text>
					</Sheet>
				</SectionWrapper>
			</ContentWrapper>
		</MotionWrapper>
	)
}
