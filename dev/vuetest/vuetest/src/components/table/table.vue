<template>
<div>
    <table border=1>
        <tbody>
            <tr v-for="heads in table.tableTitle">
                <th v-for="head in heads">{{head}}</th>
            </tr>
            <tr v-for="worker in table.workers">
                <td v-for="(unit,$index) in worker">
                    <span :class="changeClass($index)">{{unit}}</span>
                </td>
            </tr>
        </tbody> 
    </table>
</div>
</template>

<script>
export default {
    data(){
        // return{
        //     inputself:{},
        //     inputsuperior:{}
        // }
    },
    props:{
        table:{}    
    },
    computed:{
        
    },
    methods:{
        changeClass(key){
            if(key == 'operate'){
                return 'operateClass';
            }
        }
    }
}
</script>

<style>
table{
    border-collapse:collapse;
    width: 100%;
}
tbody{
    text-align: center;
}
td,th{
    height: 30px;
}
.operateClass{
    padding: 3px 8px;
    border-radius: 5px;
    background: #199bd7;
    color: #fff;
    cursor: pointer;
}
</style>
