import React, { Component } from "react";
import API from "../utils/API";
import UserCard from "../components/UserCard.jsx";
import NavBar from "../components/NavBar.jsx";
import Box from "@material-ui/core/Box";
/* import NavBar from "../components/NavBar"; */

class User extends Component {
  state = {
    users: [],
    searchUsers: [],
    search: "",
  };

  componentDidMount() {
    this.searchUsers();
  }

  searchUsers = () => {
    API.getUser()
      .then(
        (res) =>
          console.log(res.data.results) ||
          this.setState({
            users: res.data.results,
            searchUsers: res.data.results,
          })
      )

      .catch((err) => console.log(err));
  };

  handleInputChange = (e) => {
    e.preventDefault();
    const userName = e.target.value;

    const filterUsers = this.state.users.filter((user) => {
      const { first: firstName, last: lastName } = user.name;

      const filteredUsers= `${firstName} ${lastName}`;
      return filteredUsers
        .toLowerCase()
        .includes(userName.toLowerCase().trim());
    });

    this.setState({
      searchUsers: filterUsers,
      search: userName,
    });
  };
  sortUser = () => {
    function compare(a, b) {
      if (a.name.last > b.name.last) return 1;
      if (b.name.last > a.name.last) return -1;

      return 0;
    }
    const sortedUser = this.state.users.sort(compare);
    this.setState({ users: sortedUser });
  };

  render() {
    return (
      <div>
        <div className="container">
          <NavBar handleInputChange={this.handleInputChange} />
          <button className="text-center" onClick={this.sortUser}>
            sort
          </button>

          <Box
            display="flex"
            flexWrap="wrap"
            flexDirection="row"
            alignItems="center"
            bgcolor="background.paper"
            width="100%"
          >
            {this.state.searchUsers.map((user) => (
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
