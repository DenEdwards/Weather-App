require("dotenv").config();
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs");

app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));


app.get("/", function(req,res){
    res.render("weather",{Icon: "start"});    
});

app.post("/", function(req, res){

    const query = req.body.cityName;
    const apiKey = process.env.APIKEY;
    const units = "metric";
    //endpoint for the api
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey+"&units="+units+"";

    //Get the response from the api url that we're using
    https.get(url, function(response){
        //when we receive data
        response.on("data", function(data){
            //turn json into js object
            const weatherData = JSON.parse(data);
            if(weatherData.message === "Nothing to geocode" || weatherData.message === "city not found"){
                res.render("error", {Message: weatherData.message, Icon: "start"});
            }else{
                //get the data from the js object
                const temp = weatherData.main.temp;
                const des = weatherData.weather[0].description;
                const icon = weatherData.weather[0].icon;
                const feels_like = weatherData.main.feels_like;
                const country = weatherData.sys.country;
                const lon = weatherData.coord.lon;
                const lat = weatherData.coord.lat;
                const name = weatherData.name;
                //the image url from the api based on the icon associated with the weather
                const imageUrl = "http://openweathermap.org/img/wn/"+icon +"@2x.png";
                res.render("results", {Name: name, Temp: temp, Des: des, ImageUrl: imageUrl, Icon: icon, FeelsLike: feels_like, Country: country, Lon: lon, Lat:lat });
            }
        });
        console.log(response.statusCode);
    });
});

app.listen(3000, function(){
    console.log("Server Running on Port 3000...");
});