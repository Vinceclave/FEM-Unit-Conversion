let converBtn = document.querySelector("#convert")
let inputEl = document.querySelector("#inputEl")
let lengthEl = document.querySelector("#lengthEl")
let volumeEl = document.querySelector("#volumeEl")
let massEl = document.querySelector("#massEl")

const meter =  3.281
const feet = 0.3048
const liter =  0.264
const gallon = 4.546092
const kilo =  2.204
const pound = 0.45359237

converBtn.addEventListener("click", function() {
    let baseValue = inputEl.value

    lengthEl.textContent = `${baseValue} meters = ${baseValue * meter} feet | ${baseValue} feet = ${baseValue * feet} meters`
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * meter).toFixed(2)} gallons | ${baseValue} gallons = ${(baseValue * feet).toFixed(2)} liters`
    massEl.textContent = `${baseValue} kilos = ${baseValue * meter} pounds | ${baseValue} pounds = ${baseValue * feet} kilos`
})


const darkMode = document.querySelector(".fa-sun")
const body = document.querySelector("body")
const bottomContent = document.querySelector(".bottom-content")
const conversionOutput = document.querySelectorAll(".conversion-output")

darkMode.addEventListener("click", function() {
    darkMode.classList.toggle("fa-moon")
    body.classList.toggle("body-darkmode")
    bottomContent.classList.toggle("bottom-content-darkmode")

    for (let i = 0; i < conversionOutput.length; i++) {
        conversionOutput[i].classList.toggle("conversion-output-darkmode")
    }
})