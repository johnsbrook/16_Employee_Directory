import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {

  getEmployeesByTeam: function(nat) {
    return axios.get("https://randomuser.me/api/?results=25&nat=" + nat)
  },
  // Commented as it's not required
  // getEmployeeListByNat: function() {
  //       return axios.get("https://randomuser.me/api/?results=20&inc=nat");
  // }
};