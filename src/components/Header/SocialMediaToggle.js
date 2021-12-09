import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import SocialMediaLink from '../backbone/Link/SocialMediaLink'
import { HeaderLink } from '../backbone/Button/HeaderLink'
import { SOCIAL_MEDIA } from '../../data/Social/Social'

import { COLORS, SHADOW } from '../theme/Theme'

const DropDownContainer = styled.ul`
	transition: ease, 0.5s;
	display: flex;
	flex-direction: column;
	width: 197px;
	top: 60px;
	right: 0px;
	position: absolute;
	background: ${COLORS.dark};
	border-bottom-left-radius: 5px;
	box-shadow: ${SHADOW.M};
	${({ headerIsTransparent }) =>
		headerIsTransparent &&
		css`
			box-shadow: none;
			background-color: inherit;
		`};
`

function SocialMediaDropDownMenu(
	handleEnter,
	handleLeave,
	headerIsTransparent
) {
	const isDropDown = true
	return (
		<DropDownContainer
			onMouseEnter={handleEnter}
			onMouseLeave={handleLeave}
			headerIsTransparent={headerIsTransparent}
		>
			{Object.values(SOCIAL_MEDIA).map((media) => {
				return SocialMediaLink(media, isDropDown)
			})}
		</DropDownContainer>
	)
}

export default function SocialMediaToggle(headerIsTransparent) {
	const [openSocialDropDown, setOpenSocialDropDown] = useState()

	const handleEnter = () => setOpenSocialDropDown(true)
	const handleLeave = () => setOpenSocialDropDown(false)

	return (
		<>
			{openSocialDropDown &&
				SocialMediaDropDownMenu(handleEnter, handleLeave, headerIsTransparent)}
			<HeaderLink onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
				Social
			</HeaderLink>
		</>
	)
}
