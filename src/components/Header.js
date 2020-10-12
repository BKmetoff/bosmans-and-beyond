import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { Theme } from './theme/Theme'
import Button from './backbone/Button'
import Image from './backbone/Image'

import MainBosmans from '../assets/logo/MainBosmans.png'
import MainCroppedInvertedTransparent from '../assets/logo/MainCroppedInvertedTransparent.png'

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
				<Image header noBorder src={MainBosmans} height='75%' width='fit-content' />
				<Image header src={MainCroppedInvertedTransparent} height='30%' width='fit-content' />
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
