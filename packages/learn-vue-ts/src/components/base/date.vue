<template>
    <div></div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        mounted(){
            // let startDate = "2020-01-01";
            // let endDate = "2020-01-02";
            // let days = this.getDiffDays(startDate, endDate);
            // console.log("days:", days)

            console.log(this.diffDay('2021/01/01','2022/01/01'))//return 2
        },
        methods: {
            getDiffDays(startDateStr, endDateStr) {
                let startDate = Date.parse(startDateStr.replace('/-/g', '/'));
                let endDate = Date.parse(endDateStr.replace('/-/g', '/'));
                let diffDate = endDate - startDate;
                return Math.floor(diffDate / (24 * 60 * 60 * 1000));
            },
             diffDay(lastDate,earlyDate){
                return (Date.parse(lastDate) - Date.parse(earlyDate))/1000/60/60/24;
            }
        }
    }
</script>