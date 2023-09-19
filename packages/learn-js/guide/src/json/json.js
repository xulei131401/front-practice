/**
 * json 结论
 * 1. json会自动过滤值为undefined的字段
 */
export const tJson = () => {
    t1()
}

const t1 = () => {
    let a = {name: "xulei", age: 222, bol: true, null: null, undefined: undefined}
    console.log('a;', a)
    console.log('a-json;', JSON.stringify(a))
}