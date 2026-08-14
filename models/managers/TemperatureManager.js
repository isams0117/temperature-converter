const TemperatureVO = require('../valueobjects/TemperatureVO');

const TemperatureManager = () => {
  function convert(temperature, unit) {
    if (temperature.unit === 'CELSIUS' && unit === 'FAHRENHEIT') {
      const FahrenheitValue = (temperature.value * 9 / 5 )+ 32;
      return new TemperatureVO(FahrenheitValue, unit);
    }

    if (temperature.unit === 'FAHRENHEIT' && unit === 'CELSIUS') {
      const CelsiusValue = (temperature.value - 32) * 5 / 9;
      return new TemperatureVO(CelsiusValue, unit);
    }

    return new TemperatureVO(temperature.value, unit);
  }

  return { convert };
};

module.exports = TemperatureManager;