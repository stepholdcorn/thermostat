describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('by default', function() {

    it('starts at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });

  });

  describe('changing temperature', function() {

    it('can increase', function() {
      thermostat.increaseTemperature(1);
      expect(thermostat.temperature).toEqual(21);
    });

    it('can decrease', function() {
      thermostat.decreaseTemperature(1);
      expect(thermostat.temperature).toEqual(19);
    });

    it ('can reset', function(){
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20);
    });

  });

  describe('temperate limit', function() {

    it('has a minimum of 10 degrees', function() {
      expect(thermostat.minimum).toEqual(10);
    });

    it('not allow thermostat temp to be below 10 degrees', function(){
       thermostat.decreaseTemperature(11);
       expect(thermostat.temperature).toEqual(10);
    });

  });

  describe('power saving mode', function(){

    it('should be on by default', function() {
      expect(thermostat.powerSave).toBe(true);
    });

    it('should be on and sets maximum temperature to be 25 degrees', function() {
      expect(thermostat.maximum).toEqual(25);
    });

    it('should be able to switch off', function(){
      thermostat.switchOff();
      expect(thermostat.powerSave).toBe(false);
    });

    it('should be off and sets maximum temperature to be 32 degrees', function() {
      thermostat.switchOff();
      expect(thermostat.maximum).toEqual(32);
    });

  });

  describe('energy usage display', function() {

    it('should be green when temperature less than 18 degrees', function() {
      thermostat.decreaseTemperature(3);
      expect(thermostat.displayColor()).toContain('Green');
    });
  });

});
