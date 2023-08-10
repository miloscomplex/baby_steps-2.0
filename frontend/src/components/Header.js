import { Navigate } from 'react-router-dom';

function Header() {
  
  const handleLogOut = () => {
    localStorage.removeItem('token')
  }

  return (
    <div className="header">
      <div className="d-flex justify-content-end pt-2 mx-2">
        <a href="" className="nav-link" onClick={e => handleLogOut()} >sign-out</a>
      </div>
      <img src="/images/baby_steps_logo-small.png" />
    </div>
  );
  }
  
  export default Header;