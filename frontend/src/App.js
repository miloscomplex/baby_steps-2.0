import './css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import ProtectedRoutes from './components/ProtectedRoutes';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
