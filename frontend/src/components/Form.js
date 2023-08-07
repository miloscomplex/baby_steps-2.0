import React, { useState } from 'react';

function Form(props) {

    const submitURL = props.submitURL
    //console.log(submitURL)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Here you can add your login logic, such as calling an API to validate the credentials
      console.log('submitURL:', submitURL)
      console.log('Email:', email);
      console.log('Password:', password);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    placeholder="Email" 
                    onChange={handleEmailChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="inputPassword" 
                    placeholder="Password"
                    onChange={handlePasswordChange}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
  }
  
  export default Form;