import "./App.css";
import Login from "./components/Login";
import Register from './components/Register';
import Preview from "./components/Preview";
import Seasons from "./components/Seasons";
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Register/>} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/season/:seasonId" element={<Seasons />} />
        </Routes>
      </Router>
    </>
  );
}
