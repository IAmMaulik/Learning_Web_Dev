const express = require("express");
const https = require("https");

const app = express();

app.get("/", (req, res)=>{
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=742d0d55c1e804634de91bc91d192e0a&units=metric";
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            var temp = weatherData.main.temp;
            console.log(temp);
            var description = weatherData.weather[0].description;
            console.log(description);
        });
    });

    res.send("Server is up and running!");
});

app.listen(3000, ()=>{
    console.log("Server started on port 3000");
});