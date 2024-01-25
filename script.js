const apiKey =b723dd067cd84700bb0171201242501
const Icon = document.querySelector(`#icon`)
const temp = document.querySelector(`#temp`)
const f = document.querySelector(`#f`)
const c = document.querySelector(`#c`)
const feelsLike = document.querySelector(`#feelslike`)
const textInput = document.querySelector(`#textInput`).value
const submitButton = document.querySelector(`#submitButton`)
const cityandcountry = document.querySelector(`#cityandcountry`)
const Cloud = document.querySelector(`#cloud`)
const Wind = document.querySelector(`#wind`)
const precip = document.querySelector(`#precip`)
const humid = document.querySelector(`#humid`)

button.addEventListener('click', async () => {
    let textInput = document.querySelector("#inputBar").value
    //console.log(textInput)
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    //console.log(response.data.sprites.other.home.front_default)
    let pokePic = response.data.sprites.other.home.front_default
    pokemonImage.setAttribute ('src',`${pokePic}`)
    let pokeName = response.data.name
    pokemonName.innerHTML = (`${pokeName}`)
    //console.log(response.data.name)
})