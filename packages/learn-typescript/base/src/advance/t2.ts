/**
 * 索引签名
 * 索引:对象或数组的对应位置的名字
 * 数组的索引就是 number 类型的 0,1,2,3...
 * 对象的索引就是 string 类型的属性名
 * 
 * 
 * 字符串索引签名:用于约束对象:[propName:string]:number, propName是自定义的。
 * 数字索引签名:通过定义接口用来约束数组:[index:number]:string
 * 
 * 
 */

namespace T2 {
    interface T1 {
        name: string;
        age?: number;
        [propName: string]: any
    }

    let t1: T1 = {
        name: "许磊",
        address: "地址",
    };

    // 动态的给t1增加属性同样受约束

    console.log("t1:", t1)
    // 1.interface中定义的属性默认都是必须要存在的，多一个或者少一个属性都不可以
    // 2.可选的属性可以使用：？来定义
    // 3.没有索引签名的话，传入其他的参数会提示错误(对象文字可以只指定已知属性，并且“address”不在类型“T1”中)
    // 此时需要用到索引签名

    // 4. [propName: number]: any
    // number类型是不可以兼容string的，但是string可以兼容number
    // number <= string, number =x=> string
    // {0: 123, name: '许磊', address: '地址'}
    // 5.使用类型断言绕过ts编译器
    // 6.索引签名定义一定程度上可以替代可选属性的定义，如果只关心部分属性，而不是全部属性的话

    interface T2 {
        name: string;
        [index: number]: string
    }

    let t2: T2 = {
        name: "张三",
        // 1: 222, // 不能这样写，这种写法默认index1是字符串
    }

    t2[1] = "asdasd"



    // 还可以约束属性名称，比如以xxx结尾
    interface T3 {
        name: string;
        [propName: `${string}hh`]: any
    }

    let t3: T3 = {
        name: "李四",
        ahh: "asdasd",
    }
}

