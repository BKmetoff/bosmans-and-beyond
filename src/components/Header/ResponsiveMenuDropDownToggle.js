import React from 'react'

import styled from 'styled-components'

import { Theme } from '../theme/Theme'
import Image from '../backbone/Image'
import Chevron from '../../assets/icons/Chevron.png'

import ResponsiveMenu from './ResponsiveMenu'

const ResponsiveMenuWrapper = styled.div`
	display: none;
	@media (max-width: 768px) {
		display: block;
		margin-left: auto;
		margin-right: ${Theme.margin.M};
	}
`

const ChevronContainer = styled.div`
	transform: rotate(0deg);
	transition: all 0.3s ease-out;
	overflow: hidden;
	transform: ${({ menuOpen }) => (menuOpen ? `rotate(180deg)` : '')};
	display: flex;
`

export default function ResponsiveMenuDropDownToggle(
	handleClick,
	headerLinks,
	isOpen
) {
	return (
		<ResponsiveMenuWrapper>
			<ChevronContainer menuOpen={isOpen} onClick={handleClick}>
				<Image height='20px' width='20px' src={Chevron} />
			</ChevronContainer>

			<ResponsiveMenu
				isOpen={isOpen}
				onClose={handleClick}
				headerLinks={headerLinks}
			/>
		</ResponsiveMenuWrapper>
	)
}
