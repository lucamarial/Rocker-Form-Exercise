import React from 'react'
import { Form, Container } from 'semantic-ui-react'

const FormFields = props => {
	let { errors } = props
	let successMessage, errorMessage

	if(props.successMessage) {
    successMessage = 
      <Message 
        color='green' 
        content={props.successMessage}
      />
  }

  if(props.errorMessage) {
    errorMessage = 
      <Message 
        color='red'
        content={props.errorMessage}
        type='promt'
      />
  }

	return (
		<>
			<Container fluid textAlign='center'>
				<Form onSubmit={props.handleSubmit}>
					<Form.Input
						name='ssn'
						fluid
						placeholder='Social Security Number (12 digits)'
						type='text'
						onChange={props.handleChange}
						value={props.ssn}
						error={errors.ssn ? {content: `${errors.ssn}`, pointing: 'below'} : null}
            noValidate
					/>
					<Form.Input
						name='phone'
						fluid
						placeholder='Phone (+46)'
						type='tel'
						onChange={props.handleChange}
						value={props.phone}
						error={errors.phone ? {content: `${errors.phone}`, pointing: 'below'} : null}
            noValidate
					/>
					<Form.Input
						name='email'
						fluid
						placeholder='Email'
						type='email'
						onChange={props.handleChange}
						value={props.email}
						error={errors.email ? {content: `${errors.email}`, pointing: 'below'} : null}
            noValidate
					/>
					<select
						className='fluid field'
						name='country'
						placeholder='Country'
						onChange={props.handleChange}
            value={props.country}
            noValidate
					>
            {props.options}
					</select>
					{successMessage}
          {errorMessage}
					<Form.Button content='Confirm' type='submit' />
				</Form>
			</Container>
		</>
	)
}

export default FormFields