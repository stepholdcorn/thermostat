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

  describe('temperature lower limit', function() {

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

    it("should not increase temperature above 25 degrees when on", function() {
      thermostat.increaseTemperature(6);
      expect(thermostat.temperature).toEqual(25);
    });

    it("should not increase temperature above 32 degrees when off", function(){
      thermostat.switchOff();
      thermostat.increaseTemperature(13);
      expect(thermostat.temperature).toEqual(32);
    });

    it('should default to 25 degrees if switched on when temperature is above 25', function() {
      thermostat.switchOff();
      thermostat.increaseTemperature(8);
      thermostat.switchOn();
      expect(thermostat.temperature).toEqual(25);
    });

  });

  describe('energy usage display', function() {

    it('should be green when temperature less than 18 degrees', function() {
      thermostat.decreaseTemperature(3);
      expect(thermostat.displayColor()).toContain('Green');
    });

    it ('should be yellow when temperature is between 18 and 24 degrees', function() {
      expect(thermostat.displayColor()).toContain('Yellow');
    });

    it ('should be red when temperature is over 24 degrees', function() {
      thermostat.increaseTemperature(5);
      expect(thermostat.displayColor()).toContain('Red');
    });

  });

});
