<template>
<div>
    <h3>李磊</h3>
    <h4>一、专业知识技能</h4>
    <h5>1、知识和技能</h5>
    <div>
        <!--<table>
            <tbody>
                <tr v-for="worker in table.workers">
                    <td v-for="(unit,$index) in worker">
                        <span>{{unit}}</span>
                    </td>
                </tr>
            </tbody>
        </table>-->
    </div>
</div>
</template>

<script>
import tableCom from '../table/table.vue';
export default {
    data(){
        return{
            timu:{
                type:1,
                tableTitle:[
                    {name:'评分标准',score:'标准分',self:'自评',directSuperior:'直接上级'}
                ],
                workers:[
                    {name:'有限的知识和技能，拥有从事本专业工作的基本知识或某一领域的某些知识点，这些知识未在工作中实践过',score:'5',inputself:'',inputsuperior:''},
                    {name:'具备基础知识和必要技能，集中于本专业工作的基本知识或某一领域的某些知识点，这些知识在工作中多次实践过',score:'10',inputself:'',inputsuperior:''},
                    {name:'具备全面良好的知识和必要技能，主要领域精通，这些知识有相当了解',score:'15',inputself:'',inputsuperior:''},
                    {name:'在本专业领域具有精通、全面的知识和技能',score:'20',inputself:'',inputsuperior:''}
                ]
            }
        }
    },
    components:{
        tableCom
    }
}
</script>

<style scope>
input{
    width: 100%;
    border: none;
    padding: 0;
    height: 30px;
    text-align: center;
}
</style>
