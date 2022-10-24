import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/UserAuthContext";
import Home from "./pages/Home";
import Login from "./pages/Auth/login";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
