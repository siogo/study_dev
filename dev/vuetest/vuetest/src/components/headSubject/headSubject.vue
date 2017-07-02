<template>
<!--<div>
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
        <p v-show="list.showErr">此为必填项</p>
    </div>

    <h4>员工自我评价</h4>
    <p class="selfEvaluation">{{selfEvaluation}}</p>
    <h4>部门负责人评语</h4>


    <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容">
    </el-input>



    <div style="display: flex;justify-content: center">
        <el-button type="info" @click="total()">提交</el-button>
    </div>

</div>-->
<div>


<div>
    <h1>{{exam.title}}</h1>
    <div v-for="list in exam.shijuan">
        <h2>{{list.examinfo.reporttitle}}</h2>
        <div v-for="timu in list.examinfo.questioninfo">
            <h3>{{timu.questionname}}</h3>
            <ul>
                <li v-for="option in timu.qilist">
                    <el-radio class="radio" v-model="timu.check" :label="option.id"></el-radio>
                    {{option.questionitemname}}
                </li>
            </ul>
        </div>
    </div>
</div>

<h1>表格类型</h1>
<div>
    <h1>{{exam.title}}</h1>
    <div v-for="list in exam.shijuan">
        <h2>{{list.examinfo.reporttitle}}</h2>
        <div v-for="timu in list.examinfo.questioninfo">
            <h3>{{timu.questionname}}</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th v-for="thead in list.examinfo.accountlist">{{thead.value}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="option in timu.qilist">
                        <td class="fontleft">{{option.questionitemname}}</td>
                        <td v-for="show in option.answer">
                            <i v-show="show.value" class="el-icon-check"></i>
                        </td>
                        <td>
                            <!--<input type="radio" :value="option.id" v-model="timu.check">-->
                            <el-radio class="radio" v-model="timu.check" :label="option.id"></el-radio>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
    data(){
        return{
            // 主管打分提交数组
            headScore:[],
            // 个人自我评价文字
            selfEvaluation:'这是自我介绍哈哈哈哈',
            // 主管评价
            headEvaluation:'',
            exam:{
                title:'test',
                shijuan: [
                    {
                        "examinfo": {
                            "id": 8,
                            "reportyear": 2017,
                            "reportquarter": 1,
                            "questiontype": "职业修养",
                            "questiontypevalue": 100,
                            "reporttitle": "测试职业修养",
                            "accountlist": [{value:"评分标准"},{value:"自评"},{value:"直接上级"}],
                            "questioninfo": [
                                {
                                    "id": 9,
                                    "qtype": 2,
                                    "questionname": "题目1",
                                    "questionvalue": 0,
                                    "qilist": [
                                        {
                                            "id": 1,
                                            "questionitemname": "有限的知识和技能，拥有从事本专业工作的基本知识或某一领域的某些知识点，这些知识未在工作中实践过",
                                            "questionitemvalue": 0,
                                            "answer": [{value:true}]
                                        },
                                        {
                                            "id": 2,
                                            "questionitemname": "具备基础知识和必要技能，集中于本专业工作的基本知识或某一领域的某些知识点，这些知识在工作中多次实践过",
                                            "questionitemvalue": 0,
                                            "answer": [{value:false}]
                                        },
                                        {
                                            "id": 3,
                                            "questionitemname": "具备全面良好的知识和必要技能，主要领域精通，这些知识有相当了解",
                                            "questionitemvalue": 0,
                                            "answer": [{value:false}]
                                        },
                                        {
                                            "id": 4,
                                            "questionitemname": "在本专业领域具有精通、全面的知识和技能",
                                            "questionitemvalue": 0,
                                            "answer": [{value:false}]
                    
                                        }
                                    ],
                                    showErr:'不能为空',
                                    check:'',
                                },
                                {
                                    "id": 10,
                                    "qtype": 2,
                                    "questionname": "题目2",
                                    "questionvalue": 0,
                                    "qilist": [
                                        {
                                            "id": 3,
                                            "questionitemname": "有限的知识和技能，拥有从事本专业工作的基本知识或某一领域的某些知识点，这些知识未在工作中实践过",
                                            "questionitemvalue": 0,
                                            "answer": [{value:true}]
                                        },
                                        {
                                            "id": 4,
                                            "questionitemname": "具备基础知识和必要技能，集中于本专业工作的基本知识或某一领域的某些知识点，这些知识在工作中多次实践过",
                                            "questionitemvalue": 0,
                                            "answer": [{value:false}]
                                        }
                                    ],
                                    showErr:'不能为空',
                                    check:'',
                                }
                            ]
                        }
                    },
                    {
                        "examinfo": {
                            "id": 8,
                            "reportyear": 2017,
                            "reportquarter": 1,
                            "questiontype": "职业修养",
                            "questiontypevalue": 100,
                            "reporttitle": "测试职业修养",
                            "accountlist": [{value:"评分标准"},{value:"自评"},{value:"直接上级"}],
                            "questioninfo": [
                                {
                                    "id": 9,
                                    "qtype": 2,
                                    "questionname": "题目1",
                                    "questionvalue": 0,
                                    "qilist": [
                                        {
                                            "id": 1,
                                            "questionitemname": "大道",
                                            "questionitemvalue": 0,
                                            "answer": [{value:true}]
                                        },
                                        {
                                            "id": 2,
                                            "questionitemname": "嗯嗯",
                                            "questionitemvalue": 0,
                                            "answer": [{value:false}]
                                        }
                                    ],
                                    showErr:'不能为空',
                                    check:'',
                                },
                                {
                                    "id": 10,
                                    "qtype": 2,
                                    "questionname": "题目2",
                                    "questionvalue": 0,
                                    "qilist": [
                                        {
                                            "id": 3,
                                            "questionitemname": "111",
                                            "questionitemvalue": 0,
                                            "answer": [{value:true}]
                                        },
                                        {
                                            "id": 4,
                                            "questionitemname": "222",
                                            "questionitemvalue": 0,
                                            "answer": [{value:false}]
                                        }
                                    ],
                                    showErr:'不能为空',
                                    check:'',
                                }
                            ]
                        }
                    }
                ]
            },

            
        }
    },
    created(){
        let relation = this.$route.params.relation;
        let uid = this.$route.params.uid;
    },
    methods:{
        fontLeft(key){
            if(key == 'subtitle'){
                return 'fontleft';
            }
        },
        total(){
            this.headScore = [];

            for(let i = 0;i<this.lists.length;i++){
                this.lists[i].showErr = false;
                if(this.lists[i].picked == ''){
                    this.lists[i].showErr = true;
                    return false;
                }else{
                    this.headScore.push(this.lists[i].picked)
                }
            }
            this.headScore.push(this.headEvaluation)
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
    padding-left: 10px;
}
.fontleft span{
    margin-left: 5px;
}
.selfEvaluation{
    padding: 5px;
    border: 1px solid rgb(169,169,169);
}
.el-radio__label{
    display: none;
}
</style>

