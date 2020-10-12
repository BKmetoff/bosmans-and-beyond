import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { Theme } from './theme/Theme'
import Button from './backbone/Button'
import Image from './backbone/Image'

import LogoHeader from '../assets/logo/Header.png'

const BaseHeader = styled.div`
	top: 0;
	position: fixed;
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${Theme.colors.primary};
	box-shadow: ${Theme.shadow.S};
	opacity: 0.95;
`

const HeaderLinksWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
`


export default function Header(props) {
	const { headerLinks } = { ...props }

	return (
		<BaseHeader>
			<Image header src={LogoHeader} height='85%' width='fit-content' />
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
