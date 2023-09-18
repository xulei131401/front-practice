<template>
    <div class="children2">
        asdasdads
    </div>
</template>

<script>
    export default {
        name: 'children2Index',
        props: {
            aaa: {
                default: ""
            }
        },
        watch:{
            aaa: {
                handler: function (val, oldVal) {
                    console.log("子组件watch")
                    console.log("xxx-aaa:", val, oldVal)
                },
                // immediate:true
            }
        },
        data() {
            return {
            }
        },
        mounted(){
            console.log("我是子组件的mounted")
        },
        created(){
            console.log("我是子组件的created")
        },
        methods: {

        }
    }
</script>