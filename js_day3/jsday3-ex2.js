let currentCountry;
let OGColor;

document.getElementById("svg2").onclick = (evt) => {
    const countrySelect = evt.target;
    const isoCode = countrySelect.id;

    console.log(isoCode);

    if (currentCountry) {
        currentCountry.style.fill = OGColor;
    }
    currentCountry = countrySelect;
    OGColor = countrySelect.style.fill;
    countrySelect.style.fill = "green";
    if (isoCode === "dk") {
        countrySelect.style.fill = "red";
    }
    if (isoCode === "ru") {
        countrySelect.style.fill = "SaddleBrown";
    }
    
    if (isoCode.length > 2)
        return // forhindrer error ved at ramme udenfor lande = isoCode "svg2"
    // lande udenfor europe giver stadig error, har jeg ikke løst.

    fetch(`https://countries.plaul.dk/api/countries/${isoCode}`)
    .then(res => {
        if (res.status >= 400) {
            throw `Error getting info for ${isoCode}`;
        }
        return res.json();
    })
    .then(info => {
        document.getElementById("flag").src = info.flag;
        document.getElementById("countryName").innerHTML = info.name.common;
        document.getElementById("capital").innerHTML = info.capital;

    })
}