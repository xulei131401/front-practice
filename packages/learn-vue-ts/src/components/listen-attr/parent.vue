<template>
    <div class="parent">
        我是父亲组件aaa--:{{aaa}}
<!--        <children-index :data="data" :agent-id="agentId" :ddd.sync="aaa"/>-->
        <children2-index :aaa="aaa" v-if="showA"/>
    </div>
</template>

<script>
    import childrenIndex from "./children";
    import children2Index from "./children2";

    export default {
        name: 'parentIndex',
        components: {
            // childrenIndex,
            children2Index
        },
        data() {
            return {
                data: {
                    name: "许磊",
                    age: 25
                },
                agentId: 92,
                aaa: "",
                showA: false
            }
        },
        mounted(){
            this.aaa = "lakjdsklasd"
            // console.log("parent root:", this.$root)
            // console.log("children children:", this.$children)
            // console.log("parent parent:", this.$parent)
            setTimeout(() => {
                this.showA = true;
                this.aaa = "989099890"
            }, 3000)

            setTimeout(() => {
                this.aaa = "vbvvvvv"
            }, 5000)

            console.log("我是父组件的mounted")
        },
        created(){
            console.log("我是父组件的created")
        },
        methods: {

        }
    }
</script>