import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserRoute from './components/UserRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<UserRoute> <Dashboard/> </UserRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
