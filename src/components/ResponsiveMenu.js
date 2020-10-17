import React from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components'

import { Theme } from './theme/Theme'
import Button from './backbone/Button'

const Modal = styled.div`
	position: fixed;
	top: 50px;
	right: 0;
	z-index: 1000;
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

export default function ResponsiveMenu(props) {
	const { open, onClose, headerLinks } = props

	if (!open) {
		return null
	}

	return ReactDom.createPortal(
		<React.Fragment>
			<Overlay onClick={onClose} />
			{console.log(headerLinks)}
			<Modal>
				<Button onClick={onClose}>close</Button>
				{headerLinks}
			</Modal>
		</React.Fragment>,
		document.getElementById('portal')
	)
}
