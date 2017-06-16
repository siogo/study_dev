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
        'evaluation':evaluation
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
