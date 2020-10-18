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
	justify-content: center;
	flex-direction: column;
	color: ${Theme.colors.light};
	opacity: ${Theme.opacity};
`

const Overlay = styled.div`
	position: fixed;
	top: 50px;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: ${Theme.colors.transparent};
	z-index: 1000;
`

export default function ResponsiveMenu(props) {
	const { open, onClose, headerLinks } = props

	if (!open) {
		return null
	}

	return ReactDom.createPortal(
		<React.Fragment>
			<Overlay onClick={onClose} />
			<Modal>
				<Button onClick={onClose} type='menuLink'>
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
