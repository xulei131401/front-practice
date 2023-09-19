export const tObj = () => {
    // t1()
    t2()
}

const t1 = () => {
  /**
   * 对象内部this
   * 1. 对象属性是箭头函数, 无 this, 可以使用对象名称访问对象
   * 2. 对象属性是一般函数, 有this, 可以使用对象名称访问对象
   * 3. 函数内部可以使用局部同名变量覆盖
   * 4. 函数内部可以对对象进行覆盖，会影响其他对象属性
   */
  let a = {
    name: "xulei",
    fn: () => {
      console.log("fn a:", a);
      console.log("fn this:", this, this === a); // undefined false
    },
    fn1() {
      let a = null
      console.log("fn1 a:", a);
      console.log("fn1 this:", this, this === a); // 对象自身 true
    },
    fn2: function () {
      console.log("fn2 a:", a);
      console.log("fn2 this:", this, this === a); // 对象自身 true
    },
  };

  console.log("a:", a);
  a.fn();
  a.fn1();
  a.fn2();
}



const t2 = () => {
    /**
     * 对象引用
     * 1. 直接修改对象内部引用，影响
     * 2. 间接修改对象内部引用，影响
     */

    let a1 = {name: "zhangsan", age: 41}
    let a = {name: "xulei", age: 29, p: a1}
    console.log('a:', JSON.stringify(a))
    console.log("a1:", JSON.stringify(a1));

    // 直接
    a1.name = "lisi"
    console.log("a:", JSON.stringify(a));
    console.log("a1:", JSON.stringify(a1));

    // 间接
    let c = a.p
    console.log("c:", JSON.stringify(c));
    c.name = 'zhaoliu'
    console.log("a:", JSON.stringify(a));
    console.log("a1:", JSON.stringify(a1));
    console.log("c:", JSON.stringify(c));
}