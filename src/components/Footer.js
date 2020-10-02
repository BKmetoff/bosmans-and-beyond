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
	background-color: ${Theme.colors.primary};
	color: ${Theme.colors.light};
`

export default function Footer() {
	return (
		<BaseFooter>
			<Text>&#169; Bosmans & Beyond, 2020</Text>
		</BaseFooter>
	)
}
