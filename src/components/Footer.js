import React from 'react'
import styled from 'styled-components'

import { Theme } from './theme/Theme'
import { Text } from './backbone/Text'
import Image from './backbone/Image'

import FBLogo from '../assets/icons/facebook.svg'
import InstagramLogo from '../assets/icons/instagram.svg'
import YouTubeLogo from '../assets/icons/youtube.svg'
import { COPY } from './resources/Resources'

const BaseFooter = styled.div`
	bottom: 0px;
	position: fixed;
	width: 100%;
	height: 32px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color: ${Theme.colors.dark};
	color: ${Theme.colors.light};
	opacity: ${Theme.opacity};
	box-shadow: ${Theme.shadow.inverted};
`

const FooterIconsWrapper = styled.div`
	margin-right: ${Theme.margin.S};
	padding-bottom: ${Theme.padding.XXS};
	display: flex;
	justify-content: center;
	a {
		display: flex;
	}

	@media (max-width: 768px) {
		padding-bottom: 0;
	}
`

export default function Footer() {
	return (
		<BaseFooter>
			<Text footer>&#169; Bosmans & Beyond, 2021</Text>
			<FooterIconsWrapper>
				<a
					href={COPY.socialMediaURLs.YouTube}
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image src={YouTubeLogo} footerIcon />
				</a>
				<a
					href={COPY.socialMediaURLs.FaceBook}
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image src={FBLogo} footerIcon />
				</a>
				<a
					href={COPY.socialMediaURLs.Instagram}
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image src={InstagramLogo} footerIcon />
				</a>
			</FooterIconsWrapper>
		</BaseFooter>
	)
}
