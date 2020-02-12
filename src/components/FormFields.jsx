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
					/>
					<Form.Input
						name='phone'
						fluid
						placeholder='Phone (+46)'
						type='tel'
					/>
					<Form.Input
						name='email'
						fluid
						placeholder='Email'
						type='email'
					/>
					<select
						className='fluid field'
						name='country'
						placeholder='Country'
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