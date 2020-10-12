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
			padding: ${Theme.padding.S};
		`}

	${(props) => 
		props.header !== undefined && 
		css`
			margin-left: ${Theme.padding.S};
			padding-top: ${Theme.padding.XXS};
			padding-bottom: ${Theme.padding.XS};
			border-bottom: 2px solid ${Theme.colors.accent};

		`}
`

export default Image
