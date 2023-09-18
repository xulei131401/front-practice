<template>
    <div>
        <h2>js的隐式转换</h2>
        <ul style="list-style:none;">
            <li>1. ToString，ToNumber，ToBoolean，ToPrimitive</li>
            <li>1、[] == ![]  结果:<span style="color: red;font-weight: bold;">true</span></li>
            <li>1、[] == ![]  结果:<span style="color: red;font-weight: bold;">true</span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'FoundationIndex',
        components:{},
        data(){
            return {}
        },
        mounted(){
            // this.testMethods();
            // this.transformString();
            // this.transformNumber();
            // this.transformPrimitive();
            this.interview();
        },
        methods:{
            testMethods(){
                //console.log(![])    //转为了false

                //正常原理，可以想到
                console.log("[] == 0", [] == 0);
                console.log("'0' == false", '0' == false);
                console.log("null == false", null == false);
                console.log("undefined == false", undefined == false);

                //结果有点出乎意料
                console.log("[] == ![]", [] == ![]);
                console.log("null == 0", null == 0);
                console.log("[2] == 2", [2] == 2);
                console.log("['0'] == false", ['0'] == false);
                console.log("[] == false", [] == false);
                console.log("[null] == 0", [null] == 0);
                console.log("[null] == false", [null] == false);
                console.log("[undefined] == false", [undefined] == false);

            },
            transformString(){
                //ToString
                console.log(String(null) === 'null')
                console.log(String(undefined) === 'undefined')
                console.log(String(true) === 'true')
                console.log(String(false) === 'false')
                console.log(String(10) === '10')
                console.log(String([1,2,3]) === '1,2,3')
                console.log(String([]) === '')
                console.log(String([]) === ' ')
                console.log(String([null]) === '')
                console.log(String([1, undefined, 3]) === '1,,3')
                console.log(String({}) === '[object Object]')
                console.log(1e21, typeof 1e21, Number(1e21), String(1e21) === '1e21')
            },
            transformNumber(){
                //ToNumber
                console.log(NaN)
                console.log(NaN == NaN)
                console.log(NaN === NaN)
                console.log(Number(null) === 0)
                console.log(Number(undefined))
                console.log(Number(true) === 1)
                console.log(Number(false) === 0)
                console.log(Number([]) === 0)
                console.log(Number({}) === 0)
                console.log(Number(10) === 10)
                console.log(Number('10a'))
                console.log(Number('') === "0")
                console.log(Number([1,2,3]))
                console.log(Number([null]) === 0)
                console.log(Number([undefined]) === 0)
                console.log(Number([1, undefined, 3]))
            },
            transformBoolean(){
                //ToBoolean
                console.log(Boolean(null) === false)
                console.log(Boolean(undefined) === false)
                console.log(Boolean(''))
                console.log(Boolean([]))
                console.log(Boolean({}))
                console.log(Boolean(0))
                console.log(Boolean('0'))
                console.log(Boolean(''))
                console.log(Boolean(' '))
                console.log(Boolean('false'))
                console.log(Boolean('true'))
                console.log(Boolean(Infinity))
                console.log(Boolean(NaN))
            },
            transformPrimitive(){
                //ToPrimitive指对象类型类型（如：对象、数组）转换为原始类型的操作。
                // 当对象类型需要被转为原始类型时，它会先查找对象的valueOf方法，如果valueOf方法返回原始类型的值，则ToPrimitive的结果就是这个值
                // 如果valueOf不存在或者valueOf方法返回的不是原始类型的值，就会尝试调用对象的toString方法，也就是会遵循对象的ToString规则，然后使用toString的返回值作为ToPrimitive的结果。

                // 注意：对于不同类型的对象来说，ToPrimitive的规则有所不同，比如Date对象会先调用toString，具体可以参考ECMA标准，https://link.juejin.im/?target=https%3A%2F%2Fwww.ecma-international.org%2Fecma-262%2F6.0%2F%23sec-toprimitive

                // 如果valueOf和toString都没有返回原始类型的值，则会抛出异常。

                const obj1 = {
                    valueOf () {
                        return 100
                    },
                    toString () {
                        return 101
                    }
                }
                console.log(Number(obj1))

                const obj2 = {
                    toString () {
                        return 102
                    }
                }

                console.log(Number(obj2))

                const obj3 = {
                    toString () {
                        return {}
                    }
                }

                // console.log(Number(obj3)) //  Error in mounted hook: "TypeError: Cannot convert object to primitive value"


                // 只要布尔类型参与比较，该布尔类型的值首先会被转换为数字类型
                // 根据布尔类型的ToNumber规则，true转为1，false转为0
            },
            interview(){
                // 怎么使 if(aﾠ==1 && a== 2 && ﾠa==3) 返回 true?
                let hh = {
                    i: 1,
                    toString: function () {
                        return this.i++;
                    }
                };

                console.log(hh == 1 && hh == 2 && hh == 3);

                let val = 0;
                Object.defineProperty(window, 'a', {
                    get: function() {
                        return ++val;
                    }
                });

                console.log(window.a == 1 && window.a == 2 && window.a == 3)

                // window.__defineGetter__( 'a', function(){
                //     if( typeof i !== 'number' ){
                //         // define i in the global namespace so that it's not lost after this function runs
                //         i = 0;
                //     }
                //     return ++i;
                // });
                //
                // let a = new Proxy({ i: 0 }, {
                //     get: (target, name) => name === Symbol.toPrimitive ? () => ++target.i : target[name],
                // });
                // console.log(a == 1 && a == 2 && a == 3);

                // This works because == invokes toString which calls .join for Arrays.
                // a = [1,2,3];
                // a.join = a.shift;
                // console.log(a)
                // console.log(a == 1 && a == 2 && a == 3);

                // // Another solution, using Symbol.toPrimitive which is an ES6 equivalent of toString/valueOf
                // let a = {[Symbol.toPrimitive]: ((i) => () => ++i) (0)};
                //
                // console.log(a == 1 && a == 2 && a == 3);
                //
                // let aﾠ = 1;
                // let a = 2;
                // let ﾠa = 3;
                // if(aﾠ ==1 && a == 2 && ﾠa ==3) {
                //     console.log("Why hello there!")
                // }

                // let aﾠ = 1;
                // let a = 2;
                // let ﾠa = 3;
                // https://stackoverflow.com/questions/48270127/can-a-1-a-2-a-3-ever-evaluate-to-true#
                // 这里三个是不同的变量，第一个和第三个 a 前后的空白字符不是空格，Unicode FFA0
                // 请注意if 语句中的奇怪间距。它是半宽度韩文=,=。这是一个 Unicode 空格字符，但是 ECMAScript 不将其解释为一个空格 —— 这意味着它是一个有效的标识符。因此有三个完全不同的变量，一个是a后加半宽度韩文，一个是a， 一个是a前加半宽度韩文。
                //

                var  a = 1;
                var ﾠ1 = a;
                var ﾠ2 = a;
                var ﾠ3 = a;
                console.log( a ==ﾠ1 && a ==ﾠ2 && a ==ﾠ3 );
            }
        }
    }
</script>