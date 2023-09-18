// ts类

class Animal {
    // 默认public,protected,private
    name: string;
    protected footNum: number = 12;

    // 类里不能定义const
    //   const NUM: number = 2;

    constructor(name: string) {
        this.name = name;
    }

    greet() {
        console.log("Animal:" + this.name);
    }
}

class Dog extends Animal {
    private _fullName: string = "";

    // 存取器
    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        let passCode = "secret passCode";
        if (passCode && passCode == "secret passCode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }

    // 子类构造函数必须调用super
    constructor(name: string) {
        super(name);
        this.name = name;
    }

    greet() {
        console.log("Dog:" + this.name);
        super.greet();
    }
}

let hello = new Animal("world");
hello.greet();

let dog = new Dog("dog");
dog.greet();

// dog.fullName = "Bob Smith";
// if (dog.fullName) {
//     alert(dog.fullName);
// }

// console.log(dog.footNum) // 私有属性只能在类的内部访问
console.log(typeof hello);

// static静态变量
// 抽象类，抽象方法
// 类 创建一个实例类型和一个构造函数
class Point {
    x: number = 0;
    y: number = 0;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};




