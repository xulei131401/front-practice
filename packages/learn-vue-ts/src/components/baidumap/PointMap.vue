<template>
    <div>
        <div :id="uuid" :style="mapStyle"></div>
    </div>
</template>

<script>
    export default {
        name:"pointMapIndex",
        props:{
            width:{
                default:"100%"
            },
            height:{
                default:"100%"
            },
            points:{
                default:function () {
                    return [
                        {longitude:116.400244, latitude:39.92556}
                    ]
                }
            }
        },
        watch:{
            points:{
                handler:function (val, oldVal) {
                    this.clear();
                    this.setPoints(val);
                },
                deep:true,
                immediate:true
            }
        },
        data () {
            return {
                uuid:this.XL.createUuid("POINTMAP"),
                mapObj:null,
                infoWindow:null
            }
        },
        mounted(){
            this._createMap();
            this.refresh();
        },
        computed: {
            openInfo(point, target){
                let data = point;
                if (this.location){
                    let distance = this.mapObj.getDistance(this.location, point, this.XL.filter.distance);
                    data['extra'] = `<li>距搜索目的地：${distance}</li>`;
                } else {
                    data['extra'] = "";
                }

                let content = this.parseString(this.infoTpl, data);
                this.openWindowInfo(point, content);
            },
            mapStyle(){
                let style = {};
                let width = this.width || "100%";
                let height = this.height || "100%";
                if (("" + width).indexOf("%") !== -1){
                    style['width'] = width;
                } else {
                    style['width'] = width + "px";
                }

                if (("" + height).indexOf("%") !== -1){
                    style['height'] = height;
                } else {
                    style['height'] = height + "px";
                }

                return style;
            }
        },
        methods:{
            parseString(str, data) {
                // 处理str参数的过滤器,将 /detail/{id} {"id": "123"} 转换成 /detail/123
                // 最好放到全局的地方
                if (this.XL.isUndefined(str)){
                    return "";
                }

                var newStr = "" + str;
                data = data || {};
                for (var k in data) {
                    newStr = newStr.replace(new RegExp("{" + k + "}", "gm"), data[k])
                }

                return newStr;
            },
            refresh(){
                this.AJAX.getJson("http://bingo.store.com/agent/store/point/list").then((data) => {
                    setTimeout(() => {
                        this.clear();
                        this.setPoints(data.store_list, {
                            mouseover:this.openInfo,
                        });
                    },  200)
                });
            },
            getMapIcon(){
                let icon = new BMap.Icon("/libs/images/red_flag.png", new BMap.Size(20, 20));
                icon.setImageSize(new BMap.Size(20,20));
                return icon;
            },
            _getCenterPoint(points){
                if (points && points.length){
                    return new BMap.Point(Number(points[0].longitude), Number(points[0].latitude))
                }else {
                    return new BMap.Point(116.400244,39.92556);
                }
            },
            _addNavBar(){
                var navigationControl = new BMap.NavigationControl({
                    anchor: BMAP_ANCHOR_TOP_LEFT,
                    type: BMAP_NAVIGATION_CONTROL_LARGE
                });

                this.mapObj.addControl(navigationControl);
            },
            _createMap(){
                if (this.mapObj){
                    return;
                }

                this.mapObj = new BMap.Map(this.uuid);

                this._initProperties();
                this._setZoom();
                this._addNavBar();
                this.setPoints(this.points);
            },
            _initProperties(){
                this.mapObj.enableDragging();
                this.mapObj.enableScrollWheelZoom(true);
            },
            _setZoom(){
                this.mapObj.setMinZoom(5);
                this.mapObj.setMaxZoom(13);
            },
            drawCircle(point, options){
                let circle = new BMap.Circle(
                    new BMap.Point(
                        Number(point.longitude),
                        Number(point.latitude)
                    ), point.radius, {
                    strokeWeight: 2,
                    strokeColor: options.color,//#5F6C70
                    fillColor:options.color,
                    fillOpacity:1,
                });

                this.mapObj.addOverlay(circle);
            },
            drawMarker(point, callback){
                let marker = new BMap.Marker(new BMap.Point(Number(point.longitude), Number(point.latitude)), {icon: this.getMapIcon()});

                if (callback && callback.click){
                    marker.addEventListener("click",function(e) {
                        this.XL.log("point-map", "click", point);
                        callback.click(point, e.target);
                    });
                }

                if (callback && callback.mouseover){
                    marker.addEventListener("mouseover",function(e) {
                        this.XL.log("point-map", "mouseover", point);
                        callback.mouseover(point, e.target);
                    });
                }

                if (callback && callback.mouseout){
                    marker.addEventListener("mouseout", function(e) {
                        this.XL.log("point-map", "mouseout", point);
                        callback.mouseout(point, e.target);
                    });
                }

                this.mapObj.addOverlay(marker);
            },
            _drawBoundary(name, options){
                let that = this;
                let bdary = new BMap.Boundary();
                bdary.get(name, function(rs){
                    let count = rs.boundaries.length;
                    if (count === 0) {
                        return ;
                    }

                    let pointArray = [];
                    for (let i = 0; i < count; i++) {
                        let ply = new BMap.Polygon(rs.boundaries[i], options);
                        that.mapObj.addOverlay(ply);
                        pointArray = pointArray.concat(ply.getPath());
                    }
                });
            },
            drawExclusion(name){
                let options = {
                    strokeWeight: 2,
                    strokeColor: "#EF1516",
                    fillColor:"#EF1516",
                    fillOpacity:1,
                };

                this._drawBoundary(name, options)
            },
            drawExceptExclusion(name){
                let options = {
                    strokeWeight: 2,
                    strokeColor: "#5F6C70",
                    fillColor:"#5F6C70",
                    fillOpacity:1,
                };

                this._drawBoundary(name, options)
            },
            setCenter(point){
                this.mapObj && this.mapObj.centerAndZoom(new BMap.Point(Number(point.longitude), Number(point.latitude)), 5);
                this.closeInfo();
            },
            clear(){
                this.mapObj && this.mapObj.clearOverlays();
            },
            closeInfo(){
                this.infoWindow && this.mapObj.closeInfoWindow(this.infoWindow);
            },
            getDistance(start, end, format){
                let startPt = new BMap.Point(start.longitude, start.latitude);
                let endPt = new BMap.Point(end.longitude, end.latitude);
                let distance = this.mapObj.getDistance(startPt, endPt);
                return format ? format(distance) : distance;
            },
            setPoints(data, callback){
                if (!this.mapObj || !this.XL.isArray(data)){
                    return;
                }

                //this._createMap();

                let that = this;
                let pts = [];
                console.log("data:", data)
                data.forEach(function (pt) {
                    if (pt.longitude && pt.latitude){
                        pts.push(pt);
                        if (pt.is_relation == 1) {
                            that.drawMarker(pt, callback);
                        }

                        let options = {
                            color:'#FACC66'
                        };

                        that.drawCircle(pt,options);
                    }
                });

                that.drawExclusion('山西');
                that.drawExceptExclusion('湖南');

                let center = this._getCenterPoint(pts);
                this.mapObj.centerAndZoom(center, 5);
            },
            openWindowInfo(data, content, opts){
                console.log('data:', data)
                console.log('content:', content)
                console.log('opts:', opts)

                if (!data.name || !data.address) {
                    return;
                }

                this.infoWindow = new BMap.InfoWindow(content, {});
                this.mapObj.openInfoWindow(this.infoWindow, new BMap.Point(data.longitude, data.latitude));
            },
        },
    }
</script>
