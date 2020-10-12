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
			flex-shrink: 0;
		`}

	${(props) => 
		props.header !== undefined && 
		css`
			margin-left: ${Theme.padding.S};
			padding-top: ${Theme.padding.XXS};
			padding-bottom: ${Theme.padding.XXS};
			border-bottom: 1px solid ${Theme.colors.accent}
		`}

		${(props) => 
		props.noBorder  !== undefined && 
		css`
			border: none;
			padding: 0;
		`}

	
	${(props) => 
		props.main !== undefined &&
		css`
			margin-left: ${Theme.margin.L};
			margin-right: ${Theme.margin.L};
			border-radius: ${Theme.borderRadius};
		
		`}
`

export default Image
