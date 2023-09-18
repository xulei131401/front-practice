// ts的变量类型

// 1.布尔值 boolean

// let isTrue: boolean = true;
// console.log("isTrue:", isTrue)

// 2.数字 number

// let num: number = 123;
// let num1: number = 123.123;
// console.log("num:", num)
// console.log("num1:", num1)

// 3.字符串 string, 单引号，双引号，反引号（多行）
// let str:string = "许磊"
// let age:number = 25
// let str1:string = `我是${str};年龄:${age + 1}
// haha`;
// let str2:string = 123; // 类型不符直接编译错误 Type 'number' is not assignable to type 'string'.
// console.log("str:", str)
// console.log("str1:", str1)
// console.log("age:", age)

// 4.数组 type[]或者 泛型方式定义Array<类型>
// let list: number[] = [1, 2, 3];
// let list2: Array<number> = [1, 2, 3];
// let list1: string[] = ["许磊", "张三", "李四"];
// console.log("list:", list[3]) // 数组越界就是undefined
// console.log("list1:", list1)
// console.log("list2:", list2)

// 5.元组Tuple,元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
// Declare a tuple type
// let x: [string, number];
// console.log(x); // Variable 'x' is used before being assigned. 没赋值前无法使用
// x = ['hello', 10]; // OK
// console.log(x[0].substr(1));

// 6.枚举类型 enum 默认从0开始,也可以指定从1开始，或者跳跃赋值
// enum Color {Red = 1, Green, Blue}
// let c: Color = Color.Green;
// console.log("color:", c)

// 7.Any类型
// let notSure: any = 4;
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
// notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

// let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

// 8. Void类型

// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
// let unusable: void = undefined;

// 函数没有返回值，那么返回值就是void类型
// function warnUser(): void {
//     console.log("This is my warning message");
// }

// function warnUser1() {
//     console.log("This is my warning message");
// }

// 9.Null 和 Undefined

// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。

//然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 
// 这能避免 很多常见的问题。 也许在某处你想传入一个 string或null或undefined，
// 你可以使用联合类型string | null | undefined。


// 10. Never 
// never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。

// 返回never的函数必须存在无法达到的终点
// function error(message: string): never {
//     throw new Error(message);
// }

// 推断的返回值类型为never
// function fail() {
//     return error("Something failed");
// }

// 返回never的函数必须存在无法达到的终点
// function infiniteLoop(): never {
//     while (true) {
//     }
// }

// 11.Object类型

// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。


// 12.类型断言
// 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。
// 尖括号语法 <类型>变量名
// let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;

// as 语法 (变量名 as 类型) 推荐
// let someValue1: any = "this is a string";
// let strLength1: number = (someValue1 as string).length;


// 13.Symbols

// let sym2 = Symbol("key");
// let sym3 = Symbol("key");

// console.log(sym2 === sym3) // false, symbols是唯一的


