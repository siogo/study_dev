<template>
<div class="superContainer">
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
                <div class="backBtn" @click="goBack()">
                    <img src="../../assets/images/back.png" alt="">
                    <span class="backFont">返回</span>
                </div>
                <div class="proContainer">
                    <div class="proDetail">
                        <div class="proDetailLeft">
                            <p class="proDetailLeftTitle">项目logo</p>
                            <div class="proDetailLeftUpload">
                                <img :src="LogoUrl" alt="">
                                <div class="symbolUpload">
                                    <input type="file" id="symbol" @change="LogoFileUpload">
                                    <label for="symbol">
                                        <div>
                                            <span>标志上传</span>
                                        </div>
                                    </label>
                                </div>
                                <div class="coverUpload" v-show="LogoUrl == ''?true:false">
                                    <img src="../../assets/images/image.png" alt="" class="noImg">
                                    <p class="tips">大小不超过2MB的图片</p>
                                    <div class="upload">
                                        <!-- <el-button>封面上传</el-button> -->
                                        <input type="file" id="cover" @change="coverFileUpload">
                                        <label for="cover"><span>封面上传</span></label>
                                    </div>
                                </div>
                            </div>
                            <!-- <el-upload
                                class="upload-demo"
                                action=''
                                :before-upload="logoBeforeUpload"
                                :on-success="logoUploadSuccess"
                                :on-exceed="handleExceed"
                                accept="image/*"
                                :limit="1">
                                <el-button size="small" type="primary">上传标志</el-button>
                                <div slot="tip" class="el-upload__tip" v-show="LogoUrl==''?true:false">请上传大小不超<br>过2MB的图片</div>
                            </el-upload> -->
                        </div>
                        <div class="proDetailRight">
                            <p class="proDetailRightTitle">项目标题</p>
                            <el-input class="projectName" v-model="submitObj.name" placeholder="请输入文字"></el-input>
                            
                            <div class="exhibitors">
                                <div class="exhibitorsLeft">
                                    <p class="exhibitorsTime">参展时间</p>
                                    <el-date-picker
                                        class="datePicker"
                                        :clearable=false
                                        v-model="exhibitTime"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                                    </el-date-picker>
                                </div>
                                <div class="exhibitorsRight">
                                    <p class="exhibitorsLocation">参展地点</p>
                                    <!-- <input class="exhibitorsLocationInput" placeholder="请输入文字" type="text" v-model="submitObj.Address"> -->
                                    <el-input class="exhibitorsLocationInput" placeholder="请输入文字" v-model="submitObj.Address"></el-input>
                                </div>
                                <div class="clean"></div>
                            </div>

                            <div class="projectInfo">
                                <p class="projectInfoTitle">项目简介</p>
                                <el-input
                                    class="projectInfoCon"
                                    type="textarea"
                                    :rows="2"
                                    placeholder="请输入文字"
                                    v-model="submitObj.Brief">
                                </el-input>
                            </div>
                        </div>
                        <div class="clean"></div>
                    </div>
                    <div class="proExhibit"></div>
                    <div class="organizationInfo"></div>
                </div>
                <div class="proContainer projectCon">
                    <p class="projectExhibitsTitle">项目展品</p>
                    <div class="addExhibits" @click="toAddPro()">
                        <div class="addIcon">
                            <img src="../../assets/images/bigplus.png" alt="">
                        </div>
                    </div>
                    <!-- <div class="showExhibits">
                        <div class="productImg">
                            <img src="../../assets/images/test.jpg" alt="">
                        </div>
                        <p class="imgName">马家窑龟纹彩陶</p>
                        <div class="popupDiv">
                            <div class="btnCont">
                                <span>编辑展品</span>
                            </div>
                            <div class="btnCont">
                                <span>设为封面</span>
                            </div>
                        </div>
                    </div> -->
                    <div class="clean"></div>
                </div>
                <div class="proContainer organizationCon">
                    <p class="organizationTitle">机构信息</p>
                    <div class="organizationInput" id="organizationInput">
                        <div class="inputCont" v-for="($index,item) in inputCont">
                            <div class="inputContLeft">
                                <input type="text" placeholder="请输入文字">
                            </div>
                            <div class="inputContRight">
                                <img @click="cleanInput($event)" id="input_0" v-show="submitObj.Mechanism[0] == ''?false:true" src="../../assets/images/close.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="addInput" @click="addInputNode()">
                        <div class="addInputLeft">
                            <img src="../../assets/images/add.png" alt="">
                        </div>
                        <div class="addInputRight">
                            <span>添加</span>
                        </div>
                        <div class="clean"></div>
                    </div>
                </div>
                
            </div>
            
            <div class="clean"></div>
            <div class="publishPro">
                <div class="publishBtn" @click="submitData()">
                    <span>发布项目</span>
                </div>
                <div class="viewBtn" @click="showECode()">
                    <span>预览项目</span>
                </div>
                <div class="clean"></div>
                <div class="Ecode">
                    <img :src="ecodeUrl" alt="">
                </div>
            </div>
        </div>
        
    </div>
</div>
</template>


<script>
import {addProject,uploadLogo,getCount} from '../../api/project.js'
import {upload} from '../../api/exhibits.js'
import Cookies from 'js-cookie';
export default {
    data(){
        return{
            inputCont:['1'],
            exhibitTime:'',
            fileBlock:0.5*1024*1024,
            submitObj:{
                logo:'',
                name:'',
                StartTime:'',
                EndTime:'',
                Address:'',
                Brief:'',
                Mechanism:[]
            },
            JWT:'',
            LogoUrl:'',
            block:0.5*1024*1024,
            coverFile:'',
            coverIndex:1,
            coverFormData:'',
            coverTotalBlock:'',
            logoFile:'',
            logoIndex:1,
            logoFormData:'',
            logoTotalBlock:'',
        }
    },
    created(){
        this.getCountFilter()
    },
    mounted(){

    },
    methods: {
        showECode(){
            $('.Ecode').toggle();
            // Ecode({'Model':2,'ID':})
        },
        goBack(){
            this.$router.push({path:'/home/prolist'});
        },
        toAddPro(){
            if(this.publish()){
                this.publish()?this.addProjectFilter(this.submitObj):''
                var timestamp=new Date().getTime();
                this.$router.push({ path: '/home/addPro',query: { t: timestamp }});
            }
        },
        addInputNode(){
            this.$nextTick(function(){
                this.inputCont.push('1');
            }) 
        },
        cleanInput(e){
            this.$confirm('您确认要删除吗?', '', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.$nextTick(function(){
                        this.inputCont.pop();
                    })
                    // this.$message({
                    //     type: 'success',
                    //     message: '删除成功!'
                    // });
                }).catch(() => {
                    // this.$message({
                    //     type: 'info',
                    //     message: '已取消删除'
                    // });          
            });
            
        },
        getCountFilter(){
            getCount().then(res =>{
                console.log(res);
                let {data} = res;
                if(data.success){
                    this.$store.commit('SET_PROJECT_COUNT',data.result.Project_count);
                    Cookies.set('Project_count',data.result.Project_count);
                    this.$store.commit('SET_EXHIBITS_COUNT',data.result.Exhibits_count);
                    Cookies.set('Exhibits_count',data.result.Exhibits_count)
                }
            })
        },
        // cover upload
        coverFileUpload(){
            var file = document.getElementById('cover').files[0];
            if(file.size > 2*1024*1024){
                this.$message({
                    message:'文件超过2M',
                    type:'error',
                    showClose:true,
                })
            }else{
                this.coverFile = file;
			    this.coverTotalBlock = Math.ceil(this.coverFile.size/this.block);
			    var formData = new FormData();
			    formData.append('fileName',this.coverFile.name);
			    formData.append('total',this.coverTotalBlock);
			    formData.append('index',this.coverIndex);
			    formData.append('uploadId','');
			    formData.append('data',null);
			    this.coverFormData = formData;
			    this.UploadCoverPost(this.coverFile,this.coverFormData,'');
            }
        },
        // 分块和上传
        UploadCoverPost(file,formData,uploadId){
			var uploadBlock = file.slice((this.coverIndex-1)*this.block,this.coverIndex*this.block);
			formData.set('data',uploadBlock);
			formData.set('index',this.coverIndex);
			formData.set('uploadId',uploadId);
			this.uploadCoverFilter(formData);
		},
        uploadCoverFilter(params){
			upload(params).then(res =>{
				let {data} = res;
				this.coverIndex++;
				if(this.coverIndex <= this.coverTotalBlock){
					this.UploadCoverPost(this.coverFile,this.coverFormData,data.result.UploadID);
				}else if(this.coverIndex > this.coverTotalBlock){
					if(data.success){
                        this.LogoUrl = data.result.FileInfo.FilePath;
                    }
					this.coverIndex = 1;
				}
			})
        },
        
        LogoFileUpload(){
            var file = document.getElementById('symbol').files[0];
            if(file.size > 2*1024*1024){
                this.$message({
                    message:'文件超过2M',
                    type:'error',
                    showClose:true,
                })
            }else{
                this.logoFile = file;
			    this.logoTotalBlock = Math.ceil(this.logoFile.size/this.block);
			    var formData = new FormData();
			    formData.append('fileName',this.logoFile.name);
			    formData.append('total',this.logoTotalBlock);
			    formData.append('index',this.logoIndex);
			    formData.append('uploadId','');
			    formData.append('data',null);
			    this.logoFormData = formData;
			    this.UploadLogoPost(this.logoFile,this.logoFormData,'');
            }
        },
        UploadLogoPost(file,formData,uploadId){
			var uploadBlock = file.slice((this.logoIndex-1)*this.block,this.logoIndex*this.block);
			formData.set('data',uploadBlock);
			formData.set('index',this.logoIndex);
			formData.set('uploadId',uploadId);
			this.uploadLogoFilter(formData);
		},
        uploadLogoFilter(params){
			upload(params).then(res =>{
				let {data} = res;
				this.logoIndex++;
				if(this.logoIndex <= this.logoTotalBlock){
					this.UploadLogoPost(this.logoFile,this.logoFormData,data.result.UploadID);
				}else if(this.logoIndex > this.logoTotalBlock){
					console.log(data);
                    // if(data.success){
                    //     var url = data.result.FileInfo.FilePath;
                    // }
					this.logoIndex = 1;
				}
			})
        },

        // 提交
        submitData(){
            if(this.publish()){
                this.addProjectFilter(this.submitObj);
                this.$router.push({path:'/home/prolist'})
            }  
        },
        publish(){
            this.submitObj.Mechanism = Array.from($('#organizationInput').find('input')).map(function(item,index){
                return $(item).val();
            });
            if(this.exhibitTime == ''){
                this.submitObj.StartTime = '';
                this.submitObj.EndTime = '';
            }else{
                this.submitObj.StartTime = this.timeToString(this.exhibitTime[0]);
                this.submitObj.EndTime = this.timeToString(this.exhibitTime[1]);
            }
            
            if(this.submitObj.name == ''){
                this.$message({
                    showClose: true,
                    message: '项目标题不能为空',
                    type: 'error'
                })
            }else{
                return true;
            }  
        },
        // 时间转换
        timeToString(time){
            return time == ''?'':new Date(time).getFullYear()+'-'+(new Date(time).getMonth()*1+1)+'-'+new Date(time).getDate();
        },
        addProjectFilter(params){
            addProject(params).then( res =>{
                let {data} = res;
                if(data.success){
                    this.$store.commit('SET_PRODUCT_ID',data.result.ProjectId)
                    Cookies.set('projectId',data.result.ProjectId);
                    this.$message({
                        message:'添加成功',
                        type:'success',
                        showClose:true
                    })
                }
            })
        }
    }
}
</script>
<style lang="less">
// less mixin
.inputPlaceHolderCss(@color){
    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: @color;
    }
    ::-moz-placeholder { /* Firefox 19+ */
        color: @color;
    }
    :-ms-input-placeholder { /* IE 10+ */
        color: @color;
    }
    :-moz-placeholder { /* Firefox 18- */
        color: @color;
    }
}
body{
    .el-date-range-picker .el-picker-panel__body{
        .el-date-table td.end-date span, .el-date-table td.start-date span{
            background-color: #1966FF;
        }
        .el-date-table td.today span{
            color: #1966FF;
        }
        .el-date-table td.available:hover{
            color: #1966FF;
        }
    }
}
.superContainer{

.container{
    width: 100%;
    // height: 100%;
    background: #D7D7D7;
    overflow: hidden;
    .clean{
        clear: both;
    }
    .proList{
        max-width: 1366px;
        // height: 100%;
        margin: 0 auto;
        background: #D7D7D7;
        .clean{
            clear: both;
        }
        .leftCont{
            // width: 250px;
            width: 17.4%;
            height: 973px;
            float: left;
            background: #EFEFEF;
            margin-top: 71px;
            box-sizing: border-box;
            .headCont{
                height: 236px;
                position: relative;
                .headImg{
                    border: 1px solid #979797;
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
            margin-left: 0.6%;
            box-sizing: border-box;
            float: left;
            position: relative;
            margin-top: 71px;
            background-color: #fff;
            .backBtn{
                width: 76px;
                height: 30px;
                border-radius: 20px;
                background: #000000;
                color: #fff;
                box-sizing: border-box;
                padding: 2px 0;
                padding-left: 8px;
                margin-bottom: 20px;
                cursor: pointer;
                position: absolute;
                top: -51px;
                // vertical-align: middle;
                img{
                    width: 16px;
                    vertical-align: middle;
                }
                .backFont{
                    font-size: 14px;
                    color: #fff;
                    line-height: 20px;
                    vertical-align: middle;  
                }
            }
            .proContainer{
                width: 100%;
                box-sizing: border-box;
                padding: 20px 36px 43px 36px;
                background-color: #fff;
                border-bottom: 2px solid #D7D7D7;
                .proDetail{
                    width: 100%;
                    .proDetailLeft{
                        width: 380px;
                        float: left;
                        position: relative;
                        .proDetailLeftTitle{
                            margin: 0;
                            font-family: PingFangSC-Regular;
                            font-size: 14px;
                            color: #333333;
                            line-height: 20px;
                            margin-bottom: 10px;
                        }
                        .proDetailLeftUpload{
                            width: 380px;
                            height: 380px;
                            background-color: #EFEFEF;
                            box-sizing: border-box;
                            border-radius: 2px;
                            position: relative;
                            .symbolUpload{
                                box-sizing: border-box;
                                width: 368px;
                                height: 66px;
                                border: 1px dashed #848484;
                                background: #CECECE;
                                position: absolute;
                                top: 7px;
                                left: 6px;
                                padding: 18px 139px;
                                input{
                                        display: none;
                                    }
                                    label{
                                        cursor: pointer;
                                        width: 100%;
                                        height: 100%;
                                        
                                        border: none;
                                        div{
                                            height: 30px;
                                            width: 90px;
                                            background: #1966FF;
                                            border-radius: 24px;
                                            padding: 0px 17px;
                                            box-sizing: border-box;
                                            span{
                                                font-family: PingFangSC-Regular;
                                                font-size: 14px;
                                                color: #FFFFFF;
                                                line-height: 30px;
                                            }
                                        }
                                        
                                    }
                            }
                            .coverUpload{
                                height: 178px;
                                width: 144px;
                                position: absolute;
                                top: 117px;
                                left: 118px;
                                .noImg{
                                    width: 100px;
                                    height: 100px;
                                    display: block;
                                    margin-left: 22px;
                                    margin-bottom: 12px;
                                }
                                .tips{
                                    margin: 0;
                                    font-family: PingFangSC-Light;
                                    font-size: 14px;
                                    color: #666666;
                                    line-height: 20px;
                                    margin-bottom: 16px;
                                }
                                .upload{
                                    margin-left: 27px;
                                    height: 30px;
                                    width: 90px;
                                    input{
                                        display: none;
                                    }
                                    label{
                                        cursor: pointer;
                                        width: 100%;
                                        height: 100%;
                                        background: #1966FF;
                                        border-radius: 24px;
                                        padding: 5px 17px;
                                        border: none;
                                        span{
                                            font-family: PingFangSC-Regular;
                                            font-size: 14px;
                                            color: #FFFFFF;
                                            line-height: 20px;
                                        }
                                    }
                                }
                            }
                            .proDetailLeftUploadBtn{
                                width: 90px;
                                height: 30px;
                                background: #1966FF;
                                border-radius: 24px;
                                border: none;
                                font-family: PingFangSC-Regular;
                                font-size: 14px;
                                color: #FFFFFF;
                                
                            }
                            .el-upload__tip{
                                font-family: PingFangSC-Light;
                                font-size: 14px;
                                color: #999999;
                                margin-top: 0;
                                line-height: 20px;
                            }
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .upload-demo{
                            margin-top: 13px;
                            .el-upload{
                                width: 90px;
                                height: 30px;
                                button{
                                    width: 90px;
                                    height: 100%;
                                    border: none;
                                    background: #1966FF;
                                    border-radius: 24px;
                                    padding: 0;
                                    margin-left: 55px;
                                    span{
                                        font-family: PingFangSC-Regular;
                                        font-size: 14px;
                                        color: #FFFFFF;
                                    }
                                }
                                
                            }
                            ul{
                                // display: none !important;
                                position: absolute;
                                bottom: 48px;
                                left: 0;
                                width: 100%;
                                .el-progress{
                                    .el-progress-bar__outer{
                                        border-radius: 0px;
                                        height: 5px !important;
                                        background-color: rgba(0,0,0,0.70);
                                        .el-progress-bar__inner{
                                            border-radius: 0px;
                                            background: #1966FF;
                                        }
                                    }
                                }
                            }
                            .el-upload__tip{
                                width: 100%;
                                text-align: center;
                                position: absolute;
                                left: 0;
                                bottom: 80px;
                                font-family: PingFangSC-Light;
                                font-size: 14px;
                                color: #999999;
                                line-height: 20px;
                            }
                        }
                    };
                    .proDetailRight{
                        float: left;
                        margin-left: 40px;
                        // width: 685px;
                        width: 585px;
                        .proDetailRightTitle{
                            margin: 0;
                            ont-family: PingFangSC-Regular;
                            font-size: 14px;
                            color: #333333;
                            margin-bottom: 10px;
                            line-height: 20px;
                        }
                        .projectName{
                            width: 100%;
                            height: 36px;
                            input{
                                background-color:  #EFEFEF;
                                font-family: PingFangSC-Light;
                                font-size: 14px;
                                color: #999999;
                                height: 100%;
                                width: 100%;
                                border: none;
                                box-sizing: border-box;
                                padding: 8px 10px;
                            }
                            .inputPlaceHolderCss(#999999)
                        }
                        .exhibitors{
                            width: 100%;
                            margin-top: 22px;
                            .exhibitorsLeft{
                                width: 100%;
                                .exhibitorsTime{
                                    margin: 0;
                                    font-family: PingFangSC-Regular;
                                    font-size: 14px;
                                    color: #666666;
                                    margin-bottom: 10px;
                                    line-height: 20px;
                                } 
                                .el-date-editor{
                                    height: 36px;
                                    width: 100%;
                                    box-sizing: border-box;
                                    border: none;
                                    border-radius: 4px;
                                    background-color: #EFEFEF;
                                    .el-icon-date:before{
                                        font-size: 16px;
                                        color: #666666;
                                    }
                                    input{
                                        background: #EFEFEF;
                                        font-family: PingFangSC-Light;
                                        font-size: 14px;
                                        color: #666666; 
                                    }
                                    .el-range-separator{
                                        font-family: PingFangSC-Light;
                                        font-size: 14px;
                                        color: #666666;
                                    }
                                }
                            }
                            .exhibitorsRight{
                                width: 100%;
                                margin-top: 22px;
                                .exhibitorsLocation{
                                    margin: 0;
                                    font-family: PingFangSC-Regular;
                                    font-size: 14px;
                                    color: #333333;
                                    line-height: 20px;
                                    margin-bottom: 10px;
                                }
                                .exhibitorsLocationInput{
                                    
                                    input{
                                        width: 100%;
                                        height: 36px;
                                        border-radius: 4px;
                                        border: none;
                                        outline: none;
                                        background: #EFEFEF;
                                        padding: 0;
                                        margin: 0;
                                        box-sizing: border-box;
                                        padding: 8px 10px;
                                        color: #666666;
                                    }
                                    .inputPlaceHolderCss(#999999)
                                }
                            }
                        }
                        .projectInfo{
                            width: 100%;
                            margin-top: 22px;
                            .projectInfoTitle{
                                margin: 0;
                                margin-bottom: 10px;
                                font-family: PingFangSC-Regular;
                                font-size: 14px;
                                color: #333333;
                                line-height: 20px;
                            }
                            .projectInfoCon{
                                height: 115px;
                                textarea{
                                    height: 100%;
                                    padding: 8px 10px;
                                    box-sizing: border-box;
                                    border: none;
                                    background-color: #EFEFEF;
                                    font-family: PingFangSC-Light;
                                    font-size: 14px;
                                    color: #666666;
                                }
                                .inputPlaceHolderCss(#999999)
                            }
                        }
                    }
                }
                .projectExhibitsTitle{
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #333333;
                    margin: 0;
                    margin-bottom: 10px;
                    padding-left: 13.6px;
                    line-height: 20px;
                }
                
                .addExhibits{
                    width: 200px;
                    height: 264px;
                    box-sizing: border-box;
                    background: #EFEFEF;
                    border-radius: 2px;
                    position: relative;
                    cursor: pointer;
                    float: left;
                    margin-left: 13.6px;
                    margin-right: 13.6px;
                    margin-bottom: 27.2px;
                    .addIcon{
                        width: 42px;
                        height: 42px;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        margin-left: -21px;
                        margin-top: -21px;
                        img{
                            width: 100%;
                        }
                    }
                }
                .addExhibits:hover{
                    border: 2px solid #1966FF;
                    box-shadow: 1px 2px 4px 0 rgba(0,0,0,0.27);
                }
                .showExhibits{
                    float: left;
                    width: 200px;
                    height: 264px;
                    box-sizing: border-box;
                    background: #EFEFEF;
                    border: none;
                    border-radius: 2px;
                    margin-left: 13.6px;
                    margin-right: 13.6px;
                    margin-bottom: 27.2px;
                    position: relative;
                    border: 2px solid #EFEFEF;
                    .productImg{
                        width: 196px;
                        height: 196px;
                        background-color: #C2C2C2;
                        img{
                            width: 100%;
                        }
                    }
                    .imgName{
                        font-family: PingFangSC-Regular;
                        font-size: 14px;
                        color: #333333;
                        padding: 10px 16px;
                        line-height: 20px;
                        margin: 0;
                    }
                    .popupDiv{
                        display: none;
                        width: 200px;
                        height: 264px;
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        box-sizing: border-box;
                        background: rgba(0,0,0,0.80);
                        padding: 85px 56px 0px;
                        border: 2px solid #1966FF;
                        .btnCont{
                            width: 90px;
                            height: 30px;
                            background: #1966FF;
                            border-radius: 24px;
                            text-align: center;
                            margin-bottom: 10px;
                            cursor: pointer;
                            span{
                                font-family: PingFangSC-Regular;
                                font-size: 14px;
                                color: #FFFFFF;
                                line-height: 30px;
                            }
                        }
                    }
                }
                .showExhibits:hover{
                    box-shadow: 1px 2px 4px 0 rgba(0,0,0,0.27);
                    border: 2px solid #1966FF;
                    
                    // .popupDiv{
                    //     display: block;
                    // }
                }
                .organizationTitle{
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #333333;
                    line-height: 20px;
                    margin: 0;
                    margin-bottom: 10px;
                }
                .organizationInput{
                    width: 420px;
                    .inputCont{
                        width: 100%;
                        height: 36px;
                        background-color: #EFEFEF;
                        border-radius: 4px;
                        margin-bottom: 10px;
                        .inputContLeft{
                            width: 384px;
                            height: 100%;
                            float: left;
                            input{
                                outline: none;
                                border: none;
                                background-color: #EFEFEF;
                                height: 100%;
                                width: 100%;
                                border-radius: 4px;
                                padding: 8px 10px;
                                box-sizing: border-box;
                                font-family: PingFangSC-Light;
                                font-size: 14px;
                                color: #333333;
                            }
                            .inputPlaceHolderCss(#666666);
                        }
                        .inputContRight{
                            width: 36px;
                            height: 100%;
                            float: left;
                            img{
                                width: 100%;
                                cursor: pointer;
                            }
                        }
                    }
                    inputCont:last-child{
                        margin-bottom: 0;
                    }
                }
                .addInput{
                    width: 62px;
                    height: 26px;
                    position: absolute;
                    top: 64px;
                    left: 478px;
                    cursor: pointer;
                    .addInputLeft{
                        float: left;
                        height: 100%;
                        width: 26px;
                        margin-right: 8px;
                        img{
                            width: 100%;
                        }
                    }
                    .addInputRight{
                        float: left;
                        font-family: PingFangSC-Regular;
                        font-size: 14px;
                        color: #333333;
                        line-height: 26px;
                    }
                }
            }
            .projectCon{
                
                padding: 31px 22.4px 3.8px 22.4px;
            }
            .organizationCon{
                padding: 31px 36px 31px 36px;
                position: relative;
            }
            
        }
        .publishPro{
            width: 100%;
            height: 40px;
            margin-top: 30px;
            margin-bottom: 20px;
            position: relative;
            .Ecode{
				display: none;
                padding-top: 20px;
                padding-left: 20px;
				box-sizing: border-box;
				position: absolute;
				top: -250px;
				right: 100px;
				width: 220px;
				height: 235.2px;
				background: url('../../assets/images/ecodebg.png') no-repeat top left;
				background-size: 100% 100%;
				img{
					width: 180px;
					height: 180px;
				}
			}
            .publishBtn{
                width: 120px;
                height: 100%;
                float: right;
                
                background: #1966FF;
                border-radius: 24px;
                cursor: pointer;
                text-align: center;
                span{
                    font-family: PingFangSC-Regular;
                    font-size: 18px;
                    color: #FFFFFF;
                    line-height: 40px;
                }
                
            }
            .viewBtn{
                width: 120px;
                height: 100%;
                float: right;
                background: #1966FF;
                border-radius: 24px;
                cursor: pointer;
                text-align: center;
                margin-right: 20px;
                span{
                    font-family: PingFangSC-Regular;
                    font-size: 18px;
                    color: #FFFFFF;
                    line-height: 40px;
                }
            }
        }
    }
    
}
}

.dg.ac {
	  display: none;
	}
</style>
