import React from 'react'
import styled from 'styled-components'

import { Theme } from '../theme/Theme'
import { Text } from '../backbone/Text'
import SocialMediaLink from '../backbone/SocialMediaLink'
import { SOCIAL_MEDIA } from '../../data/Social/Social'

const BaseFooter = styled.div`
	bottom: 0px;
	position: fixed;
	width: 100%;
	height: 35px;
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
	padding-top: ${Theme.padding.XXS};
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
