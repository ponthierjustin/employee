import axios from "axios";

export default {
    getUser: function() {
        return axios.get("https://randomuser.me/api/?results=5&inc=name,picture,dob,email,gender,nat&noinfo")
    }
};