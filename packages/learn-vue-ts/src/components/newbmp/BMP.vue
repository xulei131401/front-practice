<template>
    <div>
        <div id="allmap" ref="allmap" :style="mapStyle"></div>
    </div>
</template>

<script>
    let mapObj = null;
    let drawingManager = null;
    const MANAGER_STYLE = {
        strokeColor: "red",    //边线颜色。
        fillColor: "red",      //填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 3,       //边线的宽度，以像素为单位。
        strokeOpacity: 0.8,    //边线透明度，取值范围0 - 1。
        fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
        strokeStyle: 'solid' //边线的样式，solid或dashed。
    }

    export default {
        name: 'BMPIndex',
        props: {
            width: {
                default: "100%"
            },
            height: {
                default: "100%"
            },
            points: {
                default: function () {
                    return [
                        {longitude: 109.548024, latitude: 38.002395}
                    ]
                }
            }
        },
        data() {
            return {
                overlays: [],
                oldOverlays: []
            }
        },
        mounted() {
            this._createMap();
        },
        computed: {
            mapStyle() {
                let style = {};
                let width = this.width || "100%";
                let height = this.height || "100%";
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
        methods: {
            _createMap() {
                if (mapObj) {
                    return;
                }

                mapObj = new BMap.Map(this.$refs.allmap);
                mapObj.setMinZoom(5);
                mapObj.setMaxZoom(20);

                mapObj.addControl(new BMap.NavigationControl({
                    anchor: BMAP_ANCHOR_TOP_LEFT,
                    type: BMAP_NAVIGATION_CONTROL_LARGE
                }));

                mapObj.setCurrentCity("北京");
                mapObj.enableScrollWheelZoom(true);
                mapObj.disableDoubleClickZoom();

                //实例化鼠标绘制工具
                this._createDrawManager();

                //添加比例尺
                let top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});
                mapObj.addControl(top_left_control);

                //监听地图zoom缩放事件
                mapObj.addEventListener("zoomend", (evt) => {

                });

                mapObj.centerAndZoom(new BMap.Point(Number(this.points[0].longitude), Number(this.points[0].latitude)), 5);
            },
            _createDrawManager() {
                drawingManager = new BMapLib.DrawingManager(mapObj, {
                    isOpen: false,
                    enableDrawingTool: false,
                    drawingToolOptions: {
                        anchor: BMAP_ANCHOR_TOP_RIGHT,
                        offset: new BMap.Size(5, 5),
                    },
                    polylineOptions: MANAGER_STYLE,
                    polygonOptions: MANAGER_STYLE,
                });

                //添加鼠标绘制工具监听事件，用于获取绘制结果
                drawingManager.addEventListener('overlaycomplete', (e) => {
                    this.overlays.push(e.overlay);
                });
            },
            _draw(type) {
                drawingManager.setDrawingMode(type);
                drawingManager.open();
            },
            drawPolygon() {
                this._draw(BMAP_DRAWING_POLYGON);
            },
            drawPolyLine() {
                this._draw(BMAP_DRAWING_POLYLINE);
            },
            openEditing() {
                for (let i = 0; i < this.overlays.length; i++) {
                    this.overlays[i].enableEditing();
                }
            },
            closeEditing() {
                for (let i = 0; i < this.overlays.length; i++) {
                    this.overlays[i].disableEditing();
                }
            },
            getPoint() {
                let point = [];
                for (let i = 0; i < this.overlays.length; i++) {
                    let overlay = this.overlays[i].getPath();
                    for (let j = 0; j < overlay.length; j++) {
                        let grid = overlay[j];
                        point.push({longitude: grid.lng, latitude: grid.lat});
                    }
                }

                return point;
            },
            clearAll() {
                for (let i = 0; i < this.overlays.length; i++) {
                    mapObj.removeOverlay(this.overlays[i]);
                }

                this.overlays = [];
            },
            _showPolygon(point, styleOptions) {
                if (!point || !styleOptions) {
                    return;
                }

                let PolygonArray = [];
                for (let i = 0; i < point.length; i++) {
                    PolygonArray.push(new BMap.Point(point.longitude, point.latitude));
                }

                let polygon = new BMap.Polygon(PolygonArray, styleOptions);
                mapObj.addOverlay(polygon);
                return polygon;
            },
            showOldPolygon(point, styleOptions) {
                let polygon = this.showOldPolygon(point, styleOptions);
                this.oldOverlays.push(polygon);
            },
            hideOldPolygon() {
                for (let i = 0; i < this.oldOverlays.length; i++) {
                    mapObj.removeOverlay(this.oldOverlays[i]);
                }

                this.oldOverlays = [];
            }
        }
    }
</script>

<style scoped>
    #allmap {
        overflow: hidden;
        width: 100%;
        height: 500px;
    }
</style>