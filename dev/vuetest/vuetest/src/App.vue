<template>
    <div id="app">
        <!--<textcom :fatherMessage="message" @returnFather="fathershow">
            这是一些初始内容
        </textcom>
        <!-- <p>{{message}}</p> -->
        <!--<h2>待办事项</h2>
        <tableee></tableee>
        <button type="button" @click="showCount()">add</button>
        <p>count:{{count}}</p>-->
        <h2>-----待办事项-----</h2>
        <todo></todo>
        <h2>-----列表-----</h2>
        <evaluationList></evaluationList>
        <h2>-----员工答题页-----</h2>
        <subject></subject>
        <h2>-----部门主管答题页-----</h2>
        <headSubject></headSubject>
        <h2>-----委员会答题页-----</h2>
        <committeeSubject></committeeSubject>
        <h2>-----部门员工-----</h2>
        <departmentStaff></departmentStaff>
        <h2>-----委员会员工-----</h2>
        <committeeStaff></committeeStaff>
        <h2>-----考评关系-----</h2>
        <relationship></relationship>
        <h2>-----待办事项员工列表-----</h2>
        <employeelist></employeelist>

        <div class="block">
            <span class="demonstration">页数较少时的效果</span>
            <el-pagination
                layout="prev, pager, next"
                :total="50"
                @current-change="handleCurrentChange"
                >
            </el-pagination>
            </div>
        </div>
</template>

<script>
import textcom from './components/vuetest/testcom.vue';
import todo from './components/todoThing/todoThing.vue';
import evaluationList from './components/evaluationList/evaluationList.vue'
import evaluation from './components/evaluation/evaluation.vue'
import subject from './components/subject/subject.vue';
import headSubject from './components/headSubject/headSubject.vue'
import committeeSubject from './components/committeeSubject/committeeSubject.vue'
import departmentStaff from './components/departmentStaff/departmentStaff.vue'
import committeeStaff from './components/committeeStaff/committeeStaff.vue'
import relationship from './components/relationship/relationship.vue'
import employeelist from './components/employeeList/employeeList.vue'
export default {
    data(){
        return {
            restaurants: [
                { "value": "李磊", "address": "长宁区新渔路144号" },
                { "value": "王刚", "address": "上海市长宁区淞虹路661号" }
            ],
            'message':{'name':'haha','str':'this is father'},
            state2: ''
        }
    },
    components:{
        'textcom':textcom,
        'todo':todo,
        'subject':subject,
        'evaluationList':evaluationList,
        'headSubject':headSubject,
        'committeeSubject':committeeSubject,
        'evaluation':evaluation,
        'departmentStaff':departmentStaff,
        'committeeStaff':committeeStaff,
        'relationship':relationship,
        'employeelist':employeelist
    },
    methods:{
        // fathershow(str){
        //     this.message.name = str.name;
        //     console.log(this.message);
        // },
        // showCount(){
        //     this.$store.dispatch('incrementsync')
        // }
        querySearch(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
                return (restaurant.value.indexOf(queryString) === 0);
            };
        },
        handleSelect(item) {
            console.log(item);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    },
    computed:{
        // count(){
        //     return this.$store.state.count;
        // }
    }
}
</script>

<style>
p{
    margin: 20px 0;
}
</style>
