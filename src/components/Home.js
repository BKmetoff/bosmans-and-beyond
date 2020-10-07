import React from 'react'

import styled from 'styled-components'
import backgroundImage from '../assets/rsz_home.png'
import { Theme } from './theme/Theme'

const HomeWrapper = styled.div`
	background-image: url(${backgroundImage});
	height: 100vh;
	width: 100vw;
	max-height: 1024px;
	max-width: 1280px;
	background-size: cover;
	background-position: center top;
	background-repeat: no-repeat;
	box-shadow: ${Theme.shadow.M};
	/* display: flex;
	justify-content: center;
	align-items: center; */
`

export default function Home(props) {
	return <HomeWrapper>some text on home</HomeWrapper>
}
