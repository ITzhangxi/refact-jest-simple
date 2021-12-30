const { calculate } = require("./calculate");
const { TYPE } = require("./type");

test("计算 1 + 2 + 3 = 6", () => {
  const arr = [
    { type: TYPE.AAA, num: 1 },
    { type: TYPE.AAA, num: 2 },
    { type: TYPE.AAA, num: 3 },
  ];
  expect(calculate(arr)).toBe(6);
});

test("计算 6-2 =4", () => {
  const arr = [
    { type: TYPE.AAA, num: 6 },
    { type: TYPE.BBB, num: 2 },
  ];
  expect(calculate(arr)).toBe(4);
});

test("计算 (1+6-2)*3/5 =3", () => {
  const arr = [
    { type: TYPE.AAA, num: 1 },
    { type: TYPE.AAA, num: 6 },
    { type: TYPE.BBB, num: 2 },
    { type: TYPE.CCC, num: 3 },
    { type: TYPE.DDD, num: 5 },
  ];
  expect(calculate(arr)).toBe(3);
});
