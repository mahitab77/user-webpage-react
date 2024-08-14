// src/components/Courses.jsx
import  { Component } from 'react';

class Courses extends Component {
  constructor(props) {
    super(props);
    // Define an array of tech courses
    this.state = {
      courses: [
        'React Development',
        'Angular Development',
        'Vue.js Development',
        'Node.js Development',
        'Python for Data Science',
        'Machine Learning with TensorFlow',
        'Full-Stack Web Development',
        'Mobile App Development with Flutter',
      ],
    };
  }

  render() {
    return (
      <div className="container mt-5">
        <h2>Available Tech Courses</h2>
        <ul className="list-group">
          {this.state.courses.map((course, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {course}
              <button className="btn btn-primary">Register</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Courses;
