const express = require("express");
const https = require("https");

const app = express();

app.get("/", (req, res)=>{
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=742d0d55c1e804634de91bc91d192e0a&units=metric";
    https.get(url, function(response){
        // console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            var temp = weatherData.main.temp;
            var description = weatherData.weather[0].description;
            var iconCode = weatherData.weather[0].icon;
            var imageUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
            
            res.write("<p>The weather is currently " + description + "</p>");
            res.write("<h1>The Temperaure in Delhi is " + temp +" degrees celcius</h1>");
            res.write("<img src=" + imageUrl + ">");
            res.send();
        });
    });
});

app.listen(3000, ()=>{
    console.log("Server started on port 3000");
});