const CustomError = require("../extensions/custom-error");

module.exports = function getSeas(date) {
    let outdate = '';

    if (date === undefined){
        return "Unable to determine the time of year!";
    }
    if (Object.prototype.toString.call(date) !== '[object Date]'){
        throw new Error();
    }

    let month = date.getMonth();
    if ((month === 11)||((month >= 0)&&(month <= 1))){
        outdate = "winter";
    }else if ((month >= 2)&&(month<= 4)){
        outdate = "spring";
    }else if ((month >= 5)&&(month <= 7)){
        outdate = "summer";
    }else if ((month >= 8)&&(month <= 10)){
        outdate = "autumn";
    }
    return outdate;
}
