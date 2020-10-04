import React from 'react'

import styled from 'styled-components'
import backgroundImage from '../assets/home.jpg'

const HomeWrapper = styled.div`
	background-image: url(${backgroundImage});
	height: 100vh;
	width: 100vw;
	max-width: 1920px;
	background-size: cover;
	background-position: center top;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export default function Home(props) {
	return <HomeWrapper>some text on home</HomeWrapper>
}
