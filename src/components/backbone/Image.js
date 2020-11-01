import styled, { css } from 'styled-components'
import { Theme } from '../theme/Theme'

const Image = styled.img.attrs((props) => ({
	src: props.src,
}))`
	${(props) =>
		props.height !== undefined &&
		css`
			height: props.height;
		`}

	${(props) =>
		props.width !== undefined &&
		css`
			width: props.width;
		`}

	${(props) =>
		props.round !== undefined &&
		css`
			border-radius: 50%;
			margin: ${Theme.padding.S};
			flex-shrink: 0;
		`}

	${(props) =>
		props.headerTitle !== undefined &&
		css`
			margin-left: ${Theme.padding.S};
			padding-top: ${Theme.padding.XXS};
			padding-bottom: ${Theme.padding.XXS};
			border-bottom: 1px solid ${Theme.colors.accent};

			@media (max-width: 768px) {
				display: none;
			}
		`}

	${(props) =>
		props.headerRound !== undefined &&
		css`
			padding: 0;
			border: none;
			margin-left: ${Theme.padding.S};
		`}

	
	${(props) =>
		props.main !== undefined &&
		css`
			-webkit-background-size: cover;
			-moz-background-size: cover;
			-o-background-size: cover;
			background-size: cover;
			background-attachment: fixed;
		`}

	${(props) =>
		props.shadow !== undefined &&
		css`
			box-shadow: ${Theme.shadow.S};
		`}
`

export default Image
