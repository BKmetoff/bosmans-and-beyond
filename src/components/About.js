import React from 'react'

import ElisavetaImage from '../assets/musicians/Elizaveta.jpg'
import NataliaImage from '../assets/musicians/Natalia.jpg'
import DimitriImage from '../assets/musicians/Dimitri.jpg'

import { SectionWrapper } from './backbone/Wrapper'
import Sheet from './backbone/Sheet'
import { Text, Title } from './backbone/Text'
import { Divider } from './backbone/Divider'

import Image from './backbone/Image'

export default function About(props) {
	const { elisaveta, natalia, dimitri } = { ...props.people }

	return (
		<React.Fragment>
			<SectionWrapper>
				<Title>About us</Title>

				<Sheet>
					<Image round width='300px' height='300px' src={ElisavetaImage} />
					<Text>{elisaveta.bio}</Text>
				</Sheet>
				<Divider/>
				<Sheet reversed>
					<Image round width='300px' height='300px' src={NataliaImage} />
					<Text>{natalia.bio}</Text>
				</Sheet>
				<Divider/>
				<Sheet>
					<Image round width='300px' height='300px' src={DimitriImage} />
					<Text>{dimitri.bio}</Text>
				</Sheet>
			</SectionWrapper>
		</React.Fragment>
	)
}
