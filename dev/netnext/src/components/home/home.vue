<template>

    <div class="bigContainer">
        <div class="navBarCon">
            <div class="container">
                <span><img src="../../assets/images/LOGO02.png" alt=""></span>
                <div class="navBar">
                    <div class="linkCont" style="">
                        <!-- <router-link :key="item.id" :to="item.path" v-for="item in this.$router.options.routes[2].children">{{item.name}}</router-link> -->
                        <!-- 循环配置nav -->
                        <!-- <div class="link" v-for="item in this.$router.options.routes[2].children"> 
                            <div class="clicked" @click="change($event)" v-show="item.nav">
                                <router-link  :to="item.path">{{item.name}}</router-link>
                            </div>
                        </div> -->

                        <div class="link">
                            <div :class="nowPath=='/home/prolist'?'changeCss':'clicked'">
                                <router-link to="/home/prolist">我的项目</router-link>
                            </div>
                        </div>
                        <div class="link">
                            <div class="clicked">
                                <router-link to="">个人资料</router-link>
                            </div>
                        </div>
                        <div class="link">
                            <div :class="nowPath!='/home/prolist'?'changeCss':'clicked'">
                                <router-link to="/home/newPro">创建项目</router-link>
                            </div>
                        </div>
                        <div class="clean"></div>
                    </div>
                </div>
                <div class="message">
                    <img src="../../assets/images/inform.png" alt="">
                    <div class="InformNum">
                        <div class="numCon">
                            {{InformNum}}
                        </div>
                    </div>
                </div>
                <div class="clean"></div>
            </div>
            
        </div>
        <router-view id="container"></router-view>
    </div>

</template>
<script>
export default {
    data(){
        return{
            InformNum:15,
            nowPath:'',
        }
    },
    created(){
        // console.log(this.$router.options.routes[2].children[0]);
        // console.log(this.$route.path);
    },
    updated(){
        this.nowPath = this.$route.path
    },
    methods:{
        change(e){
            var linkDiv = document.getElementsByClassName('link');
            for(var i = 0;i<linkDiv.length;i++){
                linkDiv[i].children[0].setAttribute('class','clicked')
            }
            e.target.parentNode.setAttribute('class','changeCss');
        }
    }
}
</script>
<style lang="less" scoped>
.bigContainer{
    // height: 100%;
    
    .navBarCon{
        height: 60px;
        width: 100%;
        background: #000;
        padding: 12px 0px 13px 0px;
        box-sizing: border-box;
        .container{
            max-width: 1440px;
            margin: 0 auto;
            padding: 0px 29px;
            box-sizing: border-box;
            position: relative;
            span{
                font-family: CorporateS-Regular;
                font-size: 30px;
                color: #FFFFFF;
                line-height: 35px;
                float: left;
                img{
                    width: 120px;
                }
            }
            .navBar{
                position: absolute;
                top: 0;
                left: 0px;
                right: 0px;
                bottom: 0;
                .linkCont{
                    max-width:320px; 
                    margin: 0 auto; 
                    height:100%;
                    line-height: 30px;
                    .link{
                        width: 33.33%;
                        height: 100%;
                        float: left;
                        text-align: center;
                        position: relative;
                        .clicked{
                            width:90px; 
                            height:30px;
                            position: absolute;
                            // background: #1966FF;
                            border-radius: 24px;
                            top: 50%;
                            left: 50%;
                            margin-top: -15px;
                            margin-left: -45px;
                            z-index: 1;
                            a{
                                text-decoration:none;
                                color: #fff;
                                font-size: 14px;
                            }
                        }
                        .changeCss{
                            width:90px; 
                            height:30px;
                            position: absolute;
                            background: #1966FF;
                            border-radius: 24px;
                            top: 50%;
                            left: 50%;
                            margin-top: -15px;
                            margin-left: -45px;
                            z-index: 1;
                            a{
                                text-decoration:none;
                                color: #fff;
                                font-size: 14px;
                            }
                        }
                        
                    }
                    
                }
            }
            .message{
                width: 15.8px;
                height: 15px;
                float: right;
                margin-right: 12.2px;
                margin-top: 8.5px;
                position: relative;
                img{
                    width: 100%;
                }
                .InformNum{
                    width: 18px;
                    height: 18px;
                    position: absolute;
                    top: -10px;
                    right: -13px;
                    background: #1966FF;
                    border-radius: 2px;
                    .numCon{
                        width: 100%;
                        height: 100%;
                        text-align: center;
                        font-size: 12px;
                        line-height: 18px;
                        font-family: PingFangSC-Regular;
                        color: #fff;
                    }
                    
                }
            }
            .clean{
                clear: both;
            }
        }
        
    }
    #container{
        width: 100%;
        // height: 100%;
        // background: #333333;
    }
}
</style>
