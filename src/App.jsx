import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./compent/Login";
import Register from "./compent/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
