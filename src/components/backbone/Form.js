import React from 'react'
import styled from 'styled-components'

import { Theme } from '../theme/Theme'
import Button from './Button'
import Input from './Input'
import Textarea from './Textarea'

const BaseForm = styled.form`
	display: flex;
	flex-direction: column;
	margin-right: ${Theme.margin.S};
	margin-left: ${Theme.margin.M};

	@media (max-width: 769px) {
		width: 100%;
		margin-left: ${Theme.margin.S};
	}
`

const SubmitButton = styled(Button)`
	align-self: stretch;
	font-family: inherit;
	margin-left: ${Theme.margin.XS};

	@media (max-width: 769px) {
		margin-right: ${Theme.margin.XS};
	}
`

const NameEmailWrapper = styled.div`
	margin-top: ${Theme.margin.S};
	display: flex;
	flex-direction: column;

	@media (min-width: 769px) {
		flex-direction: row;
		width: inherit;
	}
`

export default function Form() {
	return (
		<BaseForm action='/contact' name='contact' method='post'>
			<input type='hidden' name='form-name' value='contact' />
			<NameEmailWrapper>
				<Input
					name='email'
					type='email'
					placeholder='Email'
					label='email'
					required
				/>
				<Input
					name='name'
					type='text'
					placeholder='Name'
					label='name'
					required
				/>
			</NameEmailWrapper>
			<Textarea
				name='message'
				rows='10'
				placeholder='Message'
				label='message'
				required
			/>
			<SubmitButton type='submit' kind='primary'>
				Submit
			</SubmitButton>
		</BaseForm>
	)
}
