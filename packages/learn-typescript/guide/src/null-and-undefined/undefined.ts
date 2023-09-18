/**
 * 结论：
 * 1.变量名不能叫null却可以叫undefined
 * 2.undefined是一个类型，typeof undefined 结果是undefined
 */
export const tUndefined = () => {
    console.log("undefined:", undefined);
    console.log("typeof undefined:", typeof undefined);
    console.log("undefined == undefined:", undefined == undefined);
    console.log("undefined === undefined:", undefined === undefined);
    console.log("null == undefined:", null == undefined);
    console.log("null === undefined:", null === undefined);
    reassign()
};

const reassign = () => {
    let undefined = 123;
    console.log("重新赋值undefined:", undefined);
}