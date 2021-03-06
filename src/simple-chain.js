const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: [],
    getLength() {

        return this.chain.length;
    },
    addLink(value) {

        if (value === undefined){
            this.chain.push("( )");
        }else this.chain.push("( "+ value +" )");

        return this;
    },
    removeLink(position) {
        if ((typeof position !== "number") || (!Number.isInteger(position)) || (position > this.getLength()) || (position < 1)){
            this.chain.length = 0;
            throw new Error();
        }
        position--;
        this.chain.splice(position,1);

        return this
    },
    reverseChain() {
        this.chain.reverse();
        return this
    },
    finishChain() {
        let str = '';
        str = this.chain.join("~~");
        this.chain.length = 0;
        return str;
    }
}

module.exports = chainMaker;
