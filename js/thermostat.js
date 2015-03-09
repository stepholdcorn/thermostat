var Thermostat = function() {
  this.temperature = 20;
  this.minimum = 10;
  this.powerSave = true;
  this.maximum = 25;
  this.changeTempBy = 1;

  this.maximumPowerSaveOn = 25;
  this.maximumPowerSaveOff = 32;
  this.resetTemperatureValue = 20;
  this.ecoFriendlyValue = 18;
  this.energyIntenseValue = 24;
};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  changeTempBy = changeTempBy || this.changeTempBy;
  if (this.temperature + changeTempBy <= this.maximum) {
    this.temperature += changeTempBy;
  }
  else {
    this.temperature = this.maximum;
  }
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
  changeTempBy = changeTempBy || this.changeTempBy;
  if (this.temperature - changeTempBy >= this.minimum) {
    this.temperature -= changeTempBy;
  }
  else {
    this.temperature = this.minimum;
  }
};

Thermostat.prototype.switchOff = function() {
  this.powerSave = false;
  this.maximum = this.maximumPowerSaveOff;
};

Thermostat.prototype.switchOn = function(){
  this.powerSave = true;
  this.maximum = this.maximumPowerSaveOn;

  if(this.temperature > this.maximum){
    this.temperature = this.maximum;
  }
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.resetTemperatureValue;
};

Thermostat.prototype.displayColor = function() {
  if (this.temperature < this.ecoFriendlyValue) {
    return 'ecoFriendly';
  }
  else if (this.temperature > this.energyIntenseValue) {
    return 'energyIntense';
  }
  else {
    return 'energyNeutral';
  }
};
