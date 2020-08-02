import axios from "axios";

export default {
    getUser: function() {
        return axios.get("https://randomuser.me/api/?results=24&inc=name,phone,picture,dob,email,gender,nat&noinfo")
    }
};