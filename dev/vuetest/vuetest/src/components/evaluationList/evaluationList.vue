<template>
<div>
    <div class="search"></div>
    <tableCom :table="table"></tableCom>
</div>
</template>

<script>
import tableCom from '../table/table.vue';
export default {
    components:{
        tableCom
    },
    data(){
        return{
            table:{
                tableTitle:[
                    {name:'姓名',department:'部门',job:'岗位',operate:'操作'}
                ],
                workers:[
                    {name:'李磊',department:'创意部',job:'UI设计',operate:'完成考评'},
                    {name:'张相',department:'研发部',job:'web前端开发',operate:'完成考评'}
                ]
            }
        }
    }
}
</script>

<style scope>

</style>
