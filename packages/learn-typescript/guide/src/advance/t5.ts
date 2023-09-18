/**
 * Partial
 * 把类型属性全部变为可选
 *
 * 
 * Required
 * 把属性都变成必选
 * 
 * 
 * Pick
 * 选择某些属性保留
 * 
 * 
 * Omit
 * 剔除某些属性
 * 
 * 
 * Exclude
 * 
 * 
 * Extract
 * 
 * 
 * NonNullable
 * 
 * 
 * Parameters
 * 
 * 
 * ConstructorParameters
 * 
 * 
 * ReturnType
 * 
 * 
 * InstanceType
 * 
 * 
 */

namespace T5 {
    type User = {
        name: string;
        age: number;
        address: string;
    }

    // Partial 可选
    type PartialUser = Partial<User>;
    let u1: PartialUser = {}
    console.log("u1:", u1)

    // Required 必选，一般默认就是必选的
    type RequiredUser = Required<User>;
    let u2: RequiredUser = {
        name: "许磊",
        age: 28,
        address: "北京"
    }
    console.log("u2:", u2)

    // Pick 只保留某些属性
    type _p = "name" | "address"
    type PickUser = Pick<User, _p>;
    let u3: PickUser = {
        name: "许磊",
        address: "上海"
    }
    console.log("u3:", u3)

    // Omit 剔除某些属性
    type OmitUser = Omit<User, 'name'>;
    let u4: OmitUser = {
        age: 23,
        address: "山西"
    }
    console.log("u4:", u4)
}