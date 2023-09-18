import AMap from 'AMap'

//独家代理商选项配置
const EX_AGENT_OPS = {
    strokeWeight: 2.5,
    strokeColor: "#ff665a",//淡红色
    fillColor: "#ff665a",
    fillOpacity: 0.1,
    strokeOpacity: 1,
};

//普通代理商选项配置
const NORMAL_AGENT_OPS = {
    strokeWeight: 2.5,
    strokeColor: "#26b99a",//绿色
    fillColor: "#26b99a",
    fillOpacity: 0.1,
    strokeOpacity: 1,
};

//分校保护半径的选项配置
const STORE_PROTECTED_OPS = {
    strokeColor: "#ffc000",
    strokeWeight: 1,
    fillColor: "#fff100",
    fillOpacity: 0.1,
    strokeOpacity: 1,
    strokeStyle: 'solid',
}

const JOIN_MIN_ZOOM = 4;
const JOIN_MAX_ZOOM = 20;

const FLAG_SIZE = new AMap.Size(20, 20);

const INIT_JOIN_CENTER_POINT = {longitude: 109.548024, latitude: 38.002395};

function getJoinMapObj(id) {
    if (!id) {
        return null;
    }

    return new AMap.Map(id, {
        resizeEnable: true, //是否监控地图容器尺寸变化
        expandZoomRange: true,//用于突破比例尺限制，可达到10米精度
        zoom: JOIN_MIN_ZOOM, //初始化地图层级
        zooms: [JOIN_MIN_ZOOM, JOIN_MAX_ZOOM],
        center: new AMap.LngLat(INIT_JOIN_CENTER_POINT.longitude, INIT_JOIN_CENTER_POINT.latitude) //初始化地图中心点
    });
}

function getNormalMapObj(id, options) {
    if (!id) {
        return null;
    }

    return new AMap.Map(id, options);
}

function convertPoint2Gd(point, type = 'baidu') {
    return new Promise((resolve, reject) => {
        let convertLngLat = new AMap.LngLat(point.longitude, point.latitude);
        AMap.convertFrom(convertLngLat, type, (status, result) => {
            if (result.info === 'ok') {
                let newLngLat = result.locations;
                resolve({longitude:newLngLat[0].lng, latitude:newLngLat[0].lat})
            }

            reject();
        })
    });
}

function getDistance(pointStart, pointEnd) {
    let distance = AMap.GeometryUtil.distance(
        new AMap.LngLat(pointStart.longitude, pointStart.latitude),
        new AMap.LngLat(pointEnd.longitude, pointEnd.latitude)
    );

    return Math.round(distance);
}

function normalStoreFlagRemark(){
    return new AMap.Icon({
        image: "//s.gsucdn.com/static/images/red_flag1.png",
        size: FLAG_SIZE,
        imageSize: FLAG_SIZE
    })
}

function trailStoreFlagRemark(){
    return new AMap.Icon({
        image: "/libs/images/orange_flag.png",
        size: FLAG_SIZE,
        imageSize: FLAG_SIZE
    })
}

function addMarker(point, icon) {
    icon = icon || 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png';//可以是string或者一个Icon对象
    return new AMap.Marker({
        icon: icon,
        position: new AMap.LngLat(point.longitude, point.latitude)
    });
}

function addCircle(point, radius, options) {
    return new AMap.Circle(options);
}

function addStoreProtectedCircle(point, radius) {
    let options = Object.assign({}, {
            center: new AMap.LngLat(point.longitude, point.latitude),
            radius: radius,
            bubble: true
        },
        STORE_PROTECTED_OPS
    );

    return addCircle(point, radius, options);
}




















/************************************************导出一个助手对象即可**********************************************/
const AMapHelper = {};

Object.defineProperties(AMapHelper, {
    'addCircle': {value: addCircle},
    'addStoreProtectedCircle': {value: addStoreProtectedCircle},
    'addMarker': {value: addMarker},
    'trailStoreFlagRemark': {value: trailStoreFlagRemark},
    'normalStoreFlagRemark': {value: normalStoreFlagRemark},
    'getNormalMapObj': {value: getNormalMapObj},
    'getJoinMapObj': {value: getJoinMapObj},
    'convertPoint2Gd': {value: convertPoint2Gd},
    'getDistance': {value: getDistance},
});

export default AMapHelper