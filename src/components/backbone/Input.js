import styled from 'styled-components'
import { Theme } from '../theme/Theme'

const Input = styled.input`
	height: 40px;
	padding-left: ${Theme.padding.S};
	padding-right: ${Theme.padding.S};
	border: none;
	border-radius: ${Theme.borderRadiusM};
	margin-bottom: ${Theme.margin.XS};
	margin-top: ${Theme.margin.S};
	margin-left: ${Theme.margin.XS};
	margin-right: ${Theme.margin.XS};
	box-shadow: ${Theme.shadow.S};
`
export default Input
