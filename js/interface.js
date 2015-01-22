var thermostat = new Thermostat();

$(document).ready(function(){

  $('h1').text(thermostat.temperature);

  var updateTemperature = function() {
    $('h1').text(thermostat.temperature);
    $('h1').attr('class', thermostat.displayColor());
  };

  $('.increase-temp').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('.decrease-temp').on('click', function(){
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('.powersave-off').on('click', function() {
    thermostat.switchOff();
  });

  $('.powersave-on').on('click', function(){
    thermostat.switchOn();
    updateTemperature();
  });

  $('.reset').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

});
