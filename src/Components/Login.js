import React from 'react';
import { Form, Button} from 'react-bootstrap'

export default class Login extends React.Component{
  constructor(props){
     super(props);
  this.state = {
    email: '',
    user: '',
    password:'',
    rememberMe: false

  };
  }

 handleChange = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
 
    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {

    const {user,rememberMe,password } =this.state;
    localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('user', rememberMe ? user: '');
    localStorage.setItem('password',rememberMe ? password: '');

  };



  render() {


    return(
      <Form onSubmit={this.handleFormSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          name="email" 
          type="email" 
          placeholder="Enter email" 
          value={this.state.email}
          onChange = {this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>User Name</Form.Label>
          <Form.Control 
          name="user" 
          type="text" 
          placeholder="Enter your Name" 
          value={this.state.name}
          onChange = {this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          name="password" 
          type="password" 
          value={this.state.password}
          onChange = {this.handleChange}

          placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check  
          name="rememberMe" 
          type="checkbox" 
          label="Remember Me" 
          checked={this.state.rememberMe}
          onChange = {this.handleChange}

          />
        </Form.Group>
        <center>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </center>
      </Form>    
    )
  }

}


