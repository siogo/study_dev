<template>
<div class="todo">
    <h3 class="todolistsTitle">待办事项</h3>
    <p>{{this.lists2}}</p>
</div>
</template>

<script>
import atodolist from "../list/list.vue";

export default {
    data(){
        return{
            lists:[
                {title:'请完成部门员工的季度职业能力考核',time:'2017.05.10',isfinish:1},
                {title:'2017年第一季度员工绩效考核结果已公布',time:'2017.05.11',isfinish:0},
                {title:'请完成员工的季度职业能力考核',time:'2017.05.12',isfinish:0},
                {title:'请完成您的员工季度职业能力考核',time:'2017.05.13',isfinish:0}
            ],
            lists2:[
                {
                    // 试卷名称
                    title:'',

                    // 大题
                    bigQuestion:{
                        // 修养
                        xiuyang:{
                            title:'能力',
                            dati:[
                                {
                                    num:1,
                                    title:'专业知识技能',
                                    // 主管radio选项

                                    xiaoti:{
                                        num:1,
                                        title:'小题题目1',
                                        picked:[],
                                        // table的th
                                        tableTitle:[
                                            {subtitle:'评分标准',weight:'标准分',selfscore:'自评',headscore:'直接上级'}
                                        ],
                                        // 题目内容（题干，权重，员工自打分，主管打分选项）
                                        name:[
                                            {subtitle:'有限的知识和技能，拥有从事本专业工作的基本知识或某一领域的某些知识点，这些知识未在工作中实践过',weight:5,selfscore:'',headscore:''},
                                            {subtitle:'具备基础知识和必要技能，集中于本专业工作的基本知识或某一领域的某些知识点，这些知识在工作中多次实践过',weight:10,selfscore:'',headscore:''},
                                            {subtitle:'具备全面良好的知识和必要技能，主要领域精通，这些知识有相当了解',weight:15,selfscore:'√',headscore:''},
                                            {subtitle:'在本专业领域具有精通、全面的知识和技能',weight:20,selfscore:'',headscore:''}
                                        ]
                                    },
                                    xiaoti2:{
                                        num:2,
                                        title:'小题题目2',
                                        picked:[],
                                        // table的th
                                        tableTitle:[
                                            {subtitle:'评分标准',weight:'标准分',selfscore:'自评',headscore:'直接上级'}
                                        ],
                                        // 题目内容（题干，权重，员工自打分，主管打分选项）
                                        name:[
                                            {subtitle:'有限的知识和技能，拥有从事本专业工作的基本知识或某一领域的某些知识点，这些知识未在工作中实践过',weight:5,selfscore:'',headscore:''},
                                            {subtitle:'具备基础知识和必要技能，集中于本专业工作的基本知识或某一领域的某些知识点，这些知识在工作中多次实践过',weight:10,selfscore:'',headscore:''},
                                            {subtitle:'具备全面良好的知识和必要技能，主要领域精通，这些知识有相当了解',weight:15,selfscore:'√',headscore:''},
                                            {subtitle:'在本专业领域具有精通、全面的知识和技能',weight:20,selfscore:'',headscore:''}
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    bigQuestion2:{
                        // 修养
                        xiuyang2:{
                            title:'能力',
                            dati2:[
                                {
                                    num:1,
                                    title:'专业知识技能',
                                    // 主管radio选项

                                    xiaoti2:{
                                        num:1,
                                        title:'小题题目',
                                        picked:[],
                                        // table的th
                                        tableTitle:[
                                            {subtitle:'评分标准',weight:'标准分',selfscore:'自评',headscore:'直接上级'}
                                        ],
                                        // 题目内容（题干，权重，员工自打分，主管打分选项）
                                        name:[
                                            {subtitle:'有限的知识和技能，拥有从事本专业工作的基本知识或某一领域的某些知识点，这些知识未在工作中实践过',weight:5,selfscore:'',headscore:''},
                                            {subtitle:'具备基础知识和必要技能，集中于本专业工作的基本知识或某一领域的某些知识点，这些知识在工作中多次实践过',weight:10,selfscore:'',headscore:''},
                                            {subtitle:'具备全面良好的知识和必要技能，主要领域精通，这些知识有相当了解',weight:15,selfscore:'√',headscore:''},
                                            {subtitle:'在本专业领域具有精通、全面的知识和技能',weight:20,selfscore:'',headscore:''}
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        }
    },
    components:{
        atodolist
    },
    methods:{
        showMS(index,todo){
            console.log(todo.title);
            // this.$router.push()
        }
    },
    created(){
        console.log(this.lists2);
    }
}
</script>

<style scope>
.todo{
    padding: 0 20px;
}
.todolistsTitle{
    color: #a57b7c;
}
.todolistsContent{
    margin: 0;
    padding: 0;
}
.todolistsContent .todolist{
    display: block;
    cursor: pointer;
    margin-top: 12px;
}
</style>











<!-- <div class="paginationW">
        <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageNum" layout="total, prev, pager, next, jumper" :total="totalPage">
        </el-pagination>
    </div>

totalPage:0,
            currentPage: 1,
            pageNum: 10,
            keyWord:"",
            staff:1


handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.getUserListFilter(this.staff,val, this.pageNum, "", "");
        },
        committeeGetStaffFilter(staff,pagenum,pagesize,keyword,orderby){
            pagenum = pagenum ? pagenum : 0;
            pagesize = pagesize ? pagesize : 10;
            keyword = keyword ? keyword : "";
            orderby = orderby ? orderby : "";
            committeeGetStaff({staff,pagenum,pagesize,keyword,orderby}).then(res=>{
                let {data} = res;
                this.list.staffs = data.list.staffs
                this.totalPage = data.total
            })
        }


created(){
        this.committeeGetStaffFilter(this.staff,0,this.pageNum);
    }
 -->
