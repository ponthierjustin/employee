import React, { Component } from "react";
import API from "../utils/API";
import UserCard from "../components/UserCard";

class User extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.searchUsers();
  }

  searchUsers = () => {
    API.getUser()
      .then(
        (res) =>
          console.log(res.data.results) ||
          this.setState({ users: res.data.results })
      )

      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-center">EMPLOYEES</h1>
          {this.state.users.map(user => (
              <UserCard 
              image={user.picture.thumbnail}
              />
          ))}
          
        </div>
      </div>
    );
  }
}

export default User;
