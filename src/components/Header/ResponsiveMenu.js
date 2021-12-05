import React from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { Theme } from '../theme/Theme'
import { DropDownMenuLink } from '../backbone/Button/DropDownMenuLink'
import NavLinks from './NavLinks'

const Modal = styled.div`
	position: fixed;
	top: 50px;
	right: 0;
	z-index: 1000;
	width: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	flex-direction: column;
	color: ${Theme.colors.light};
	background-color: ${Theme.colors.dark};
`

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: ${Theme.colors.transparent};
	z-index: 1000;
`

export default function ResponsiveMenu({ isOpen, onClose, headerLinks }) {
	const dropDown = true

	if (!isOpen) return null

	return ReactDom.createPortal(
		<React.Fragment>
			<Overlay onClick={onClose} />

			<Modal>
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
