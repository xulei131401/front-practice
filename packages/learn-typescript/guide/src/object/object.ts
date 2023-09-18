/**
 * 结论：
 * 1.空对象
 * 2.object
 * 3.Object
 * 4.Object.create()
 */

export const tObject = () => {
    bigObject()
    smallObject()
}

const emptyObject = () => {
    let a1 = {};
    let a2 = {};
    console.log("{}:", {});
    console.log("a1:", a1, a1 == a2);
    console.log("a2:", a2, a1 === a2);
    let obj1 = {};
    console.log("obj1:", obj1, typeof obj1);
}

const bigObject = () => {
 let bigObj: Object = Object.create(null);
 console.log("bigObj:", bigObj, typeof bigObj);
 let bigObj1: Object = [123];
 console.log("bigObj1:", bigObj1, typeof bigObj1);
}

const smallObject = () => {
    let smallObj: object = {};
    console.log("smallObj:", smallObj, typeof smallObj);
    let smallObj1: object = [123]
    console.log("smallObj1:", smallObj1, typeof smallObj1);
};