<template>
    <div class="pageCont">
        <div class="loginBox">
            <h1><img src="../../assets/images/LOGO03.png" alt=""></h1>
            <h2>艺术品展示管理系统</h2>
            <div class="container">
                <div class="inputContainer">
                    <div class="icon">
                        <img src="../../assets/images/symbols-icon-grey-account.png">
                    </div>
                    <div class="inputBox">
                        <input placeholder="用户名" type="text" v-model="loginObj.UserName">
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="inputContainer">
                    <div class="icon iconPass">
                        <img src="../../assets/images/symbols-icon-grey-key.png">
                    </div>
                    <div class="inputBox inputBoxPass">
                        <input placeholder="密码" type="password" v-model="loginObj.PassWord" v-show="!changeShow">
                        <input placeholder="密码" type="text" v-model="loginObj.PassWord" v-show="changeShow">
                    </div>
                    <div class="watchEye" @click="watchPass()">
                        <div class="imgContainer">
                            <img src="../../assets/images/watch.png" alt="">
                        </div>  
                    </div>
                </div>
                <div class="inputContainer">
                    <div class="icon iconPass">
                        <img src="../../assets/images/copy.png">
                    </div>
                    <div class="inputBox inputBoxPass">
                        <input placeholder="验证码" type="text" v-model="loginObj.VerificationCode">
                    </div>
                    <div class="watchEye code" @click="changeCode()">
                        <!-- <span>{{showCode}}</span> -->
                        <img :src="link" alt="">
                    </div>
                </div>
                <div class="inputContainer submitContainer">
                    <div class="forgetPass">
                        <span>忘记密码</span>
                    </div>
                    <div class="submit" @click="submit()">
                        <div class="login">
                            <span>登录</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import Cookies from 'js-cookie';
import {getCode,login} from '../../api/login.js'
export default {
    data(){
        return{
            UserName:'',
            PassWord:'',
            VerificationCode:'',
            showCode:'',
            // 密码可视
            changeShow:false,
            link:'',
            linkText:'',
            loginObj:{
                UserName:'',
                PassWord:'',
                VerificationCode:'',
                ValidcodeURL:'',
            }
        }
    },
    created(){
        // 验证码请求获取验证码
        this.getCodeFilter({});
    },
    methods:{
        watchPass(){
            this.changeShow?this.changeShow = false:this.changeShow = true;
        },
        validate(){
            if(this.loginObj.UserName == ''){
                this.$message.error('用户名不能为空');
                return false;
            }
            if(this.loginObj.PassWord == ''){
                this.$message.error('密码不能为空');
                return false;
            }
            if(this.loginObj.VerificationCode == ''){
                this.$message.error('验证码不能为空');
                return false;
            }
            if(this.loginObj.VerificationCode == this.linkText.toLowerCase() || this.loginObj.VerificationCode == this.linkText.toUpperCase() || this.loginObj.VerificationCode == this.linkText){
            // if(this.loginObj.VerificationCode == '1111'){
                var usernameREG = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
                var passwordREG = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/
                if(this.loginObj.UserName.search(usernameREG) != -1){
                    if(this.loginObj.PassWord.search(passwordREG) != -1){
                        // pass
                        return true;
                    }else{
                        // 密码格式不正确
                        this.$message.error('密码格式不正确');
                        return false;
                    }
                }else{
                    // 用户名不正确
                    this.$message.error('用户名格式不正确');
                    return false;
                    
                }
            }else{
                // 验证码不正确
                this.$message.error('验证码不正确');
                return false;
            }
        },
        submit(){
            console.log(1);
            // if(this.validate()){
                console.log(this.loginObj);
                this.loginFilter(this.loginObj)
                // 发起登陆请求，成功设置token以及vuex
                
            // }
        },
        changeCode(){
            this.getCodeFilter();
        },
        getCodeFilter(){
            getCode().then(res =>{
                let {data} = res;
                this.link = data.result.link;
                this.loginObj.ValidcodeURL = data.result.link;
                this.linkText = data.result.linkText;
            })
        },
        loginFilter(params){
            login(params).then(res =>{
                let {data} = res;
                if(data.success){
                    Cookies.set('Token',data.result.JWT)
                    this.$store.commit('SET_TOKEN',data.result.JWT)
                    this.$router.push({path: 'home'});
                    delete data.result.JWT;
                    for(let item in data.result){
                        Cookies.set(item,data.result[item]);
                        this.$store.commit('SET_'+item.toUpperCase(),data.result[item])
                    }
                }else{
                    // console.log(1);
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.pageCont{
    width: 100%;
    height: 100%;
    background: url('../../assets/images/bg.jpg') no-repeat top left;
    background-size: 100% 100%;
    .loginBox{
        width: 519px;
        margin: 0 auto;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -255.5px;
        margin-top: -290px;
        h1{
            font-family: CorporateS-Bold;
            font-size: 60px;
            color: #000000;
            padding: 0;
            margin: 0;
            line-height: 72px;
            img{
                width: 216px;
            }
        }
        h2{
            font-family: PingFangSC-Regular;
            font-size: 30px;
            color: #000000;
            font-weight: 400;
            padding: 0;
            margin: 0;
            line-height: 42px;
            margin-bottom: 27px;
        }
        .container{
            width: 100%;
            box-sizing: border-box;
            height: 343px;
            background: rgba(29, 29, 29, 0.9);
            margin: 0 auto;
            padding-top: 56px;
            .inputContainer{
                width: 367px;
                height: 54px;
                margin: 0 auto;
                margin-bottom: 10px;
                border-radius: 4px;
                background: #000;
                padding-left:13px;
                box-sizing: border-box;
                border: 2px solid #000;
                .clear{
                    clear: both;
                }
                .icon{
                    padding: 14px 0;
                    padding-right: 14px;
                    float: left;
                    height: 22px;
                    width: 22px;
                    img{
                        width: 100%;
                    }
                }
                .iconPass{
                    padding: 13px 0;
                    padding-right: 12px;
                    float: left;
                    height: 24px;
                    width: 24px;
                }
                .inputBox{
                    padding: 14px 0;
                    float: left;
                    width: 299px;
                    height: 22px;
                    input{
                        width: 100%;
                        height: 100%;
                        border: none;
                        background: #000;
                        padding: 0;
                        color: #999;
                        font-size: 16px;
                        font-family: PingFangSC-Regular;
                        outline: none;
                    }
                }
                .inputBoxPass{
                    width: 265px;
                }
                .watchEye{
                    float: left;
                    margin-top: 1px;
                    width: 48px;
                    height: 48px;
                    background: #1C1C1C;
                    line-height: 48px;
                    text-align: center;
                    font-family: PingFangSC-Semibold;
                    font-size: 14px;
                    color: #1966FF;
                    .imgContainer{
                        img{
                            width: 100%;
                        }
                    }
                }
                .code{
                    background: none;
                    height: 100%;
                    cursor: pointer;
                }
            }
            .inputContainer:last-child{
                width: 363px;
                height: 50px;
                border: none;
            }
            .inputContainer:last-child:hover{
                width: 363px;
                height: 50px;
                border: none;
            }
            .inputContainer:hover{
                width: 367px;
                height: 54px;
                border: #1966FF 2px solid;
            }
            .submitContainer{
                height: 44px;
                background: none;
                margin-top: 21px;
                .forgetPass{
                    width: 50%;
                    height: 100%;
                    float: left;
                    height: 100%;
                    line-height: 44px;
                    font-family: PingFangSC-Light;
                    font-size: 16px;
                    color: #FFFFFF; 
                }
                .submit{
                    width: 50%;
                    height: 100%;
                    float: left;
                    .login{
                        height: 44px;
                        width: 94px;
                        float: right;
                        background: #1966FF;
                        border-radius: 24px;
                        text-align: center;
                        line-height: 44px;
                        font-family: PingFangSC-Regular;
                        font-size: 20px;
                        color: #FFFFFF;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}


</style>
