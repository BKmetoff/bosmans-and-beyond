import React from 'react'
import styled from 'styled-components'

import { MARGIN } from '../theme/Theme'
import Input from './Input'
import Textarea from './Textarea'
import { StandaloneButton } from './Button/Standalone'

const BaseForm = styled.form`
	display: flex;
	flex-direction: column;
	margin-right: ${MARGIN.S};
	margin-left: ${MARGIN.M};

	@media (max-width: 769px) {
		width: 100%;
		margin-left: ${MARGIN.S};
	}
`

const SubmitButton = styled(StandaloneButton)`
	align-self: stretch;
	font-family: inherit;
	margin-left: ${MARGIN.XS};

	@media (max-width: 769px) {
		margin-right: ${MARGIN.XS};
	}
`

const NameEmailWrapper = styled.div`
	margin-top: ${MARGIN.S};
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
			<SubmitButton type='submit'>Submit</SubmitButton>
		</BaseForm>
	)
}
