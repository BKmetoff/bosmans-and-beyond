import React from 'react'
import styled from 'styled-components'

import { MARGIN, COLORS, PADDING } from '../theme/Theme'

import Image from '../backbone/Image'
import Sheet from '../backbone/Sheet'
import { Text, Title } from '../backbone/Text'
import {
	MotionWrapper,
	ContentWrapper,
	SectionWrapper,
} from '../backbone/Wrapper'

import HomePhotoDesktop from '../../assets/photos/HomeDesktop.png'
import HomePhotoMobile2 from '../../assets/photos/HomeMobile.png'
import HomePhotoMobile from '../../assets/photos/HomeMobile2.jpeg'
import HomeLogo from '../../assets/logo/MainText.png'
import patronImage from '../../assets/Patron.png'

import HOMEPAGE_COPY from '../../data/Home/Home'

const HomeImageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const DesktopPhoto = styled(Image)`
	width: 100vw;
	margin-bottom: ${MARGIN.L};
	@media (max-width: 768px) {
		display: none;
	}
`

const DesktopLogo = styled(Image)`
	position: absolute;
	max-width: 35%;
	top: 60px;
	left: 0px;
	z-index: 100;
	margin-left: ${MARGIN.L};

	@media (max-width: 769px) {
		display: none;
	}
`
const MobileLogo = styled(Image)`
	width: 70vw;
	margin-top: ${MARGIN.XL};
	margin-bottom: ${MARGIN.S};
	border-bottom: 1px solid ${COLORS.accentBorder};
	padding-left: ${PADDING.XS};
	padding-right: ${PADDING.SX};
	padding-bottom: ${PADDING.S};

	@media (min-width: 769px) {
		display: none;
	}
`

const MobilePhoto = styled(Image)`
	width: 100vw;
	margin-top: ${MARGIN.M};
	margin-bottom: ${MARGIN.S};

	@media (min-width: 769px) {
		display: none;
	}
`

export default function Home() {
	return (
		<MotionWrapper>
			<HomeImageWrapper>
				<DesktopPhoto main shadow src={HomePhotoDesktop} />
				<DesktopLogo main src={HomeLogo} />
				<MobileLogo main src={HomeLogo} />
				<MobilePhoto main shadow src={HomePhotoMobile} />
			</HomeImageWrapper>

			<ContentWrapper>
				<SectionWrapper>
					<Title>Our Mission</Title>
					<Sheet>
						<Text>{HOMEPAGE_COPY['MISSION']}</Text>
					</Sheet>
				</SectionWrapper>

				<MobilePhoto main src={HomePhotoMobile2} />

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
						<Text>{HOMEPAGE_COPY['PATRON']}</Text>
					</Sheet>
				</SectionWrapper>
			</ContentWrapper>
		</MotionWrapper>
	)
}
