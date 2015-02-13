// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    $("#fortune-text").load("/fortune");
}
    
$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt, result) {
    evt.preventDefault();
    var url = "/weather?zipcode=" + $("#zipcode-field").val();
    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url,function(result) {
        var output = "Forecast: " + result['forecast'] + "Temp: " + result['temp'];
        // document.getElementById("weather-info").innerHTML=result;
        console.log(output);
        $("#weather-info").html(output);
            }
    );
}
    
$("#weather-form").on('submit', showWeather);






// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    $.post("/order-melons",
        $('#order-form').serialize(),
        function (result) {
            // TODO: show the result message after your form
            // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
        }
    );
}

$("#order-form").on('submit', orderMelons);


