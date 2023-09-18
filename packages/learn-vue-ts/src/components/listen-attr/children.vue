<template>
    <div class="children">
        <div>我是儿子组件</div>
        <p>attrs:{{$attrs}}</p>
        <p>props:{{$props}}</p>
        <p>中间组件aaa：{{aaa}}</p>
        <grandson v-bind="$attrs" v-on="$listeners" :ddd.sync="aaa"/>
    </div>
</template>

<script>
    import grandson from "./grandson";
    export default {
        name: 'childrenIndex',
        components: {
            grandson
        },
        inheritAttrs: true,
        data() {
            return {
                aaa: ""
            }
        },
        mounted(){
            // console.log("this.$listeners:", this.$listeners)
            // console.log("this.$attrs::", this.$attrs)
            // console.log("children root:", this.$root)
            // console.log("children children:", this.$children)
            console.log("children parent:", this.$parent)
        },
        methods: {

        }
    }
</script>