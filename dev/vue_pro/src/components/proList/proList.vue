<template>
<div class="superContainerPro">
    <div class="container">
        <div class="proList">
            <div class="leftCont">
                <div class="headCont">
                    <div class="headImg">
                        <img src="../../assets/images/test.jpg" alt="">
                    </div>
                    <p class="artistNameEnglish">{{this.$store.getters.username}}</p>
                    <p class="artistNameChinese">{{this.$store.getters.occupation}}</p>
                </div>
                <div class="proNum">
                    <span class="title">项目数量</span>
                    <span class="num">{{this.$store.getters.project_count}}</span>
                </div>
                <div class="workNum">
                    <span class="title">作品数量</span>
                    <span class="num">{{this.$store.getters.exhibits_count}}</span>
                </div>
            </div>
            <div class="rigthCont">

                <div class="rowItem" v-if="($index == 0)" v-for="(rowItem,$index) in newProject">
                    <div class="itemPro addPro" v-show="nowPage==1?true:false" @click="toNewPro()">
                        <div class="imageCont">
                            <img src="../../assets/images/upload.png" alt="">
                        </div>
                        <span class="addDesc">添加您的项目</span>
                        <div class="addBtn">
                            <span>创建项目</span>
                        </div>
                    </div>
                    <div v-for="item in rowItem" class="itemPro" :data-id="item.Id" @click="goToDetail(item.Id)" >
                        <div class="imgCont">
                            <img :src="item.logo" alt="">
                            <!-- <img src="../../assets/images/test.jpg" alt=""> -->
                            <div class="viewCount">
                                <span>{{item.Exhibits_count}}</span>
                            </div>
                        </div>
                        <p class="proName">{{item.name}}</p>
                        <p class="proLocation"><img src="../../assets/images/location.png">{{item.address}}</p>
                        <p class="proTime"><img src="../../assets/images/time.png">{{item.StartTime}}-{{item.EndTime}}</p>
                        <div class="proHr">
                            <div></div>
                        </div>
                        <div class="viewCountCont">
                            <img src="../../assets/images/location_like.png" alt=""><span>60</span>
                            <img src="../../assets/images/location_view.png" class="view" alt=""><span>20</span>
                            <p class="publishTime">{{item.Created}}</p>
                        </div>
                        
                    </div>
                    <div class="clean"></div>
                </div>
                <div class="rowItem" v-else>
                    <div v-for="item in rowItem" class="itemPro" :data-id="item.Id" @click="goToDetail(item.Id)">
                        <div class="imgCont">
                            <img :src="item.logo" alt="">
                            <!-- <img src="../../assets/images/test.jpg" alt=""> -->
                            <div class="viewCount">
                                <span>{{item.Exhibits_count}}</span>
                            </div>
                        </div>
                        <p class="proName">{{item.name}}</p>
                        <p class="proLocation"><img src="../../assets/images/location.png">{{item.address}}</p>
                        <p class="proTime"><img src="../../assets/images/time.png">{{item.StartTime}}-{{item.EndTime}}</p>
                        <div class="proHr">
                            <div></div>
                        </div>
                        <div class="viewCountCont">
                            <img src="../../assets/images/location_like.png" alt=""><span>60</span>
                            <img src="../../assets/images/location_view.png" class="view" alt=""><span>20</span>
                            <p class="publishTime">{{item.Created}}</p>
                        </div>
                    </div>
                    <div class="clean"></div>
                </div>
                <div class="block">
                    <el-pagination
                        layout="prev, pager, next"
                        @current-change="handleCurrentChange"
                        :page-count="pageTotal"
                        :page-size="8"
                        :current-page='currentpage'
                        >
                    </el-pagination>
                </div>
            </div>
            <div class="clean"></div>
        </div>
    </div>
</div>
</template>
<script>
import Cookies from 'js-cookie';
import {getProject,getCount} from '../../api/project';
export default {
    data(){
        return{
            project:[],
            newProject:[],
            pageTotal:0,
            nowPage:1,
            currentpage:1,
            noRight:false,
        }
    },
    created(){
        this.nowPage = this.$store.getters.getNowPage;
        this.currentpage = this.$store.getters.getNowPage;
        this.nowPage == 1?this.getProjectFilter({'page':'1','pageSize':'7'}):this.getProjectFilter({'page':this.$store.getters.getNowPage,'pageSize':'8'});
        this.getCountFilter();
        // this.splitProjectList();
    },
    mounted(){
    },
    methods:{
        toNewPro(){
            this.$router.push({ path: '/home/newPro' });
        },
        goToDetail(id){
            console.log(id);
            this.$store.commit('SET_PRODUCT_ID',id);
            this.$router.push({name:'proDetail',params:{id:id}})
        },
        getProjectFilter(params){
            getProject(params).then(res =>{
                let {data} = res;
                if(data.success){
                    this.newProject=[],
                    this.project = data.result.project;
                    if(this.nowPage == 1){
                        this.newProject.push(data.result.project.splice(0,3))
                        this.newProject.push(data.result.project);
                    }else{
                        this.newProject.push(data.result.project.splice(0,4));
                        this.newProject.push(data.result.project);
                    }
                    this.pageTotal = data.result.page_count*1;
                    this.$nextTick(function(){
                        this.pageTotal = data.result.page_count*1;
                    })
                }
                
            })
        },
        getCountFilter(){
            getCount().then(res =>{
                console.log(res);
                let {data} = res;
                if(data.success){
                    this.$nextTick(function(){
                        this.$store.commit('SET_PROJECT_COUNT',data.result.Project_count);
                        Cookies.set('Project_count',data.result.Project_count);
                        this.$store.commit('SET_EXHIBITS_COUNT',data.result.Exhibits_count);
                        Cookies.set('Exhibits_count',data.result.Exhibits_count)
                    })
                    
                }
            })
        },
        // 分页
        handleCurrentChange(val){
            // console.log(`当前页: ${val}`);
            this.nowPage = val;
            this.$store.commit('SET_NOWPAGE',val);
            val == 1?this.getProjectFilter({'page':'1','pageSize':'7'}):this.getProjectFilter({'page':val,'pageSize':'8'});
        }
    }
}
</script>
<style lang="less">
.superContainerPro{
.container{
    width: 100%;
    // height: 100%;
    background: #D7D7D7;
    overflow: hidden;
    padding-bottom: 30px;
    .proList{
        // max-width: 1440px;
        max-width:1336px;
        // height: 100%;
        margin: 0 auto;
        background: #D7D7D7;
        .clean{
            clear: both;
        }
        .leftCont{
            // width: 250px;
            width: 17.4%;
            height: 1060px;
            float: left;
            background: #EFEFEF;
            margin-top: 60px;
            box-sizing: border-box;
            .headCont{
                height: 236px;
                position: relative;
                .headImg{
                    height: 100px;
                    width: 100px;
                    position: absolute;
                    top: 15%;
                    left: 50%;
                    margin-left: -50px;
                    border-radius: 50%;
                    img{
                        border-radius: 50%;
                        width: 100%;
                    }
                }
                .artistNameEnglish{
                    font-family: PingFangSC-Regular;
                    font-size: 18px;
                    color: #000;
                    width: 100%;
                    position: absolute;
                    margin: 0;
                    padding: 0;
                    text-align: center;
                    top: 60%;
                }
                .artistNameChinese{
                    font-family: PingFangSC-Light;
                    font-size: 14px;
                    color: #666;
                    width: 100%;
                    position: absolute;
                    margin: 0;
                    padding: 0;
                    text-align: center;
                    top: 75%;
                }
            }
            .proNum{
                height: 50px;
                border-bottom: 1px solid #EFEFEF;
                box-sizing: border-box;
                padding: 15px 23px 15px 34px;
                background-color: #E1E1E1;
                .title{
                    font-family: PingFangSC-Light;
                    font-size: 16px;
                    line-height: 20px;
                    color: #000;
                }
                .num{
                    float: right;
                    font-family: PingFangSC-Semibold;
                    font-size: 14px;
                    line-height: 20px;
                    color: #1966FF;
                }
            }
            .workNum{
                height: 50px;
                box-sizing: border-box;
                padding: 15px 23px 15px 34px;
                background-color: #E1E1E1;
                .title{
                    font-family: PingFangSC-Light;
                    font-size: 16px;
                    line-height: 20px;
                    color: #000;
                }
                .num{
                    float: right;
                    font-family: PingFangSC-Semibold;
                    font-size: 14px;
                    line-height: 20px;
                    color: #1966FF;
                }
            }
        }
        .rigthCont{
            width: 82%;
            box-sizing: border-box;
            margin-left: 0.6%;
            margin-top: 60px;
            padding: 22px;
            float: left;
            height: 1060px;
            background-color: #fff;
            .rowItem{
                margin-bottom: 24.2px;
                // overflow: hidden;
                .itemPro{
                    width: 23.5%;
                    // width: 260px;
                    width:238px;
                    height: 470px;
                    background: #F0F0F0;
                    box-shadow: 1px 2px 4px 0 rgba(0,0,0,0.27);
                    border-radius: 2px;
                    float: left;
                    margin-right: 12.1px;
                    margin-left: 12.1px;
                    box-sizing: border-box;
                    color: #fff;
                    position: relative;
                    cursor: pointer;
                    .imgCont{
                        width: 100%;
                        height: 260px;
                        position: relative;
                        background-color: #000;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                        .viewCount{
                            width: 82px;
                            height: 82px;
                            border-radius: 50%;
                            background: rgba(0,0,0,0.60);
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            margin-top: -41px;
                            margin-left: -41px;
                            text-align: center;
                            line-height: 82px;
                            font-size: 30px;
                        }
                    }
                    .noRight{
                        margin-right: 0%;
                    }
                    .proName{
                        min-height: 50px;
                        box-sizing: border-box;
                        padding: 0 20px;
                        font-family: PingFangSC-Regular;
                        font-size: 18px;
                        line-height: 25px;
                        margin-top: 15px;
                        margin-bottom: 0;
                        color: #000;
                    }
                    .proLocation{
                        padding-left: 44px;
                        padding-right: 20px;
                        position: relative;
                        line-height: 20px;
                        margin-top: 12px;
                        margin-bottom: 0;
                        font-family: PingFangSC-Light;
                        font-size: 14px;
                        color: #333;
                        height: 20px;
                        img{
                            display: block;
                            width: 10px;
                            position: absolute;
                            top: 3px;
                            left: 23px;
                        }
                    }
                    .proTime{
                        padding-left: 44px;
                        padding-right: 20px;
                        position: relative;
                        line-height: 20px;
                        margin-top: 5px;
                        margin-bottom: 0;
                        font-family: PingFangSC-Light;
                        font-size: 14px;
                        color: #333;
                        height: 40px;
                        img{
                            display: block;
                            width: 13px;
                            position: absolute;
                            top: 3px;
                            left: 22px;
                        }
                    }
                    .proHr{
                        padding: 0 20px;
                        margin-top: 14px;
                        margin-bottom: 15px;
                        div{
                            border: 1px solid #CFCFCF
                        }
                    }
                    .viewCountCont{
                        padding: 0 20px;
                        padding-bottom: 19px;
                        height: 20px;
                        position: relative;
                        img{
                            margin-top: 2px;
                            vertical-align:top;
                            margin-right: 5px;
                        }
                        .view{
                            margin-left: 15px;
                        }
                        span{
                            font-family: PingFangSC-Regular;
                            font-size: 14px;
                            color: #333333;
                            line-height: 20px;
                            vertical-align:top
                        }
                        .publishTime{
                            margin: 0;
                            padding: 0;
                            font-family: PingFangSC-Regular;
                            font-size: 14px;
                            color: #333333;
                            line-height: 20px;
                            position: absolute;
                            font-size: 14px;
                            right: 20px;
                            top: 0;
                        }
                    }
                    
                }
                // .itemPro:nth-child(4){
                //     margin-right: 0%;
                // }
                
                // .itemPro:last-child{
                //     margin-right: 0%;
                // }
                .addPro{
                    padding-top: 96px;
                    padding-bottom: 91px;
                    text-align: center;
                    line-height: 22px;
                    background-color: #EFEFEF;
                    .imageCont{
                        width: 28.9%;
                        margin: 0 auto;
                        margin-bottom: 19px;
                        img{
                            width: 100%;
                            display: block;
                        }
                    }
                    .addDesc{
                        font-family: PingFangSC-Light;
                        font-size: 14px;
                        color: #333;
                        display: block;
                        margin-bottom: 54px;
                        line-height: 22px;
                    }
                    .addBtn{
                        margin: 0 auto;
                        width: 120px;
                        height: 44px;
                        background: #1966FF;
                        border-radius: 24px;
                        text-align: center;
                        cursor: pointer;
                        span{
                            color: #fff;
                            font-family: PingFangSC-Regular;
                            font-size: 18px;
                            line-height: 44px;
                        }
                    }
                }
            }
            .rowItem:last-child{
                margin-bottom: 0%;
            }
            .block{
                background-color: #fff;
                float: right;
                .el-pagination{
                    // background-color: #333;
                    button,ul{
                        background-color: #fff;
                        color: #999;
                        li{
                            background-color: #fff;
                            color: #999;
                        }
                        li.active{
                            color: #1966FF;
                        }
                    }
                }
            }
            
            .noRight{
                margin-right: 0px;
            }
            .clean{
                clear: both;
            }
        }
    }
    
}
}

.dg.ac {
	  display: none;
	}
</style>