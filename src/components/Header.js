import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { Theme } from './theme/Theme'
import Button from './backbone/Button'
import Image from './backbone/Image'

import HeaderRound from '../assets/logo/HeaderRound.png'
import HeaderTitle from '../assets/logo/HeaderTitle.png'

const BaseHeader = styled.div`
	top: 0;
	position: fixed;
	z-index:1000;
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${Theme.colors.dark};
	box-shadow: ${Theme.shadow.S};
	opacity: 0.95;

	@media (max-width: 768px) {
		height: 50px;
	}

`

const HeaderLinksWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
`

const HeaderLogosWrapper = styled(Link)`
	display: flex;
	align-items: center;
	height: 100%;
	margin-left: ${Theme.margin.XS};
`

export default function Header(props) {
	const { headerLinks } = { ...props }

	return (
		<BaseHeader>
			
			<HeaderLogosWrapper to='/'>
				<Image headerRound src={HeaderRound} height='75%' width='fit-content' />
				<Image headerTitle src={HeaderTitle} height='30%' width='fit-content' />
			</HeaderLogosWrapper>

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
