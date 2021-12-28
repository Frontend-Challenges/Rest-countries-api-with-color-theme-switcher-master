import { CountriesService } from "./countries/service/countriesService.js";
import { Theme } from "./theme/theme.js";
import { UI } from "./ui/UI.js";

const ui = new UI();
const countriesService = new CountriesService();
const theme = new Theme();

/* Functions */
const getValueSelectedFromFilter = (e) => {
  ui.regionSelected = e.target.checked ? e.target.id : "";
  ui.removeAttr(ui.selectFilterByRegion, "open");
  ui.selectFilterByRegion.classList.remove("filter__title--hidden-input");
  ui.selectFilterByRegion.classList.add("filter__title--hidden-span");
  ui.inputSearchRegion.value = "";
  $countriesByRegion(ui.regionSelected);
};

const getValueInputSearch = (e) => {
  let value = e.target.value;

  ui.selectFilterByRegion.classList.remove("filter__title--hidden-span");
  ui.selectFilterByRegion.classList.add("filter__title--hidden-input");

  if (value.trim() === "") {
    formatCountries(countriesService.getInitCountries);
    return;
  }

  countriesService.searchCountryByName(value).then(formatCountries);
};

const redirectToDetail = (name) => {
  window.location.assign("./detail.html?name=" + name);
};

const formatCountries = (countries) => {
  while (ui.containerCountries.firstChild)
    ui.containerCountries.firstChild.remove();
  countries.forEach((country) => {
    let countryCard = document.createElement("div");
    countryCard.className = "country-card border-radius-4 shadow-principal";
    countryCard.onclick = () => redirectToDetail(country.name.common);

    countryCard.innerHTML = `
            <div class="country-card__image-box">
                <img src="${country.flags.png}" class="country-card__image" alt="${country.name} flag" />
            </div>
            <div class="country-card__body">
                <h3 class="country-card__title">
                    ${country.name.common}
                </h3>
                <ul class="country-card__list">
                    <li class="country-card__list-item">
                        Population:
                        <span>${country.population}</span>
                    </li>
                    <li class="country-card__list-item">
                        Region
                        <span>${country.region}</span>
                    </li>
                    <li class="country-card__list-item">
                        Capital: <span>${country.capital}</span>
                    </li>
                </ul>
            </div>
        `;

    ui.containerCountries.append(countryCard);
  });
};

const $countriesByRegion = (region) => {
  countriesService.searchCountriesByRegion(region).then(formatCountries);
};

const $allCountries = () => {
  countriesService.searchAllCountries().then((countries) => {
    countriesService.setInitCountries(countries);
    formatCountries(countries);
  });
};

/* Events */
ui.addEvent(ui.selectFilterByRegion, "change", getValueSelectedFromFilter);
ui.addEvent(document, "DOMContentLoaded", $allCountries);
ui.addEvent(ui.inputSearchRegion, "keyup", getValueInputSearch);
