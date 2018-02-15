import React from 'react';
import { connect } from 'react-redux';
import { Grid, Button, FormGroup, FormControl, ControlLabel, Panel } from  'react-bootstrap';
import { login } from '../utils/user';

const Login = (props) => {
	const userLogin = (e) => {
		e.preventDefault();
		console.log("LOGIN: ", e.target.username.value);
		props.login(e.target.username.value);
		props.history.goBack();
	}

	return (
		<Grid>
			<Panel>
				<Panel.Heading>
					<Panel.Title>
						{'Login!'}
					</Panel.Title>
				</Panel.Heading>

				<Panel.Body>
					<form onSubmit={userLogin}>
						<FormGroup controlId="formBasicText">
							<ControlLabel>Username</ControlLabel>
							<FormControl
								type="text"
								name="username"
								placeholder="Username"
							/>
						</FormGroup>

						<Button type='submit' className={'pull-right'}>Login</Button>
					</form>
				</Panel.Body>
			</Panel>
		</Grid>
	);
}

export default connect( null, { login })(Login);