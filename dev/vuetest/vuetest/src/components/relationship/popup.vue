<template>
<div class="wrapper" v-show="this.relation[0].chooseSup">
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
            ></el-autocomplete>
        </div>
        <div class="rowContainer">
            <span>同事1：</span>
            <el-autocomplete
                class="inline-input"
                v-model="chooseMateOne"
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
                v-model="chooseMateTwo"
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
                v-model="chooseMateThree"
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
                v-model="chooseMateFour"
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
                v-model="chooseMateFive"
                :fetch-suggestions="querySearchFive"
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
</template>

<script>
export default {
    data(){
        return{
            chooseSup:'',
            chooseMateOne:'',
            chooseMateTwo:'',
            chooseMateThree:'',
            chooseMateFour:'',
            chooseMateFive:''
        }    
    },
    props:{
        relation:{}
    },
    methods:{
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
            this.relation[0].chooseSup = false;
        }
    }
    
}
</script>

<style>
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
