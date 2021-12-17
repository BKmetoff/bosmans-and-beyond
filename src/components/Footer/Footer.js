import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../theme/Theme'
import { Text } from '../backbone/Text'
import SocialMediaLink from '../backbone/Link/SocialMediaLink'
import { SOCIAL_MEDIA } from '../../data/Social/Social'

const BaseFooter = styled.div`
	width: 1024px;
	display: flex;
	flex-direction: column;
	margin-left: auto;
	margin-right: auto;
	align-items: center;
	background-color: inherit;
	color: ${COLORS.dark};

	p {
		width: fit-content;
		margin-top: 8px;
		margin-left: auto;
		margin-right: auto;
	}
`

const FooterIconsWrapper = styled.div`
	display: flex;
	background: inherit;
	justify-content: center;
	a {
		display: flex;
		padding: 0;
		margin-top: 0;
	}

	@media (max-width: 768px) {
		padding-bottom: 0;
	}
`

export default function Footer() {
	const isDropDown = false
	return (
		<BaseFooter>
			<Text footer>&#169; Bosmans & Beyond, 2021</Text>
			<FooterIconsWrapper>
				{Object.values(SOCIAL_MEDIA).map((media) => {
					return SocialMediaLink(media, isDropDown)
				})}
			</FooterIconsWrapper>
		</BaseFooter>
	)
}
