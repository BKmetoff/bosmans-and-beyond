import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Theme } from '../theme/Theme'

import ElisavetaImage from '../../assets/musicians/Elizaveta.jpg'
import NataliaImage from '../../assets/musicians/Natalia.jpg'
import DimitriImage from '../../assets/musicians/Dimitri.jpg'

import { SectionWrapper, MotionWrapper } from '../backbone/Wrapper'
import Sheet from '../backbone/Sheet'
import { Text, Title } from '../backbone/Text'
import { Divider } from '../backbone/Divider'

import Image from '../backbone/Image'

const PageWrapper = styled(SectionWrapper)`
	margin-top: ${Theme.margin.XXL};
`

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

function LinkToPersonalPage(url, name) {
	return (
		<Text externalLink>
			<Link to={{ pathname: `${url}` }} target='_blank'>
				{name.split(' ')[0]}'s website
			</Link>
		</Text>
	)
}

function BioImage(index) {
	return (
		<Image
			round
			shadow
			width={Theme.bioImageSize}
			height={Theme.bioImageSize}
			src={
				(index === 0 && ElisavetaImage) ||
				(index === 1 && NataliaImage) ||
				(index === 2 && DimitriImage)
			}
		/>
	)
}

export default function About({ people }) {
	return (
		<MotionWrapper>
			<PageWrapper>
				<Title>About us</Title>
				{people.map((person, index) => {
					return (
						<Sheet key={index} reversed={index === 1}>
							{BioImage(index)}
							<TextWrapper>
								<Text>{person.bio}</Text>
								{LinkToPersonalPage(person.website, person.fullName)}
							</TextWrapper>
							{index + 1 !== people.length && <Divider />}
						</Sheet>
					)
				})}
			</PageWrapper>
		</MotionWrapper>
	)
}
