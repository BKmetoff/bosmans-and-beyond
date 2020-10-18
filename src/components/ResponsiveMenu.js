import React from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { Theme } from './theme/Theme'
import Button from './backbone/Button'

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
	opacity: ${Theme.opacity};
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

export default function ResponsiveMenu({ open, onClose, headerLinks }) {
	if (!open) {
		return null
	}

	return ReactDom.createPortal(
		<React.Fragment>
			<Overlay onClick={onClose} />

			<Modal>
				<Button onClick={onClose} name='Home' type='menuLink'>
					<Link to='/'>Home</Link>
				</Button>

				{headerLinks.map((link) => {
					return (
						<Button key={link} name={link} type='menuLink' onClick={onClose}>
							<Link to={`/${link.toLowerCase()}`}>{link}</Link>
						</Button>
					)
				})}
			</Modal>
		</React.Fragment>,
		document.getElementById('portal')
	)
}
