import fse from 'fs-extra'
export type Stduent = {
    name: string
}

export function add(a:number, b:number) {
    return a+b
}

export function rmDir(dir: string){
    fse.removeSync(dir)
}