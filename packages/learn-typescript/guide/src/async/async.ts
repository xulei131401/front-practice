function getInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1 })
        }, 2000);
    })
}

async function getInfoAsync() {

    const res = { id: 123 }
    return res
    // 1.return的值会被Promise包裹
    // return "asdasd";
    // 2.即使没有写return，那么Promise包裹的是undefine

    // 3.内部throw之后，还是Promise，只不过变成了reject
    // throw new Error("asdads")
}

async function T1() {
    // 当没有catch函数的时候报错，程序直接终止
    const res = await getInfoAsync().catch(() => {
        return "sss"
    })
    console.log(res)
    console.log(typeof res)
    // if (!res) {
    //     return
    // }
    // console.log("res:", res)
    // console.log("sss")
}
window.onerror = function (message, source, line, column, error) {
    console.log("xxxxx")
}
T1()
