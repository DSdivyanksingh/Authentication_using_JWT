import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Registerpage from './register/register';
import Loginpage from './login/login';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registerpage/>}></Route>
        <Route path="/login" element={<Loginpage/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
