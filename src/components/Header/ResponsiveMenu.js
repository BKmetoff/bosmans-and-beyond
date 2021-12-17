import React from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { COLORS } from '../theme/Theme'
import { DropDownMenuLink } from '../backbone/Button/DropDownMenuLink'
import NavLinks from './NavLinks'

const Modal = styled.div`
	position: fixed;
	top: 0px;
	bottom: 0;
	left: -100%;
	right: 0;
	z-index: 1000;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	flex-direction: column;
	color: ${COLORS.light};
	background-color: ${COLORS.transparent};

	animation: open 0.5s ease forwards;
	/* animation: close  0.5s ease forwards; */

	@keyframes open {
		100% {
			left: 0;
		}
	}
`

export default function ResponsiveMenu({ isOpen, onClose, headerLinks }) {
	const dropDown = true

	if (!isOpen) return null

	return ReactDom.createPortal(
		<React.Fragment>
			<Modal onClick={onClose}>
				<DropDownMenuLink onClick={onClose} name='Home'>
					<Link to='/'>Home</Link>
				</DropDownMenuLink>

				{NavLinks({
					headerLinks: headerLinks,
					onClose: onClose,
					dropDown: dropDown,
					headerIsTransparent: null,
				})}
			</Modal>
		</React.Fragment>,
		document.getElementById('portal')
	)
}
