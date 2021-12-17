import React from 'react'
import styled from 'styled-components'
import Hamburger from 'hamburger-react'

import { COLORS, MARGIN } from '../theme/Theme'

import ResponsiveMenu from './ResponsiveMenu'

const ResponsiveMenuWrapper = styled.div`
	display: none;
	@media (max-width: 768px) {
		display: block;
		margin-right: auto;
		margin-left: ${MARGIN.S};
	}
`

const setHamburgerColor = (headerIsOpen, headerIsTransparent) => {
	if (headerIsOpen) {
		return `${COLORS.light}`
	} else if (!headerIsTransparent) {
		return `${COLORS.light}`
	}
}

export default function ResponsiveMenuDropDownToggle(
	handleClick,
	headerLinks,
	isOpen,
	headerIsTransparent
) {
	return (
		<ResponsiveMenuWrapper>
			<Hamburger
				toggled={isOpen}
				toggle={handleClick}
				label='Toggle menu'
				color={setHamburgerColor(isOpen, headerIsTransparent)}
				size={35}
				rounded
			/>

			<ResponsiveMenu
				isOpen={isOpen}
				onClose={handleClick}
				headerLinks={headerLinks}
			/>
		</ResponsiveMenuWrapper>
	)
}
