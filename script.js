const postalCode =
document.getElementById("postalCode");

const citySelect =
document.getElementById("citySelect");

postalCode.addEventListener("input", () => {

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