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
		<BaseForm
			data-netlify='true'
			method='POST'
			name='contact'
			data-netlify-recaptcha='true'
		>
			<input type='hidden' name='form-name' value='contact' />
			<BaseInput name='email' type='email' placeholder='email' />
			<BaseInput name='name' type='text' placeholder='name' />
			<BaseInput name='message' type='text' placeholder='message' />
			<Button type='submit'>Submit</Button>
		</BaseForm>
		// <form name='contact' method='POST' data-netlify='true' action='/success'>
		// 	<p>
		// 		<label>
		// 			Your Name: <input type='text' name='name' />
		// 		</label>
		// 	</p>
		// 	<p>
		// 		<label>
		// 			Your Email: <input type='email' name='email' />
		// 		</label>
		// 	</p>
		// 	<p>
		// 		<label>
		// 			Message: <textarea name='message'></textarea>
		// 		</label>
		// 	</p>
		// 	<p>
		// 		<button type='submit'>Send</button>
		// 	</p>
		// 	<div data-netlify-recaptcha='true' />
		// </form>
	)
}
