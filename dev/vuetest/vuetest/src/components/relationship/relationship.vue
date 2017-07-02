<template>
<div>
    <div class="search">
        <input type="input" v-model="searchMsg"><button @click="search">搜索</button>
    </div>
    <table border="1">
        <thead>
            <tr>
                <th v-for="head in list.tableHead.imfo">{{head}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(staff,index) in list.staffs.imfo">
                <td v-for="(option,$index) in staff" v-show="$index=='relation'||$index=='choose'?false:true">
                    <span @click="editOperate($index,staff,index)">{{option}}</span>
                </td>
                <!--<div class="wrapper" v-show="popshow" >
                    <div class="inputContainer">
                        <div class="rowContainer">
                            <span>上&nbsp;&nbsp;级：</span>
                            <el-autocomplete
                                class="inline-input"
                                v-model="staff[this.index].choosed[0].chooseSup"
                                :fetch-suggestions="querySearch"
                                placeholder="请输入内容"
                                :trigger-on-focus="true"
                                @select="handleSelect"
                            ></el-autocomplete>
                        </div>
                        <div class="rowContainer">
                            <span>同事1：</span>
                            <el-autocomplete
                                class="inline-input"
                                v-model="staff.choosed[0].chooseMateOne"
                                :fetch-suggestions="querySearchOne"
                                placeholder="请输入内容"
                                :trigger-on-focus="true"
                                @select="handleSelect"
                            ></el-autocomplete>
                        </div>
                        <div class="rowContainer">
                            <span>同事2：</span>
                            <el-autocomplete
                                class="inline-input"
                                v-model="staff.choosed[0].chooseMateTwo"
                                :fetch-suggestions="querySearchTwo"
                                placeholder="请输入内容"
                                :trigger-on-focus="true"
                                @select="handleSelect"
                            ></el-autocomplete>
                        </div>
                        <div class="rowContainer">
                            <span>同事3：</span>
                            <el-autocomplete
                                class="inline-input"
                                v-model="staff.choosed[0].chooseMateThree"
                                :fetch-suggestions="querySearchThree"
                                placeholder="请输入内容"
                                :trigger-on-focus="true"
                                @select="handleSelect"
                            ></el-autocomplete>
                        </div>
                        <div class="rowContainer">
                            <span>同事4：</span>
                            <el-autocomplete
                                class="inline-input"
                                v-model="staff.choosed[0].chooseMateFour"
                                :fetch-suggestions="querySearchFour"
                                placeholder="请输入内容"
                                :trigger-on-focus="true"
                                @select="handleSelect"
                            ></el-autocomplete>
                        </div>
                        <div class="rowContainer">
                            <span>同事5：</span>
                            <el-autocomplete
                                class="inline-input"
                                v-model="staff.choosed[0].chooseMateFive"
                                :fetch-suggestions="querySearchFive"
                                placeholder="请输入内容"
                                :trigger-on-focus="true"
                                @select="handleSelect"
                            ></el-autocomplete>
                        </div> 
                        <div class="btnContainer">
                            <el-button type="primary" size="small" @click="closePop()">确定</el-button>
                        </div>
                    </div>
                </div>-->
            </tr>
        </tbody>
    </table>
    <button @click="show()">取消</button> <button @click="submit()">提交</button>

    <div class="wrapper" v-show="popshow" @click="closePopup($event)">
        <div class="inputContainer">
            <div class="rowContainer">
                <span>上&nbsp;&nbsp;级：</span>
                <el-autocomplete
                    class="inline-input"
                    v-model="chooseSup"
                    :fetch-suggestions="querySearch"
                    placeholder="请输入内容"
                    :trigger-on-focus="true"
                    @select="handleSelect"
                    :blur="poparray()"
                ></el-autocomplete>
            </div>
            <div class="rowContainer">
                <span>同事1：</span>
                <el-autocomplete
                    class="inline-input"
                    v-model="chooseMate[0]"
                    :fetch-suggestions="querySearchOne"
                    placeholder="请输入内容"
                    :trigger-on-focus="true"
                    @select="handleSelect"
                ></el-autocomplete>
            </div>
            <div class="rowContainer">
                <span>同事2：</span>
                <el-autocomplete
                    class="inline-input"
                    v-model="chooseMate[1]"
                    :fetch-suggestions="querySearchOne"
                    placeholder="请输入内容"
                    :trigger-on-focus="true"
                    @select="handleSelect"
                ></el-autocomplete>
            </div>
            <div class="rowContainer">
                <span>同事3：</span>
                <el-autocomplete
                    class="inline-input"
                    v-model="chooseMate[2]"
                    :fetch-suggestions="querySearchOne"
                    placeholder="请输入内容"
                    :trigger-on-focus="true"
                    @select="handleSelect"
                ></el-autocomplete>
            </div>
            <div class="rowContainer">
                <span>同事4：</span>
                <el-autocomplete
                    class="inline-input"
                    v-model="chooseMate[3]"
                    :fetch-suggestions="querySearchOne"
                    placeholder="请输入内容"
                    :trigger-on-focus="true"
                    @select="handleSelect"
                ></el-autocomplete>
            </div>
            <div class="rowContainer">
                <span>同事5：</span>
                <el-autocomplete
                    class="inline-input"
                    v-model="chooseMate[4]"
                    :fetch-suggestions="querySearchOne"
                    placeholder="请输入内容"
                    :trigger-on-focus="true"
                    @select="handleSelect"
                ></el-autocomplete>
            </div> 
            <div class="btnContainer">
                <el-button type="primary" size="small" @click="closePop">确定</el-button>
            </div>
        </div>
    </div>
        
  
</div>
</template>

<script>
export default {
    data(){
        return{
            searchMsg:'',
            submitMsg:[],
            popshow:false,
            chooseSup:'',
            chooseMate:['','','','',''],
            index:'',
            list:{
                tableHead:{
                    imfo:{name:'姓名',dep:'部门',job:'岗位',operate:'操作'}
                },
                staffs:{
                    imfo:[
                        {
                            name:'李磊',
                            dep:'研发部',
                            job:'web前端开发',
                            operate:'操作',
                            relation:[{
                                superior:[
                                    {"value": "上司1",'id':1},
                                    {"value": "上司2",'id':2}
                                ],
                                colleagueOne:[
                                    {"value": "同事1"},
                                    {"value": "同事2"},
                                    {"value": "同事3"}
                                ],
                                colleagueTwo:[
                                    {"value": "同事1"},
                                    {"value": "同事2"},
                                    {"value": "同事3"}
                                ],
                                colleagueThree:[
                                    {"value": "同事1"},
                                    {"value": "同事2"},
                                    {"value": "同事3"}
                                ],
                                colleagueFour:[
                                    {"value": "同事1"},
                                    {"value": "同事2"},
                                    {"value": "同事3"}
                                ],
                                colleagueFive:[
                                    {"value": "同事1"},
                                    {"value": "同事2"},
                                    {"value": "同事3"}
                                ]
                            }],
                            choose:[]                            
                        },
                        {
                            name:'张想',
                            dep:'研发部',
                            job:'web前端开发',
                            operate:'操作',
                            relation:[{
                                superior:[
                                    {"value": "上司1"},
                                    {"value": "上司2"}
                                ],
                                colleagueOne:[
                                    {"value": "同事1"},
                                    {"value": "同事2"},
                                    {"value": "同事3"},
                                    {"value": "同事4"},
                                    {"value": "同事5"},
                                    {"value": "同事6"},
                                    {"value": "同事7"},
                                    {"value": "同事8"}
                                ],
                                colleagueTwo:[
                                    {"value": "同事1"},
                                    {"value": "同事2"},
                                    {"value": "同事3"}
                                ],
                                colleagueThree:[
                                    {"value": "同事1"},
                                    {"value": "同事2"},
                                    {"value": "同事3"}
                                ],
                                colleagueFour:[
                                    {"value": "同事1"},
                                    {"value": "同事2"},
                                    {"value": "同事3"}
                                ],
                                colleagueFive:[
                                    {"value": "同事1"},
                                    {"value": "同事2"},
                                    {"value": "同事3"}
                                ],
                            }],
                            choose:[]
                        },
                    ]
                }
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
        },
        show(){
            console.log(this.list);
        },
        editOperate(key,obj,index){
            if(key == 'operate'){
                this.index = index;
                this.relation = obj.relation;
                this.chooseSup = obj.choose[0];
                for(let i=0;i<this.chooseMate.length;i++){
                    if(this.chooseMate == ''){
                        
                    }else{
                        this.chooseMate[i] = obj.choose[i+1];
                    }
                    
                }
                this.popshow = true;
            }else{
                return '';
            }
        },
        querySearch(queryString, cb) {
            var restaurants = this.relation[0].superior;
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        querySearchOne(queryString, cb) {
            var restaurants = this.relation[0].colleagueOne;
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        querySearchTwo(queryString, cb) {
            var restaurants = this.relation[0].colleagueTwo;
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        querySearchThree(queryString, cb) {
            var restaurants = this.relation[0].colleagueThree;
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        querySearchFour(queryString, cb) {
            var restaurants = this.relation[0].colleagueFour;
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        querySearchFive(queryString, cb) {
            var restaurants = this.relation[0].colleagueFive;
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
        closePop(){
            
            // console.log(this.chooseSup)
           
            let arrMate = [];
            for(let i = 0;i<this.chooseMate.length;i++){
                if(this.chooseMate[i] !== ''){
                    arrMate.push(this.chooseMate[i])
                }else{

                }
            }
            if(this.chooseSup == ''){
                alert('直接上级未选择');
                return false;
            }else if(arrMate.length<2){
                alert('同事数量不能小于2个');
                return false;
            }else{
                arrMate.unshift(this.chooseSup);
                this.list.staffs.imfo[this.index].choose = arrMate;
                this.popshow = false;
            }
            this.chooseSup='';
            this.chooseMate = ['','','','',''];    
        },
        closePopup(e){
            if(e.target.className == 'wrapper'){
                this.popshow = false;
            }
        },
        poparray(){
            console.log("shiqujiaodian");
        }
    }
}
</script>

<style scoped>
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
.wrapper{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgba(17, 17, 17, 0.7);
    z-index: 10;
}
.btnContainer{
    text-align: center;
    margin-top: 10px;
}
.inputContainer{
    
}
.rowContainer{
    margin-bottom: 10px;
}
.rowContainer span{
    color: #fff;
    margin-right: 10px;
}
</style>
