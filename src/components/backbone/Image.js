import styled, { css } from 'styled-components'
import { Theme } from '../theme/Theme'

const Image = styled.img.attrs((props) => ({
	src: props.src,
}))`
	${({ height }) =>
		height !== undefined &&
		css`
			height: props.height;
		`}

	${({ width }) =>
		width !== undefined &&
		css`
			width: props.width;
		`}

	${({ round }) =>
		round !== undefined &&
		css`
			border-radius: 50%;
			margin: ${Theme.padding.S};
			flex-shrink: 0;
		`}

	${({ headerTitle }) =>
		headerTitle !== undefined &&
		css`
			margin-left: ${Theme.padding.S};
			padding-top: ${Theme.padding.XXS};
			padding-bottom: ${Theme.padding.XXS};
			border-bottom: 1px solid ${Theme.colors.accent};

			@media (max-width: 768px) {
				display: none;
			}
		`}

	${({ headerRound }) =>
		headerRound !== undefined &&
		css`
			padding: 0;
			border: none;
			margin-left: ${Theme.padding.S};
		`}

	
	${({ main }) =>
		main !== undefined &&
		css`
			-webkit-background-size: cover;
			-moz-background-size: cover;
			-o-background-size: cover;
			background-size: cover;
			background-attachment: fixed;
		`}

	${({ shadow }) =>
		shadow !== undefined &&
		css`
			box-shadow: ${Theme.shadow.L};
		`}

	${({ footerIcon }) =>
		footerIcon !== undefined &&
		css`
			height: 22px;
			width: 22px;
			margin-right: ${Theme.margin.S};
		`}
`

export default Image
