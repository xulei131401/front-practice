/**
 * Record介绍
 * 作用：定义一个对象的 key 和 value 类型
 * 官方文档：https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype
 */

namespace T3 {
    interface Config {
        url: string;
        key: string;
        isMock: boolean;
    }

    // 用来描述复杂对象，可以针对key和value进行类型约束，interface就做不到了
    const item: Record<string, Config> = {
        login: { url: "/login", key: "login", isMock: false },
        home: { url: "/home", key: "home", isMock: false },
        // 123: 123 // 报错
    };

    console.log("item:", item)

    // 这种写法还是跟Record有区别
    const obj: { [key: string]: number } = {
        123: 123
    }
}