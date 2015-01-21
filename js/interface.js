var thermostat = new Thermostat();

$(document).ready(function(){

  $('h1').text(thermostat.temperature);

  $('.increase-temp').on('click', function() {
    thermostat.increaseTemperature();
    $('h1').text(thermostat.temperature);
  });

  $('.decrease-temp').on('click', function(){
    thermostat.decreaseTemperature();
    $('h1').text(thermostat.temperature);
  });

  $('.powersave-off').on('click', function() {
    thermostat.switchOff();
  });

  $('.powersave-on').on('click', function(){
    thermostat.switchOn();
    $('h1').text(thermostat.temperature);
  });

});
