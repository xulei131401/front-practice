// ts泛型

// any 会丢失类型的信息
function identity(arg: any): any {
    return arg;
}

// 泛型不会丢失信息
function identity1<T>(arg: T): T {
    return arg;
}


interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

// loggingIdentity(3); // Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
loggingIdentity({ length: 10, value: 3 });
