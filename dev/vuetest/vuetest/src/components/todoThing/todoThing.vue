<template>
<div class="todo">
    <h3 class="todolistsTitle">待办事项</h3>
    <ul class="todolistsContent">
        <li v-for="(todo,$index) in lists" class="todolist" @click="showMS($index,todo)">
            <atodolist :todo="todo"></atodolist>
        </li>
    </ul>
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
