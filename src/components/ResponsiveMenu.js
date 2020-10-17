import React from 'react'
import ReactDom from 'react-dom'

import Button from './backbone/Button'

const modalStyles = {
	position: 'fixed',
	top: 0,
	right: 0,
	zIndex: 1000,
	background: '#999',
}

const overlayStyles = {
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: 'rgba(0, 0, 0, .7)',
	zIndex: 1000,
}

export default function ResponsiveMenu(props) {
	const { open, onClose, headerLinks } = props

	if (!open) {
		return null
	}

	return ReactDom.createPortal(
		<div style={overlayStyles}>
			{console.log(headerLinks)}
			<div style={modalStyles}>
				<Button onClick={onClose}>close</Button>
				{headerLinks}
			</div>
		</div>,
		document.getElementById('portal')
	)
}
