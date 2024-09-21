import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  const [formValues, setFormValues] = useState({ email: "", password: "", favClass: "1" });
  const [validationStates, setValidationStates] = useState({ emailState: true, passwordState: true });

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setFormValues({ ...formValues, email: newEmail });

    // Validación del email mientras el usuario escribe
    const isEmailValid = validateEmail(newEmail);
    setValidationStates({ ...validationStates, emailState: isEmailValid });
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormValues({ ...formValues, password: newPassword });

    // Validación de la contraseña mientras el usuario escribe
    const isPasswordValid = newPassword.length >= 9 && /\d/.test(newPassword) && /[a-zA-Z]/.test(newPassword);
    setValidationStates({ ...validationStates, passwordState: isPasswordValid });
  };

  const handleSelectChange = (e) => {
    setFormValues({ ...formValues, favClass: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const clickSubmit = (() => {
    //Call fetch
    alert(JSON.stringify(formValues))
  })

  return (
    <div>
      <h1>Ejemplo de formularios!</h1>

      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            onChange={handleEmailChange} 
            value={formValues.email}
            isInvalid={!validationStates.emailState} 
          />
          {!validationStates.emailState && (
            <Form.Text className="text-danger">Your email should follow an established format.</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            onChange={handlePasswordChange} 
            value={formValues.password}
            isInvalid={!validationStates.passwordState} 
          />
          {!validationStates.passwordState && (
            <Form.Text className="text-danger">
              Your password should have numbers and letters and should be at least 9 characters long.
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Favorite Class</Form.Label>
          <Form.Select onChange={handleSelectChange}>
            <option value="1">ISIS3710</option>
            <option value="2">Programación con tecnologías web</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" onClick={clickSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
