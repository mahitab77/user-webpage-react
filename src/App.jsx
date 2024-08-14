

// src/App.jsx
import  { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Home from './components/Home.jsx';
import Users from './components/Users.jsx';
import Courses from './components/Courses.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses" element={<div className="text-center mt-5"><h1>Courses Page Coming Soon</h1></div>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
