import React from 'react'
import styled from 'styled-components'

import Button from './Button'

const BaseInput = styled.input`
	width: 200px;
	height: 40px;
`

const BaseForm = styled.form`
	display: flex;
	flex-direction: column;
`

export default function Form() {
	return (
		<BaseForm data-netlify='true' action='POST'>
			<BaseInput name='email' type='email' placeholder='email' />
			<BaseInput name='name' type='text' placeholder='name' />
			<BaseInput name='message' type='text' placeholder='message' />
			<div data-netlify-recaptcha='true' />
			<Button type='submit'>Submit</Button>
		</BaseForm>
	)
}
