import React from 'react'
import styled from 'styled-components'

import { MARGIN, COLORS } from '../../theme/Theme'
import { mapTitleToMedia } from '../../../data/Social/Social'

import Image from '../Image'
import { Text } from '../Text'

const StyledLink = styled.a`
	display: flex;
	flex-direction: row;
	height: 30px;
	margin-left: ${MARGIN.S};
	margin-top: ${MARGIN.XS};
	margin-bottom: ${MARGIN.XS};
	color: inherit;

	p {
		padding: 0px;
		font-size: 14px;
		:hover {
			border-bottom: 2px solid ${COLORS.accent};
		}
	}

	img {
		margin-top: 2px;
	}
`

export default function SocialMediaLink(media, isDropDown) {
	const { profile, logo, url } = mapTitleToMedia[media]

	return (
		<StyledLink
			key={media}
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			isDropDown={isDropDown}
		>
			<Image src={logo} footerIcon />
			{isDropDown && <Text>{profile}</Text>}
		</StyledLink>
	)
}
