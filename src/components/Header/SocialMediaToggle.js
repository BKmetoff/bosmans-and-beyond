import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import SocialMediaLink from '../backbone/Link/SocialMediaLink'
import { HeaderLink } from '../backbone/Button/HeaderLink'
import { SOCIAL_MEDIA } from '../../data/Social/Social'

import { COLORS, MARGIN, TRANSITION } from '../theme/Theme'

const DropDownContentWrapper = styled.div`
	width: 1024px;
	display: flex;
	justify-content: end;

	a:last-child {
		margin-right: ${MARGIN.S};
	}
`

const DropDownContainer = styled.ul`
	transition: ${TRANSITION};
	pointer-events: none;
	display: flex;
	justify-content: center;
	right: 0px;
	left: 0px;
	top: 60px;
	position: absolute;
	opacity: 0;

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
			<DropDownContentWrapper>
				{Object.values(SOCIAL_MEDIA).map((media) => {
					return SocialMediaLink(media, isDropDown)
				})}
			</DropDownContentWrapper>
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
