import React from 'react'
import styled from 'styled-components'

import { Theme } from '../../theme/Theme'
import { mapTitleToMedia } from '../../../data/Social/Social'

import Image from '../Image'
import { Text } from '../Text'

const StyledLink = styled.a`
	display: flex;
	flex-direction: row;
	height: 30px;
	margin-left: ${Theme.margin.S};
	margin-top: ${Theme.margin.XS};
	margin-bottom: ${Theme.margin.XS};

	p {
		width: 100%;
		padding: 0px;
		color: ${Theme.colors.light};
		font-size: 14px;
		:hover {
			border-bottom: 1px solid ${Theme.colors.accent};
		}
	}

	img {
		margin-top: 2px;
	}
`

export default function SocialMediaLink(media, isDropDown) {
	const socialMediaProfile = mapTitleToMedia[media].profile
	const src = mapTitleToMedia[media].logo
	const url = mapTitleToMedia[media].url

	return (
		<StyledLink
			key={media}
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			isDropDown={isDropDown}
		>
			<Image src={src} footerIcon />
			{isDropDown && <Text>{socialMediaProfile}</Text>}
		</StyledLink>
	)
}
