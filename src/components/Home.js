import React from 'react'
import styled from 'styled-components'

import { Theme } from './theme/Theme'
import Image from './backbone/Image'
import { MotionWrapper, ContentWrapper } from './backbone/Wrapper'
import Sheet from './backbone/Sheet'
import { Text, Title } from './backbone/Text'

import HomePhoto from '../assets/photos/rsz_home.png'
import patronImage from '../assets/Patron.png'

const HomeImageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: ${Theme.margin.L};
`

const MainPhoto = styled(Image)`
	width: 100vw;
`

export default function Home({ mission, patron }) {
	return (
		<MotionWrapper>
			<HomeImageWrapper>
				<MainPhoto main shadow src={HomePhoto} />
			</HomeImageWrapper>
			<ContentWrapper>
				<Title>Our Mission</Title>
				<Sheet>
					<Text>{mission}</Text>
				</Sheet>

				<Title>Our Patron</Title>
				<Sheet>
					<Image round shadow src={patronImage} width='300px' height='300px' />
					<Text>{patron}</Text>
				</Sheet>
			</ContentWrapper>
		</MotionWrapper>
	)
}
