<template>
    <div>
        <!--<h1>js获取数组中最大值最小值的几种方法</h1>-->
        <!--<a :href="exportUrl" download="export.txt">下载</a>-->
        <my-jsx :name="'许磊'"></my-jsx>
    </div>
</template>

<script>
    import myJsx from '../render/my-jsx'
    export default {
        name: 'TestIndex',
        props:{
          aaa:{
              type: String,
              default: '1212'
          }
        },
        components:{
            myJsx
        },
        data(){
            return {
                exportUrl:'http://gsu-static.oss-cn-beijing.aliyuncs.com/tmp/20190304_af75c164_newest_resource.txt',
                postData:{},
                text:"许磊",
                ttt:this.aaa
            }
        },
        mounted(){
            this.testUtil();
            // console.log("this._", this._.join(['a', 'b', 'c'], '~'))
            // this.page();
            // this.XL.on(document.getElementById('aaa'),'click',this.ccc)
            // this.XL.on(document.getElementById('aaa1'),'click',this.ccc)
            // this.testOne();
            // this.testFetch();
            // this.testMap();
            // this.testSwitch();
            // this.testSync();
            // this.testClosure();
            // this.testAsync();
            // this.testDate();
            // this.getDiffYearAndMonth('2019-03-31', '2019-04-30');
            // this.getfff('2020-03-31', '2019-03-31');
            // this.getfff('2020-09-31', '2019-04-01');
            // console.log(this.ttt)
        },
        methods:{
            testUtil(){
                this.testFuncParam({name:'许磊', age:12});
                // console.log(this.Util.getBrowser());
            },
            testFuncParam({age,name}){
                console.log("name:", name)
                console.log("age:", age)
            },
            getDiffYearAndMonth(startAt, endAt){
                if (this.XL.isEmpty(startAt) || this.XL.isEmpty(endAt)) {
                    return '';
                }

                let startTimestamp = new Date(startAt).getTime();
                let endTimestamp = new Date(endAt).getTime();
                if (endTimestamp < startTimestamp) {
                    return '';
                }

                let diffTimestamp = endTimestamp - startTimestamp;
                const yearTimestamp = 3600 * 24 * 365 * 1000;
                const monthTimestamp = 3600 * 24 * 30 * 1000;

                let year = 0;
                let month = 0;
                if (diffTimestamp >= yearTimestamp) {
                    year = Math.floor(diffTimestamp / yearTimestamp);
                    month = Math.floor((diffTimestamp - year * yearTimestamp) / monthTimestamp);
                } else if (diffTimestamp >= monthTimestamp && diffTimestamp < yearTimestamp) {
                    month = Math.floor(diffTimestamp / monthTimestamp);
                }

                let divisor = 0;
                let remainder = 0;
                if (month >= 12) {
                    divisor = (month / 12) >> 0;
                    remainder = month % 12;
                }

                year += divisor;
                month = month - (divisor * 12) + remainder;

                let arr = [];
                if (year > 0) {
                    arr.push(`${year}年`);
                }

                if (month > 0) {
                    arr.push(`${month}个月`);
                }

                let result = this.XL.isEmpty(arr) ? '' : arr.join('');
                console.log(result);
            },
            testDate(){
                // let startAt = '2019-08-31';
                // let years = -1;
                // let month = 6;
                // let startAtTimeStamp = Date.parse(startAt);
                // let newDateObject = new Date();
                // newDateObject.setTime(startAtTimeStamp);
                //
                // console.log(newDateObject.getMonth());
                // if (years === -1) {
                //     newDateObject.setMonth(newDateObject.getMonth() + month);
                // } else {
                //     newDateObject.setFullYear(newDateObject.getFullYear() + Number(years));
                // }
                //
                // newDateObject.setDate(newDateObject.getDate() - 1);
                //
                // let endAt = this.getFormatDate(newDateObject);
                // if (years === -1) {
                //     console.log(`${startAt} ~ ${endAt} (${month}个月)`);
                // }
                let str = "2017-11-19";
                let d1 = new Date(str);
                let d2 = new Date();
                let m = Math.abs((d2.getFullYear()-d1.getFullYear())*12 + d2.getMonth()-d1.getMonth());
                console.log("%s和当前日期相差%d年%d月",str, m/12 >> 0,m%12);
            },
            getFormatDate(dateObject) {
                let separator = "-";
                let year = dateObject.getFullYear();
                let month = dateObject.getMonth() + 1;
                let strDate = dateObject.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }

                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                return year + separator + month + separator + strDate;
            },
            requestP(url) {
                return new Promise(function(resolve, reject) {
                    setTimeout(() => {
                        let data = {name:"许磊",url:url};
                        resolve(data);
                    },1000)

                });
            },
            async testAsync(){
                // 获取产品数据
                let data = await this.requestP('products.json');
                data.then(() => {

                })
                // 获取用户数据
                let users = await this.requestP('users.json');
                // 获取评论数据
                let products = await this.requestP('comments.json');
                console.log('ES7 Async/products >>>', products);
                console.log('ES7 Async/users >>>', users);
            },
            testFetch(){
                // fetch(this.ApiMockRouter.student.detail + "?id=220", {
                //
                // }).then( (response) => {
                //         if(response.ok){
                //             return response.json();
                //         }
                // }).then((data) => {
                //     this.XL.log("打印ajax值：", data)
                // })
            },
            max(){
                //思路1：利用Math.max()函数---apply或者利用扩展符
                //思路二：利用sort函数排序求得
                //思路三：for循环比大小，大就替换，最后就能获得
                // let arr = [22,13,6,55,30];
                // let arr1 = ['0','1','2','3', 4];
                // console.log(Math.max(...arr1)); // 55
                // var max = Math.max.apply(null, arr);
                // console.log(max)

                // var max = arr[0];
                //
                // for(var i = 1; i < arr.length; i++) {
                //     var cur = arr[i];
                //     cur > max ? max = cur : null
                // }

                // arr.sort(function (a, b) {
                //     return a-b;
                // }); // [5,12,22,25,51,56]
                //
                // var min = arr[0];  // 5
                // var max = arr[arr.length - 1];  // 56

                let obj = {"5":{"answer":"5","duration":"10"},"7":{"answer":"7","duration":"12"},"9":{"answer":"8","duration":"41"}};

                let arr = [];
                Object.keys(obj).forEach(function(key){
                    console.log(key,obj[key]);
                    arr.push(obj[key]['answer'])
                });

                console.log(arr)
            },
            getJYLResult(answer){
                //转json
                let obj = {"5":{"answer":"5","duration":"10"},"7":{"answer":"7","duration":"12"},"9":{"answer":"8","duration":"41"}};

                let elements = [];
                Object.keys(obj).forEach(function(key){
                    elements.push(obj[key]['answer'])
                });

                return this.XL.isEmpty(elements) ? 0 : Math.max(...elements);
            },
            page(){
                console.log(this.XL.filter.number2Comma(" "))
                // let pageData = [
                //     {"name":"1"},
                //     {"name":"2"},
                //     {"name":"3"},
                //     {"name":"4"},
                //     {"name":"5"},
                //     {"name":"6"},
                //     {"name":"7"},
                // ];
                //
                //
                // // console.log(this.updatePage(1,3,pageData));
                // // console.log(this.updatePage(2,3,pageData));
                // let newData = pageData;
                // console.log("newData111:",newData);
                // pageData.forEach((item,index) => {
                //     item['name'] = '213123';
                // });
                //
                //
                // console.log("pageData:",pageData)
                // console.log("newData:", newData);

                var arr = [{
                    "name": "ZYTX",
                    "age": "Y13xG_4wQnOWK1QwJLgg11d0pS4hewePU95UHtpMl3eE81uS74NC-6zu-Rtnw4Ix",
                    "gender": "AAAAAA.doc"
                }, {
                    "name": "ZYTA",
                    "age": "Y13xG_4wQnOWK1QwJLgg11d0pS4hewePU95UHtpMl3eE81uS74NC-6zu-Rtnw4Ix",
                    "gender": "BBBBBB.doc"
                }, {
                    "name": "ZDTX",
                    "age": "Y13xG_4wQnOWK1QwJLgg11d0pS4hewePU95UHtpMl3eE81uS74NC-6zu-Rtnw4Ix",
                    "gender": "CCCCCC.doc"
                }, {
                    "name": "ZYTX",
                    "age": "Y13xG_4wQnOWK1QwJLgg11d0pS4hewePU95UHtpMl3eE81uS74NC-6zu-Rtnw4Ix",
                    "gender": "AAAAAA.doc"
                }];
                var hash = {};
                arr = arr.reduce(function(item, next) {
                    hash[next.name] ? '' : hash[next.name] = true && item.push(next);
                    return item
                }, [])
                console.log(arr);
            },
            updatePage(page, pageSize, array){
                let offset = (page - 1) * pageSize;
                return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
            },
            testClosure(){
                /**
                 * js的对象是引用，浅拷贝会互相影响
                 * @type {{name: string}}
                 */
                let postData = {
                    name: "许磊"
                };

                this.okConfirm((ok) => {
                    console.log("ok:postData:", postData)
                }, postData)
            },
            okConfirm(callback, postData){
                this.postData = postData;
                console.log("callback:postData:", postData);
                this.postData.age = 1212;
                console.log("this.postData:", this.postData);
                callback && callback(true);
            },
            testSync(){
                //1.结论一：var是全局作用域
                //2.setTimeout总是在主线程无任务的时候执行
                //3.let是块级作用域
                // let i = 0;
                // for (; i<=50; i++){
                //     setTimeout( () => {
                //         // console.log("this:", this);
                //         console.log(i);
                //     },0);
                // }
                //
                // console.log(i)
            }
        }
    }
</script>