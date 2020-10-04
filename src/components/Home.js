import React from 'react'

import styled from 'styled-components'
import backgroundImage from '../assets/home.jpg'
import { Theme } from './theme/Theme'

const HomeWrapper = styled.div`
	background-image: url(${backgroundImage});
	height: 100vh;
	width: 100vw;
	max-width: inherit;
	background-size: cover;
	background-position: center top;
	background-repeat: no-repeat;
	box-shadow: ${Theme.shadow.M};
`

export default function Home(props) {
	return <HomeWrapper>some text on home</HomeWrapper>
}
