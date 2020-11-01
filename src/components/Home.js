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

import HomePhotoDesktop from '../assets/photos/HomeDesktop.png'
import HomePhotoMobile2 from '../assets/photos/HomeMobile.png'
import HomePhotoMobile from '../assets/photos/HomeMobile2.jpeg'
import HomeLogoMobile from '../assets/logo/MainText.png'

import patronImage from '../assets/Patron.png'

const HomeImageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const DesktopPhoto = styled(Image)`
	width: 100vw;
	margin-bottom: ${Theme.margin.L};
	@media (max-width: 768px) {
		display: none;
	}
`

const MobileLogo = styled(Image)`
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

const MobilePhoto = styled(Image)`
	width: 100vw;
	margin-top: ${Theme.margin.M};
	margin-bottom: ${Theme.margin.S};

	@media (min-width: 769px) {
		display: none;
	}
`

export default function Home({ mission, patron }) {
	return (
		<MotionWrapper>
			<HomeImageWrapper>
				<DesktopPhoto main shadow src={HomePhotoDesktop} />
				<MobileLogo main src={HomeLogoMobile} />
				<MobilePhoto main shadow src={HomePhotoMobile} />
			</HomeImageWrapper>

			<ContentWrapper>
				<SectionWrapper>
					<Title>Our Mission</Title>
					<Sheet>
						<Text>{mission}</Text>
					</Sheet>
				</SectionWrapper>

				<MobilePhoto main shadow src={HomePhotoMobile2} />

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
