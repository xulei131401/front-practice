<template>
    <div class="ht-point-index">
        <div class="ht-store-map">
            <div class="ht-store-map-box">
                <point-map ref="map" :height="mapOptions.height"></point-map>
                <div class="ht-store-map-right">
                    <div class="ht-store-map-flag">
                        <div class="square-flag square-red"></div>
                        <div>区域独家代理</div>
                    </div>
                    <!--<div class="ht-store-map-flag">
                        <div class="square-flag square-green"></div>
                        <div>区域非独家代理</div>
                    </div>-->
                    <div class="ht-store-map-flag">
                        <img style="width: 30px;height: 30px;margin-right: 7px;" src="//s.gsucdn.com/static/images/red_flag.png">
                        <div>直营及下级分校</div>
                    </div>
                    <!--<div class="ht-store-map-flag">-->
                    <!--<div class="circle-flag"></div>-->
                    <!--<div>其他分校</div>-->
                    <!--</div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import pointMap from './point-map'

    export default {
        components:{
            pointMap
        },
        data () {
            return {
                mapOptions:{
                    width: "83%",
                    height:630,
                }
            }
        },
        methods:{
            drawMap(){
                /*HT.Ajax.getJson("/bingo/agent/store/point/list", (data) => {
                    setTimeout( () => {
                        if (!this.$refs.map){
                            return;
                        }

                        //this.$refs.map.clearMap();
                        this.$refs.map.drawPoints(data, {
                            //mouseover:this.openInfoCallback,
                            // mouseout:this.closeInfoCallback,
                        });

                    },  300)
                });*/
            },
            refresh(){
                window.location.reload();
            }
        },
        mounted(){
            this.$nextTick(() => {
                this.drawMap();
            });
        }
    }
</script>

<style lang="less">
    .ht-point-index{
        .ht-store-map{
            padding:20px;
            background-color:white;
            .ht-store-map-box{
                margin-top: 30px;
                height: 600px;
                display: flex;
                justify-content: center;
                align-items: center;
                .ht-store-map-right{
                    width: 175px;
                    margin-left: 20px;
                    font-size: 13px;
                    .ht-store-map-flag{
                        display: flex;
                        align-items: center;
                        margin-bottom: 30px;
                        &:last-child{
                            margin-bottom: 0;
                        }
                        >div:last-child{
                            flex: 1;
                            line-height: 1.0;
                        }
                    }
                }
            }
            .square-flag {
                display: inline-block;
                width: 18px;
                height: 18px;
                margin: 0 15px 0 4px;
                box-sizing: border-box;
                border-radius: 2px;
                &.square-red{
                    border: 2px solid #ff665a;
                    background-color: rgba(255, 102, 90, .1) ;
                }
                &.square-green{
                    border: 2px solid #26b99a;
                    background-color: rgba(38, 185, 154, .1) ;
                }
            }
            .circle-flag{
                width: 18px;
                height: 18px;
                margin: 0 15px 0 4px;
                box-sizing: border-box;
                border-radius: 50%;
                border:2px solid #ffc000;
                background: #fff100;
            }
        }
    }

    .msg{
        margin-top: 20px;
        border-width: 0px;
        font-family: '微软雅黑';
        font-weight: bold;
        font-style: normal;

    }
</style>
