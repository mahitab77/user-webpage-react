// src/components/Users.jsx
import  { Component } from 'react';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
      .catch(error => console.error('Error fetching users:', error));
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          {this.state.users.map(user => (
            <div className="col-md-4 mb-4" key={user.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">{user.email}</p>
                  <p className="card-text">{user.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
