<template>
<div>
    <table border="1" bordercolor="#dfe6ec">
        <thead>
            <tr>
                <th v-for="head in list.tableHead">{{head}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="staff in list.staffs">
                <td v-for="(option,$index) in staff">
                    <span v-if="$index == 'operate'">
                        <el-button type="success" size="small" v-show="option=='1'?true:false">已完成</el-button>
                        <el-button type="warning" size="small" v-show="option=='2'?true:false">查看结果</el-button>
                        <el-button type="info" size="small" v-show="option=='0'?true:false">完成考评</el-button>
                    </span>
                    <span v-else>{{option}}</span>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    data(){
        return{
            list:{
                tableHead:{name:'姓名',dep:'部门',job:'岗位',operate:'操作'},
                staffs:[
                    {name:'李磊',dep:'研发部',job:'web前端开发',operate:0},
                    {name:'张想',dep:'研发部',job:'web前端开发',operate:1},
                    {name:'王麻子',dep:'研发部',job:'web后端开发',operate:2}
                ]
            }
        }
    },
    methods:{
        showMsg(value){
            if(value == 0){
                return '完成考评';
            }else if(value == 1){
                return '已完成';
            }else{
                return '查看结果';
            }
        },
        changeClass(key){

        }
    }
}
</script>

<style scoped>
table{
    border-collapse:collapse;
    width: 100%;
    font-size: 14px;
}
tbody,thead{
    border-color: #dfe6ec;
}
td,th{
    text-align: center;
    height: 45px;
    border-color: #dfe6ec;
}
td{
    text-align: center;
}
th{
    background-color: #eef1f6;
}
.el-button+.el-button{
    margin: 0
}

</style>
