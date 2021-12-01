import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Button from '../backbone/Button'
import SocialMediaToggle from './SocialMediaToggle'

const HeaderLinksWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;

	@media (max-width: 768px) {
		display: none;
	}
`

function HeaderButton(link, dropDown, onClose) {
	const kind = dropDown ? 'menuLink' : 'headerLink'
	const closeDropDown = onClose ? onClose : null

	return (
		<Button key={link} name={link} kind={kind} onClick={closeDropDown}>
			<Link to={`/${link.toLowerCase()}`}>{link}</Link>
		</Button>
	)
}

export default function NavLinks(headerLinks, dropDown, onClose) {
	if (dropDown) {
		return (
			<>
				{headerLinks.map((link) => {
					return HeaderButton(link, dropDown, onClose)
				})}
			</>
		)
	}

	return (
		<HeaderLinksWrapper>
			{headerLinks.map((link) => {
				return HeaderButton(link)
			})}

			{SocialMediaToggle()}
		</HeaderLinksWrapper>
	)
}
