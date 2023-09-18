<template>
    <div style="display: inline-flex">
        {{vv}}:<input type="text" :value="inputName" :datak="inputName">
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        props: {
            vv: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                inputName: Math.random()
            }
        },
        methods: {}
    }
</script>