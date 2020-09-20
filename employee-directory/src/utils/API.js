import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function(nat) {
    
    return axios.get("https://randomuser.me/api/?results=20&?nat=" + nat).
    then(res => 
    console.log("https://randomuser.me/api/?results=20&?nat=" + nat))
  },
  getBaseBreedsList: function() {
    return axios.get("https://randomuser.me/api/?results=20&inc=name,registered,picture,location,email,cell,phone");
  }
};
