/**
 * 官方文档：https://www.typescriptlang.org/docs/
 * 
 * keyof
 * keyof与Object.keys略有相似，只是 keyof 是取 interface 的键，而且 keyof 取到键后会保存为联合类型。
 * 
 * in
 * in用于取联合类型的值。主要用于数组和对象的构造
 * 
 * infer
 * 
 * omit
 * 
 * 
 * 
 * 
 * 
 * 
 */

namespace T4 {
    // keyof
    interface T1 {
        name: string;
        age: number;
    }

    type keys = keyof T1;

    function getValue<T extends Object, K extends keyof T>(o: T, key: K): T[K] {
        return o[key];
    }

    const obj1 = { name: '张三', age: 18 };
    const a = getValue(obj1, 'name');

    // in
    type name = 'firstName' | 'lastName';
    type TName = { // 无法用于interface
        [key in name]: string;
    };

    let n1: TName = {
        'firstName': "xu",
        'lastName': "lei"
    }

    console.log(n1)
}