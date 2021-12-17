import styled, { css } from 'styled-components'
import { MARGIN, PADDING, COLORS, SHADOW } from '../theme/Theme'

const Image = styled.img.attrs((props) => ({
	src: props.src,
}))`
	${({ height }) =>
		height !== undefined &&
		css`
			height: height;
		`}

	${({ width }) =>
		width !== undefined &&
		css`
			width: width;
		`}

	${({ round }) =>
		round !== undefined &&
		css`
			border-radius: 50%;
			margin: ${PADDING.S};
			flex-shrink: 0;
		`}

	${({ headerTitle }) =>
		headerTitle !== undefined &&
		css`
			margin-left: ${PADDING.S};
			padding-top: ${PADDING.XXS};
			padding-bottom: ${PADDING.XXS};
			border-bottom: 1px solid ${COLORS.accent};
		`}

	${({ headerRound }) =>
		headerRound !== undefined &&
		css`
			padding: 0;
			border: none;
			margin-left: ${PADDING.S};
		`}

	
	${({ main }) =>
		main !== undefined &&
		css`
			-webkit-background-size: cover;
			-moz-background-size: cover;
			-o-background-size: cover;
			background-size: cover;
			background-attachment: fixed;
			max-width: 100%;
		`}

	${({ shadow }) =>
		shadow !== undefined &&
		css`
			box-shadow: ${SHADOW.mPrimary};
		`}

	${({ footerIcon }) =>
		footerIcon !== undefined &&
		css`
			height: 22px;
			width: 22px;
			margin-right: ${MARGIN.S};
		`}
`

export default Image
