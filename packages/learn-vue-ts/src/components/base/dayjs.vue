<template>
    <div></div>
</template>

<script>
    import dayJs from 'dayjs'
    export default {
        data() {
            return {
                newQuestionList: [1,2,3,4,5,6]
            }
        },
        mounted(){
            let a = function(i){
                console.log("i:", i)
                return new Promise(res => {
                    setTimeout(() => {
                        res(i);
                    }, 1000)
                });
            }

            let p = new Promise(res => res());
            for (let i = 0; i < 3; i++) {
                p = p.then(() => a(i));
            }


            //第2题  第四题
            /*let currentIndex = 2;
            let toIndex = 4;

            currentIndex = Number(currentIndex);
            toIndex = Number(toIndex);
            let num = this.newQuestionList.length;

            if ((num <= 1) || (currentIndex + 1 === toIndex) || (toIndex < 1) || (toIndex > num)) {
                return;
            }

            if (toIndex >= num) {
                toIndex = num;
            }

            // 第一版：元素位置互换
            //this.newQuestionList.splice(currentIndex, 1, ...this.newQuestionList.splice(toIndex - 1, 1, this.newQuestionList[currentIndex]));
            // 第二版：插队改变顺序
            this.newQuestionList.splice(toIndex - 1, 0, this.newQuestionList.splice(currentIndex, 1)[0]);


            console.log("qqqqqqqqqq:", this.newQuestionList);*/
            // console.log("今日：", this.today())
            // console.log("昨日：", this.yesterday())
            // console.log("明日：", this.tomorrow())
            // console.log("今年：", this.thisYear())
            // console.log("明年：", this.nextYear())
            // console.log("去年：", this.lastYear())
            // console.log("当前月：", this.currentMonth())
            // console.log("上个月：", this.lastMonth())
            // console.log("下个月：", this.nextMonth())
        },
        methods: {
            today(){
                return dayJs().format('YYYY-MM-DD');
            },
            yesterday(){
                return dayJs().subtract(1, 'day').format('YYYY-MM-DD');
            },
            tomorrow(){
                return dayJs().add(1, 'day').format('YYYY-MM-DD');
            },
            thisYear(){
                return dayJs().format('YYYY');
            },
            nextYear(){
                return dayJs().add(1,'year').format('YYYY');
            },
            lastYear(){
                return dayJs().subtract(1,'year').format('YYYY');
            },
            currentMonth(){
                return dayJs().format('M');
            },
            lastMonth(){
                return dayJs().subtract(1, 'month').format('M');
            },
            nextMonth(){
                return dayJs().add(1, 'month').format('M');
            }
        }
    }
</script>