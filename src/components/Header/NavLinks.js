import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import SocialMediaToggle from './SocialMediaToggle'

import { HeaderLink } from '../backbone/Button/HeaderLink'
import { DropDownMenuLink } from '../backbone/Button/DropDownMenuLink'

const HeaderLinksWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	margin-left: ${({ headerIsTransparent }) => headerIsTransparent && 'auto'};

	@media (max-width: 768px) {
		display: none;
	}
`

export default function NavLinks(
	headerLinks,
	onClose,
	dropDown,
	headerIsTransparent
) {
	if (dropDown) {
		return headerLinks.map((link) => {
			return (
				<DropDownMenuLink key={link} name={link} onClick={onClose}>
					<Link to={`/${link.toLowerCase()}`}>{link}</Link>
				</DropDownMenuLink>
			)
		})
	}

	return (
		<HeaderLinksWrapper headerIsTransparent={headerIsTransparent}>
			{headerLinks.map((link) => {
				return (
					<HeaderLink
						key={link}
						name={link}
						headerIsTransparent={headerIsTransparent}
					>
						<Link to={`/${link.toLowerCase()}`}>{link}</Link>
					</HeaderLink>
				)
			})}

			{SocialMediaToggle(headerIsTransparent)}
		</HeaderLinksWrapper>
	)
}
