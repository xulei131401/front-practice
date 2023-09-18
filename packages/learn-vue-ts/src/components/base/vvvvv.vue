<template>
    <div style="font-size: 18px;">
        <div>任务</div>
        <div>
            <ul>
                <li v-for="(item,index) in conditions" :key="getId()" style="margin:10px 0">
                    <vSelectionConditionList/>
                    <button @click="deleteSelectionCondition(index)">删除</button>
                </li>
            </ul>
        </div>
        <div>
            <button @click="addNewSelectionTask">新建任务</button>
            <button @click="insert">插队</button>
            <button @click="reset">销毁</button>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import vSelectionConditionList from './achild'

    export default {
        components: {
            vSelectionConditionList
        },
        data() {
            return {
                conditions: [
                    {name: "许磊", id: 1},
                    {name: "张三", id: 2},
                    {name: "李四", id: 3},
                ],
                id: 3
            }
        },
        methods: {
            addNewSelectionTask() {
                this.conditions.push({name: Math.random().toString(), id: this.id + 1});
                this.id += 1;
            },
            deleteSelectionCondition(index) {
                this.conditions.splice(index, 1);

                console.log("this.selectionConditionList:", this.conditions)
            },
            insert() {
                this.conditions.splice(2, 0, {name: "许磊" + String(Math.random()), age: ""})
            },
            reset() {
                this.conditions = [{name: "lill", id: 5}];
            },
            getId(){
                console.log("asdasdasdasd")
                return Math.random() * (50 - 1 + 1) + 1;
            }
        }
    }
</script>
<style>
    .div_center {
        text-align: center;;
        width: 100%;
        margin: 0 auto;
    }
</style>