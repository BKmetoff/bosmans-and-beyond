import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styled, { css } from 'styled-components'

import { COLORS, MARGIN, TRANSITION } from '../theme/Theme'

import ResponsiveMenuDropDownToggle from './ResponsiveMenuDropDownToggle'
import { headerLinksTitles } from '../../data/Header/HeaderLinksTitles'
import { default as HeaderLinks } from './NavLinks'

import Image from '../backbone/Image'
import HeaderRound from '../../assets/logo/HeaderRound.png'
import HeaderTitle from '../../assets/logo/HeaderTitle.png'

const BaseHeader = styled.div`
	transition: ${TRANSITION};
	top: 0px;
	position: fixed;
	z-index: 1100;
	width: 100%;
	height: 60px;
	justify-content: center;
	background-color: ${COLORS.transparent};
	color: ${COLORS.light};
	display: flex;

	${({ headerIsTransparent }) =>
		headerIsTransparent &&
		css`
			transition: ${TRANSITION};
			box-shadow: none;
			background-color: #363b3e00;
			color: ${COLORS.dark};
		`}

	@media (max-width: 768px) {
		height: 50px;
		display: flex;
	}
`

const HeaderContentWrapper = styled.div`
	width: 1024px;
	display: flex;
	justify-content: space-between;
`

const HeaderLogosWrapper = styled(Link)`
	display: flex;
	align-items: center;
	height: 100%;
	margin-left: ${MARGIN.XS};
`

function HeaderLogos() {
	return (
		<HeaderLogosWrapper to='/'>
			<Image headerRound src={HeaderRound} height='75%' width='fit-content' />
			<Image headerTitle src={HeaderTitle} height='30%' width='fit-content' />
		</HeaderLogosWrapper>
	)
}

export default function Header({ headerIsTransparent }) {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen((prevState) => !isOpen)
	}

	return (
		<BaseHeader headerIsTransparent={headerIsTransparent}>
			<HeaderContentWrapper>
				{!headerIsTransparent && HeaderLogos()}
				{HeaderLinks({
					headerLinks: headerLinksTitles,
					onClose: null,
					dropDown: null,
					headerIsTransparent: headerIsTransparent,
				})}
				{ResponsiveMenuDropDownToggle(
					handleClick,
					headerLinksTitles,
					isOpen,
					headerIsTransparent
				)}
			</HeaderContentWrapper>
		</BaseHeader>
	)
}
