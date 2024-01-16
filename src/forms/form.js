document.addEventListener('DOMContentLoaded', () => {
    const countrySelect = document.getElementById('countrySelect');
    const countryInfo = document.getElementById('countryInfo');
    const countryForm = document.getElementById('countryForm');
    let data;

    fetch('form.json')
        .then(response => response.json())
        .then(dataResponse => {
            data = dataResponse;
            data.forEach(country => {
                const option = document.createElement('option');
                option.value = country.name;
                option.textContent = country.name;
                countrySelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    window.displayCountryInfo = function () {
        const selectedCountry = countrySelect.value;
        const selectedCountryData = data.find(country => country.name === selectedCountry);

        if (selectedCountryData) {
            const infoHTML = `
                <h2>${selectedCountryData.name}</h2>
                <p>Capital: ${selectedCountryData.capital}</p>
                <p>Population: ${selectedCountryData.population}</p>
                <p>Region: ${selectedCountryData.region}</p>
            `;
            countryInfo.innerHTML = infoHTML;
            countryInfo.classList.remove('hidden');
        } else {
            countryInfo.innerHTML = '<p>No information available for the selected country.</p>';
            countryInfo.classList.remove('hidden');
        }
    };

    countryForm.addEventListener('submit', event => {
        event.preventDefault();
    });
});
