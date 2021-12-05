import React from 'react'
import styled from 'styled-components'
import { Squash as Hamburger } from 'hamburger-react'

import { Theme } from '../theme/Theme'

import ResponsiveMenu from './ResponsiveMenu'

const ResponsiveMenuWrapper = styled.div`
	display: none;
	@media (max-width: 768px) {
		display: block;
		margin-left: auto;
		margin-right: ${Theme.margin.M};
	}
`

const setHamburgerColor = (headerIsOpen, headerIsTransparent) => {
	if (headerIsOpen) {
		return `${Theme.colors.light}`
	} else if (!headerIsTransparent) {
		return `${Theme.colors.light}`
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
