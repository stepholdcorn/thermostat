var thermostat = new Thermostat();

$(document).ready(function(){
  $('h1').text(thermostat.temperature);
  $('.increase-temp').on('click', function() {
    thermostat.increaseTemperature();
    $('h1').text(thermostat.temperature);
  });
});
