<template>
    <div class="partBMP">
        <b-m-p ref="map" :height="mapOptions.height" :width="mapOptions.width"></b-m-p>
        <div>
            <Button type="primary" size="small" @click="drawPolygon">画多边形</Button>
            <Button type="primary" size="small" class="button" @click="drawLine">画线</Button>
            <Button type="primary" size="small" class="button" @click="clearAll">清除所有覆盖物</Button>
            <Button type="primary" size="small" class="button" @click="getPoint">获取多边形的顶点</Button>
            <Button type="primary" size="small" class="button" @click="openEditing">开启线、面编辑功能</Button>
            <Button type="primary" size="small" class="button" @click="closeEditing">关闭线、面编辑功能</Button>
            <Button type="primary" size="small" class="button" @click="showOldPolygon">显示原有多边形</Button>
            <Button type="primary" size="small" class="button" @click="hideOldPolygon">隐藏原有多边形</Button>
        </div>

        <div>
            <span>旧坐标：</span><Input class="textarea" v-model="oldPoints" type="textarea"
                                    :autosize="{minRows: 5,maxRows: 15}" placeholder="Enter something..."></Input>
            <span>新坐标：</span><Input class="textarea" v-model="newPoints" type="textarea"
                                    :autosize="{minRows: 5,maxRows: 15}" placeholder="Enter something..."></Input>
        </div>
        <div>
            <Button class="submit" type="primary" size="small" @click="submit">提交</Button>
        </div>
    </div>
</template>

<script>
    import BMP from './BMP'

    const AGENT_ID = 97;

    const OLD_PY_STYLE = {
        strokeColor: "red",
        fillColor: "red",
        strokeWeight: 3,
        strokeOpacity: 0.8,
        fillOpacity: 0.6,
        strokeStyle: 'solid'
    }

    export default {
        name: 'partBMPIndex',
        components: {
            BMP
        },
        data() {
            return {
                mapOptions: {
                    width: "100%",
                    height: 400
                },
                oldPoint: {},
                newPoint: {},
                oldPoints: '',
                newPoints: ''
            }
        },
        computed: {},
        methods: {
            clearAll() {
                this.$refs.map.clearAll();
            },
            drawLine() {
                this.$refs.map.clearAll();
                this.$refs.map.drawPolyLine();
            },
            drawPolygon() {
                this.$refs.map.clearAll();
                this.$refs.map.drawPolygon();
            },
            openEditing() {
                this.$refs.map.openEditing();
            },
            closeEditing() {
                this.$refs.map.closeEditing();
            },
            getPoint() {
                let pointArray = this.$refs.map.getPoint();
                console.log("pointArray:", pointArray)
                this.setNewPoints(pointArray);
            },
            setNewPoints(point) {
                this.newPoint = point;
                this.newPoints = JSON.stringify(point);
            },
            showOldPolygon() {
                this.$refs.map.showOldPolygon(this.oldPoint, OLD_PY_STYLE);
            },
            hideOldPolygon() {
                this.$refs.map.hideOldPolygon();
            },
            submit() {
                if (this.newPoints == '') {
                    this.$Notice.error({
                        title: '警告',
                        top: 50,
                        duration: 3,
                        desc: `<span style="color:red;font-weight: bold;">坐标集合不能为空！！！</span>`
                    });

                    return;
                }

                this.$Modal.confirm({
                    title: '确认',
                    content: "确定要提交该坐标集合吗？",
                    onOk: () => {
                        console.log("确认ok")

                    }
                });
            }
        }
    }
</script>

<style scoped lang="less">
    .partBMP {
        .button {
            margin-left: 5px;
            margin-top: 5px;
        }

        .textarea {
            width: 300px;
            margin-top: 5px;
        }

        .submit {
            margin-top: 5px;
        }
    }
</style>