$(document).ready(function() {
    const body = document.querySelector('body');
    const title = document.getElementById('title');
    const spotify = document.getElementById('spotify');
    const icon = document.getElementById('img-icon').innerHTML;
    const date = new Date();
    const year = date.getFullYear();
    document.getElementById('year').innerText = year;
    if (true) {
        $("body").removeClass();     
        switch(icon) {
            case "01d":
                body.classList.add('clear-sky-01d');
                title.style.background = "url('../images/clear.jpg')";
                spotify.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX1BzILRveYHb";
            break;
            case "02d":
                body.classList.add('few-clouds-02d');
                title.style.background = "url('../images/fewclouds.jpg')";
                spotify.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX1BzILRveYHb";
            break;
            case "03d":
                body.classList.add('scattered-clouds-03d');
                title.style.background = "url('../images/fewclouds.jpg')";
                title.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX1BzILRveYHb";
            break;
            case "04d":
                body.classList.add('broken-clouds-04d');
                title.style.background = "url('../images/fewclouds.jpg')";
                spotify.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX1BzILRveYHb";
            break;
            case "09d":
                body.classList.add('shower-rain-09d');
                title.style.background = "url('../images/fewclouds.jpg')";
                spotify.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX1BzILRveYHb";
            break;
            case "10d":
                body.classList.add('rain-10d');
                title.style.background = "url('../images/rain.jpg')";
                spotify.src ="https://open.spotify.com/embed/playlist/37i9dQZF1DX2pSTOxoPbx9";
            break;
            case "11d":
                body.classList.add('thunderstorm-11d');
                title.style.background = "url('../images/thunderstorm.png')";
                spotify.src ="https://open.spotify.com/embed/playlist/37i9dQZF1DX2pSTOxoPbx9";
            break;
            case "13d":
                body.classList.add('snow-13d');
                title.style.background = "url('../images/snow.jpg')";
                spotify.src ="https://open.spotify.com/embed/playlist/37i9dQZF1DX4H7FFUM2osB";
            break;
            case "50d":
                body.classList.add('mist-50d');
                title.style.background = "url('../images/mist.jpg')";
                spotify.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX79Y9Kr2M2tM";
            break;
            case "01n":
                body.classList.add('clear-sky-01n');
                title.style.background = "url('../images/night.jpg')";
                spotify.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DWZd79rJ6a7lp";
            break;
            case "02n":
                body.classList.add('few-clouds-02n');
                title.style.background = "url('../images/nightcloud.jpg')";
                spotify.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX3WdioUzkg8I";
            break;
            case "03n":
                body.classList.add('scattered-clouds-03n');
                title.style.background = "url('../images/nightcloud.jpg')";
                spotify.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DXdbkmlag2h7b";
            break;
            case "04n":
                body.classList.add('broken-clouds-04n');
                title.style.background = "url('../images/nightcloud.jpg')";
                spotify.src ="https://open.spotify.com/embed/playlist/37i9dQZF1DXa1rZf8gLhyz";
            break;
            case "09n":
                body.classList.add('shower-rain-09n');
                title.style.background = "url('../images/rain.jpg')";
                spotify.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX2mFmJUZg4Mp";
            break;
            case "10n":
                body.classList.add('rain-10n');
                title.style.background = "url('../images/rain.jpg')";
                spotify.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX1n9whBbBKoL";
            break;
            case "11n":
                body.classList.add('thunderstorm-11n');
                title.style.background = "url('../images/thunderstorm.png')";
                spotify.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DXdipfKDeMPTE";
            break;
            case "13n":
                body.classList.add('snow-13n');
                title.style.background = "url('../images/snow.jpg')";
                spotify.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DWWxd0qWj50iH" ;
            break;
            case "50n":
                body.classList.add('mist-50n');
                title.style.background = "url('../images/mist.jpg')";
                spotify.src ="https://open.spotify.com/embed/playlist/37i9dQZF1DWSUFOo47GEsI";
            break;
            case "start":
                body.classList.add('start');
            break;
            default:
            body.classList.add('clear-sky-01d');
            spotify.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX1BzILRveYHb";
            title.style.background = "url('../images/clear.jpg')";
        }
    }
});

$(document).ready(function(){
    $("#help").click(function(){
        $(this).toggleClass('icn-spinner') //remove class to stop animation
        $("#help-panel").slideToggle("slow");
    });
    $("#spotify-btn").click(function(){
        $(this).toggleClass('icn-spinner') //remove class to stop animation
        $("#spotify-player").slideToggle("slow");
    });
});