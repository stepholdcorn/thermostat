var Thermostat = function() {
  this.temperature = 20;
  this.minimum = 10;
};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  this.temperature += changeTempBy;
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
  this.temperature -= changeTempBy;
};
