import './css/App.css';
import Header from './components/Header';
import Signin from './components/Signin';
import Home from './components/Home';
import DailyLog from './components/DailyLog';
import NewStudent from './components/NewStudent';

function App() {
  return (
    <div className="App">
      <Header />
      <Signin />
      <Home />
      <DailyLog />
      <NewStudent />
    </div>
  );
}

export default App;
