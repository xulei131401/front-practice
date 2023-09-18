// type 和 interface区别

// 1.interface只能用来描述对象

namespace TX {
    // interface IConfig {
    //     name: string;
    //     age: number;
    // }

    // let i1: IConfig = {
    //     name: "张三",
    //     age: 25
    // }

    // console.log(typeof i1)

    // // 2.type 可以描述任意类型

    // type TConfig = {
    //     name: string,
    //     age: number,
    // }

    // let t1: TConfig = {
    //     name: "许磊",
    //     age: 22
    // }

    // console.log(typeof t1)

    // class AA {
    //     // Property 'name' has no initializer and is not definitely assigned in the constructor.
    //     public name: string = ""
    // }

    // interface BB {
    //     name: string = "xxx"
    // }

    // const a = new AA()
    // console.log("a:", a)

    // let b: BB
    // console.log("b:", b)
}