import React from 'react'
import styled from 'styled-components'

import { Theme } from './theme/Theme'
import Image from './backbone/Image'

import MainText from '../assets/logo/MainText.png'
import HomePhoto from '../assets/photos/Home.png'

const HomeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: ${Theme.margin.L};
	margin-bottom: ${Theme.margin.L};
`

export default function Home() {


	return (
		<HomeWrapper>
			<Image main src={MainText} width='60%' height='fit-content' />
			<Image main src={HomePhoto} width='80%' height='fit-content' />

		</HomeWrapper>

	)
}
