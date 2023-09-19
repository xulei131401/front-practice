export const tCompare = () => {
    tCBasicDataType()
    tCUndefined()
    tCMap()
    tCSymbol()
    tCSet()
    // tCNull()
    // tCObject()
}


const tCNull = () => {
  /**
   * 比较 null
   *
   */
  console.log("null == null:", null == null); // true
  console.log("null === null:", null === null); // true
}

const tCUndefined = () => {
  /**
   * 比较 undefined
   *
   */
  console.log("undefined == undefined:", undefined == undefined); // true
  console.log("undefined === undefined:", undefined === undefined); // true
};

const tCObject = () => {
  /**
   * 比较对象是不是同一个
   *  结论：
   *  1.只有把一个变量赋值给另一个，使用 == 或者 === 才是true
   *
   */

  let a = {};
  let a1 = {};
  let a2 = a1;
  console.log("a == a1:", a == a1); // false
  console.log("a === a1:", a === a1); // false
  console.log("a1 == a2:", a1 == a2); // true
  console.log("a1 === a2:", a1 === a2); // true

  let b1 = { name: "222" };
  let b2 = { name: "222" };
  console.log("b1 == b2:", b1 == b2); // false
  console.log("b1 === b2:", b1 === b2); // false
  // console.log('{} === {}', {} === {})
}

const tCBasicDataType = () => {
  // Number
  console.log("1 == 1:", 1 == 1); // true
  console.log("1 === 1:", 1 == 1); // true
  // String
  console.log("'ss' == 'ss':", "ss" == "ss"); // true
  console.log("'ss' === 'ss':", "ss" === "ss"); // true

  // Boolean
  console.log("true == true:", true == true); // true
  console.log("true === true:", true === true); // true

  // BigInt
  console.log(
    "9007199254740991n == 9007199254740991n:",
    9007199254740991n == 9007199254740991n
  ); // true
  console.log(
    "9007199254740991n === 9007199254740991n:",
    9007199254740991n === 9007199254740991n
  ); // true
}

const tCSymbol = () => {
  /**
   * 结论：Symbol本质上是object,比较规则跟object一样
   */
  let symbol1 = Symbol("myKey");
  let symbol2 = Symbol("myKey");
  console.log("symbol:", typeof symbol1); // symbol

  // symbol同值，但是2个变量，永远不相等
  console.log("symbol1 == symbol2:", symbol1 == symbol2); // false
  console.log("symbol1 === symbol2:", symbol1 === symbol2); // false
}

const tCMap = () => {
    /**
     * 结论：Map本质上是object,比较规则跟object一样
     */
    let m1 = new Map();
    let m2 = new Map();
    console.log("Map:", typeof m1); // object
};

const tCSet = () => {
  /**
   * 结论：Set本质上是object,比较规则跟object一样
   */
  let set1 = new Set();
  let set2 = new Set();
  console.log("Set:", typeof set1); // object
};