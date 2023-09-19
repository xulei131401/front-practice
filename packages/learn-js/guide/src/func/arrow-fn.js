/**
 * 箭头函数
 *  结论：
 *  1. 箭头函数不能用作构造函数
 *  2. this指向是 undefined，不会绑定上下文
 *  3. 没有arguments,this
 */
export const tArrowFn = () => {

    tRange()
}

const tRange = () => {
    
    let t = 123;

    // 闭包
    function A() {
        console.log("a-t:", t, this);
    }

    const A1 = (s = 'ss') => {
        console.log("a1-t:", t, s, this);
    }

    A()
    A1()
}