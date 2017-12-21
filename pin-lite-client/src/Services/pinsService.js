import axios from 'axios';

class pinsService {
  getData() {
    return axios.get('http://localhost:8080/allPins')
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
  }
}


export default pinsService;
