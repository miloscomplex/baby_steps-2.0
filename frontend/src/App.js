import './css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import ProtectedRoutes from './components/ProtectedRoutes';
import Home from './components/Home';
import DailyLog from './components/DailyLog';
import NewStudent from './components/NewStudent';

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
            <Route path="/students/:id/dailylog" element={<DailyLog />} />
            <Route path="/students/new" element={<NewStudent />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
