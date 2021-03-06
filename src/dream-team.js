const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if ((members === undefined)||(members === null)){
    return false;
  }
  let teamname = '';
  for (let i = 0; i < members.length; i++){
    if (typeof members[i] === "string"){
      teamname = teamname + members[i].trim().charAt(0);
    }
  }
  return teamname.toUpperCase().split('').sort().join('');
};
