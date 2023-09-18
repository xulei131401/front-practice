<template>
    <div>
        <span>子组件接受父组件的值{{name}}</span>
        <Button type="primary" @click="upCon">成功按钮</Button>
    </div>
</template>

<script>
    export default {
        name: 'TestPropsChild',
        data(){
            return {
            }
        },
        props: ['name'],
        mounted(){
            console.log("子组件")
        },
        methods:{
            upCon(){
                this.$emit('update:name', '新的name值')
            }
        }
    }
</script>