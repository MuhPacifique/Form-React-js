import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./compent/Login";
import Register from "./compent/Register";
import Dashboard from "./compent/Dashboard";
import Team from "./compent/Team";
import About from "./compent/About";
import Contact from "./compent/Contact";
import NotFound from "./compent/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
