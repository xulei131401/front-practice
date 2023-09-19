/**
 * 名词:
 * 1. 原型对象
 * 2. 构造函数
 * 3. prototype
 * 4. __proto__
 * 5. constructor
 * 6. 原型链
 */



export const tProto = () => {
  tHasConstructor()
  tNoConstructor();
}


const tObjectProto = () => {
  // Object 类的原型对象指向 null
  console.log("Object.prototype.__proto__:", Object.prototype.__proto__); // null;
}

const tHasConstructor = () => {
    function Cup(name) {
        this.name = name;
    }

    console.log("Cup:", Cup, Cup.prototype);

    // 添加实例共享方法
    Cup.prototype.vip = () => {
        console.log("我是vip杯子");
    };

    let cup = new Cup("热水杯");
    cup.vip();
    console.log(
    "cup.__ proto__ === Cup.prototype:",
    cup.__proto__ === Cup.prototype
    );
    console.log(
    "cup.__ proto__.constructor === Cup:",
    cup.__proto__.constructor === Cup
    );
    
    console.log("cup:", cup);
    // 每个对象都有一个__proto__指针来访问对象的原型
    // 原型也是一个对象，也有__proto__属性，还有constructor指针指向构造函数
    console.log("__proto__:", cup.__proto__);
    // 函数也是一个对象，除了有__proto__指针之外，还有prototype指针指向与之关联的原型对象，prototype的指向和__proto__指向不一定相同。
    console.log("constructor.prototype:", cup.constructor.prototype);
}

const tNoConstructor = () => {
    let p = Object.create(null)
    console.log('p:', p)
    console.log("p.__proto__:", p.__proto__);
    console.log("p.prototype:", p.prototype);
}