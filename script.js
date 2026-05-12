const postalCode =
document.getElementById("postalCode");

const citySelect =
document.getElementById("citySelect");

const searchBtn =
document.getElementById("searchBtn");

const result =
document.getElementById("result");



 // Charger les communes


postalCode.addEventListener("input", () => {

    if(postalCode.value.length !== 5){

        return;

    }

    fetch(
`https://geo.api.gouv.fr/communes?codePostal=${postalCode.value}&fields=nom&format=json`
    )

    .then(response => response.json())

    .then(data => {

        citySelect.innerHTML = "";

        data.forEach(city => {

            const option =
            document.createElement("option");

            option.textContent = city.nom;

            option.value = city.nom;

            citySelect.appendChild(option);

        });

    })

    .catch(error => {

        console.log(error);

    });

});


// Bouton rechercher


searchBtn.addEventListener("click", () => {

    const city =
    citySelect.value;

    result.innerHTML = `

    <h2> Météo de ${city}</h2>

    <p> Température min : 12°C</p>

    <p> Température max : 22°C</p>

    <p> Probabilité de pluie : 30%</p>

    <p> Ensoleillement : 8 heures</p>

    `;

});