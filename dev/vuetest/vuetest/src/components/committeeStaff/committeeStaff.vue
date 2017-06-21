<template>
<div class="container">
    <div class="search">
        <input type="input" v-model="searchMsg"><button @click="search">搜索</button>
    </div>
    <table border="1">
        <thead>
            <tr>
                <th v-for="head in list.tableHead">{{head}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="staff in list.staffs" v-show="needShow(staff.dep)">
                <td v-for="(option,$index) in staff">  
                    <span v-if="$index == 'operate'" :class="changeClass(option)">
                        {{showMsg(option)}}
                    </span>
                    <span v-else :class="changeClass($index)" @click="showrouter">{{option}}</span>
                </td>
            </tr>
        </tbody>
    </table>
    <span>{{searchMsg}}</span>
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
            if(key == 0){
                return 'operateClass';
            }else if(key == 2){
                return 'viweClass';
            }else if(key == 'reportOp'){
                return 'operateClass';
            }
        },
        search(){
            let str = this.searchMsg;
            alert(str);
        },
        needShow(val){
            if(val == '客服部'){
                return true;
            }else{
                return false;
            }
        },
        showrouter(){
            console.log(this.$route);
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
    height: 40px;
}
td{
    text-align: center;
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

