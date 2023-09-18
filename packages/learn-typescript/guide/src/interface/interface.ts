// ts接口

// 不是对象实现接口，而是约束对象必须包含接口定义的结构


// color?: string 可选
//readonly x: number; 只读
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
