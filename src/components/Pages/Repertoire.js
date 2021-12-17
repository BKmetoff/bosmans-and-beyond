import React from 'react'
import styled, { css } from 'styled-components'

import { MARGIN, PADDING } from '../theme/Theme'
import { SectionWrapper, MotionWrapper } from '../backbone/Wrapper'
import { Title, Text } from '../backbone/Text'
import Sheet from '../backbone/Sheet'

import {
	COMPOSERS,
	mapComposersToPieces,
} from '../../data/Repertoire/Repertoire'

const ListContainer = styled.ul`
	display: flex;
	flex-direction: column;
`

const TitleWrapper = styled.div`
	width: 50%;
	text-align: right;

	@media (max-width: 768px) {
		width: 100%;
		text-align: left;
	}
`

const DescriptionContainer = styled.div`
	width: 50%;
	@media (max-width: 768px) {
		width: 100%;
	}
`

const DescriptionWrapper = styled.div`
	margin-bottom: ${MARGIN.S};
`

const Description = styled(Text)`
	font-size: 24px;
	font-weight: 300;
	padding: ${PADDING.XXS};
	padding-bottom: ${PADDING.none};
	text-align: left;

	@media (max-width: 768px) {
		font-size: 22px;
	}

	${({ pieceType }) =>
		pieceType !== undefined &&
		css`
			font-style: italic;
			font-size: 18px;
			padding-top: ${PADDING.none};

			@media (max-width: 768px) {
				font-size: 18px;
			}
		`}
`

function PieceAuthor(author) {
	return (
		<TitleWrapper>
			<Title listTitle>{author}</Title>
		</TitleWrapper>
	)
}

function PieceDescription({ title, type }, index) {
	return (
		<DescriptionWrapper key={`${title}-${index}`}>
			<Description>{title}</Description>
			<Description pieceType>{type}</Description>
		</DescriptionWrapper>
	)
}

function PiecesPerAuthor({ name, pieces }, index) {
	return (
		<Sheet key={`${name}`}>
			{PieceAuthor(name)}
			<DescriptionContainer>
				{pieces.map((piece, index) => {
					return PieceDescription(piece, index)
				})}
			</DescriptionContainer>
		</Sheet>
	)
}

export default function Repertoire() {
	return (
		<MotionWrapper>
			<SectionWrapper extraMargin>
				<ListContainer>
					{Object.values(COMPOSERS).map((composer, index) => {
						return PiecesPerAuthor(mapComposersToPieces[composer])
					})}
				</ListContainer>
			</SectionWrapper>
		</MotionWrapper>
	)
}
