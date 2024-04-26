import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Homepage from "./pages/homepage/Homepage";
import Loginpage from "./pages/login/Loginpage";
import Registerpage from "./pages/register/Registerpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Registerpage />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/' element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
