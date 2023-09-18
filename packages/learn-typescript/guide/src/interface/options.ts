export interface Config {
    name: string
    path?: string
}

/**
 * 结论：
 * 1.类型约束只在编译时期，运行时是没有类型的
 * 2.即使声明了类型，有可能被any给破坏，所以尽量不要有any
 * 3.声明了string，也可以强行传入一个any，导致代码失败
 */

export const tInterfaceOption = () => {
    const conf:Config = {name: "哈哈"}

    let pa1: any = null
    let pa2: any = undefined
    tParams(pa1)
    tParams(pa2)

    console.log("配置:", conf, conf.path)
    conf.path = 'asdasd'
    console.log("配置:", conf);

}

function tParams(p: string){
    p.trim()
    console.log('p:', p)
}