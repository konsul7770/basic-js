const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

    if ((arr === undefined)||(!Array.isArray(arr))){
        throw new Error();
    }

    let copyArray = arr.map(x => x);
    let transformedArray = [];

    let i = 0;
    while (i !== -1){

        let v = copyArray[i];
        switch (v) {
            case "--discard-prev":
                if (i !== 0){
                    copyArray.splice(i-1,1);
                    i--;
                }
                break;
            case "--discard-next":
                if ((i+1) < copyArray.length){
                    copyArray.splice(i+1,1);
                }
                break;
            case "--double-prev":
                if (i !== 0){
                    copyArray.splice(i-1,0,copyArray[i-1]);
                    i++;
                }
                break;
            case "--double-next":
                if ((i+1) < copyArray.length){
                    copyArray.splice(i+1,0,copyArray[i+1]);
                }
                break;
            default:
        }
        i++;
        if (i >= copyArray.length){
            i = -1;
        }
    }

    for (let v of copyArray){
        if ((v !== "--discard-prev")&&((v !== "--discard-next"))&&(v !== "--double-prev")&&(v !== "--double-next")){
            transformedArray.push(v);
        }
    }

    return transformedArray;
}