<template>
    <div>
        <h3>测试ajax大数据量</h3>
        <div style="width:10px;height:10px;display:inline-block;border: 1px solid #299def;background-color:#299def;"></div>
        <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#299def;"></span>
    </div>
</template>

<script>
    export default {
        name: 'sentenceIndex',
        components:{},
        data(){
            return {
                websocket: null,
                studentQueue:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]//假设有20个学生
            }
        },
        mounted(){
            // this.testAjax();
            // this.initWebSocket();
            this.getLast30Days();
        },
        methods:{
            dateFormat(date) {
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let weekday = date.getDate();
                if (month < 10) {
                    month = "0" + month;
                }
                if (weekday < 10) {
                    weekday = "0" + weekday;
                }

                return (year + "-" + month + "-" + weekday);
            },
            getLast30Days(){
                console.log("今天日期：", this.dateFormat(new Date()));
                console.log("30天前日期：", this.getBeforeDaysDate(120));
            },
            getBeforeDaysDate(n){//获得n天前的日期
                let timestamp = new Date().getTime() / 1000 - (n * 60 * 60 * 24);
                let date = new Date(timestamp * 1000);
                return this.dateFormat(date);
            },
            testAjax(){
                for (let i = 0; i < 10; i++) {
                    this.AJAX.getJson("http://bingo.t.store.com/student/word/get", {}, {mock:1}).then((data) => {
                        console.log("data:", data);
                    });
                }
            },
            initWebSocket(){
                //初始化weosocket
                const wsuri = "ws://127.0.0.1:9555";//ws地址
                this.websocket = new WebSocket(wsuri);
                this.websocket.onopen = this.websocketonopen;
                this.websocket.onerror = this.websocketonerror;

                this.websocket.onmessage = this.websocketonmessage;
                this.websocket.onclose = this.websocketclose;
            },
            websocketonopen() {
                console.log("WebSocket连接成功");
                this.queue();
            },
            websocketonerror(e) { //错误
                console.log("WebSocket连接发生错误");
            },
            websocketonmessage(e){ //数据接收
                console.log("数据：", JSON.parse(e.data));
                this.queue();
            },
            websocketsend(data){//数据发送
                this.websocket.send(data);
            },
            websocketclose(e){ //关闭
                console.log("connection closed (" + e + ")");
            },
            queue(){
                let studentId = this.studentQueue.pop();
                console.log("剩余学生ID：", this.studentQueue)
                if (studentId == undefined) {
                    this.websocketsend(JSON.stringify({status:1}));
                    this.websocketclose();
                    return;
                }

                this.websocketsend(JSON.stringify({status:0, student_id:studentId}));
            }
        },
        created(){
            //页面刚进入时开启长连接
            // this.initWebSocket()
        },
        destroyed: function() {
            //页面销毁时关闭长连接
            this.websocketclose();
        },
    }
</script>