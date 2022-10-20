//////////// DOM ELEMENTS ////////////

const inputEl = document.getElementById("input-el")
const btn = document.getElementById("btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

//////////// TO IMPERIAL FUNCTIONS ////////////

function meterToFeet(meter) {
    return (3.281 * meter).toFixed(3)
}

function litersToGallons(liters) {
    return (0.264 * liters).toFixed(3)
}

function kgsToPounds(kg) {
    return (2.204 * kg).toFixed(3)
}

//////////// TO METRIC FUNCTIONS ////////////

function feetToMeter(feet) {
    return (feet / 3.281).toFixed(3)
}

function gallonsToLiters(gallons) {
    return (gallons / 0.264).toFixed(3)
}

function poundsToKgs(pound) {
    return (pound / 2.204).toFixed(3)
}

//////////// CONVERT BUTTON CLICKED ////////////

btn.addEventListener("click", function(){
    const value = Number(inputEl.value)
    render(lengthEl, "meters" , "feet", meterToFeet(value), feetToMeter(value))
    render(volumeEl, "liters" , "gallons", litersToGallons(value), gallonsToLiters(value))
    render(massEl, "kilos" , "pounds", kgsToPounds(value), poundsToKgs(value))
    
    //////////// ONE FUNCTION TO RULE THEM ALL ////////////
    
    function render(resultEl, metric, imperial, toImperial, toMetric) {
    resultEl.textContent = `${value} ${metric} = ${toImperial} ${imperial} | ${value} ${imperial} = ${toMetric} ${metric} `
}
})

inputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      btn.click();
    }
});


