import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { Theme } from './theme/Theme'
import ResponsiveMenu from './ResponsiveMenu'
import Button from './backbone/Button'
import Image from './backbone/Image'

import HeaderRound from '../assets/logo/HeaderRound.png'
import HeaderTitle from '../assets/logo/HeaderTitle.png'
import Chevron from '../assets/icons/Chevron.png'

const BaseHeader = styled.div`
	top: 0;
	position: fixed;
	z-index: 1100;
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${Theme.colors.dark};
	box-shadow: ${Theme.shadow.S};
	opacity: ${Theme.opacity};

	@media (max-width: 768px) {
		height: 50px;
	}
`

const HeaderLinksWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;

	@media (max-width: 768px) {
		display: none;
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

export default function Header({ headerLinks }) {
	const [state, setState] = useState({ isOpen: false })

	const handleClick = () => {
		setState((prevState) => ({ isOpen: !prevState.isOpen }))
	}

	return (
		<BaseHeader>
			<HeaderLogosWrapper to='/'>
				<Image headerRound src={HeaderRound} height='75%' width='fit-content' />
				<Image headerTitle src={HeaderTitle} height='30%' width='fit-content' />
			</HeaderLogosWrapper>

			<ResponsiveMenuWrapper>
				<ChevronContainer menuOpen={state.isOpen} onClick={handleClick}>
					<Image height='20px' width='20px' src={Chevron} />
				</ChevronContainer>

				<ResponsiveMenu
					open={state.isOpen}
					onClose={() => setState({ isOpen: false })}
					headerLinks={headerLinks}
				/>
			</ResponsiveMenuWrapper>

			<HeaderLinksWrapper>
				{headerLinks.map((link) => {
					return (
						<Button key={link} name={link} type='headerLink'>
							<Link to={`/${link.toLowerCase()}`}>{link}</Link>
						</Button>
					)
				})}
			</HeaderLinksWrapper>
		</BaseHeader>
	)
}
