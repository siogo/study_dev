<template>
<div class="container">
    <div class="search">
        <input type="input" v-model="searchMsg"><button @click="search">搜索</button>
    </div>
    <table border="1" bordercolor='#dfe6ec'>
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
                        <el-button type="warning" size="small" v-show="option=='2'?true:false">完成考评</el-button>
                        <el-button type="info" size="small" v-show="option=='0'?true:false">查看结果</el-button>
                    </span>
                    <span v-else-if="$index == 'reportOp'">
                        <el-button type="info" size="small" @click="goWorkreport">工作报告</el-button>
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
            searchMsg:'',
            list:{
                tableHead:{name:'姓名',dep:'部门',job:'岗位',operate:'操作',reportOp:'操作'},
                staffs:[
                    {name:'李磊',dep:'研发部',job:'web前端开发',operate:0,reportOp:'工作报告'},
                    {name:'张想',dep:'研发部',job:'web前端开发',operate:1,reportOp:'工作报告'},
                    {name:'王麻子',dep:'研发部',job:'web后端开发',operate:2,reportOp:'工作报告'},
                    {name:'李四',dep:'创意部',job:'web后端开发',operate:2,reportOp:'工作报告'},
                    {name:'王五',dep:'客服部',job:'web后端开发',operate:2,reportOp:'工作报告'},
                    {name:'张三',dep:'客服部',job:'web后端开发',operate:2,reportOp:'工作报告'}
                ]
            }
        }
    },
    methods:{
        search(){
            let str = this.searchMsg;
            alert(str);
        },
        goWorkreport(){
            this.$router.push({name: '工作报告列表'});
        }
    },
    mounted(){ 
        console.log(this.$route);
    },
    created(){
        console.log(this.$route);
    }
}
</script>

<style>
.container{
    padding: 20px;
}
.search{
    display: inline-block;
    float: right;
    margin-bottom: 10px;
}
.search input{
    height: 28px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    margin-right: 10px;
}
.search button{
    height: 28px;
}
table{
    border-collapse:collapse;
    width: 100%; 
}
td,th{
    height: 45px;
    border-color: #dfe6ec;
    font-size: 14px;
}
td{
    text-align: center;
}
th{
    background-color: #eef1f6;
}
.operateClass{
    padding: 3px 8px;
    border-radius: 5px;
    background: #199bd7;
    color: #fff;
    cursor: pointer;

}
.viweClass{
    padding: 3px 8px;
    border-radius: 5px;
    color: #000;
    cursor: pointer;
    border: 1px solid #000;
    box-sizing: border-box;
}
</style>

