import React from 'react'
import styled from 'styled-components'

import { Theme } from '../theme/Theme'
import Button from './Button'
import Input from './Input'

const SubmitButton = styled(Button)`
	align-self: auto;
	margin-left: ${Theme.margin.XS};
	margin-right: ${Theme.margin.XS};
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
				<Input name='email' type='email' placeholder='Email' required />
				<Input name='name' type='text' placeholder='Name' required />
			</NameEmailWrapper>
			<Input
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
