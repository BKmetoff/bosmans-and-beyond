import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styled, { css } from 'styled-components'

import ResponsiveMenu from './ResponsiveMenu'
import { headerLinksTitles } from '../../data/Header/HeaderLinksTitles'
import { Theme } from '../theme/Theme'
import { default as HeaderLinks } from './NavLinks'

import Image from '../backbone/Image'
import HeaderRound from '../../assets/logo/HeaderRound.png'
import HeaderTitle from '../../assets/logo/HeaderTitle.png'
import Chevron from '../../assets/icons/Chevron.png'

const BaseHeader = styled.div`
	transition: ease 0.5s;
	top: 0px;
	position: fixed;
	z-index: 1100;
	width: 100%;
	height: 60px;
	justify-content: space-between;
	align-items: center;
	background-color: ${Theme.colors.dark};
	color: ${Theme.colors.light};
	box-shadow: ${Theme.shadow.S};
	display: flex;

	${({ headerIsTransparent }) =>
		headerIsTransparent &&
		css`
			transition: ease 0.5s;
			box-shadow: none;
			background-color: #363b3e00;
			color: ${Theme.colors.dark};
		`}

	@media (max-width: 768px) {
		height: 50px;
		display: flex;
	}
`

const HeaderLogosWrapper = styled(Link)`
	display: flex;
	align-items: center;
	height: 100%;
	margin-left: ${Theme.margin.XS};
`

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

function HeaderLogos() {
	return (
		<HeaderLogosWrapper to='/'>
			<Image headerRound src={HeaderRound} height='75%' width='fit-content' />
			<Image headerTitle src={HeaderTitle} height='30%' width='fit-content' />
		</HeaderLogosWrapper>
	)
}

function ResponsiveDropDownMenu(handleClick, headerLinks, setIsOpen, isOpen) {
	return (
		<ResponsiveMenuWrapper>
			<ChevronContainer menuOpen={isOpen} onClick={handleClick}>
				<Image height='20px' width='20px' src={Chevron} />
			</ChevronContainer>

			<ResponsiveMenu
				open={isOpen}
				onClose={() => setIsOpen(false)}
				headerLinks={headerLinks}
			/>
		</ResponsiveMenuWrapper>
	)
}

export default function Header({ headerIsTransparent }) {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen((prevState) => ({ isOpen: !prevState.isOpen }))
	}

	return (
		<BaseHeader headerIsTransparent={headerIsTransparent}>
			{!headerIsTransparent && HeaderLogos()}
			{HeaderLinks(headerLinksTitles, headerIsTransparent)}
			{ResponsiveDropDownMenu(
				handleClick,
				headerLinksTitles,
				setIsOpen,
				isOpen
			)}
		</BaseHeader>
	)
}
