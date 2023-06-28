// import { Student } from "../typings/a";
import { TAdd } from "./jslib/aa";
import jquery from 'jquery'

jquery("#app");
// jquery.Event

export function add(a: number, b: number): number {
  return TAdd(a, b);
}

export function add2(a: number, b: number): number {
  return a + b + 1;
}

// export function add3(): number {
//  let stu:Student = {name: "张三",age: 22}
//   return stu.age +1
// }