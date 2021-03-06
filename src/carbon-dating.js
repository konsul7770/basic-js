const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  let a = Number.parseFloat(sampleActivity);

  if ((typeof sampleActivity !== "string")||(Number.isNaN(a)) || (a <= 0) || (a > MODERN_ACTIVITY)){
    return false;
  }

  let k = Math.LN2/HALF_LIFE_PERIOD;
  return  Math.ceil((Math.log(MODERN_ACTIVITY/a))/k);
};
