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
        <todo></todo>
        <evaluationList></evaluationList>
        <!--<evaluation></evaluation>-->
    </div>
</template>

<script>
import textcom from './components/vuetest/testcom.vue';
import todo from './components/todoThing/todoThing.vue';
import evaluationList from './components/evaluationList/evaluationList.vue'
import evaluation from './components/evaluation/evaluation.vue'
export default {
    data(){
        return {
            'message':{'name':'haha','str':'this is father'},
        }
    },
    components:{
        'textcom':textcom,
        'todo':todo,
        'evaluationList':evaluationList,
        'evaluation':evaluation
    },
    methods:{
        fathershow(str){
            this.message.name = str.name;
            console.log(this.message);
        },
        showCount(){
            this.$store.dispatch('incrementsync')
        }
    },
    computed:{
        count(){
            return this.$store.state.count;
        }
    }
}
</script>

<style>

</style>
