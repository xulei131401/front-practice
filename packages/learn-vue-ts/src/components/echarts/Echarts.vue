<template>
    <div id="container" style="margin:0 auto;width:1000px;height: 1000px;">
        <div id="echarts" style="width: 400px;height:400px;"></div>
    </div>
</template>

<script>
    // let echarts = require('echarts');
    // require('echarts/map/js/china')
    //require('echarts/extension/bmap/bmap');

    let familiarWord = {
        title:'已熟悉单词数量',
        color:'#3bb9a2'
    };

    let familiarSentence = {
        title:'已熟悉句型数量',
        color:'#ffbc08'
    };

    export default {
        name: 'EchartsIndex',
        components:{
        },
        data(){
            return {
                myChart: null,
                familiarData: [
                    {date:'0901', wordFamiliarNum: 43.3,sSentenceFamiliarNum: 1.3,lSentenceFamiliarNum: 3.3, sentenceFamiliarNum: 3.3},
                    {date:'0902', wordFamiliarNum: 83.1,sSentenceFamiliarNum: 2.1,lSentenceFamiliarNum: 4.1, sentenceFamiliarNum: 4.1},
                    {date:'0903', wordFamiliarNum: 86.4,sSentenceFamiliarNum: 3.4,lSentenceFamiliarNum: 5.4, sentenceFamiliarNum: 5.3},
                    {date:'0904', wordFamiliarNum: 82.4,sSentenceFamiliarNum: 4.3,lSentenceFamiliarNum: 6.3, sentenceFamiliarNum: 6.3},
                    {date:'0905', wordFamiliarNum: 56.4,sSentenceFamiliarNum: 56.4,lSentenceFamiliarNum: 56.4, sentenceFamiliarNum: 56.4},
                    {date:'0906', wordFamiliarNum: 33.4,sSentenceFamiliarNum: 43.3,lSentenceFamiliarNum: 43.3, sentenceFamiliarNum: 43.3},
                    {date:'0907', wordFamiliarNum: 57.4,sSentenceFamiliarNum: 43.3,lSentenceFamiliarNum: 43.3, sentenceFamiliarNum: 44.3},
                    {date:'0908', wordFamiliarNum: 66.4,sSentenceFamiliarNum: 66.4,lSentenceFamiliarNum: 66.4, sentenceFamiliarNum: 66.4},
                    {date:'0909', wordFamiliarNum: 65.4,sSentenceFamiliarNum: 65.4,lSentenceFamiliarNum: 65.4, sentenceFamiliarNum: 65.4},
                    {date:'0910', wordFamiliarNum: 62.4,sSentenceFamiliarNum: 62.4,lSentenceFamiliarNum: 62.4, sentenceFamiliarNum: 62.4},
                    {date:'0911', wordFamiliarNum: 68.4,sSentenceFamiliarNum: 43.3,lSentenceFamiliarNum: 43.3, sentenceFamiliarNum: 43.3},
                ]
            }
        },
        mounted(){
            this.myChart = echarts.init(document.getElementById('echarts'));
            this.$nextTick(() => {
                this.drawCharts();
            })
        },
        methods:{
            drawCharts() {
                let options = {
                    title:{},
                    legend: {
                        data:[familiarWord.title, familiarSentence.title],
                        top:'bottom'
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer: {
                            axios:'y',
                            lineStyle:{
                                width:0.5,
                                type:"solid",
                                opacity:1
                            }
                        },
                    },
                    dataset: {
                        dimensions: ['date', 'wordFamiliarNum', 'sentenceFamiliarNum'],
                        source: this.familiarData,
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                    },
                    yAxis: {
                        splitLine:{
                            show:true,
                            lineStyle:{
                                width:1,
                                type:"dashed",
                                opacity:1
                            }
                        }
                    },
                    series: [
                        {
                            name: familiarWord.title,
                            type: 'line',
                            seriesLayoutBy:'row',
                            itemStyle : {
                                color:familiarWord.color,
                            },
                            smooth: true,
                            showAllSymbol:true
                        },
                        {
                            name: familiarSentence.title,
                            type: 'line',
                            seriesLayoutBy:'row',
                            itemStyle : {
                                color:familiarSentence.color,
                            },
                            smooth: true,
                            showAllSymbol:true
                        }
                    ]
                };

                this.myChart.setOption(options);
            }
        }
    }
</script>