import React from 'react'
import styled from 'styled-components'

import { Theme } from '../theme/Theme'

import { SectionWrapper, MotionWrapper } from '../backbone/Wrapper'
import Sheet from '../backbone/Sheet'
import { Text, Title } from '../backbone/Text'
import { Divider } from '../backbone/Divider'
import LinkToPersonalPage from '../backbone/Link/LinkToPersonalPage'
import Image from '../backbone/Image'

import { PEOPLE, mapNamesToBio } from '../../data/About/People'

const PageWrapper = styled(SectionWrapper)`
	margin-top: ${Theme.margin.XXL};
`

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

function BioImage(src) {
	return (
		<Image
			round
			shadow
			width={Theme.bioImageSize}
			height={Theme.bioImageSize}
			src={src}
		/>
	)
}

function BioSection(person, index) {
	const { fullName, photo, bio, website } = person
	return (
		<Sheet key={fullName} reversed={index === 1}>
			{BioImage(photo)}
			<TextWrapper>
				<Text>{bio}</Text>
				{LinkToPersonalPage(website, fullName)}
			</TextWrapper>
			<Divider />
		</Sheet>
	)
}

function NameMapper(people, mapNamesToBio) {
	return Object.values(people).map((person, index) => {
		return BioSection(mapNamesToBio[person], index)
	})
}

export default function About() {
	return (
		<MotionWrapper>
			<PageWrapper>
				<Title>About us</Title>
				{NameMapper(PEOPLE, mapNamesToBio)}
			</PageWrapper>
		</MotionWrapper>
	)
}
