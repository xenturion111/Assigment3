import './App.css'
import { render } from "react-dom";
import react from "react";
import SideNav from './components/navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Expenses from "./routes/expenses";
// import Expenses from "./routes/expenses";
// import Expenses from "./routes/expenses";
// import Expenses from "./routes/expenses";

function App() {
  return (
    <div className="App">
      <SideNav />
      <Routes>
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
