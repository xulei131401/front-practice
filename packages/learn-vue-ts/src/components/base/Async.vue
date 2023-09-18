<template>
    <div>
    </div>

</template>

<script>
    export default {
        name: 'AsyncIndex',
        components:{},
        data(){
            return {}
        },
        mounted(){
            this.testAsync();
            // this.testGenerator();
        },
        methods:{
            testAsync(){
                function doubleAfter2seconds(num) {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve(2 * num)
                        }, 2000);
                    })
                }

                async function testResult() {
                    console.log('4444');
                    let result =  doubleAfter2seconds(30);
                    console.log(result);
                    console.log('121221');
                }

                testResult();

                console.log('虽然在后面，但是我先执行');
            },
            testGenerator(){
                function* foo () {
                    let index = 0;
                    while (index < 2) {
                        yield index++; //暂停函数执行，并执行yield后的操作
                    }
                }

                let bar = foo(); // 返回的其实是一个迭代器

                console.log(bar.next());    // { value: 0, done: false }
                console.log(bar.next());    // { value: 1, done: false }
                console.log(bar.next());    // { value: undefined, done: true }
            },
        }
    }
</script>