import React, { Component } from "react";
import API from "../utils/API";
import UserCard from "../components/UserCard";
import Box from "@material-ui/core/Box";

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
          <Box display="flex" justifyContent="space-around">
            <h1 className="text-center">EMPLOYEES</h1>
          </Box>
          <Box
            display="flex"
            flexWrap="wrap"
            flexDirection="row"
            alignItems="center"
            bgcolor="background.paper"
            width="100%"
          >
            {this.state.users.map((user) => (
              <UserCard
                //ADD A KEY
                image={user.picture.large}
                firstName={user.name.first}
                lastName={user.name.last}
                email={user.email}
                phone={user.phone}
                dob={user.dob.date.slice(0, 10)}

              />
            ))}
          </Box>
        </div>
      </div>
    );
  }
}

export default User;
