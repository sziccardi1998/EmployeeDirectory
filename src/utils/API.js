import axios from "axios";

export default {
    usersList: function() {
        return axios.get("https://randomuser.me/api/?results=25&nat=US");
    }
};