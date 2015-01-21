var Thermostat = function() {
  this.temperature = 20;
  this.minimum = 10;
  this.powerSave = true;
  this.maximum = 25;
};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  this.temperature += changeTempBy;
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {

  if (this.temperature - changeTempBy >= this.minimum) {
    this.temperature -= changeTempBy;
  }
  else {
    this.temperature = this.minimum;
  };

};

Thermostat.prototype.switchOff = function() {
  this.powerSave = false;
  this.maximum = 32;
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20;
};

Thermostat.prototype.displayColor = function() {
  if (this.temperature < 18) {
    return 'Green';
  }
  else if (this.temperature > 24) {
    return 'Red';
  }
  else {
    return 'Yellow';
  };
};
