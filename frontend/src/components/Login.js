import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Signin() {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'mike@gmail.com' && password === 'mike') {
      localStorage.setItem('token', 'your-token-here');
      navigate('/home');
    } else {
      setError(true)
    }
  };

  return (
    <div className="container">
      <h1>Please sign-in</h1>
      { error ? <h5 className="text-danger">invalid credentials</h5>: ""}
      <form>
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input 
              type="email" 
              className="form-control" 
              id="exampleInputEmail1" 
              placeholder="Email" 
              onChange={e => setUsername(e.target.value)}
              required
          />
      </div>
      <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input 
              type="password" 
              className="form-control" 
              id="inputPassword" 
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
              required
          />
      </div>
      <button type="submit" onClick={e => handleLogin(e)} className="btn btn-primary">Submit</button>

      <p>
        <a onClick={e => navigate('/signup')} className='nav-link my-2'>Sign Up Here</a>
      </p>

  </form>
    
    </div>
  );
}

export default Signin;