import React, { Component } from "react";
import API from "../utils/API";
import UserCard from "../components/UserCard.jsx";
import Box from "@material-ui/core/Box";
/* import NavBar from "../components/NavBar"; */

class User extends Component {
  state = {
    users: [],
    searchUsers: [],
    search: ""
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

  sortUser = () => {
    function compare(a, b) {
      if (a.name.last > b.name.last) return 1;
      if (b.name.last > a.name.last) return -1;

      return 0;
    }
    const sortedUser = this.state.users.sort(compare);
    this.setState({ users: sortedUser });
  };

  handleInputChange = (e) => {
    e.preventDefault();
    const employeeName = e.target.value;

    const searchUsers = this.state.users.filter((employees) => {
      const { first: firstName, last: lastName } = employees.name;

      const searchedEmployeesName = `${firstName} ${lastName}`;
      return searchedEmployeesName
        .toLowerCase()
        .includes(employeeName.toLowerCase().trim());
    });

    this.setState({
      searchUsers: searchUsers,
      search: employeeName,
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <Box display="flex" justifyContent="space-around">
            <h1 className="text-center">EMPLOYEES</h1>
            <button className="text-center" onClick={this.sortUser}>sort</button>
            <input
              type="search"
              name="search"
              value={this.state.search}
              onChange={this.handleInputChange}
            />
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
