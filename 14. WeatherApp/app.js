const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
});

app.post("/", (req, res)=>{
    var query = req.body.cityName;
    var apiKey = "742d0d55c1e804634de91bc91d192e0a";
    var units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;
    https.get(url, function(response){
        // console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            var temp = weatherData.main.temp;
            var description = weatherData.weather[0].description;
            var iconCode = weatherData.weather[0].icon;
            var imageUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
            
            res.write("<p>The weather is currently " + description + "</p>");
            res.write("<h1>The Temperaure in " + query + " is " + temp +" degrees celcius</h1>");
            res.write("<img src=" + imageUrl + ">");
            res.send();
        });
    });
});

app.listen(3000, ()=>{
    console.log("Server started on port 3000");
});
