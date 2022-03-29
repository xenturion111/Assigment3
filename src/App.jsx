import './App.css'
import react from "react";
import SideNav from './components/navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
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
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
