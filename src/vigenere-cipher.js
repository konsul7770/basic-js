const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bol) {
    this.bol = bol;
  }
  encrypt(message, key) {
    if ((message === undefined) || (key === undefined)){
      throw new Error();
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let out = [];
    let l = 0;
    for (let i = 0; i < message.length; i++){
      if (VigenereCipheringMachine.table[0].includes(message[i])){
        let col = VigenereCipheringMachine.table[0].indexOf(key[l]);
        let row = VigenereCipheringMachine.table[0].indexOf(message[i]);
        out.push(VigenereCipheringMachine.table[row][col]);
        l++;
      }else out.push(message[i]);
      if (l === key.length) l = 0;
    }
    if (this.bol === false){
      out.reverse();
    }
    return out.join('');
  }
  decrypt(encryptMessage, key) {
    if ((encryptMessage === undefined) || (key === undefined)){
      throw new Error();
    }
    encryptMessage = encryptMessage.toUpperCase();
    key = key.toUpperCase();
    let l = 0;
    let decode = [];
    for (let i = 0;i<encryptMessage.length;i++){
      if (VigenereCipheringMachine.table[0].includes(encryptMessage[i])){
        let row = VigenereCipheringMachine.table[0].indexOf(key[l]);
        let col = VigenereCipheringMachine.table[row].indexOf(encryptMessage[i]);
        decode.push(VigenereCipheringMachine.table[0][col]);
        l++;
      }else decode.push(encryptMessage[i]);
      if (l === key.length) l = 0;
    }
    if (this.bol === false){
      decode.reverse();
    }
    return decode.join('');
  }
  static table = VigenereCipheringMachine.formTable();
  static formTable(){
    let table = [];
    let c = 65;
    for (let i = 0; i< 26; i++){
      table[i] = [];
      for (let j = 0; j< 26;j++){
        table[i].push(String.fromCharCode(c));
        c++;
        if (c === 91) c = 65
      }
      c++;
    }
    return table;
  }
}

module.exports = VigenereCipheringMachine;
