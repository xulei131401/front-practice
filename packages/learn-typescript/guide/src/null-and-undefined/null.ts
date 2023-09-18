interface Teacher {
    name:string
    age:number
}

/**
 * 结论：
 * 1.typeof null 结果是 object，说明null其实是一个对象
 * 2.变量名不能叫null却可以叫undefined
 */
export const tNull = () => {
    console.log("null:", null);
    console.log("typeof null:", typeof null);
    console.log("null == null:", null == null);
    console.log("null === null:",  null === null);
    console.log("null == undefined:",  null == undefined);
    console.log("null === undefined:",  null === undefined);

    let teacher:Teacher = {
        name: "教师1",
        age:22
    }

    console.log('teacher:', teacher)
}