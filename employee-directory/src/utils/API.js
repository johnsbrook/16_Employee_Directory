import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  // getRandomDog: function() {
    
  //   return axios.get("https://dog.ceo/api/breeds/image/random");
  // },
  getDogsOfBreed: function(breed) {
    return axios.get("https://randomuser.me/api/?results=5&nat=" + breed );
  },
  getBaseEmployeesList: function() {
    return axios.get('https://randomuser.me/api/?results=10&inc=name,registered,picture&nat=us')
    // return axios.get("https://dog.ceo/api/breeds/list");
    // return axios.get("https://randomuser.me/api/?nat=")
  }
};
