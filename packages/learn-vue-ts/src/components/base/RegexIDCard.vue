<template>
    <div></div>
</template>

<script>
    export default {
        name: 'RegexIDCard',
        components:{},
        data(){
            return {}
        },
        mounted(){
            this.testID();
        },
        methods:{
            testID(){
                let str = '142226199606135216x';
                console.log(this.XL.isChineseIDCardNumber(str));
            }
        }
    }
</script>