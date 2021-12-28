export class UI {
  selectFilterByRegion;
  inputSearchRegion;
  regionSelected;
  containerCountries;
  containerCountry;
  countryBorders;

  constructor() {
    this.selectFilterByRegion = document.querySelector(".filter");
    this.inputSearchRegion = document.querySelector(".search__input");
    this.containerCountries = document.querySelector(".container-countries");
    this.containerCountry = document.querySelector(".container-detail");
    this.countryBorders = document.querySelector(".detail-country__border");
  }

  addEvent(element, event, fn) {
    element.addEventListener(event, fn);
  }

  removeAttr(element, attr) {
    element.removeAttribute(attr);
  }

  printContentInHtml(content, selector) {
    console.log("dassadsad");
    selector.appendChild(content);
  }
}
