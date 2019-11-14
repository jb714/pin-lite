import axios from 'axios';

class pinsService {
  getData() {
    return axios.get('/allPins')
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
  }
}


export default pinsService;
