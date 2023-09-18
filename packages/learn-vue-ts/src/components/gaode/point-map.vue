<template>
    <div :id="uuid" :style="mapStyle"></div>
</template>

<script>
    import AMap from 'AMap'
    import AMapHelper from './gdmap'

    export default {
        name: "pointMapIndex",
        props: {
            width: {
                default: "100%"
            },
            height: {
                default: "100%"
            }
        },
        computed: {
            mapStyle() {
                const style = {};
                const width = this.width || "100%";
                const height = this.height || "100%";
                if (("" + width).indexOf("%") !== -1) {
                    style['width'] = width;
                } else {
                    style['width'] = width + "px";
                }

                if (("" + height).indexOf("%") !== -1) {
                    style['height'] = height;
                } else {
                    style['height'] = height + "px";
                }

                return style;
            }
        },
        data() {
            return {
                uuid: 'POINTMAP123asdasdasd',
                mapObj: null,
                marker: null,
                explore: null,
                ajaxData: {},
            }
        },
        mounted() {
            this._initMap();
            this.registerPlugin();
        },
        methods: {
            _initMap() {
                if (this.mapObj) {
                    return;
                }

                this.mapObj = AMapHelper.getJoinMapObj(this.uuid);

                // let startOne = {longitude:116.319769,latitude:39.976546,address:"人民大学"}
                // let startTwo = {longitude:116.328543,latitude:39.981427,address:"豪景大厦"}
                //
                // let promiseBefore = convertPoint2Gd(startOne);
                // let promiseAfter = convertPoint2Gd(startTwo);
                //
                // Promise.all([promiseBefore, promiseAfter]).then((result) => {
                //
                //     let newStartOne = result[0];
                //     let newStartTwo = result[1];
                //
                //     let distance = getDistance(newStartOne, newStartTwo);
                // });

                //加载DistrictExplorer，loadUI的路径参数为模块名中 'ui/' 之后的部分
                // AMapUI.loadUI(['geo/DistrictExplorer'], (DistrictExplorer) => {
                //     this.explore = new DistrictExplorer({
                //         map: this.mapObj,
                //         eventSupport: true
                //     });
                //
                //     if (!this.explore) {
                //         return;
                //     }
                //
                //     this.initExplorePage();
                //
                //     //监听feature的hover事件
                //     // explore.on('featureMouseout featureMouseover', (e, feature) => {
                //     //     console.log("feature:", feature)
                //     // });
                //     //
                //     // //监听鼠标在feature上滑动
                //     // explore.on('featureMousemove', (e, feature) => {
                //     //     console.log("feature:", feature)
                //     // });
                //
                //     //feature被点击
                //     this.explore.on('featureClick', (e, feature) => {
                //         let props = feature.properties;
                //         //如果存在子节点
                //         if (props.childrenNum > 0) {
                //             this.switch2AreaNode(props.adcode);
                //         }
                //     });
                //
                //     //外部区域被点击
                //     this.explore.on('outsideClick', (e) => {
                //
                //         this.explore.locatePosition(e.originalEvent.lnglat, (error, routeFeatures) => {
                //             if (routeFeatures && routeFeatures.length > 1) {
                //                 //切换到省级区域
                //                 this.switch2AreaNode(routeFeatures[1].properties.adcode);
                //             } else {
                //                 this.switch2AreaNode(100000);
                //             }
                //
                //         }, {
                //             levelLimit: 2
                //         });
                //     });
                //
                // });

                //监听地图缩放，始终回到marker标注位
                // this.mapObj.on('zoomend', () => {
                //     if (!HT.isEmptyVal(this.pt.longitude) && !HT.isEmptyVal(this.pt.latitude)) {
                //         this.mapObj.setCenter(defaultCenterPoint);
                //     }
                // });
            },
            registerPlugin(){
                //异步加载控件
                AMap.plugin(['AMap.Scale', 'AMap.ToolBar'], () => {
                    let scale = new AMap.Scale()
                    let toolBar = new AMap.ToolBar()

                    this.mapObj.addControl(scale);
                    this.mapObj.addControl(toolBar);
                });
            }
        }
    }
</script>