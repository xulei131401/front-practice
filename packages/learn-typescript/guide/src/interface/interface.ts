/**
 * 结论
 *  1. interface会自动合并相同的声明
 *  2. declare module 可以扩展interface定义的属性
 */

export interface Student {
  name: string;
}

export interface Student {
  repeatName: string;
}

export const tInterface = () => {
    let defaultStu: Student = {
        name: "name属性",
        repeatName: "name1属性",
    };

    console.log("defaultStu:", defaultStu);
}

