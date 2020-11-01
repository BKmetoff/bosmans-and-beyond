import React from 'react'
import styled from 'styled-components'

import { Theme } from './theme/Theme'
import Image from './backbone/Image'
import { MotionWrapper } from './backbone/Wrapper'

import MainText from '../assets/logo/MainText.png'
import HomePhoto from '../assets/photos/rsz_home.png'

const HomeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	/* margin-top: ${Theme.margin.L}; */
	margin-bottom: ${Theme.margin.L};
`

const MainPhoto = styled(Image)`
	width: 100vw;
	/* opacity: 0.8; */
	filter: brightness(90%);
`

export default function Home() {
	return (
		<MotionWrapper>
			<HomeWrapper>
				{/* <Image main src={MainText} width='60%' height='fit-content' /> */}
				<MainPhoto
					main
					shadow
					src={HomePhoto}
					// width='80%'
					height='fit-content'
				/>
			</HomeWrapper>
		</MotionWrapper>
	)
}
