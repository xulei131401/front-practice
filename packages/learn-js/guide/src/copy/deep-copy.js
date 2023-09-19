export const tDeepCopy = () => {
    t1()
}

const c = {name: "许磊", age:29}
const m1 = new Map()
m1['name', 'xulei']

const a = {
  p1: "许磊",
  p2: 123,
  p3: true,
  p4: Symbol("asd"),
  p5: c,
  p6: m1
};

const t1 = () => {
    /**
     * 深拷贝
     * 1. ...运算符是浅拷贝，深层次对象还有引用
     * 2. Object.assign() 也是浅拷贝
     */

    console.log('a:', JSON.stringify(a))
    let b = {...a}
    console.log('b:', JSON.stringify(b))
    console.log('a === b:', a === b)

    b.p5.name = "hhhh"
    console.log("a:", JSON.stringify(a));
    console.log("b:", JSON.stringify(b));
}

const t2 = () => {
  /**
   * 1. 使用JSON.stringify(),但无法复制函数，undefined,symbol
   * 2. 递归copy,但是如果有循环引用的话，会无限递归
   */
}

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function deepCopy1(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  let copy = obj.constructor();

  for (let attr in obj) {
    if (obj.hasOwnProperty(attr)) {
      copy[attr] = deepCopy(obj[attr]);
    }
  }

  return copy;
}