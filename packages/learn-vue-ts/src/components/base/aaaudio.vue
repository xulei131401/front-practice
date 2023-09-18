<template>
    <div style="font-size: 18px;">
        <div>任务</div>
        <div>
            <ul>
                <li v-for="(item,index) in selectionConditionList" :key="index" style="margin:10px 0">
                    <v-selection-condition-list/> {{item.name}}<button @click="deleteSelectionCondition(index)">删除</button>
                </li>
            </ul>
        </div>
        <div>
            <button @click="addNewSelectionTask">新建任务</button>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import vSelectionConditionList from './achild'
    export default
    {
        data()
        {
            return {
                selectionConditionList:[
                    {name:"许磊"}
                ],
            }
        },
        methods: {
            // 添加新的用户筛选条件
            addNewSelectionTask(){
                this.selectionConditionList.push({name: "asdasd"});
            },
            // 删除用户筛选条件
            deleteSelectionCondition(index){
                this.selectionConditionList.splice(index,1);

                console.log("this.selectionConditionList:", this.selectionConditionList)
            }
        },
        components:{
            vSelectionConditionList
        }
    }
</script>
<style>
    .div_center {
        text-align: center;;
        width:100%;
        margin:0 auto;
    }
</style>