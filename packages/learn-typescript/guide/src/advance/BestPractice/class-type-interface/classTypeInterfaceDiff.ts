/**
 * class,type,interface区别
 */

// 先看interface

namespace CTIDiff {
    // interface 没有特殊代码，就是一个对象
    interface IUser {
        name: string
        age: number
    }

    interface IUser {
        address?: string
    }


    const iUser: IUser = {
        name: "许磊",
        age: 22,
        address: "北京"
    }

    type TUser = {
        name: string
        age: number
    }

    const tUser: TUser = {
        name: "许磊",
        age: 22
    }

    /**
     * 类创造的时候：
     *  1.类的实例的类型
     *  2.创建了一个叫做 构造函数的值
     */
    class CUser {
        public name: string = ""
        public age: number = 22

        static standardGreeting = "Hello, there";
    }

    const cUser = new CUser()
    console.log("aaa:", AAA)
}

