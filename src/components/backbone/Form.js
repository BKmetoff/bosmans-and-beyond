import React from 'react'
import styled, { css } from 'styled-components'

import { Theme } from '../theme/Theme'
import Button from './Button'

const SubmitButton = styled(Button)`
	align-self: auto;
	margin-left: ${Theme.margin.XS};
	margin-right: ${Theme.margin.XS};
`

const BaseInput = styled.input`
	width: 200px;
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

	${({ message }) =>
		message !== undefined &&
		css`
			height: 200px;
			@media (min-width: 769px) {
				width: 90%;
			}
		`}
`

const BaseForm = styled.form`
	display: flex;
	flex-direction: column;
	margin-left: ${Theme.margin.M};
	margin-right: ${Theme.margin.S};
`

const NameEmailWrapper = styled.div`
	margin-top: ${Theme.margin.S};
	display: flex;
	flex-direction: column;
	@media (min-width: 769px) {
		flex-direction: row;
	}
`

export default function Form() {
	return (
		<BaseForm action='/contact' name='contact' method='post'>
			<input type='hidden' name='form-name' value='contact' />
			<NameEmailWrapper>
				<BaseInput name='email' type='email' placeholder='Email' required />
				<BaseInput name='name' type='text' placeholder='Name' required />
			</NameEmailWrapper>
			<BaseInput
				message
				name='message'
				type='text'
				placeholder='Message'
				required
			/>
			<SubmitButton type='submit' kind='primary'>
				Submit
			</SubmitButton>
		</BaseForm>
	)
}
