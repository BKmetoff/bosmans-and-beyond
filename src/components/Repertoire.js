import React from 'react'
import styled, { css } from 'styled-components'

import { Theme } from './theme/Theme'
import { SectionWrapper, MotionWrapper } from './backbone/Wrapper'
import { Title, Text } from './backbone/Text'
import Sheet from './backbone/Sheet'

const ListContainer = styled.ul``

const PieceTitle = styled(Title)`
	font-size: 26px;
	border: none;
	width: 50%;
	align-self: flex-start;

	@media (max-width: 768px) {
		font-size: 28px;
		width: auto;
	}
`

const DescriptionContainer = styled.div`
	width: 50%;
	@media (max-width: 768px) {
		width: 100%;
	}
`

const PieceDescriptionWrapper = styled.div`
	margin-bottom: ${Theme.margin.S};
`

const PieceDescription = styled(Text)`
	font-size: 24px;
	font-weight: 300;
	padding: ${Theme.padding.XXS};
	padding-bottom: ${Theme.padding.none};
	text-align: left;

	@media (max-width: 768px) {
		font-size: 22px;
	}

	${({ pieceType }) =>
		pieceType !== undefined &&
		css`
			font-style: italic;
			font-size: 18px;
			padding-top: ${Theme.padding.none};

			@media (max-width: 768px) {
				font-size: 18px;
			}
		`}
`

export default function Repertoire({ repertoire }) {
	return (
		<MotionWrapper>
			<SectionWrapper>
				<ListContainer>
					{repertoire.map((entry, index) => {
						return (
							<Sheet key={index}>
								<PieceTitle listTitle>{entry.author}</PieceTitle>
								<DescriptionContainer>
									{entry.pieces.map((piece, index) => {
										return (
											<PieceDescriptionWrapper key={index}>
												<PieceDescription>{piece.title}</PieceDescription>
												<PieceDescription pieceType>
													{piece.type}
												</PieceDescription>
											</PieceDescriptionWrapper>
										)
									})}
								</DescriptionContainer>
							</Sheet>
						)
					})}
				</ListContainer>
			</SectionWrapper>
		</MotionWrapper>
	)
}
