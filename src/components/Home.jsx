// src/components/Home.jsx
import { Component } from 'react';
import './Home.css'; // Import the CSS file specific to the Home component

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to Our Courses</h1>
          <p>
            We are excited to have you join us for our courses. Whether you are here to learn a new skill or to enhance your current knowledge, we have a wide range of courses to suit your needs.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
