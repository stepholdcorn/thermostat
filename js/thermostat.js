var Thermostat = function() {
  this.temperature = 20;
  this.minimum = 10;
  this.powerSave = true;
  this.maximum = 25;
  this.changeTempBy = 1;
};

Thermostat.prototype.increaseTemperature = function() {
  if (this.temperature + this.changeTempBy <= this.maximum) {
    this.temperature += this.changeTempBy;
  }
  else {
    this.temperature = this.maximum;
  };
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature - this.changeTempBy >= this.minimum) {
    this.temperature -= this.changeTempBy;
  }
  else {
    this.temperature = this.minimum;
  };
};

Thermostat.prototype.switchOff = function() {
  this.powerSave = false;
  this.maximum = 32;
};

Thermostat.prototype.switchOn = function(){
  this.powerSave = true;
  this.maximum = 25;
  if(this.temperature > this.maximum){
    this.temperature = this.maximum;
  }else{
    this.temperature;
  };
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
