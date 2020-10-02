import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { Theme } from './theme/Theme'
import { Text } from './backbone/Text'
import Button from './backbone/Button'

const BaseHeader = styled.div`
	top: 0;
	position: fixed;
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${Theme.colors.light};
	background-color: ${Theme.colors.primary};
	box-shadow: ${Theme.shadow};
`

const HeaderLinksWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	margin-right: ${Theme.margin.L};
`

export default function Header(props) {
	const { headerLinks } = { ...props }

	return (
		<BaseHeader>
			<Text>logo be here</Text>
			<HeaderLinksWrapper>
				{console.log(props)}

				{headerLinks.map((link) => {
					return (
						<Link key={link} to={`/${link.toLowerCase()}`}>
							<Button name={link} type='headerLink'>
								{link}
							</Button>
						</Link>
					)
				})}
			</HeaderLinksWrapper>
		</BaseHeader>
	)
}
