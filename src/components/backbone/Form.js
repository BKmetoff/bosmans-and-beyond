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
	console.log('form')
	return (
		<BaseForm action='/' name='contact' method='post'>
			<input type='hidden' name='form-name' value='contact' />
			<BaseInput name='email' type='email' placeholder='email' />
			<BaseInput name='name' type='text' placeholder='name' />
			<BaseInput name='message' type='text' placeholder='message' />
			<Button type='submit'>Submit</Button>
		</BaseForm>
	)
}
