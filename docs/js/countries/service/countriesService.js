import instance from "../axios/config.js";

export class CountriesService {
  initCountries = [];

  constructor() {}

  setInitCountries(countries) {
    this.initCountries = countries;
  }

  get getInitCountries() {
    return this.initCountries;
  }

  async searchCountriesByRegion(region) {
    try {
      const response = await instance.get(
        `/region/${region}/?fields=name,population,capital,flags,region`
      );
      const countries = response.data;
      return countries;
    } catch (error) {
      console.log("error", error);
    }
  }

  async searchAllCountries() {
    try {
      const response = await instance.get(
        `/all?fields=name,population,capital,flags,region`
      );
      const countries = response.data;
      return countries;
    } catch (error) {
      console.log("error", error);
    }
  }

  async searchCountryByName(name) {
    try {
      const response = await instance.get(
        `/name/${name}?fields=name,population,capital,flags,region,subregion,tld,currencies,languages,borders`
      );
      const country = response.data;
      return country;
    } catch (error) {
      console.log("error", error);
    }
  }
}
