import React from 'react'
import styled from 'styled-components'

import { Theme } from './theme/Theme'
import { Text } from './backbone/Text'

const BaseFooter = styled.div`
	bottom: 0;
	position: fixed;
	width: 100%;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${Theme.colors.dark};
	color: ${Theme.colors.light};
	opacity: ${Theme.opacity};
	box-shadow: ${Theme.shadow.inverted};

	@media (max-width: 425px) {
		height: 30px;
	}
`

export default function Footer() {
	return (
		<BaseFooter>
			<Text footer>&#169; Bosmans & Beyond, 2020</Text>
		</BaseFooter>
	)
}
