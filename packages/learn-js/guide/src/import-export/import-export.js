/**
 * 结论：
 *  1. 变量表达式不会被提升作用域，即只能先定义后使用
 *  2. 函数声明会被提升，即可以先试用后定义
 *  3. 模块文件内部声明的变量和函数都能在其他函数内部访问到，无关先后顺序
 */


export const D = () => {
    console.log('D:')
    console.log("D1:", D1);
    D1()
    D2()
    console.log("D1:", D2);
    console.log("D3:", D3);
    D4()
}

// const dd = D1
// console.log('D1:', D1) // Cannot access 'D1' before initialization
export const D1 = () => {
  console.log("D1:");
//   D()
};

function D4() {
  console.log("D3:", D3);
}

let D3 = 222
function D2(){
    console.log('D2:')
}

D()

// const A = 123
// export function AA(){
//     console.log('A:', A)
// }

// AA()
// console.log('A:', A)
// console.log('A1:', A1())

// function A1(){
//     console.log('A1')
// }
// const A = 123

// console.log("B:", B());
// const B = () => {
//     console.log('B')
// }

// console.log("B1:", B1());
// const B1 = function() {
//   console.log("B1");
// };