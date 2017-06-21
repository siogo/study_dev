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
        
        <!--重要-->
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
        <!--重要-->

        <router-view></router-view>
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
export default {
    data(){
        return {
            'message':{'name':'haha','str':'this is father'},
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
        'relationship':relationship
    },
    methods:{
        // fathershow(str){
        //     this.message.name = str.name;
        //     console.log(this.message);
        // },
        // showCount(){
        //     this.$store.dispatch('incrementsync')
        // }
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
