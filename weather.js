$(document).ready(function () {
  let weatherIcon = {
    '01': 'fas fa-sun',
    '02': 'fas fa-cloud-sun',
    '03': 'fas fa-cloud',
    '04': 'fas fa-cloud-meatball',
    '09': 'fas fa-cloud-sun-rain',
    10: 'fas fa-cloud-showers-heavy',
    11: 'fas fa-poo-storm',
    13: 'fas fa-snowflake',
    50: 'fas fa-smog',
  };

  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=5c3c3fc97003576692a15597ad94eba6&units=metric',
    dataType: 'json',
    type: 'GET',
    success: function (data) {
      var $Icon = data.weather[0].icon.substr(0, 2);
      var $Temp = Math.floor(data.main.temp) + '°';
      var $city = data.name;

      $('.CurrIcon').append('<i class="' + weatherIcon[$Icon] + '"></i>');
      $('.currTemp').append($Temp);
      $('.City').append($city);
    },
  });
});
