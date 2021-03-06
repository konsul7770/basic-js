const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {

        let count = 0;
        let deppth = 0;

        if (Array.isArray(arr)){
            for (let el of arr){

                count = this.calculateDepth(el);

                if (count > deppth){
                    deppth = count;
                    count = 0;
                }
            }
            return deppth+1;
        }else {
            return 0;
        }
    }
};