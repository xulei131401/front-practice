<template>
    <div>
        <!--<p>这是父组件的内容 :{{name}}</p>
        <p style="height:60px;margin-top:60px">
&lt;!&ndash;            <test-props-child :name.sync="name"></test-props-child>&ndash;&gt;
            <test-props-child :name="name" @update:name='name=$event' v-if="false"></test-props-child>
            &lt;!&ndash;等价于:name="name" @update:name='name=$event'&ndash;&gt;
        </p>-->
        <li v-html="display"></li>
    </div>
</template>

<script>
    import TestPropsChild from './TestPropsChild'
    import mix from './mix'
    export default {
        name: 'TestProps',
        components:{
            TestPropsChild
        },
        mixins:[mix],
        data(){
            return {
                name:'TestProps',
                display: '',
                // test:[]
            }
        },
        mounted(){

            let urls = [
                "asd",
                "http://o1.zhiniuxue.com/md-gj/248/c571566ba1de49baa0466fb584f7dc36?OSSAccessKeyId=LTAIMdSfKME42Ppt&Expires=1589624863&Signature=jhLuNHzETTk1rHES%2BJy4C3iTyus%3D"
            ];


            let a = this.trimSingUrl(urls);

            console.log(a);


            // this.test.push(3)
            // console.log("this.test:", this.test)
            // let str = `123-456`;
            // console.log(this.str_md5(123))
            // let sign = this.hex_md5(this.hex_sha1(str.toLowerCase()).toLowerCase());
            // console.log("sign:", sign)
            // async function testAsync(i) {
            //     return new Promise((resolve, reject) => {
            //         console.log("asdasd")
            //         setTimeout(() => {
            //             resolve("hello" + i)
            //         },2000)
            //     });
            // }
            //
            // async function test() {
            //     let result = [];
            //     const v1 = await testAsync(1);
            //     result.push(v1);
            //     const v2 = await testAsync(2);
            //     result.push(v2);
            //     return result;
            // }
            //
            // let aaa = test();
            // aaa.then((s) => {
            //     console.log('aaa:', s);
            // })


            /*function start(tasks) {
                var result = [];
                return tasks.reduce((accumulator, item, index) => {
                    return accumulator.then(res => {
                        result.push(res);
                        return index == tasks.length - 1 ? item.then(res => { result.push(res); return result; }) : item;
                    });
                }, Promise.resolve(0));
            }

            function delay(time) {
                return new Promise(function(resolve, reject) {
                    setTimeout(function() {
                        resolve(time);
                    }, time);
                });
            }

            start([delay(3000), delay(2000), delay(1000)]).then(res => {
                console.log(res); // [0, 3000, 2000, 1000]
            });*/


            /*let p1 = new Promise((resolve, reject) => {

                setTimeout(() => {
                    resolve({error:'人教版三年级上激活成功'})
                    console.log("1111111111")
                },2000)
            })

            let p2 = new Promise((resolve, reject) => {
                console.log("2222222222")
                resolve({error:'人教版三年级下激活成功'})
            })

            //let p3 = Promise.reject('人教版四年级上激活失败，原因：网络开小差')

            Promise.all([p1,p2]).then((result) => {
                console.log("result:", result)
            }).catch((error) => {
                this.$Message.warning(error);
            })*/

            // let display = `<span style="color:red;">你好</span>`;
            // let query = '你好';
            // this.display = display.replace(new RegExp(query, 'g'), `<span>${query}</span>`);
        },
        computed:{

        },
        methods:{
            trimSingUrl(urls){
                let newUrls = [];
                for (let i = 0; i < urls.length; i++) {
                    let item = urls[i];
                    item = item.replace(/^http(s)?:\/\/(.*?)\//, "");//先替换host+domain部分
                    //替换?后的参数部分
                    let index = item.indexOf("?");
                    if (index === -1) {
                        newUrls.push(item);
                        continue;
                    }

                    item = item.substring(0, index);
                    newUrls.push(item);
                }

                return newUrls;
            }
        }
    }
</script>