// @ts-nocheck
window.addEventListener('DOMContentLoaded', () => {
    // Alle Formular Elemente aus dem DOM ziehen
    const form = document.getElementById('form');
    const formResults = document.getElementById('results');
    const nameInput = document.getElementById('name');
    const streetInput = document.getElementById('street');
    const streetNumberInput = document.getElementById('street-number');
    const cityInput = document.getElementById('city');
    const zipInput = document.getElementById('zip-code');
    const emailInput = document.getElementById('email');
    const submitButton = document.getElementById('submit-button');

    // Alle Ergebnis Elemente aus dem DOM ziehen
    const resultName = document.getElementById('result-name');
    const resultStreet = document.getElementById('result-street');
    const resultCity = document.getElementById('result-city');
    const resultEmail = document.getElementById('result-email');


    // Ausblenden / Einblenden der Container & Übergabe Werte
    submitButton.addEventListener('click', () => {
        resultName.append(nameInput.value);
        resultStreet.append(streetInput.value + ' ' + streetNumberInput.value);
        resultCity.append(zipInput.value + ' ' + cityInput.value);
        resultEmail.append(emailInput.value);

        form.style.display = 'none';
        formResults.style.display = 'flex';
        submitButton.style.display = 'none';
    });
});
