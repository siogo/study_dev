<template>
<div>
    <div class="search">
        <input type="input" v-model="searchMsg"><button @click="search">搜索</button>
    </div>
    <table border="1">
        <thead>
            <tr>
                <th v-for="head in list.tableHead">{{head}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="staff in list.staffs">
                <td v-for="(option,$index) in staff" v-show="showTd($index)">
                    <span v-if="$index == 'superior'">
                        <select v-model="staff.chooseSup[0]">
                            <option v-for="single in option">{{single}}</option>
                        </select>
                    </span>
                    <span v-else-if="$index == 'colleagueOne'">
                        <select v-model="staff.chooseMate[0]">
                            <option v-for="single in option">{{single}}</option>
                        </select>
                    </span>
                    <span v-else-if="$index == 'colleagueTwo'">
                        <select v-model="staff.chooseMate[1]">
                            <option v-for="single in option">{{single}}</option>
                        </select>
                    </span>
                    <span v-else-if="$index == 'colleagueThree'">
                        <select v-model="staff.chooseMate[2]">
                            <option v-for="single in option">{{single}}</option>
                        </select>
                    </span>
                    <span v-else-if="$index == 'colleagueFour'">
                        <select v-model="staff.chooseMate[3]">
                            <option v-for="single in option">{{single}}</option>
                        </select>
                    </span>
                    <span v-else-if="$index == 'colleagueFive'">
                        <select v-model="staff.chooseMate[4]">
                            <option v-for="single in option">{{single}}</option>
                        </select>
                    </span>
                    <span v-else>{{option}}</span>
                </td>
            </tr>
        </tbody>
    </table>
    <button>取消</button> <button @click="submit()">提交</button>
</div>
</template>

<script>
export default {
    data(){
        return{
            searchMsg:'',
            submitMsg:[],
            list:{
                tableHead:{name:'姓名',dep:'部门',job:'岗位',superior:'直接上级',colleagueOne:'同事1',colleagueTwo:'同事2',colleagueThree:'同事3',colleagueFour:'同事4',colleagueFive:'同事5'},
                staffs:[
                    {name:'李磊',dep:'研发部',job:'web前端开发',superior:['上级1','上级2'],colleagueOne:['同事1','同事2','同事3'],colleagueTwo:['同事1','同事2','同事3'],colleagueThree:['同事1','同事2','同事3'],colleagueFour:['同事1','同事2','同事3'],colleagueFive:['同事1','同事2','同事3'],chooseSup:[],chooseMate:['','','','','']},
                    {name:'张想',dep:'研发部',job:'web前端开发',superior:['上级1','上级2'],colleagueOne:['同事1','同事2','同事3'],colleagueTwo:['同事1','同事2','同事3'],colleagueThree:['同事1','同事2','同事3'],colleagueFour:['同事1','同事2','同事3'],colleagueFive:['同事1','同事2','同事3'],chooseSup:[],chooseMate:['','','','','']},
                    {name:'王麻子',dep:'研发部',job:'web后端开发',superior:['上级1','上级2'],colleagueOne:['同事1','同事2','同事3'],colleagueTwo:['同事1','同事2','同事3'],colleagueThree:['同事1','同事2','同事3'],colleagueFour:['同事1','同事2','同事3'],colleagueFive:['同事1','同事2','同事3'],chooseSup:[],chooseMate:['','','','','']}
                ]
            }
        }
    },
    methods:{
        search(){
            let str = this.searchMsg;
            alert(str);
        },
        showTd(key){
            if(key == 'chooseSup'){
                return false;
            }else if(key == 'chooseMate'){
                return false;
            }else{
                return true;
            }
        },
        submit(){
            for(let i=0;i<this.list.staffs.length;i++){
                let chooseSup = this.list.staffs[i].chooseSup;
                let chooseMate = this.list.staffs[i].chooseMate;
                let choosedMate = [];
                for(let j=0;j<chooseMate.length;j++){
                    if(chooseMate[j] !== ''){
                        choosedMate.push(chooseMate[j]);
                    }
                }
                if(chooseSup.length == 0){
                    alert('error:['+this.list.staffs[i].name+']直接上级未选择');
                    return false;
                }else if(choosedMate.length < 2){
                    alert('error:['+this.list.staffs[i].name+']同事数量不能小于2个');
                    return false;
                }
            }
        }
    }
}
</script>

<style>
.search{
    display: inline-block;
    float: right;
    margin-bottom: 10px;
}
.search input{
    height: 28px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    margin-right: 10px;
}
.search button{
    height: 28px;
}
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
.operateClass{
    padding: 3px 8px;
    border-radius: 5px;
    background: #199bd7;
    color: #fff;
    cursor: pointer;

}
.viweClass{
    padding: 3px 8px;
    border-radius: 5px;
    color: #000;
    cursor: pointer;
    border: 1px solid #000;
    box-sizing: border-box;
}
</style>
