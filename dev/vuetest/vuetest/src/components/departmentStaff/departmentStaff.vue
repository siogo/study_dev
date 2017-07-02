<template>
<div class="tableCont">
    <table border="1">
        <thead>
            <tr>
                <th v-for="head in list.tableHead">{{head}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="staff in list.staffs">
                <td v-for="(option,$index) in staff" v-show="$index == 'uid' || $index =='relation'?false:true">
                    <span v-if="$index == 'operate'">
                        <el-button type="success" size="small" v-show="option=='1'?true:false">已完成</el-button>
                        <el-button type="danger" size="small" @click="goToSubject(staff)"  v-show="option=='0' && staff.relation=='1'?true:false">完成考评</el-button>
                        <el-button type="danger" size="small" @click="goToSubject(staff)"  v-show="option=='0' && staff.relation=='0'?true:false">查看</el-button>
                        <el-button type="info" size="small" v-show="option=='2'?true:false">查看结果</el-button>
                    </span>
                    <span v-else-if="$index == 'reportOp'">
                        <el-button type="warning" size="small">工作报告</el-button>
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
                tableHead:{name:'姓名',dep:'部门',job:'岗位',operate:'操作',reportOp:'操作'},
                "staffs": [
                    {
                        "uid": "0642d49c-d9af-48c0-93b6-e4e330b9bdb3",
                        "name": "test322",
                        "dep": "工程部",
                        "jop": "工程师",
                        "relation": 0,
                        "operate": 0,
                        "reportOp": 0
                    },
                    {
                        "uid": "1633b449-279d-4ecd-aa66-01eacb3271cd",
                        "name": "test1",
                        "dep": "工程部",
                        "jop": "工程师",
                        "relation": 1,
                        "operate": 0,
                        "reportOp": 0
                    },
                    {
                        "uid": "808d6804-d19e-4d73-b335-be92887b6701",
                        "name": "test22",
                        "dep": "工程部",
                        "jop": "工程师",
                        "relation": 0,
                        "operate": 0,
                        "reportOp": 0
                    },
                    {
                        "uid": "85d867c2-4763-47ce-9a1d-553a0664885a",
                        "name": "zzz",
                        "dep": "工程部",
                        "jop": "工程师",
                        "relation": 1,
                        "operate": 0,
                        "reportOp": 0
                    },
                    {
                        "uid": "8e201dda-4f84-47e6-8fa3-a2680e9c6297",
                        "name": "ming",
                        "dep": "工程部",
                        "jop": "asfas",
                        "relation": 0,
                        "operate": 0,
                        "reportOp": 0
                    },
                    {
                        "uid": "cb748972-4cae-4912-8025-e558df3c5d40",
                        "name": "沙发沙芬",
                        "dep": "工程部",
                        "jop": "搜索",
                        "relation": 0,
                        "operate": 0,
                        "reportOp": 0
                    },
                    {
                        "uid": "e6444210-f0a0-466c-a7a1-ccc4620af262",
                        "name": "admin",
                        "dep": "工程部",
                        "jop": "工程师",
                        "relation": 1,
                        "operate": 0,
                        "reportOp": 0
                    },
                    {
                        "uid": "f87f4d38-6c43-4a95-ad27-b5f63cae6d2e",
                        "name": "wu_zheng",
                        "dep": "工程部",
                        "jop": "工程师",
                        "relation": 0,
                        "operate": 0,
                        "reportOp": 0
                    }
                ]
            },
            totalPage:0,
            currentPage: 1,
            pageNum: 10,
            keyWord:""
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
        goWorkreport(key){
            if(key == 'reportOp'){
                this.$router.push({name: '工作报告列表'});
            }else{
                return false;
            }
        },
        goHeadSubjeck(val,uid){
            // this.$router.push({path: '/work-Report/work-report-details'});
            if(val == 0){
                this.$router.push({name:'主管考评',params:{uid:uid}})
            }
        }
    }
}
</script>

<style scope>
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
.el-button+.el-button{
    margin: 0
}
</style>
