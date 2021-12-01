import React, { useState } from 'react'
import styled from 'styled-components'

import SocialMediaLink from '../backbone/SocialMediaLink'
import { default as Toggle } from '../backbone/Button'
import { Theme } from '../theme/Theme'
import { SOCIAL_MEDIA } from '../../data/Social/Social'

const DropDownContainer = styled.ul`
	display: flex;
	flex-direction: column;
	width: 197px;
	top: 70px;
	right: 0px;
	position: absolute;
	background: ${Theme.colors.dark};
`

function SocialMediaDropDownMenu(handleEnter, handleLeave) {
	const isDropDown = true
	return (
		<DropDownContainer onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
			{Object.values(SOCIAL_MEDIA).map((media) => {
				return SocialMediaLink(media, isDropDown)
			})}
		</DropDownContainer>
	)
}

export default function SocialMediaToggle() {
	const [openSocialDropDown, setOpenSocialDropDown] = useState()

	const handleEnter = () => setOpenSocialDropDown(true)
	const handleLeave = () => setOpenSocialDropDown(false)

	return (
		<>
			{openSocialDropDown && SocialMediaDropDownMenu(handleEnter, handleLeave)}

			<Toggle
				kind='headerLink'
				onMouseEnter={handleEnter}
				onMouseLeave={handleLeave}
			>
				Social
			</Toggle>
		</>
	)
}
