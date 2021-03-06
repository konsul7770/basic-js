const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

    if (str === undefined){
        str = '';
    }else if (typeof str === 'object') {
        str = `${str}`;
    }else str = str+"";

    if (options.addition === undefined){
        options.addition = '';
    }else if (typeof options.addition === 'object') {
        options.addition = `${options.addition}`;
    }else options.addition = options.addition+"";

    let separator = options.separator === undefined ? "+" : options.separator;
    let additionSeparator = options.additionSeparator === undefined ? "|" : options.additionSeparator;

    let additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;
    let repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes;

    let addition = [], string = [];
    for (let i = 0; i < additionRepeatTimes; i++) {
        addition.push(options.addition);
    }

    str = str.concat(addition.join(additionSeparator));

    addition.length = 0;
    for (let k = 0; k < repeatTimes; k++) {
        string.push(str);
    }

    let outstring = string.join(separator);
    string.length = 0;
    return outstring;
};