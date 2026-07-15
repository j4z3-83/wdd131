function calculateWindChill()
{
    const temp = 26;
    const speed = 18;   
    if(temp > 10 || speed <= 4.8)
    {
        return document.getElementById("windchill").innerText = "N/A";
    }
    const vPower = Math.pow(speed, 0.16);
    const windChill = 13.12 + (0.6215 * temp) - (11.37 * vPower) + (0.3965 * temp * vPower);

    document.getElementById("windchill").innerText = Math.round(windChill * 10) / 10;
}
