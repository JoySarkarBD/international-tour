const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}

loadCountries()

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    for (const country of countries) {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>
        `
        countriesDiv.appendChild(div);
    }
}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayCountryDeatil(data[0]))
}

const displayCountryDeatil = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `<h3>${country.name}</h3>
    <p>Capital: ${country.name}</p>
    <p>population: ${country.population}</p>
    <img width="250px" src="${country.flag}">
    `
}