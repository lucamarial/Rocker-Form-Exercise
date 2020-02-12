import React from 'react'
import { Form, Container } from 'semantic-ui-react'

const FormFields = props => {
	return (
		<>
			<Container fluid textAlign='center'>
				<Form>
					<Form.Input
						name='ssn'
						fluid
						placeholder='Social Security Number (12 digits)'
						type='text'
						onChange={props.handleChange}
            value={props.ssn}
            noValidate
					/>
					<Form.Input
						name='phone'
						fluid
						placeholder='Phone (+46)'
						type='tel'
						onChange={props.handleChange}
            value={props.phone}
            noValidate
					/>
					<Form.Input
						name='email'
						fluid
						placeholder='Email'
						type='email'
						onChange={props.handleChange}
            value={props.email}
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
					<Form.Button content='Confirm' type='submit' />
				</Form>
			</Container>
		</>
	)
}

export default FormFields