import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import SocialMediaLink from '../backbone/Link/SocialMediaLink'
import { HeaderLink } from '../backbone/Button/HeaderLink'
import { SOCIAL_MEDIA } from '../../data/Social/Social'

import { COLORS, MARGIN, TRANSITION } from '../theme/Theme'

const DropDownContainer = styled.ul`
	transition: ${TRANSITION};
	pointer-events: none;
	display: flex;
	justify-content: end;
	align-items: center;
	right: 0px;
	left: 0px;
	top: 60px;
	position: absolute;
	opacity: 0;

	a:last-child {
		margin-right: ${MARGIN.S};
	}

	${({ openSocialDropDown }) =>
		openSocialDropDown &&
		css`
			pointer-events: all;
			animation: reveal 0.5s ease forwards;
		`}

	@keyframes reveal {
		100% {
			opacity: 1;
		}
	}

	${({ headerIsTransparent }) =>
		headerIsTransparent
			? css`
					color: ${COLORS.dark};
					background: ${COLORS.opaque};
			  `
			: css`
					color: ${COLORS.light};
					background: ${COLORS.transparent};
			  `}
`

function SocialMediaDropDownMenu(
	handleEnter,
	handleLeave,
	openSocialDropDown,
	headerIsTransparent
) {
	const isDropDown = true
	return (
		<DropDownContainer
			onMouseEnter={handleEnter}
			onMouseLeave={handleLeave}
			openSocialDropDown={openSocialDropDown}
			headerIsTransparent={headerIsTransparent}
		>
			{Object.values(SOCIAL_MEDIA).map((media) => {
				return SocialMediaLink(media, isDropDown)
			})}
		</DropDownContainer>
	)
}

export default function SocialMediaToggle(headerIsTransparent) {
	const [openSocialDropDown, setOpenSocialDropDown] = useState()

	const handleEnter = () => setOpenSocialDropDown(true)
	const handleLeave = () => setOpenSocialDropDown(false)

	return (
		<>
			{SocialMediaDropDownMenu(
				handleEnter,
				handleLeave,
				openSocialDropDown,
				headerIsTransparent
			)}
			<HeaderLink onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
				Social
			</HeaderLink>
		</>
	)
}
