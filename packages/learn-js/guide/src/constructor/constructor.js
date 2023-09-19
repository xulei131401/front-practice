/**
 * 结论：
 *  1.构造函数首字母大写
 *  2.内部this指向实例对象自身
 *  3.参数可以在new的时候传入
 *  4.函数外部作用域没有this指向
 */

console.log('this:', this) // undefined
function Person(name,age){
    this.name = name
    this.age = age
    console.log('person-this:', this)
}

export const tConstructor = () => {
   let p = new Person("许磊", 23)
   console.log("p:", p);
}