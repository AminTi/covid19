let select = document.getElementById("countries")

async function getCountry(country) {
    let res = await fetch(`https://covid19.mathdro.id/api/countries/${country}`)
    return res.json()
}


select.addEventListener("change", function (e) {
    let country = select.value
    getCountry(country).then(data => {
        updateUi(country, data)


    })
})


function updateUi(country, data) {
    let h2 = document.querySelector('h2')
    h2.innerHTML = country

    let list = document.querySelector('.list')
    list.innerHTML = `
    <li> Confiremd: ${data.confirmed.value}</li>
    <li> Recoverd: ${data.recovered.value}</li>
    <li> Deaths: ${data.deaths.value}</li>
    <li> Last update: ${data.lastUpdate}</li>
   `

}