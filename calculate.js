const { TYPE } = require("./type");
const { MAP_TYPE_FN } = require("./utils");

function calculate(arr = []) {
  return arr.reduce((pre, current) => {
    switch (current.type) {
      case TYPE.AAA:
        return MAP_TYPE_FN.EEE(pre, current.num);
      case TYPE.BBB:
        return MAP_TYPE_FN.FFF(pre, current.num);
      case TYPE.CCC:
        return MAP_TYPE_FN.GGG(pre, current.num);
      case TYPE.DDD:
        return MAP_TYPE_FN.HHH(pre, current.num);
      default:
        return pre;
    }
  }, 0);
}
module.exports = { calculate, TYPE };
