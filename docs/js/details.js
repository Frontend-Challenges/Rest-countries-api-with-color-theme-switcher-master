import { CountriesService } from "./countries/service/countriesService.js";
import { Theme } from "./theme/theme.js";
import { UI } from "./ui/UI.js";
import { Helper } from "./utils/helper.js";

const ui = new UI();
const helpers = new Helper();
const countriesService = new CountriesService();
const theme = new Theme();

/* Functions */
const getDetailCountry = () => {
  const countryName = helpers.getParamUrl("name");

  countriesService.searchCountryByName(countryName).then((country) => {
    if (!country.length < 0) return;

    formatCountry(country[0]);
  });
};

const formatCountry = (country) => {
  console.log(country);
  let countryDetail = document.createElement("div");
  countryDetail.className = "detail-country border-radius-4";

  countryDetail.innerHTML = `
            <div class="detail-country__content">
                    <div class="detail-country__image-box">
                        <img class="detail-country__image" src="${
                          country.flags.svg
                        }" alt="">
                    </div>
                    <div class="detail-country__body">
                        <h3 class="detail-country__title">
                            ${country.name.common}
                        </h3>
                        <div class="detail-country__list-flex">
                            <ul class="detail-country__list">
                                <li class="detail-country__list-item">
                                    Native name:
                                    <span>${country.name.common}</span>
                                </li>
                                <li class="detail-country__list-item">
                                    Population:
                                    <span>${country.population}</span>
                                </li>
                                <li class="detail-country__list-item">
                                    Region: 
                                    <span>${country.region}</span>
                                </li>
                                <li class="detail-country__list-item">
                                    Sub Region: 
                                    <span>${country.subregion}</span>
                                </li>
                                <li class="detail-country__list-item">
                                    Capital: 
                                    <span>${country.capital}</span>
                                </li>
                            </ul>
                            <ul class="detail-country__list">
                                <li class="detail-country__list-item">
                                    Top Level Domain:
                                    <span>${country.tld[0]}</span>
                                </li>
                                <li class="detail-country__list-item">
                                    Currencies
                                    <span>${Object.values(country.currencies)
                                      .map((currencie) => currencie.name)
                                      .join(", ")}</span>
                                </li>
                                <li class="detail-country__list-item">
                                    Languages: <span>${Object.values(
                                      country.languages
                                    ).join(", ")}</span>
                                </li>
                            </ul>
                        </div>
                        ${
                          country.borders.length > 0
                            ? `<div class="detail-country__border">
                        <h4 class="detail-country__border-title">
                            Border Countries:
                        </h4>
                        <div class="detail-country__border-items">
                        ${country.borders
                          .map((border) => {
                            return `
                                    <a href="#" class="button button--primary
                                    border-radius-4 button--shadow">${border}</a>
                                `;
                          })
                          .join("")}`
                            : ""
                        }
                </div>
            </div>
        `;
  ui.containerCountry.append(countryDetail);
};

/* Events */

ui.addEvent(document, "DOMContentLoaded", getDetailCountry);
