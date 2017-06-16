<template>
<div>
    <h3>李磊</h3>
    <h4>一、专业知识技能（分值50分）</h4>
    <div v-for="list in lists">
        <h5>{{list.num}}、{{list.title}}</h5>
        <table border="1">
            <thead>
                <tr v-for="title in list.tableTitle">
                    <th v-for="option in title">
                        <span>{{option}}</span>
                    </th> 
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in list.name">
                    <td v-for="(option,$index) in row" :class="fontLeft($index)">
                        <span>{{option}}</span>
                        <input type="radio" :value="row.weight" v-show="inputShow($index)" v-model="list.picked">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <h4>员工自我评价</h4>
    <p class="selfEvaluation">{{selfEvaluation}}</p>
    <h4>部门负责人评语</h4>
    <p class="selfEvaluation">{{headEvaluation}}</p>
    <h4>考评委员会评语</h4>
    <textarea v-model="committeeEvaluation"></textarea>
    <button>取消</button>
    <button @click="total()">提交</button>
    <p>{{totalScore}}</p>
</div>
</template>

<script>
export default {
    data(){
        return{
            // 打分提交数组
            totalScore:[],
            // 个人自我评价文字
            selfEvaluation:'这是自我介绍哈哈哈哈',
            // 主管评价
            headEvaluation:'这是部门负责人评价哈哈哈哈',
            // 考评委员会评价
            committeeEvaluation:'',
            // 题目列表
            lists:[
                {
                    // 题目序号
                    num:1,
                    title:'知识和技能',
                    // 主管radio选项
                    picked:[],
                    // table的th
                    tableTitle:[
                        {subtitle:'评分标准',weight:'标准分',selfscore:'自评',headscore:'直接上级',workmateOne:'同事1',workmateTwo:'同事2',committee:'考评委员会'}
                    ],
                    // 题目内容（题干，权重，员工自打分，主管打分选项）
                    name:[
                        {subtitle:'有限的知识和技能，拥有从事本专业工作的基本知识或某一领域的某些知识点，这些知识未在工作中实践过',weight:5,selfscore:'',headscore:'',workmateOne:'',workmateTwo:'',committee:''},
                        {subtitle:'具备基础知识和必要技能，集中于本专业工作的基本知识或某一领域的某些知识点，这些知识在工作中多次实践过',weight:10,selfscore:'',headscore:'√',workmateOne:'',workmateTwo:'',committee:''},
                        {subtitle:'具备全面良好的知识和必要技能，主要领域精通，这些知识有相当了解',weight:15,selfscore:'√',headscore:'',workmateOne:'',workmateTwo:'',committee:''},
                        {subtitle:'在本专业领域具有精通、全面的知识和技能',weight:20,selfscore:'',headscore:'',workmateOne:'',workmateTwo:'',committee:''}
                    ]
                },
                {
                    num:2,
                    title:'技能和知识',
                    picked:[],
                    tableTitle:[
                        {subtitle:'评分标准',weight:'标准分',selfscore:'自评',headscore:'直接上级',workmateOne:'同事1',workmateTwo:'同事2',committee:'考评委员会'}
                    ],
                    name:[
                        {subtitle:'有限的知识和技能，拥有从事本专业工作的基本知识或某一领域的某些知识点，这些知识未在工作中实践过',weight:5,selfscore:'',headscore:'√',workmateOne:'',workmateTwo:'',committee:''},
                        {subtitle:'具备基础知识和必要技能，集中于本专业工作的基本知识或某一领域的某些知识点，这些知识在工作中多次实践过',weight:10,selfscore:'√',headscore:'',workmateOne:'',workmateTwo:'',committee:''},
                        {subtitle:'具备全面良好的知识和必要技能，主要领域精通，这些知识有相当了解',weight:15,selfscore:'',headscore:'',workmateOne:'',workmateTwo:'',committee:''},
                        {subtitle:'在本专业领域具有精通、全面的知识和技能',weight:20,selfscore:'',headscore:'',workmateOne:'',workmateTwo:'',committee:''}
                    ]
                }
            ]
        }
    },
    methods:{
        inputShow(key){
            if(key == 'committee'){
                return true;
            }else{
                return false;
            }
        },
        fontLeft(key){
            if(key == 'subtitle'){
                return 'fontleft';
            }
        },
        total(){
            for(let i = 0;i<this.lists.length;i++){
                this.totalScore.push(this.lists[i].picked)
            }
            this.totalScore.push(this.committeeEvaluation)
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
.fontleft{
    text-align: left;
}
.fontleft span{
    margin-left: 5px;
}
.selfEvaluation{
    padding: 5px;
    border: 1px solid rgb(169,169,169);
}
</style>
