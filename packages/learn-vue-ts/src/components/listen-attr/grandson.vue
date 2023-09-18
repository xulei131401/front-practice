<template>
    <div class="grandson">我是孙子组件：<span style="color: red;">{{data.name}}</span></div>
</template>

<script>
    export default {
        name: 'grandson',
        props: {
            data: {
                type: Object,
                default: function () {
                    return {};
                }
            }
        },
        data() {
            return {
            }
        },
        mounted(){
            this.$emit("update:ddd", "sakdjlaksd");

            console.log("grandson parent:", this.$parent)
        },
        methods: {

        }
    }
</script>