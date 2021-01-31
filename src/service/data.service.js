import axios from "axios";

class CountryService {
  constructor() {
    this.apiHandler = axios.create({
      baseURL:
        "https://cors-anywhere.herokuapp.com/https://restcountries.eu/rest/v2/all",
      withCredentials: true,
    });
  }
  
  getCountries = () => this.apiHandler.get("/");
  getOnecountry = (country) => this.apiHandler.get(`/name/${country}`);
}

export default CountryService;
