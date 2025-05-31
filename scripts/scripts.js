// Display current year
document.getElementById("year").textContent = new Date().getFullYear();


// Display last modified
document.getElementById("last-modified").textContent = document.lastModified;


// Wind chill calculation
function calculateWindChill(temp, windSpeed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temp * Math.pow(windSpeed, 0.16)
  ).toFixed(1);
}


const temp = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("wind-speed").textContent);


const windChill = (temp <= 10 && windSpeed > 4.8) ?
  `${calculateWindChill(temp, windSpeed)} °C` : "N/A";


document.getElementById("wind-chill").textContent = windChill;