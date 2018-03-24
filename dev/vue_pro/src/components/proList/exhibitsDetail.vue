<template>
	<div class="outsideCont">
        <div class="insideCont">
            <div class="backBtn" @click="goBack()">
                <img src="../../assets/images/back.png" alt="">
                <span class="backFont">返回</span>
            </div>
            <div class="container">
				<div class="containerTop">
					<div class="left">
						<p class="exhibitsImgTitle">展品图片</p>
						<div class="exhibitsImg">
							<img :src="submitObj.ExhibitsImg" alt="">
							<div class="tipsCont">
								<img src="../../assets/images/image.png" alt="">
								<p>大小不超过2MB的图片</p>
								<input type="file" id="picture" @change="pictureUpload">
								<label for="picture">
									<div class="button">
										<span>图片上传</span>
									</div>
								</label>
													
							</div>
						</div>
					</div>
					<div class="right">
						<div class="exhibits">
                        	<p class="exhibitsName">展品名称</p>
                        	<el-input class="exhibitsInput" placeholder="请输入内容" v-model="submitObj.name"></el-input>
						</div>
						<div class="exhibitsIntroduce">
							<p class="exhibitsName">展品介绍</p>
							<el-input
								class="exhibitsIntroduceInput"
								type="textarea"
								:rows="2"
								placeholder="请输入内容"
								v-model="submitObj.Brief">
							</el-input>
						</div>
					</div>
					<div class="clean"></div>
				</div>
								<div class="containerBottom">
									<div class="left">
										<div class="threeDCont">
											<p class="title">3D文件上传</p>
											<div class="buttonCont">
												<div class="inputCont">
													<input type="file" id="threeD" @change="threeDUpload">
													<label for="threeD">
														<div class="forLabel"><span>浏览</span></div>
													</label>
												</div>
												<div class="tips">
													<span>支持.OBI/.FDX格式</span>
												</div>
												
												<div class="clean"></div>
												<div class="fileNameZ" v-show="submitObj.Unity3D!=''?false:true"></div>
												<div class="fileName" v-show="submitObj.Unity3D==''?false:true"><span>已上传图片</span></div>
											</div>
										</div>
										<div class="Texture">
											<p class="title">纹理贴图</p>
											<div class="buttonCont">
												<div class="inputCont">
													<input type="file" id="Texture" @change="textureUpload">
													<label for="Texture">
														<div class="forLabel"><span>浏览</span></div>
													</label>
												</div>
												<div class="tips">
													<span>支持.jpg格式</span>
												</div>
												
												<div class="clean"></div>
												<div class="fileNameZ" v-show="submitObj.Unity3DJpg!=''?false:true"></div>
												<div class="fileName" v-show="submitObj.Unity3DJpg==''?false:true"><span>已上传图片</span></div>
											</div>
										</div>
										<div class="bump">
											<p class="title">凹凸贴图</p>
											<div class="buttonCont">
												<div class="inputCont">
													<input type="file" id="bump" @change="bumpUpload">
													<label for="bump">
														<div class="forLabel"><span>浏览</span></div>
													</label>
												</div>
												<div class="tips">
													<span>支持.jpg格式</span>
												</div>
												
												<div class="clean"></div>
												<div class="fileNameZ" v-show="submitObj.Unity3DBump!=''?false:true"></div>
												<div class="fileName" v-show="submitObj.Unity3DBump==''?false:true"><span>已上传图片</span></div>
											</div>
										</div>
										<div class="uploadEdit">
											<el-button class="button" v-show="buttonChange()" @click="openUppop()">上传编辑</el-button>
											<el-button :disabled=!buttonChange() class="button" v-show="!buttonChange()">上传中</el-button>
											<!-- <div class="button">
												<span>上传编辑</span>
											</div> -->
										</div>
									</div>
									<div class="right">
											<div class="explanation">
                        <p class="exhibitsName">语音讲解</p>
                        <div class="uploadVoice"> 
														<p class="uploadLink">
															<a :href="submitObj.Voice" target='_blank'>{{submitObj.Voice}}</a>
														</p>
														<div>
															<input type="file" id="voiceFile" accept=".mp4" @change="voiceUpload">
															<label for="voiceFile">
																<div class="uploadBtn">
																	<span>语音上传</span>
																</div>
															</label>
															<span class="uploadTips">支持MP3格式</span>
															<div class="clean"></div>
														</div>
                            <div class="clean"></div>
                        </div>
                    	</div>
											<div class="exhibitsVideo">
                        <p class="exhibitsName">相关视频</p>
                        <div class="uploadVideo">
                            <div class="uploadVideoRight">
                                <div class="reUploadCont">
                                    <div>
																			<input type="file" id="videoFile" accept=".mp4" @change="videoUpload">
																			<label for="videoFile">
																				<div class="uploadBtn">
																					<span>视频上传</span>
																				</div>
																			</label>
																			<span class="uploadTips">支持MP4格式</span>
																			<div class="clean"></div>
																		</div>
                                </div>
                            </div>
                            <div class="uploadVideoLeft">
															<video :src="submitObj.Video" controls="controls"></video>
														</div>
                            <div class="clean"></div>
                        </div>
                    	</div>
									</div>
									<div class="clean"></div>
								</div>
                <div class="clean"></div>
            </div>
            <div class="btnGroup">
                <div class="btnGroupLeft">
                    <div class="btnCont" @click="deleteExhibits">
                        <span>删除展品</span>
                    </div>
                    <div class="btnCont">
                        <span>暂不发布</span>
                    </div>
                </div>
                <div class="btnGroupRight">
                    <div class="btnCont" @click="publistExhibits">
                        <span>发布展品</span>
                    </div>
                    <div class="btnCont" @click="showECode">
                        <span>预览展品</span>
                    </div>
										<div class="Ecode">
											<img :src="ecodeUrl" alt="">
										</div>
                </div>
                <div class="clean"></div>
            </div>
        </div>
		<div class="popup">
			<div class="Cont">
				<div class="showCont" >
					<div id="modelDiv"></div>
					<div id="loadingDiv"></div>
					<div class="btnGroup">
						<div class="btnButton">
							<div class="left" @click="closeUppop">
								<span>取消</span>
							</div>
							<div class="right" @click="getBoardValue()">
								<span>完成</span>
							</div>
							<div class="clean"></div>
						</div>
					</div>
				</div>
				
				
			</div>
			
		</div>
    </div>
</template>
<script>
	import { editExhibit, exhibitDetail,deleteE,Ecode } from "../../api/exhibits.js";
	import { uploadLogo } from "../../api/project.js";
	var THREE = require("three");
	var dat = require("threejs-utils").dat;
	// import {OBJLoader} from '../../assets/js/ThreeRely/OBJLoader.js'
	// import {FBXLoader} from '../../assets/js/ThreeRely/FBXLoader.js'
	// import {Projector} from '../../assets/js/ThreeRely/Projector.js'
	// import '../../assets/js/FBXLoader.js'
	// import '../../assets/js/Projector.js'
	// import '../../assets/js/dat.gui.min.js'
	import "../../assets/js/jquery-3.1.1.js";
	export default {
	  data() {
	    return {
	      exhibitsIntroduce: "",
	      // upload
	      block: 0.5 * 1024 * 1024,
	      pictureFile: "",
	      pictureIndex: 1,
	      pictureFormData: "",
	      pictureTotalBlock: "",
	      // 3D
	      threeDFile: "",
	      threeDIndex: 1,
	      threeDFormData: "",
	      threeDTotalBlock: "",
	      // Texture
	      TextureFile: "",
	      TextureIndex: 1,
	      TextureFormData: "",
	      TextureTotalBlock: "",
	      // bump
	      bumpFile: "",
	      bumpIndex: 1,
	      bumpFormData: "",
	      bumpTotalBlock: "",

	      // material
	      materialFile: "",
	      materialIndex: 1,
	      materialFormData: "",
	      materialTotalBlock: "",

	      // video
	      videoFile: "",
	      videoIndex: 1,
	      videoFormData: "",
	      videoTotalBlock: "",
	      // voice
	      voiceFile: "",
	      voiceIndex: 1,
	      voiceFormData: "",
				voiceTotalBlock: "",
				ecodeUrl:'',
	      submitObj: {
	        ProjectID: "",
	        id: "",
	        name: "",
	        Brief: "",
	        Voice: "",
	        VoiceText: "",
	        Video: "",
	        VideoText: "",
	        Unity3D: "",
	        Unity3DJpg: "",
	        Unity3DJpgText: "",
	        Unity3DBump: "",
	        Unity3DBumpText: "",
	        // 默认
	        Camera_fov: 24,
	        Camera_postion_x: 0,
	        Camera_postion_y: 0,
	        Camera_postion_z: 0,
	        Camera_near: 1,
	        Camera_far: 3600,
	        Color: "",
	        ImagePath: "",
	        Mode_position_x: 0,
	        Mode_position_y: 0,
	        Mode_position_z: -1400,
	        Roughness: 1.0,
	        BumpScale: 1.0,
	        EnvIntensity: 0.2,
	        // 材质 环境贴图路径
	        ModelEnvMap: "",
	        Paralle_Color: "0xffffff",
	        Paralle_intensity: 2.3,
	        Paralle_position_x: -351,
	        Paralle_position_y: 200,
	        Paralle_position_z: -1300,
	        Spotlight_Color: "0xffffff",
	        Spotlight_Intensity: 0.27,
	        Spotlight_Distance: 200,
	        Spotlight_Angle: 0.64,
	        Spotlight_Penumbra: 0,
	        Spotlight_position_x: 399,
	        Spotlight_position_y: 153,
	        Spotlight_position_z: -1781
	      }
	    };
	  },
	  created() {
	    location.replace(location.href);
	    this.submitObj.ProjectID = this.$store.getters.getProjectId;
	    let id = this.$route.params.id;
	    this.submitObj.id = this.$route.params.id;
	    exhibitDetail({ id: id }).then(res => {
	      let { data } = res;
	      if (data.success) {
					this.submitObj.name = data.result.name;
					this.submitObj.exhibitsImg = data.result.exhibitsImg;
	        this.submitObj.Brief = data.result.Brief;
	        this.submitObj.Voice = data.result.Voice;
	        this.submitObj.Video = data.result.Video;
	        this.submitObj.VoiceText = data.result.VoiceText;
	        this.submitObj.VideoText = data.result.VideoText;
	        this.submitObj.Unity3D = data.result.Unity3D;
	        this.submitObj.Unity3DText = data.result.Unity3DText;
	        this.submitObj.Unity3DJpg = data.result.Unity3DJpg;
	        this.submitObj.Unity3DJpgText = data.result.Unity3DJpgText;
	        this.submitObj.Unity3DBump = data.result.Unity3DBump;
	        this.submitObj.Unity3DBumpText = data.result.Unity3DBumpText;
	        this.submitObj.Camera_fov = data.result.Camera_fov;
	        this.submitObj.Camera_postion_x = data.result.Camera_postion_x;
	        this.submitObj.Camera_postion_y = data.result.Camera_postion_y;
	        this.submitObj.Camera_postion_z = data.result.Camera_postion_z;
	        this.submitObj.Camera_near = data.result.Camera_near;
	        this.submitObj.Camera_far = data.result.Camera_far;
	        this.submitObj.Color = data.result.Color;
	        this.submitObj.ImagePath = data.result.ImagePath;
	        this.submitObj.Mode_position_x = data.result.Mode_position_x;
	        this.submitObj.Mode_position_y = data.result.Mode_position_y;
	        this.submitObj.Mode_position_z = data.result.Mode_position_z;
	        this.submitObj.Roughness = data.result.Roughness;
	        this.submitObj.BumpScale = data.result.BumpScale;
	        this.submitObj.EnvIntensity = data.result.EnvIntensity;
	        this.submitObj.ModelEnvMap = data.result.ModelEnvMap;
	        this.submitObj.Paralle_Color = data.result.Paralle_Color;
	        this.submitObj.Paralle_intensity = data.result.Paralle_Intensity;
	        this.submitObj.Paralle_position_x = data.result.Paralle_position_x;
	        this.submitObj.Paralle_position_y = data.result.Paralle_position_y;
	        this.submitObj.Paralle_position_z = data.result.Paralle_position_z;
	        this.submitObj.Spotlight_Color = data.result.Spotlight_Color;
	        this.submitObj.Spotlight_Intensity = data.result.Spotlight_Intensity;
	        this.submitObj.Spotlight_Distance = data.result.Spotlight_Distance;
	        this.submitObj.Spotlight_Angle = data.result.Spotlight_Angle;
	        this.submitObj.Spotlight_Penumbra = data.result.Spotlight_Penumbra;
	        this.submitObj.Spotlight_position_x = data.result.Spotlight_position_x;
	        this.submitObj.Spotlight_position_y = data.result.Spotlight_position_y;
	        this.submitObj.Spotlight_position_z = data.result.Spotlight_position_z;
	      }
	      console.log("this is info of id");
	    });
	  },
	  mounted() {},
	  methods: {
			deleteExhibits(){
				let id = this.$route.params.id;
				console.log(id);
				deleteE({'ID':id}).then(res =>{
					let {data} = res;
					console.log(res);
					if(data.success){
						this.$message({
							message:data.result,
							type:'success',
							showClose:true
						})
						this.$router.push({
							name: "proDetail",
							params: { id: this.$store.getters.getProjectId }
						});
					}
				})
			},
			showECode(){
				Ecode({'Model':2,'ID':this.$route.params.id}).then(res =>{
					console.log(res);
					let {data} = res;
					if(data.success){
						this.ecodeUrl = data.result.linkText;
						
					}
				})
				$('.Ecode').toggle();
			},
			openUppop(){
				$('.popup').show();
				$('#modelDiv canvas').remove();
				this.create3DModel(
					{
						fov: this.submitObj.Camera_fov,
						position_x: this.submitObj.Camera_postion_x,
						position_y: this.submitObj.Camera_postion_y,
						position_z: this.submitObj.Camera_postion_z,
						near: this.submitObj.Camera_near,
						far: this.submitObj.Camera_far
					},
					{
						color: "none",
						imagePath: "none"
					},
					{
						modelPath: this.submitObj.Unity3D,
						mapPath: this.submitObj.Unity3DJpg,
						bumpMapPath: this.submitObj.Unity3DBump,
						// modelPath: "models/wawenhi/wawen-hi.obj",
						// mapPath: "models/wawenhi/Map2.jpg",
						// bumpMapPath: "models/wawenhi/bump2.jpg",
						position_x: this.submitObj.Mode_position_x,
						position_y: this.submitObj.Mode_position_y,
						position_z: this.submitObj.Mode_position_z
					},
					{
						roughness: this.submitObj.Roughness,
						bumpScale: this.submitObj.BumpScale,
						envIntensity: this.submitObj.EnvIntensity
						// modelEnvMap: "images/sky2/"
						// modelEnvMap: "../../assets/test/images/sky2/"
					},
					{
						color: 0xffffff,
						intensity: this.submitObj.Paralle_intensity,
						position_x: this.submitObj.Paralle_position_x,
						position_y: this.submitObj.Paralle_position_y,
						position_z: this.submitObj.Paralle_position_z
					},
					{
						color: 0xffffff,
						intensity: this.submitObj.Spotlight_Intensity,
						distance: this.submitObj.Spotlight_Distance,
						angle: this.submitObj.Spotlight_Angle,
						penumbra: this.submitObj.Spotlight_Penumbra,
						position_x: this.submitObj.Spotlight_position_x,
						position_y: this.submitObj.Spotlight_position_y,
						position_z: this.submitObj.Spotlight_position_z
					}
				);
			},
			closeUppop(){
				$('.popup').hide();
				$(".dg.ac").css("display", "none");
			},
			//   button change
			buttonChange(){
				var a = this.submitObj.Unity3D !=''?true:false;
				var b = this.submitObj.Unity3DJpg !=''?true:false;
				var c = this.submitObj.Unity3DBump !=''?true:false;
					if(a&&b&&c == true){
						return true
					}else{
						return false
					}			
			},
			// upload picture
			pictureUpload() {
				var file = document.getElementById("picture").files[0];
				if (file.size > 2 * 1024 * 1024) {
					this.$message({
					message: "文件超过2M",
					type: "error",
					showClose: true
					});
				} else {
					this.pictureFile = file;
					this.pictureTotalBlock = Math.ceil(this.pictureFile.size / this.block);
					var formData = new FormData();
					formData.append("fileName", this.pictureFile.name);
					formData.append("total", this.pictureTotalBlock);
					formData.append("index", this.pictureIndex);
					formData.append("uploadId", "");
					formData.append("data", null);
					this.pictureFormData = formData;
					this.UploadCoverPost(this.pictureFile, this.pictureFormData, "");
				}
			},
			UploadCoverPost(file, formData, uploadId) {
				var uploadBlock = file.slice(
					(this.pictureIndex - 1) * this.block,
					this.pictureIndex * this.block
				);
				formData.set("data", uploadBlock);
				formData.set("index", this.pictureIndex);
				formData.set("uploadId", uploadId);
				this.uploadCoverFilter(formData);
			},
			uploadCoverFilter(params) {
				upload(params).then(res => {
					let { data } = res;
					this.pictureIndex++;
					if (this.pictureIndex <= this.pictureTotalBlock) {
					this.UploadCoverPost(
						this.pictureFile,
						this.pictureFormData,
						data.result.UploadID
					);
					} else if (this.pictureIndex > this.pictureTotalBlock) {
						if(data.success){
							this.submitObj.ExhibitsImg = data.result.FileInfo.FilePath;
						}
						this.pictureIndex = 1;
					}
				});
			},
			
			// upload 3D
			threeDUpload() {
				var file = document.getElementById("threeD").files[0];
			
				this.threeDFile = file;
				this.threeDTotalBlock = Math.ceil(this.threeDFile.size / this.block);
				var formData = new FormData();
				formData.append("fileName", this.threeDFile.name);
				formData.append("total", this.threeDTotalBlock);
				formData.append("index", this.threeDIndex);
				formData.append("uploadId", "");
				formData.append("data", null);
				this.threeDFormData = formData;
				this.Upload3DPost(this.threeDFile, this.threeDFormData, "");
			},
			Upload3DPost(file, formData, uploadId) {
				var uploadBlock = file.slice(
					(this.threeDIndex - 1) * this.block,
					this.threeDIndex * this.block
				);
				formData.set("data", uploadBlock);
				formData.set("index", this.threeDIndex);
				formData.set("uploadId", uploadId);
				this.upload3DFilter(formData);
			},
			upload3DFilter(params) {
				upload(params).then(res => {
					let { data } = res;
					this.threeDIndex++;
					if (this.threeDIndex <= this.threeDTotalBlock) {
					this.Upload3DPost(
						this.threeDFile,
						this.threeDFormData,
						data.result.UploadID
					);
					} else if (this.threeDIndex > this.threeDTotalBlock) {
						if(data.success){
							this.submitObj.Unity3D = data.result.FileInfo.FilePath;
						}
						this.threeDIndex = 1;
					}
				});
			},
			
			// 纹理
			textureUpload(){
				var file = document.getElementById("Texture").files[0];
				
					this.TextureFile = file;
					this.TextureTotalBlock = Math.ceil(this.TextureFile.size / this.block);
					var formData = new FormData();
					formData.append("fileName", this.TextureFile.name);
					formData.append("total", this.TextureTotalBlock);
					formData.append("index", this.TextureIndex);
					formData.append("uploadId", "");
					formData.append("data", null);
					this.TextureFormData = formData;
					this.UploadTexturePost(this.TextureFile, this.TextureFormData, "");
				
			},
			UploadTexturePost(file, formData, uploadId) {
				var uploadBlock = file.slice(
					(this.TextureIndex - 1) * this.block,
					this.TextureIndex * this.block
				);
				formData.set("data", uploadBlock);
				formData.set("index", this.TextureIndex);
				formData.set("uploadId", uploadId);
				this.uploadTextureFilter(formData);
			},
			uploadTextureFilter(params) {
				upload(params).then(res => {
					let { data } = res;
					this.TextureIndex++;
					if (this.TextureIndex <= this.TextureTotalBlock) {
					this.UploadTexturePost(
						this.TextureFile,
						this.TextureFormData,
						data.result.UploadID
					);
					} else if (this.TextureIndex > this.TextureTotalBlock) {
						if(data.success){
							this.submitObj.Unity3DJpg = data.result.FileInfo.FilePath;
						}
						this.TextureIndex = 1;
					}
				});
			},

			// 凹凸
			bumpUpload(){
				var file = document.getElementById("bump").files[0];
				
					this.bumpFile = file;
					this.bumpTotalBlock = Math.ceil(this.bumpFile.size / this.block);
					var formData = new FormData();
					formData.append("fileName", this.bumpFile.name);
					formData.append("total", this.bumpTotalBlock);
					formData.append("index", this.bumpIndex);
					formData.append("uploadId", "");
					formData.append("data", null);
					this.bumpFormData = formData;
					this.UploadbumpPost(this.bumpFile, this.bumpFormData, "");
				
			},
			UploadbumpPost(file, formData, uploadId) {
				var uploadBlock = file.slice(
					(this.bumpIndex - 1) * this.block,
					this.bumpIndex * this.block
				);
				formData.set("data", uploadBlock);
				formData.set("index", this.bumpIndex);
				formData.set("uploadId", uploadId);
				this.uploadbumpFilter(formData);
			},
			uploadbumpFilter(params) {
				upload(params).then(res => {
					let { data } = res;
					this.bumpIndex++;
					if (this.bumpIndex <= this.bumpTotalBlock) {
					this.UploadbumpPost(
						this.bumpFile,
						this.bumpFormData,
						data.result.UploadID
					);
					} else if (this.bumpIndex > this.bumpTotalBlock) {
						if(data.success){
							this.submitObj.Unity3DBump = data.result.FileInfo.FilePath;
						}
						this.bumpIndex = 1;
					}
				});
			},

			// 材质
			materialUpload(){
				var file = document.getElementById("material").files[0];
				
					this.materialFile = file;
					this.materialTotalBlock = Math.ceil(this.materialFile.size / this.block);
					var formData = new FormData();
					formData.append("fileName", this.materialFile.name);
					formData.append("total", this.materialTotalBlock);
					formData.append("index", this.materialIndex);
					formData.append("uploadId", "");
					formData.append("data", null);
					this.materialFormData = formData;
					this.UploadmaterialPost(this.materialFile, this.materialFormData, "");
				
			},
			UploadmaterialPost(file, formData, uploadId) {
				var uploadBlock = file.slice(
					(this.materialIndex - 1) * this.block,
					this.materialIndex * this.block
				);
				formData.set("data", uploadBlock);
				formData.set("index", this.materialIndex);
				formData.set("uploadId", uploadId);
				this.uploadmaterialFilter(formData);
			},
			uploadmaterialFilter(params) {
				upload(params).then(res => {
					let { data } = res;
					this.materialIndex++;
					if (this.materialIndex <= this.materialTotalBlock) {
					this.UploadmaterialPost(
						this.materialFile,
						this.materialFormData,
						data.result.UploadID
					);
					} else if (this.materialIndex > this.materialTotalBlock) {
						console.log(data);
						this.materialIndex = 1;
					}
				});
			},

			// voice
			voiceUpload(){
				var file = document.getElementById("voiceFile").files[0];
				if (file.size > 2 * 1024 * 1024) {
					this.$message({
					message: "文件超过2M",
					type: "error",
					showClose: true
					});
				} else {
					this.videoFile = file;
					this.videoTotalBlock = Math.ceil(this.videoFile.size / this.block);
					var formData = new FormData();
					formData.append("fileName", this.videoFile.name);
					formData.append("total", this.videoTotalBlock);
					formData.append("index", this.videoIndex);
					formData.append("uploadId", "");
					formData.append("data", null);
					this.videoFormData = formData;
					this.UploadvoicePost(this.videoFile, this.videoFormData, "");
				}
			},
			UploadvoicePost(file, formData, uploadId) {
				var uploadBlock = file.slice(
					(this.videoIndex - 1) * this.block,
					this.videoIndex * this.block
				);
				formData.set("data", uploadBlock);
				formData.set("index", this.videoIndex);
				formData.set("uploadId", uploadId);
				this.uploadvoiceFilter(formData);
			},
			uploadvoiceFilter(params) {
				upload(params).then(res => {
					let { data } = res;
					this.videoIndex++;
					if (this.videoIndex <= this.videoTotalBlock) {
					this.UploadvoicePost(
						this.videoFile,
						this.videoFormData,
						data.result.UploadID
					);
					} else if (this.videoIndex > this.videoTotalBlock) {
					console.log(data);
					this.videoIndex = 1;
					}
				});
			},

			// video
			videoUpload(){
				var file = document.getElementById("videoFile").files[0];
				if (file.size > 2 * 1024 * 1024) {
					this.$message({
					message: "文件超过2M",
					type: "error",
					showClose: true
					});
				} else {
					this.voiceFile = file;
					this.voiceTotalBlock = Math.ceil(this.voiceFile.size / this.block);
					var formData = new FormData();
					formData.append("fileName", this.voiceFile.name);
					formData.append("total", this.voiceTotalBlock);
					formData.append("index", this.voiceIndex);
					formData.append("uploadId", "");
					formData.append("data", null);
					this.voiceFormData = formData;
					this.UploadvideoPost(this.voiceFile, this.voiceFormData, "");
				}
			},
			UploadvideoPost(file, formData, uploadId) {
				var uploadBlock = file.slice(
					(this.voiceIndex - 1) * this.block,
					this.voiceIndex * this.block
				);
				formData.set("data", uploadBlock);
				formData.set("index", this.voiceIndex);
				formData.set("uploadId", uploadId);
				this.uploadvideoFilter(formData);
			},
			uploadvideoFilter(params) {
				upload(params).then(res => {
					let { data } = res;
					this.voiceIndex++;
					if (this.voiceIndex <= this.voiceTotalBlock) {
					this.UploadvideoPost(
						this.voiceFile,
						this.voiceFormData,
						data.result.UploadID
					);
					} else if (this.voiceIndex > this.voiceTotalBlock) {
					console.log(data);
					this.voiceIndex = 1;
					}
				});
			},
			publistExhibits() {
			// this.getBoardValue();
			this.addExhibitFilter(this.submitObj);
			$(".dg.ac").css("display", "none");

			this.$router.push({
				name: "proDetail",
				params: { id: this.$store.getters.getProjectId }
			});
			},
			addExhibitFilter(params) {
			console.log($(".dg.ac").find("input"));
			addExhibit(params).then(res => {
				console.log(res);
				let { data } = res;
				if (data.success) {
				this.$message({
					message: "添加成功",
					showClose: true,
					type: "success"
				});

				// this.$router.push({name:'proDetail'})
				}
			});
			},
			getBoardValue() {
				var input = $(".dg.ac").find("input");
				var array = [];
				for (let i = 0; i < input.length; i++) {
					array.push($(input[i]).val());
				}
				console.log(array);
				this.submitObj.Camera_fov = array[0];
				this.submitObj.Camera_near = array[1];
				this.submitObj.Camera_far = array[2];
				this.submitObj.Camera_postion_x = array[3];
				this.submitObj.Camera_postion_y = array[4];
				this.submitObj.Camera_postion_z = array[5];

				this.submitObj.Color = array[6];
				this.submitObj.ImagePath = "";

				this.submitObj.Mode_position_x = array[7];
				this.submitObj.Mode_position_y = array[8];
				this.submitObj.Mode_position_z = array[9];

				this.submitObj.Roughness = array[10];
				this.submitObj.BumpScale = array[11];
				this.submitObj.EnvIntensity = array[12];
				// 材质 环境贴图路径
				this.submitObj.ModelEnvMap = "";

				this.submitObj.Paralle_Color = array[13];
				this.submitObj.Paralle_intensity = array[14];
				this.submitObj.Paralle_position_x = array[15];
				this.submitObj.Paralle_position_y = array[16];
				this.submitObj.Paralle_position_z = array[17];

				this.submitObj.Spotlight_Color = array[18];
				this.submitObj.Spotlight_Intensity = array[19];
				this.submitObj.Spotlight_Distance = array[20];
				this.submitObj.Spotlight_Angle = array[21];
				this.submitObj.Spotlight_Penumbra = array[22];
				this.submitObj.Spotlight_position_x = array[23];
				this.submitObj.Spotlight_position_y = array[24];
				this.submitObj.Spotlight_position_z = array[25];
				$('.popup').hide();
				$(".dg.ac").css("display", "none");
			},
			goBack() {
				this.$router.go(-1);
				$(".dg.ac").css("display", "none");
			},
			viewExhibits() {
				var dat = require("threejs-utils").dat;
				$(".dg.ac").css("display", "block");
				console.log(
					{
						fov: 24,
						position_x: 0,
						position_y: 0,
						position_z: 0,
						near: 1,
						far: 3600
					},
					{
						color: "none",
						imagePath: "none"
					},
					{
						modelPath: this.submitObj.Unity3D,
						mapPath: this.submitObj.Unity3DJpg,
						bumpMapPath: this.submitObj.Unity3DBump,
						// modelPath: "models/wawenhi/wawen-hi.obj",
						// mapPath: "models/wawenhi/Map2.jpg",
						// bumpMapPath: "models/wawenhi/bump2.jpg",
						position_x: 0,
						position_y: 0,
						position_z: -1400
					},
					{
						roughness: 1.0,
						bumpScale: 1.0,
						envIntensity: 0.2
						// modelEnvMap: "images/sky2/"
						// modelEnvMap: "../../assets/test/images/sky2/"
					},
					{
						color: 0xffffff,
						intensity: 2.3,
						position_x: -351,
						position_y: 200,
						position_z: -1300
					},
					{
						color: 0xffffff,
						intensity: 0.27,
						distance: 200,
						angle: 0.64,
						penumbra: 0,
						position_x: 399,
						position_y: -153,
						position_z: -1781
					}
				);
				this.create3DModel(
					{
						fov: 24,
						position_x: 0,
						position_y: 0,
						position_z: 0,
						near: 1,
						far: 3600
					},
					{
						color: "none",
						imagePath: "none"
					},
					{
						modelPath: this.submitObj.Unity3D,
						mapPath: this.submitObj.Unity3DJpg,
						bumpMapPath: this.submitObj.Unity3DBump,
						// modelPath: "models/wawenhi/wawen-hi.obj",
						// mapPath: "models/wawenhi/Map2.jpg",
						// bumpMapPath: "models/wawenhi/bump2.jpg",
						position_x: 0,
						position_y: 0,
						position_z: -1400
					},
					{
						roughness: 1.0,
						bumpScale: 1.0,
						envIntensity: 0.2
						// modelEnvMap: "images/sky2/"
						// modelEnvMap: "../../assets/test/images/sky2/"
					},
					{
						color: 0xffffff,
						intensity: 2.3,
						position_x: -351,
						position_y: 200,
						position_z: -1300
					},
					{
						color: 0xffffff,
						intensity: 0.27,
						distance: 200,
						angle: 0.64,
						penumbra: 0,
						position_x: 399,
						position_y: -153,
						position_z: -1781
					}
				);
			},
			create3DModel(Camera, Scene, Model, Material, DirectionalLight, SpotLight) {
				THREE.OBJLoader = (function() {
					// o object_name | g group_name
					var object_pattern = /^[og]\s*(.+)?/;
					// mtllib file_reference
					var material_library_pattern = /^mtllib /;
					// usemtl material_name
					var material_use_pattern = /^usemtl /;

					function ParserState() {
					var state = {
						objects: [],
						object: {},

						vertices: [],
						normals: [],
						colors: [],
						uvs: [],

						materialLibraries: [],

						startObject: function(name, fromDeclaration) {
						// If the current object (initial from reset) is not from a g/o declaration in the parsed
						// file. We need to use it for the first parsed g/o to keep things in sync.
						if (this.object && this.object.fromDeclaration === false) {
							this.object.name = name;
							this.object.fromDeclaration = fromDeclaration !== false;
							return;
						}

						var previousMaterial =
							this.object && typeof this.object.currentMaterial === "function"
							? this.object.currentMaterial()
							: undefined;

						if (this.object && typeof this.object._finalize === "function") {
							this.object._finalize(true);
						}

						this.object = {
							name: name || "",
							fromDeclaration: fromDeclaration !== false,

							geometry: {
							vertices: [],
							normals: [],
							colors: [],
							uvs: []
							},
							materials: [],
							smooth: true,

							startMaterial: function(name, libraries) {
							var previous = this._finalize(false);

							// New usemtl declaration overwrites an inherited material, except if faces were declared
							// after the material, then it must be preserved for proper MultiMaterial continuation.
							if (
								previous &&
								(previous.inherited || previous.groupCount <= 0)
							) {
								this.materials.splice(previous.index, 1);
							}

							var material = {
								index: this.materials.length,
								name: name || "",
								mtllib:
								Array.isArray(libraries) && libraries.length > 0
									? libraries[libraries.length - 1]
									: "",
								smooth:
								previous !== undefined ? previous.smooth : this.smooth,
								groupStart: previous !== undefined ? previous.groupEnd : 0,
								groupEnd: -1,
								groupCount: -1,
								inherited: false,

								clone: function(index) {
								var cloned = {
									index: typeof index === "number" ? index : this.index,
									name: this.name,
									mtllib: this.mtllib,
									smooth: this.smooth,
									groupStart: 0,
									groupEnd: -1,
									groupCount: -1,
									inherited: false
								};
								cloned.clone = this.clone.bind(cloned);
								return cloned;
								}
							};

							this.materials.push(material);

							return material;
							},

							currentMaterial: function() {
							if (this.materials.length > 0) {
								return this.materials[this.materials.length - 1];
							}

							return undefined;
							},

							_finalize: function(end) {
							var lastMultiMaterial = this.currentMaterial();
							if (lastMultiMaterial && lastMultiMaterial.groupEnd === -1) {
								lastMultiMaterial.groupEnd =
								this.geometry.vertices.length / 3;
								lastMultiMaterial.groupCount =
								lastMultiMaterial.groupEnd - lastMultiMaterial.groupStart;
								lastMultiMaterial.inherited = false;
							}

							// Ignore objects tail materials if no face declarations followed them before a new o/g started.
							if (end && this.materials.length > 1) {
								for (var mi = this.materials.length - 1; mi >= 0; mi--) {
								if (this.materials[mi].groupCount <= 0) {
									this.materials.splice(mi, 1);
								}
								}
							}

							// Guarantee at least one empty material, this makes the creation later more straight forward.
							if (end && this.materials.length === 0) {
								this.materials.push({
								name: "",
								smooth: this.smooth
								});
							}

							return lastMultiMaterial;
							}
						};

						// Inherit previous objects material.
						// Spec tells us that a declared material must be set to all objects until a new material is declared.
						// If a usemtl declaration is encountered while this new object is being parsed, it will
						// overwrite the inherited material. Exception being that there was already face declarations
						// to the inherited material, then it will be preserved for proper MultiMaterial continuation.

						if (
							previousMaterial &&
							previousMaterial.name &&
							typeof previousMaterial.clone === "function"
						) {
							var declared = previousMaterial.clone(0);
							declared.inherited = true;
							this.object.materials.push(declared);
						}

						this.objects.push(this.object);
						},

						finalize: function() {
						if (this.object && typeof this.object._finalize === "function") {
							this.object._finalize(true);
						}
						},

						parseVertexIndex: function(value, len) {
						var index = parseInt(value, 10);
						return (index >= 0 ? index - 1 : index + len / 3) * 3;
						},

						parseNormalIndex: function(value, len) {
						var index = parseInt(value, 10);
						return (index >= 0 ? index - 1 : index + len / 3) * 3;
						},

						parseUVIndex: function(value, len) {
						var index = parseInt(value, 10);
						return (index >= 0 ? index - 1 : index + len / 2) * 2;
						},

						addVertex: function(a, b, c) {
						var src = this.vertices;
						var dst = this.object.geometry.vertices;

						dst.push(src[a + 0], src[a + 1], src[a + 2]);
						dst.push(src[b + 0], src[b + 1], src[b + 2]);
						dst.push(src[c + 0], src[c + 1], src[c + 2]);
						},

						addVertexLine: function(a) {
						var src = this.vertices;
						var dst = this.object.geometry.vertices;

						dst.push(src[a + 0], src[a + 1], src[a + 2]);
						},

						addNormal: function(a, b, c) {
						var src = this.normals;
						var dst = this.object.geometry.normals;

						dst.push(src[a + 0], src[a + 1], src[a + 2]);
						dst.push(src[b + 0], src[b + 1], src[b + 2]);
						dst.push(src[c + 0], src[c + 1], src[c + 2]);
						},

						addColor: function(a, b, c) {
						var src = this.colors;
						var dst = this.object.geometry.colors;

						dst.push(src[a + 0], src[a + 1], src[a + 2]);
						dst.push(src[b + 0], src[b + 1], src[b + 2]);
						dst.push(src[c + 0], src[c + 1], src[c + 2]);
						},

						addUV: function(a, b, c) {
						var src = this.uvs;
						var dst = this.object.geometry.uvs;

						dst.push(src[a + 0], src[a + 1]);
						dst.push(src[b + 0], src[b + 1]);
						dst.push(src[c + 0], src[c + 1]);
						},

						addUVLine: function(a) {
						var src = this.uvs;
						var dst = this.object.geometry.uvs;

						dst.push(src[a + 0], src[a + 1]);
						},

						addFace: function(a, b, c, ua, ub, uc, na, nb, nc) {
						var vLen = this.vertices.length;

						var ia = this.parseVertexIndex(a, vLen);
						var ib = this.parseVertexIndex(b, vLen);
						var ic = this.parseVertexIndex(c, vLen);

						this.addVertex(ia, ib, ic);

						if (ua !== undefined) {
							var uvLen = this.uvs.length;

							ia = this.parseUVIndex(ua, uvLen);
							ib = this.parseUVIndex(ub, uvLen);
							ic = this.parseUVIndex(uc, uvLen);

							this.addUV(ia, ib, ic);
						}

						if (na !== undefined) {
							// Normals are many times the same. If so, skip function call and parseInt.
							var nLen = this.normals.length;
							ia = this.parseNormalIndex(na, nLen);

							ib = na === nb ? ia : this.parseNormalIndex(nb, nLen);
							ic = na === nc ? ia : this.parseNormalIndex(nc, nLen);

							this.addNormal(ia, ib, ic);
						}

						if (this.colors.length > 0) {
							this.addColor(ia, ib, ic);
						}
						},

						addLineGeometry: function(vertices, uvs) {
						this.object.geometry.type = "Line";

						var vLen = this.vertices.length;
						var uvLen = this.uvs.length;

						for (var vi = 0, l = vertices.length; vi < l; vi++) {
							this.addVertexLine(this.parseVertexIndex(vertices[vi], vLen));
						}

						for (var uvi = 0, l = uvs.length; uvi < l; uvi++) {
							this.addUVLine(this.parseUVIndex(uvs[uvi], uvLen));
						}
						}
					};

					state.startObject("", false);

					return state;
					}

					//

					function OBJLoader(manager) {
					this.manager =
						manager !== undefined ? manager : THREE.DefaultLoadingManager;

					this.materials = null;
					}

					OBJLoader.prototype = {
					constructor: OBJLoader,

					load: function(url, onLoad, onProgress, onError) {
						var scope = this;

						var loader = new THREE.FileLoader(scope.manager);
						loader.setPath(this.path);
						loader.load(
						url,
						function(text) {
							onLoad(scope.parse(text));
						},
						onProgress,
						onError
						);
					},

					setPath: function(value) {
						this.path = value;
					},

					setMaterials: function(materials) {
						this.materials = materials;

						return this;
					},

					parse: function(text) {
						console.time("OBJLoader");

						var state = new ParserState();

						if (text.indexOf("\r\n") !== -1) {
						// This is faster than String.split with regex that splits on both
						text = text.replace(/\r\n/g, "\n");
						}

						if (text.indexOf("\\\n") !== -1) {
						// join lines separated by a line continuation character (\)
						text = text.replace(/\\\n/g, "");
						}

						var lines = text.split("\n");
						var line = "",
						lineFirstChar = "";
						var lineLength = 0;
						var result = [];

						// Faster to just trim left side of the line. Use if available.
						var trimLeft = typeof "".trimLeft === "function";

						for (var i = 0, l = lines.length; i < l; i++) {
						line = lines[i];

						line = trimLeft ? line.trimLeft() : line.trim();

						lineLength = line.length;

						if (lineLength === 0) continue;

						lineFirstChar = line.charAt(0);

						// @todo invoke passed in handler if any
						if (lineFirstChar === "#") continue;

						if (lineFirstChar === "v") {
							var data = line.split(/\s+/);

							switch (data[0]) {
							case "v":
								state.vertices.push(
								parseFloat(data[1]),
								parseFloat(data[2]),
								parseFloat(data[3])
								);
								if (data.length === 8) {
								state.colors.push(
									parseFloat(data[4]),
									parseFloat(data[5]),
									parseFloat(data[6])
								);
								}
								break;
							case "vn":
								state.normals.push(
								parseFloat(data[1]),
								parseFloat(data[2]),
								parseFloat(data[3])
								);
								break;
							case "vt":
								state.uvs.push(parseFloat(data[1]), parseFloat(data[2]));
								break;
							}
						} else if (lineFirstChar === "f") {
							var lineData = line.substr(1).trim();
							var vertexData = lineData.split(/\s+/);
							var faceVertices = [];

							// Parse the face vertex data into an easy to work with format

							for (var j = 0, jl = vertexData.length; j < jl; j++) {
							var vertex = vertexData[j];

							if (vertex.length > 0) {
								var vertexParts = vertex.split("/");
								faceVertices.push(vertexParts);
							}
							}

							// Draw an edge between the first vertex and all subsequent vertices to form an n-gon

							var v1 = faceVertices[0];

							for (var j = 1, jl = faceVertices.length - 1; j < jl; j++) {
							var v2 = faceVertices[j];
							var v3 = faceVertices[j + 1];

							state.addFace(
								v1[0],
								v2[0],
								v3[0],
								v1[1],
								v2[1],
								v3[1],
								v1[2],
								v2[2],
								v3[2]
							);
							}
						} else if (lineFirstChar === "l") {
							var lineParts = line
							.substring(1)
							.trim()
							.split(" ");
							var lineVertices = [],
							lineUVs = [];

							if (line.indexOf("/") === -1) {
							lineVertices = lineParts;
							} else {
							for (var li = 0, llen = lineParts.length; li < llen; li++) {
								var parts = lineParts[li].split("/");

								if (parts[0] !== "") lineVertices.push(parts[0]);
								if (parts[1] !== "") lineUVs.push(parts[1]);
							}
							}
							state.addLineGeometry(lineVertices, lineUVs);
						} else if ((result = object_pattern.exec(line)) !== null) {
							// o object_name
							// or
							// g group_name

							// WORKAROUND: https://bugs.chromium.org/p/v8/issues/detail?id=2869
							// var name = result[ 0 ].substr( 1 ).trim();
							var name = (" " + result[0].substr(1).trim()).substr(1);

							state.startObject(name);
						} else if (material_use_pattern.test(line)) {
							// material

							state.object.startMaterial(
							line.substring(7).trim(),
							state.materialLibraries
							);
						} else if (material_library_pattern.test(line)) {
							// mtl file

							state.materialLibraries.push(line.substring(7).trim());
						} else if (lineFirstChar === "s") {
							result = line.split(" ");

							// smooth shading

							// @todo Handle files that have varying smooth values for a set of faces inside one geometry,
							// but does not define a usemtl for each face set.
							// This should be detected and a dummy material created (later MultiMaterial and geometry groups).
							// This requires some care to not create extra material on each smooth value for "normal" obj files.
							// where explicit usemtl defines geometry groups.
							// Example asset: examples/models/obj/cerberus/Cerberus.obj

							/*
																					* http://paulbourke.net/dataformats/obj/
																					* or
																					* http://www.cs.utah.edu/~boulos/cs3505/obj_spec.pdf
																					*
																					* From chapter "Grouping" Syntax explanation "s group_number":
																					* "group_number is the smoothing group number. To turn off smoothing groups, use a value of 0 or off.
																					* Polygonal elements use group numbers to put elements in different smoothing groups. For free-form
																					* surfaces, smoothing groups are either turned on or off; there is no difference between values greater
																					* than 0."
																					*/
							if (result.length > 1) {
							var value = result[1].trim().toLowerCase();
							state.object.smooth = value !== "0" && value !== "off";
							} else {
							// ZBrush can produce "s" lines #11707
							state.object.smooth = true;
							}
							var material = state.object.currentMaterial();
							if (material) material.smooth = state.object.smooth;
						} else {
							// Handle null terminated files without exception
							if (line === "\0") continue;

							throw new Error(
							'THREE.OBJLoader: Unexpected line: "' + line + '"'
							);
						}
						}

						state.finalize();

						var container = new THREE.Group();
						container.materialLibraries = [].concat(state.materialLibraries);

						for (var i = 0, l = state.objects.length; i < l; i++) {
						var object = state.objects[i];
						var geometry = object.geometry;
						var materials = object.materials;
						var isLine = geometry.type === "Line";

						// Skip o/g line declarations that did not follow with any faces
						if (geometry.vertices.length === 0) continue;

						var buffergeometry = new THREE.BufferGeometry();

						buffergeometry.addAttribute(
							"position",
							new THREE.Float32BufferAttribute(geometry.vertices, 3)
						);

						if (geometry.normals.length > 0) {
							buffergeometry.addAttribute(
							"normal",
							new THREE.Float32BufferAttribute(geometry.normals, 3)
							);
						} else {
							buffergeometry.computeVertexNormals();
						}

						if (geometry.colors.length > 0) {
							buffergeometry.addAttribute(
							"color",
							new THREE.Float32BufferAttribute(geometry.colors, 3)
							);
						}

						if (geometry.uvs.length > 0) {
							buffergeometry.addAttribute(
							"uv",
							new THREE.Float32BufferAttribute(geometry.uvs, 2)
							);
						}

						// Create materials

						var createdMaterials = [];

						for (var mi = 0, miLen = materials.length; mi < miLen; mi++) {
							var sourceMaterial = materials[mi];
							var material = undefined;

							if (this.materials !== null) {
							material = this.materials.create(sourceMaterial.name);

							// mtl etc. loaders probably can't create line materials correctly, copy properties to a line material.
							if (
								isLine &&
								material &&
								!(material instanceof THREE.LineBasicMaterial)
							) {
								var materialLine = new THREE.LineBasicMaterial();
								materialLine.copy(material);
								material = materialLine;
							}
							}

							if (!material) {
							material = !isLine
								? new THREE.MeshPhongMaterial()
								: new THREE.LineBasicMaterial();
							material.name = sourceMaterial.name;
							}

							material.flatShading = sourceMaterial.smooth ? false : true;

							createdMaterials.push(material);
						}

						// Create mesh

						var mesh;

						if (createdMaterials.length > 1) {
							for (var mi = 0, miLen = materials.length; mi < miLen; mi++) {
							var sourceMaterial = materials[mi];
							buffergeometry.addGroup(
								sourceMaterial.groupStart,
								sourceMaterial.groupCount,
								mi
							);
							}

							mesh = !isLine
							? new THREE.Mesh(buffergeometry, createdMaterials)
							: new THREE.LineSegments(buffergeometry, createdMaterials);
						} else {
							mesh = !isLine
							? new THREE.Mesh(buffergeometry, createdMaterials[0])
							: new THREE.LineSegments(buffergeometry, createdMaterials[0]);
						}

						mesh.name = object.name;

						container.add(mesh);
						}

						console.timeEnd("OBJLoader");

						return container;
					}
					};

					return OBJLoader;
				})();
				(function() {
					THREE.FBXLoader = function(manager) {
					this.manager =
						manager !== undefined ? manager : THREE.DefaultLoadingManager;
					};

					Object.assign(THREE.FBXLoader.prototype, {
					load: function(url, onLoad, onProgress, onError) {
						var self = this;

						var resourceDirectory = THREE.Loader.prototype.extractUrlBase(url);

						var loader = new THREE.FileLoader(this.manager);
						loader.setResponseType("arraybuffer");
						loader.load(
						url,
						function(buffer) {
							try {
							var scene = self.parse(buffer, resourceDirectory);
							onLoad(scene);
							} catch (error) {
							window.setTimeout(function() {
								if (onError) onError(error);

								self.manager.itemError(url);
							}, 0);
							}
						},
						onProgress,
						onError
						);
					},

					parse: function(FBXBuffer, resourceDirectory) {
						var FBXTree;

						if (isFbxFormatBinary(FBXBuffer)) {
						FBXTree = new BinaryParser().parse(FBXBuffer);
						} else {
						var FBXText = convertArrayBufferToString(FBXBuffer);

						if (!isFbxFormatASCII(FBXText)) {
							throw new Error("THREE.FBXLoader: Unknown format.");
						}

						if (getFbxVersion(FBXText) < 7000) {
							throw new Error(
							"THREE.FBXLoader: FBX version not supported, FileVersion: " +
								getFbxVersion(FBXText)
							);
						}

						FBXTree = new TextParser().parse(FBXText);
						}

						// console.log( FBXTree );

						var connections = parseConnections(FBXTree);
						var images = parseImages(FBXTree);
						var textures = parseTextures(
						FBXTree,
						new THREE.TextureLoader(this.manager).setPath(resourceDirectory),
						images,
						connections
						);
						var materials = parseMaterials(FBXTree, textures, connections);
						var deformers = parseDeformers(FBXTree, connections);
						var geometryMap = parseGeometries(FBXTree, connections, deformers);
						var sceneGraph = parseScene(
						FBXTree,
						connections,
						deformers,
						geometryMap,
						materials
						);

						return sceneGraph;
					}
					});

					// Parses FBXTree.Connections which holds parent-child connections between objects (e.g. material -> texture, model->geometry )
					// and details the connection type
					function parseConnections(FBXTree) {
					var connectionMap = new Map();

					if ("Connections" in FBXTree) {
						var connectionArray = FBXTree.Connections.properties.connections;
						for (
						var connectionArrayIndex = 0,
							connectionArrayLength = connectionArray.length;
						connectionArrayIndex < connectionArrayLength;
						++connectionArrayIndex
						) {
						var connection = connectionArray[connectionArrayIndex];

						if (!connectionMap.has(connection[0])) {
							connectionMap.set(connection[0], {
							parents: [],
							children: []
							});
						}

						var parentRelationship = {
							ID: connection[1],
							relationship: connection[2]
						};
						connectionMap.get(connection[0]).parents.push(parentRelationship);

						if (!connectionMap.has(connection[1])) {
							connectionMap.set(connection[1], {
							parents: [],
							children: []
							});
						}

						var childRelationship = {
							ID: connection[0],
							relationship: connection[2]
						};
						connectionMap.get(connection[1]).children.push(childRelationship);
						}
					}

					return connectionMap;
					}

					// Parses map of images referenced in FBXTree.Objects.subNodes.Video
					// Images can either be referenced externally or embedded in the file
					// These images are connected to textures in FBXTree.Objects.subNodes.Textures
					// via FBXTree.Connections. Note that images can be duplicated here, in which case only one
					// will will have a .Content field
					function parseImages(FBXTree) {
					var imageMap = new Map();

					if ("Video" in FBXTree.Objects.subNodes) {
						var videoNodes = FBXTree.Objects.subNodes.Video;

						for (var nodeID in videoNodes) {
						var videoNode = videoNodes[nodeID];

						// raw image data is in videoNode.properties.Content
						if ("Content" in videoNode.properties) {
							var image = parseImage(videoNodes[nodeID]);
							imageMap.set(parseInt(nodeID), image);
						}
						}
					}

					return imageMap;
					}

					// Parse embedded image data in FBXTree.Video.properties.Content
					function parseImage(videoNode) {
					var content = videoNode.properties.Content;
					var fileName =
						videoNode.properties.RelativeFilename ||
						videoNode.properties.Filename;
					var extension = fileName
						.slice(fileName.lastIndexOf(".") + 1)
						.toLowerCase();

					var type;

					switch (extension) {
						case "bmp":
						type = "image/bmp";
						break;

						case "jpg":
						case "jpeg":
						type = "image/jpeg";
						break;

						case "png":
						type = "image/png";
						break;

						case "tif":
						type = "image/tiff";
						break;

						default:
						console.warn(
							'FBXLoader: Image type "' + extension + '" is not supported.'
						);
						return;
					}

					if (typeof content === "string") {
						return "data:" + type + ";base64," + content;
					} else {
						var array = new Uint8Array(content);
						return window.URL.createObjectURL(
						new Blob([array], { type: type })
						);
					}
					}

					// Parse nodes in FBXTree.Objects.subNodes.Texture
					// These contain details such as UV scaling, cropping, rotation etc and are connected
					// to images in FBXTree.Objects.subNodes.Video
					function parseTextures(FBXTree, loader, imageMap, connections) {
					var textureMap = new Map();

					if ("Texture" in FBXTree.Objects.subNodes) {
						var textureNodes = FBXTree.Objects.subNodes.Texture;
						for (var nodeID in textureNodes) {
						var texture = parseTexture(
							textureNodes[nodeID],
							loader,
							imageMap,
							connections
						);
						textureMap.set(parseInt(nodeID), texture);
						}
					}

					return textureMap;
					}

					// Parse individual node in FBXTree.Objects.subNodes.Texture
					function parseTexture(textureNode, loader, imageMap, connections) {
					var FBX_ID = textureNode.id;

					var name = textureNode.attrName;

					var fileName;

					var filePath = textureNode.properties.FileName;
					var relativeFilePath = textureNode.properties.RelativeFilename;

					var children = connections.get(FBX_ID).children;

					if (
						children !== undefined &&
						children.length > 0 &&
						imageMap.has(children[0].ID)
					) {
						fileName = imageMap.get(children[0].ID);
					} else if (
						relativeFilePath !== undefined &&
						relativeFilePath[0] !== "/" &&
						relativeFilePath.match(/^[a-zA-Z]:/) === null
					) {
						// use textureNode.properties.RelativeFilename
						// if it exists and it doesn't seem an absolute path

						fileName = relativeFilePath;
					} else {
						var split = filePath.split(/[\\\/]/);

						if (split.length > 0) {
						fileName = split[split.length - 1];
						} else {
						fileName = filePath;
						}
					}

					var currentPath = loader.path;

					if (
						fileName.indexOf("blob:") === 0 ||
						fileName.indexOf("data:") === 0
					) {
						loader.setPath(undefined);
					}

					var texture = loader.load(fileName);
					texture.name = name;
					texture.FBX_ID = FBX_ID;

					var wrapModeU = textureNode.properties.WrapModeU;
					var wrapModeV = textureNode.properties.WrapModeV;

					var valueU = wrapModeU !== undefined ? wrapModeU.value : 0;
					var valueV = wrapModeV !== undefined ? wrapModeV.value : 0;

					// http://download.autodesk.com/us/fbx/SDKdocs/FBX_SDK_Help/files/fbxsdkref/class_k_fbx_texture.html#889640e63e2e681259ea81061b85143a
					// 0: repeat(default), 1: clamp

					texture.wrapS =
						valueU === 0 ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
					texture.wrapT =
						valueV === 0 ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;

					if ("Scaling" in textureNode.properties) {
						var values = textureNode.properties.Scaling.value;

						texture.repeat.x = values[0];
						texture.repeat.y = values[1];
					}

					loader.setPath(currentPath);

					return texture;
					}

					// Parse nodes in FBXTree.Objects.subNodes.Material
					function parseMaterials(FBXTree, textureMap, connections) {
					var materialMap = new Map();

					if ("Material" in FBXTree.Objects.subNodes) {
						var materialNodes = FBXTree.Objects.subNodes.Material;
						for (var nodeID in materialNodes) {
						var material = parseMaterial(
							materialNodes[nodeID],
							textureMap,
							connections
						);
						if (material !== null)
							materialMap.set(parseInt(nodeID), material);
						}
					}

					return materialMap;
					}

					// Parse single node in FBXTree.Objects.subNodes.Material
					// Materials are connected to texture maps in FBXTree.Objects.subNodes.Textures
					// FBX format currently only supports Lambert and Phong shading models
					function parseMaterial(materialNode, textureMap, connections) {
					var FBX_ID = materialNode.id;
					var name = materialNode.attrName;
					var type = materialNode.properties.ShadingModel;

					//Case where FBX wraps shading model in property object.
					if (typeof type === "object") {
						type = type.value;
					}

					// Ignore unused materials which don't have any connections.
					if (!connections.has(FBX_ID)) return null;

					var children = connections.get(FBX_ID).children;

					var parameters = parseParameters(
						materialNode.properties,
						textureMap,
						children
					);

					var material;

					switch (type.toLowerCase()) {
						case "phong":
						material = new THREE.MeshPhongMaterial();
						break;
						case "lambert":
						material = new THREE.MeshLambertMaterial();
						break;
						default:
						console.warn(
							'THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',
							type
						);
						material = new THREE.MeshPhongMaterial({ color: 0x3300ff });
						break;
					}

					material.setValues(parameters);
					material.name = name;

					return material;
					}

					// Parse FBX material and return parameters suitable for a three.js material
					// Also parse the texture map and return any textures associated with the material
					function parseParameters(
					properties,
					textureMap,
					childrenRelationships
					) {
					var parameters = {};

					if (properties.BumpFactor) {
						parameters.bumpScale = properties.BumpFactor.value;
					}
					if (properties.Diffuse) {
						parameters.color = parseColor(properties.Diffuse);
					}
					if (properties.DisplacementFactor) {
						parameters.displacementScale = properties.DisplacementFactor.value;
					}
					if (properties.ReflectionFactor) {
						parameters.reflectivity = properties.ReflectionFactor.value;
					}
					if (properties.Specular) {
						parameters.specular = parseColor(properties.Specular);
					}
					if (properties.Shininess) {
						parameters.shininess = properties.Shininess.value;
					}
					if (properties.Emissive) {
						parameters.emissive = parseColor(properties.Emissive);
					}
					if (properties.EmissiveFactor) {
						parameters.emissiveIntensity = parseFloat(
						properties.EmissiveFactor.value
						);
					}
					if (properties.Opacity) {
						parameters.opacity = parseFloat(properties.Opacity.value);
					}
					if (parameters.opacity < 1.0) {
						parameters.transparent = true;
					}

					for (
						var childrenRelationshipsIndex = 0,
						childrenRelationshipsLength = childrenRelationships.length;
						childrenRelationshipsIndex < childrenRelationshipsLength;
						++childrenRelationshipsIndex
					) {
						var relationship =
						childrenRelationships[childrenRelationshipsIndex];

						var type = relationship.relationship;

						switch (type) {
						case "Bump":
							parameters.bumpMap = textureMap.get(relationship.ID);
							break;

						case "DiffuseColor":
							parameters.map = textureMap.get(relationship.ID);
							break;

						case "DisplacementColor":
							parameters.displacementMap = textureMap.get(relationship.ID);
							break;

						case "EmissiveColor":
							parameters.emissiveMap = textureMap.get(relationship.ID);
							break;

						case "NormalMap":
							parameters.normalMap = textureMap.get(relationship.ID);
							break;

						case "ReflectionColor":
							parameters.envMap = textureMap.get(relationship.ID);
							parameters.envMap.mapping =
							THREE.EquirectangularReflectionMapping;
							break;

						case "SpecularColor":
							parameters.specularMap = textureMap.get(relationship.ID);
							break;

						case "TransparentColor":
							parameters.alphaMap = textureMap.get(relationship.ID);
							parameters.transparent = true;
							break;

						case "AmbientColor":
						case "ShininessExponent": // AKA glossiness map
						case "SpecularFactor": // AKA specularLevel
						case "VectorDisplacementColor": // NOTE: Seems to be a copy of DisplacementColor
						default:
							console.warn(
							"THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",
							type
							);
							break;
						}
					}

					return parameters;
					}

					// Parse nodes in FBXTree.Objects.subNodes.Deformer
					// Deformer node can contain skinning or Vertex Cache animation data, however only skinning is supported here
					// Generates map of Skeleton-like objects for use later when generating and binding skeletons.
					function parseDeformers(FBXTree, connections) {
					var deformers = {};

					if ("Deformer" in FBXTree.Objects.subNodes) {
						var DeformerNodes = FBXTree.Objects.subNodes.Deformer;

						for (var nodeID in DeformerNodes) {
						var deformerNode = DeformerNodes[nodeID];

						if (deformerNode.attrType === "Skin") {
							var conns = connections.get(parseInt(nodeID));
							var skeleton = parseSkeleton(conns, DeformerNodes);
							skeleton.FBX_ID = parseInt(nodeID);

							deformers[nodeID] = skeleton;
						}
						}
					}

					return deformers;
					}

					// Parse single nodes in FBXTree.Objects.subNodes.Deformer
					// Generates a "Skeleton Representation" of FBX nodes based on an FBX Skin Deformer's connections
					// and an object containing SubDeformer nodes.
					function parseSkeleton(connections, DeformerNodes) {
					var subDeformers = {};
					var children = connections.children;

					for (var i = 0, l = children.length; i < l; ++i) {
						var child = children[i];

						var subDeformerNode = DeformerNodes[child.ID];

						var subDeformer = {
						FBX_ID: child.ID,
						index: i,
						indices: [],
						weights: [],
						transform: new THREE.Matrix4().fromArray(
							subDeformerNode.subNodes.Transform.properties.a
						),
						transformLink: new THREE.Matrix4().fromArray(
							subDeformerNode.subNodes.TransformLink.properties.a
						),
						linkMode: subDeformerNode.properties.Mode
						};

						if ("Indexes" in subDeformerNode.subNodes) {
						subDeformer.indices =
							subDeformerNode.subNodes.Indexes.properties.a;
						subDeformer.weights =
							subDeformerNode.subNodes.Weights.properties.a;
						}

						subDeformers[child.ID] = subDeformer;
					}

					return {
						map: subDeformers,
						bones: []
					};
					}

					// Parse nodes in FBXTree.Objects.subNodes.Geometry
					function parseGeometries(FBXTree, connections, deformers) {
					var geometryMap = new Map();

					if ("Geometry" in FBXTree.Objects.subNodes) {
						var geometryNodes = FBXTree.Objects.subNodes.Geometry;

						for (var nodeID in geometryNodes) {
						var relationships = connections.get(parseInt(nodeID));
						var geo = parseGeometry(
							geometryNodes[nodeID],
							relationships,
							deformers
						);
						geometryMap.set(parseInt(nodeID), geo);
						}
					}

					return geometryMap;
					}

					// Parse single node in FBXTree.Objects.subNodes.Geometry
					function parseGeometry(geometryNode, relationships, deformers) {
					switch (geometryNode.attrType) {
						case "Mesh":
						return parseMeshGeometry(geometryNode, relationships, deformers);
						break;

						case "NurbsCurve":
						return parseNurbsGeometry(geometryNode);
						break;
					}
					}

					// Parse single node mesh geometry in FBXTree.Objects.subNodes.Geometry
					function parseMeshGeometry(geometryNode, relationships, deformers) {
					for (var i = 0; i < relationships.children.length; ++i) {
						var deformer = deformers[relationships.children[i].ID];
						if (deformer !== undefined) break;
					}

					return genGeometry(geometryNode, deformer);
					}

					// Generate a THREE.BufferGeometry from a node in FBXTree.Objects.subNodes.Geometry
					function genGeometry(geometryNode, deformer) {
					var subNodes = geometryNode.subNodes;

					var vertexPositions = subNodes.Vertices.properties.a;
					var vertexIndices = subNodes.PolygonVertexIndex.properties.a;

					// create arrays to hold the final data used to build the buffergeometry
					var vertexBuffer = [];
					var normalBuffer = [];
					var colorsBuffer = [];
					var uvsBuffer = [];
					var materialIndexBuffer = [];
					var vertexWeightsBuffer = [];
					var weightsIndicesBuffer = [];

					if (subNodes.LayerElementColor) {
						var colorInfo = getColors(subNodes.LayerElementColor[0]);
					}

					if (subNodes.LayerElementMaterial) {
						var materialInfo = getMaterials(subNodes.LayerElementMaterial[0]);
					}

					if (subNodes.LayerElementNormal) {
						var normalInfo = getNormals(subNodes.LayerElementNormal[0]);
					}

					if (subNodes.LayerElementUV) {
						var uvInfo = [];
						var i = 0;
						while (subNodes.LayerElementUV[i]) {
						uvInfo.push(getUVs(subNodes.LayerElementUV[i]));
						i++;
						}
					}

					var weightTable = {};

					if (deformer) {
						var subDeformers = deformer.map;

						for (var key in subDeformers) {
						var subDeformer = subDeformers[key];
						var indices = subDeformer.indices;

						for (var j = 0; j < indices.length; j++) {
							var index = indices[j];
							var weight = subDeformer.weights[j];

							if (weightTable[index] === undefined) weightTable[index] = [];

							weightTable[index].push({
							id: subDeformer.index,
							weight: weight
							});
						}
						}
					}

					var polygonIndex = 0;
					var faceLength = 0;
					var displayedWeightsWarning = false;

					// these will hold data for a single face
					var vertexPositionIndexes = [];
					var faceNormals = [];
					var faceColors = [];
					var faceUVs = [];
					var faceWeights = [];
					var faceWeightIndices = [];

					for (
						var polygonVertexIndex = 0;
						polygonVertexIndex < vertexIndices.length;
						polygonVertexIndex++
					) {
						var vertexIndex = vertexIndices[polygonVertexIndex];

						var endOfFace = false;

						// Face index and vertex index arrays are combined in a single array
						// A cube with quad faces looks like this:
						// PolygonVertexIndex: *24 {
						//  a: 0, 1, 3, -3, 2, 3, 5, -5, 4, 5, 7, -7, 6, 7, 1, -1, 1, 7, 5, -4, 6, 0, 2, -5
						//  }
						// Negative numbers mark the end of a face - first face here is 0, 1, 3, -3
						// to find index of last vertex multiply by -1 and subtract 1: -3 * - 1 - 1 = 2
						if (vertexIndex < 0) {
						vertexIndex = vertexIndex ^ -1; // equivalent to ( x * -1 ) - 1
						vertexIndices[polygonVertexIndex] = vertexIndex;
						endOfFace = true;
						}

						var weightIndices = [];
						var weights = [];

						vertexPositionIndexes.push(
						vertexIndex * 3,
						vertexIndex * 3 + 1,
						vertexIndex * 3 + 2
						);

						if (colorInfo) {
						var data = getData(
							polygonVertexIndex,
							polygonIndex,
							vertexIndex,
							colorInfo
						);

						faceColors.push(data[0], data[1], data[2]);
						}

						if (deformer) {
						if (weightTable[vertexIndex] !== undefined) {
							var array = weightTable[vertexIndex];

							for (var j = 0, jl = array.length; j < jl; j++) {
							weights.push(array[j].weight);
							weightIndices.push(array[j].id);
							}
						}

						if (weights.length > 4) {
							if (!displayedWeightsWarning) {
							console.warn(
								"THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."
							);
							displayedWeightsWarning = true;
							}

							var WIndex = [0, 0, 0, 0];
							var Weight = [0, 0, 0, 0];

							weights.forEach(function(weight, weightIndex) {
							var currentWeight = weight;
							var currentIndex = weightIndices[weightIndex];

							Weight.forEach(function(
								comparedWeight,
								comparedWeightIndex,
								comparedWeightArray
							) {
								if (currentWeight > comparedWeight) {
								comparedWeightArray[comparedWeightIndex] = currentWeight;
								currentWeight = comparedWeight;

								var tmp = WIndex[comparedWeightIndex];
								WIndex[comparedWeightIndex] = currentIndex;
								currentIndex = tmp;
								}
							});
							});

							weightIndices = WIndex;
							weights = Weight;
						}

						// if the weight array is shorter than 4 pad with 0s
						for (var i = weights.length; i < 4; ++i) {
							weights[i] = 0;
							weightIndices[i] = 0;
						}

						for (var i = 0; i < 4; ++i) {
							faceWeights.push(weights[i]);
							faceWeightIndices.push(weightIndices[i]);
						}
						}

						if (normalInfo) {
						var data = getData(
							polygonVertexIndex,
							polygonIndex,
							vertexIndex,
							normalInfo
						);

						faceNormals.push(data[0], data[1], data[2]);
						}

						if (uvInfo) {
						for (var i = 0; i < uvInfo.length; i++) {
							var data = getData(
							polygonVertexIndex,
							polygonIndex,
							vertexIndex,
							uvInfo[i]
							);

							if (faceUVs[i] === undefined) {
							faceUVs[i] = [];
							}

							faceUVs[i].push(data[0], data[1]);
						}
						}

						faceLength++;

						// we have reached the end of a face - it may have 4 sides though
						// in which case the data is split into to represent 3 sides faces
						if (endOfFace) {
						for (var i = 2; i < faceLength; i++) {
							vertexBuffer.push(vertexPositions[vertexPositionIndexes[0]]);
							vertexBuffer.push(vertexPositions[vertexPositionIndexes[1]]);
							vertexBuffer.push(vertexPositions[vertexPositionIndexes[2]]);

							vertexBuffer.push(
							vertexPositions[vertexPositionIndexes[(i - 1) * 3]]
							);
							vertexBuffer.push(
							vertexPositions[vertexPositionIndexes[(i - 1) * 3 + 1]]
							);
							vertexBuffer.push(
							vertexPositions[vertexPositionIndexes[(i - 1) * 3 + 2]]
							);

							vertexBuffer.push(
							vertexPositions[vertexPositionIndexes[i * 3]]
							);
							vertexBuffer.push(
							vertexPositions[vertexPositionIndexes[i * 3 + 1]]
							);
							vertexBuffer.push(
							vertexPositions[vertexPositionIndexes[i * 3 + 2]]
							);
						}

						if (deformer) {
							for (var i = 2; i < faceLength; i++) {
							vertexWeightsBuffer.push(faceWeights[0]);
							vertexWeightsBuffer.push(faceWeights[1]);
							vertexWeightsBuffer.push(faceWeights[2]);
							vertexWeightsBuffer.push(faceWeights[3]);

							vertexWeightsBuffer.push(faceWeights[(i - 1) * 4]);
							vertexWeightsBuffer.push(faceWeights[(i - 1) * 4 + 1]);
							vertexWeightsBuffer.push(faceWeights[(i - 1) * 4 + 2]);
							vertexWeightsBuffer.push(faceWeights[(i - 1) * 4 + 3]);

							vertexWeightsBuffer.push(faceWeights[i * 4]);
							vertexWeightsBuffer.push(faceWeights[i * 4 + 1]);
							vertexWeightsBuffer.push(faceWeights[i * 4 + 2]);
							vertexWeightsBuffer.push(faceWeights[i * 4 + 3]);

							weightsIndicesBuffer.push(faceWeightIndices[0]);
							weightsIndicesBuffer.push(faceWeightIndices[1]);
							weightsIndicesBuffer.push(faceWeightIndices[2]);
							weightsIndicesBuffer.push(faceWeightIndices[3]);

							weightsIndicesBuffer.push(faceWeightIndices[(i - 1) * 4]);
							weightsIndicesBuffer.push(faceWeightIndices[(i - 1) * 4 + 1]);
							weightsIndicesBuffer.push(faceWeightIndices[(i - 1) * 4 + 2]);
							weightsIndicesBuffer.push(faceWeightIndices[(i - 1) * 4 + 3]);

							weightsIndicesBuffer.push(faceWeightIndices[i * 4]);
							weightsIndicesBuffer.push(faceWeightIndices[i * 4 + 1]);
							weightsIndicesBuffer.push(faceWeightIndices[i * 4 + 2]);
							weightsIndicesBuffer.push(faceWeightIndices[i * 4 + 3]);
							}
						}

						if (normalInfo) {
							for (var i = 2; i < faceLength; i++) {
							normalBuffer.push(faceNormals[0]);
							normalBuffer.push(faceNormals[1]);
							normalBuffer.push(faceNormals[2]);

							normalBuffer.push(faceNormals[(i - 1) * 3]);
							normalBuffer.push(faceNormals[(i - 1) * 3 + 1]);
							normalBuffer.push(faceNormals[(i - 1) * 3 + 2]);

							normalBuffer.push(faceNormals[i * 3]);
							normalBuffer.push(faceNormals[i * 3 + 1]);
							normalBuffer.push(faceNormals[i * 3 + 2]);
							}
						}

						if (uvInfo) {
							for (var j = 0; j < uvInfo.length; j++) {
							if (uvsBuffer[j] === undefined) uvsBuffer[j] = [];

							for (var i = 2; i < faceLength; i++) {
								uvsBuffer[j].push(faceUVs[j][0]);
								uvsBuffer[j].push(faceUVs[j][1]);

								uvsBuffer[j].push(faceUVs[j][(i - 1) * 2]);
								uvsBuffer[j].push(faceUVs[j][(i - 1) * 2 + 1]);

								uvsBuffer[j].push(faceUVs[j][i * 2]);
								uvsBuffer[j].push(faceUVs[j][i * 2 + 1]);
							}
							}
						}

						if (colorInfo) {
							for (var i = 2; i < faceLength; i++) {
							colorsBuffer.push(faceColors[0]);
							colorsBuffer.push(faceColors[1]);
							colorsBuffer.push(faceColors[2]);

							colorsBuffer.push(faceColors[(i - 1) * 3]);
							colorsBuffer.push(faceColors[(i - 1) * 3 + 1]);
							colorsBuffer.push(faceColors[(i - 1) * 3 + 2]);

							colorsBuffer.push(faceColors[i * 3]);
							colorsBuffer.push(faceColors[i * 3 + 1]);
							colorsBuffer.push(faceColors[i * 3 + 2]);
							}
						}

						if (materialInfo && materialInfo.mappingType !== "AllSame") {
							var materialIndex = getData(
							polygonVertexIndex,
							polygonIndex,
							vertexIndex,
							materialInfo
							)[0];

							for (var i = 2; i < faceLength; i++) {
							materialIndexBuffer.push(materialIndex);
							materialIndexBuffer.push(materialIndex);
							materialIndexBuffer.push(materialIndex);
							}
						}

						polygonIndex++;

						endOfFace = false;
						faceLength = 0;

						// reset arrays for the next face
						vertexPositionIndexes = [];
						faceNormals = [];
						faceColors = [];
						faceUVs = [];
						faceWeights = [];
						faceWeightIndices = [];
						}
					}

					var geo = new THREE.BufferGeometry();
					geo.name = geometryNode.name;

					geo.addAttribute(
						"position",
						new THREE.Float32BufferAttribute(vertexBuffer, 3)
					);

					if (colorsBuffer.length > 0) {
						geo.addAttribute(
						"color",
						new THREE.Float32BufferAttribute(colorsBuffer, 3)
						);
					}

					if (deformer) {
						geo.addAttribute(
						"skinIndex",
						new THREE.Float32BufferAttribute(weightsIndicesBuffer, 4)
						);

						geo.addAttribute(
						"skinWeight",
						new THREE.Float32BufferAttribute(vertexWeightsBuffer, 4)
						);

						// used later to bind the skeleton to the model
						geo.FBX_Deformer = deformer;
					}

					if (normalBuffer.length > 0) {
						geo.addAttribute(
						"normal",
						new THREE.Float32BufferAttribute(normalBuffer, 3)
						);
					}
					if (uvsBuffer.length > 0) {
						for (var i = 0; i < uvsBuffer.length; i++) {
						var name = "uv" + (i + 1).toString();
						if (i == 0) {
							name = "uv";
						}

						geo.addAttribute(
							name,
							new THREE.Float32BufferAttribute(uvsBuffer[i], 2)
						);
						}
					}

					if (materialInfo && materialInfo.mappingType !== "AllSame") {
						// Convert the material indices of each vertex into rendering groups on the geometry.
						var prevMaterialIndex = materialIndexBuffer[0];
						var startIndex = 0;

						for (var i = 0; i < materialIndexBuffer.length; ++i) {
						if (materialIndexBuffer[i] !== prevMaterialIndex) {
							geo.addGroup(startIndex, i - startIndex, prevMaterialIndex);

							prevMaterialIndex = materialIndexBuffer[i];
							startIndex = i;
						}
						}

						// the loop above doesn't add the last group, do that here.
						if (geo.groups.length > 0) {
						var lastGroup = geo.groups[geo.groups.length - 1];
						var lastIndex = lastGroup.start + lastGroup.count;

						if (lastIndex !== materialIndexBuffer.length) {
							geo.addGroup(
							lastIndex,
							materialIndexBuffer.length - lastIndex,
							prevMaterialIndex
							);
						}
						}

						// case where there are multiple materials but the whole geometry is only
						// using one of them
						if (geo.groups.length === 0) {
						geo.addGroup(
							0,
							materialIndexBuffer.length,
							materialIndexBuffer[0]
						);
						}
					}

					return geo;
					}

					// Parse normal from FBXTree.Objects.subNodes.Geometry.subNodes.LayerElementNormal if it exists
					function getNormals(NormalNode) {
					var mappingType = NormalNode.properties.MappingInformationType;
					var referenceType = NormalNode.properties.ReferenceInformationType;
					var buffer = NormalNode.subNodes.Normals.properties.a;
					var indexBuffer = [];
					if (referenceType === "IndexToDirect") {
						if ("NormalIndex" in NormalNode.subNodes) {
						indexBuffer = NormalNode.subNodes.NormalIndex.properties.a;
						} else if ("NormalsIndex" in NormalNode.subNodes) {
						indexBuffer = NormalNode.subNodes.NormalsIndex.properties.a;
						}
					}

					return {
						dataSize: 3,
						buffer: buffer,
						indices: indexBuffer,
						mappingType: mappingType,
						referenceType: referenceType
					};
					}

					// Parse UVs from FBXTree.Objects.subNodes.Geometry.subNodes.LayerElementUV if it exists
					function getUVs(UVNode) {
					var mappingType = UVNode.properties.MappingInformationType;
					var referenceType = UVNode.properties.ReferenceInformationType;
					var buffer = UVNode.subNodes.UV.properties.a;
					var indexBuffer = [];
					if (referenceType === "IndexToDirect") {
						indexBuffer = UVNode.subNodes.UVIndex.properties.a;
					}

					return {
						dataSize: 2,
						buffer: buffer,
						indices: indexBuffer,
						mappingType: mappingType,
						referenceType: referenceType
					};
					}

					// Parse Vertex Colors from FBXTree.Objects.subNodes.Geometry.subNodes.LayerElementColor if it exists
					function getColors(ColorNode) {
					var mappingType = ColorNode.properties.MappingInformationType;
					var referenceType = ColorNode.properties.ReferenceInformationType;
					var buffer = ColorNode.subNodes.Colors.properties.a;
					var indexBuffer = [];
					if (referenceType === "IndexToDirect") {
						indexBuffer = ColorNode.subNodes.ColorIndex.properties.a;
					}

					return {
						dataSize: 4,
						buffer: buffer,
						indices: indexBuffer,
						mappingType: mappingType,
						referenceType: referenceType
					};
					}

					// Parse mapping and material data in FBXTree.Objects.subNodes.Geometry.subNodes.LayerElementMaterial if it exists
					function getMaterials(MaterialNode) {
					var mappingType = MaterialNode.properties.MappingInformationType;
					var referenceType = MaterialNode.properties.ReferenceInformationType;

					if (mappingType === "NoMappingInformation") {
						return {
						dataSize: 1,
						buffer: [0],
						indices: [0],
						mappingType: "AllSame",
						referenceType: referenceType
						};
					}

					var materialIndexBuffer =
						MaterialNode.subNodes.Materials.properties.a;

					// Since materials are stored as indices, there's a bit of a mismatch between FBX and what
					// we expect.So we create an intermediate buffer that points to the index in the buffer,
					// for conforming with the other functions we've written for other data.
					var materialIndices = [];

					for (
						var materialIndexBufferIndex = 0,
						materialIndexBufferLength = materialIndexBuffer.length;
						materialIndexBufferIndex < materialIndexBufferLength;
						++materialIndexBufferIndex
					) {
						materialIndices.push(materialIndexBufferIndex);
					}

					return {
						dataSize: 1,
						buffer: materialIndexBuffer,
						indices: materialIndices,
						mappingType: mappingType,
						referenceType: referenceType
					};
					}

					// Functions use the infoObject and given indices to return value array of geometry.
					// infoObject can be materialInfo, normalInfo, UVInfo or colorInfo
					// polygonVertexIndex - Index of vertex in draw order (which index of the index buffer refers to this vertex).
					// polygonIndex - Index of polygon in geometry.
					// vertexIndex - Index of vertex inside vertex buffer (used because some data refers to old index buffer that we don't use anymore).
					var dataArray = [];

					var GetData = {
					ByPolygonVertex: {
						Direct: function(
						polygonVertexIndex,
						polygonIndex,
						vertexIndex,
						infoObject
						) {
						var from = polygonVertexIndex * infoObject.dataSize;
						var to =
							polygonVertexIndex * infoObject.dataSize + infoObject.dataSize;

						// return infoObject.buffer.slice( from, to );
						return slice(dataArray, infoObject.buffer, from, to);
						},

						IndexToDirect: function(
						polygonVertexIndex,
						polygonIndex,
						vertexIndex,
						infoObject
						) {
						var index = infoObject.indices[polygonVertexIndex];
						var from = index * infoObject.dataSize;
						var to = index * infoObject.dataSize + infoObject.dataSize;

						// return infoObject.buffer.slice( from, to );
						return slice(dataArray, infoObject.buffer, from, to);
						}
					},

					ByPolygon: {
						Direct: function(
						polygonVertexIndex,
						polygonIndex,
						vertexIndex,
						infoObject
						) {
						var from = polygonIndex * infoObject.dataSize;
						var to = polygonIndex * infoObject.dataSize + infoObject.dataSize;

						// return infoObject.buffer.slice( from, to );
						return slice(dataArray, infoObject.buffer, from, to);
						},

						IndexToDirect: function(
						polygonVertexIndex,
						polygonIndex,
						vertexIndex,
						infoObject
						) {
						var index = infoObject.indices[polygonIndex];
						var from = index * infoObject.dataSize;
						var to = index * infoObject.dataSize + infoObject.dataSize;

						// return infoObject.buffer.slice( from, to );
						return slice(dataArray, infoObject.buffer, from, to);
						}
					},

					ByVertice: {
						Direct: function(
						polygonVertexIndex,
						polygonIndex,
						vertexIndex,
						infoObject
						) {
						var from = vertexIndex * infoObject.dataSize;
						var to = vertexIndex * infoObject.dataSize + infoObject.dataSize;

						// return infoObject.buffer.slice( from, to );
						return slice(dataArray, infoObject.buffer, from, to);
						}
					},

					AllSame: {
						IndexToDirect: function(
						polygonVertexIndex,
						polygonIndex,
						vertexIndex,
						infoObject
						) {
						var from = infoObject.indices[0] * infoObject.dataSize;
						var to =
							infoObject.indices[0] * infoObject.dataSize +
							infoObject.dataSize;

						// return infoObject.buffer.slice( from, to );
						return slice(dataArray, infoObject.buffer, from, to);
						}
					}
					};

					function getData(
					polygonVertexIndex,
					polygonIndex,
					vertexIndex,
					infoObject
					) {
					return GetData[infoObject.mappingType][infoObject.referenceType](
						polygonVertexIndex,
						polygonIndex,
						vertexIndex,
						infoObject
					);
					}

					// Generate a NurbGeometry from a node in FBXTree.Objects.subNodes.Geometry
					function parseNurbsGeometry(geometryNode) {
					if (THREE.NURBSCurve === undefined) {
						console.error(
						"THREE.FBXLoader: The loader relies on THREE.NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."
						);
						return new THREE.BufferGeometry();
					}

					var order = parseInt(geometryNode.properties.Order);

					if (isNaN(order)) {
						console.error(
						"THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",
						geometryNode.properties.Order,
						geometryNode.id
						);
						return new THREE.BufferGeometry();
					}

					var degree = order - 1;

					var knots = geometryNode.subNodes.KnotVector.properties.a;
					var controlPoints = [];
					var pointsValues = geometryNode.subNodes.Points.properties.a;

					for (var i = 0, l = pointsValues.length; i < l; i += 4) {
						controlPoints.push(new THREE.Vector4().fromArray(pointsValues, i));
					}

					var startKnot, endKnot;

					if (geometryNode.properties.Form === "Closed") {
						controlPoints.push(controlPoints[0]);
					} else if (geometryNode.properties.Form === "Periodic") {
						startKnot = degree;
						endKnot = knots.length - 1 - startKnot;

						for (var i = 0; i < degree; ++i) {
						controlPoints.push(controlPoints[i]);
						}
					}

					var curve = new THREE.NURBSCurve(
						degree,
						knots,
						controlPoints,
						startKnot,
						endKnot
					);
					var vertices = curve.getPoints(controlPoints.length * 7);

					var positions = new Float32Array(vertices.length * 3);

					for (var i = 0, l = vertices.length; i < l; ++i) {
						vertices[i].toArray(positions, i * 3);
					}

					var geometry = new THREE.BufferGeometry();
					geometry.addAttribute(
						"position",
						new THREE.BufferAttribute(positions, 3)
					);

					return geometry;
					}

					// parse nodes in FBXTree.Objects.subNodes.Model and generate a THREE.Group
					function parseScene(
					FBXTree,
					connections,
					deformers,
					geometryMap,
					materialMap
					) {
					var sceneGraph = new THREE.Group();

					var ModelNode = FBXTree.Objects.subNodes.Model;

					var modelArray = [];

					var modelMap = new Map();

					for (var nodeID in ModelNode) {
						var id = parseInt(nodeID);
						var node = ModelNode[nodeID];
						var conns = connections.get(id);
						var model = null;

						for (var i = 0; i < conns.parents.length; ++i) {
						for (var FBX_ID in deformers) {
							var deformer = deformers[FBX_ID];
							var subDeformers = deformer.map;
							var subDeformer = subDeformers[conns.parents[i].ID];

							if (subDeformer) {
							var model2 = model;
							model = new THREE.Bone();
							deformer.bones[subDeformer.index] = model;

							// seems like we need this not to make non-connected bone, maybe?
							// TODO: confirm
							if (model2 !== null) model.add(model2);
							}
						}
						}

						if (!model) {
						switch (node.attrType) {
							// create a THREE.PerspectiveCamera or THREE.OrthographicCamera
							case "Camera":
							var cameraAttribute;

							for (
								var childrenIndex = 0,
								childrenLength = conns.children.length;
								childrenIndex < childrenLength;
								++childrenIndex
							) {
								var childID = conns.children[childrenIndex].ID;

								var attr = FBXTree.Objects.subNodes.NodeAttribute[childID];

								if (attr !== undefined && attr.properties !== undefined) {
								cameraAttribute = attr.properties;
								}
							}

							if (cameraAttribute === undefined) {
								model = new THREE.Object3D();
							} else {
								var type = 0;
								if (
								cameraAttribute.CameraProjectionType !== undefined &&
								cameraAttribute.CameraProjectionType.value === 1
								) {
								type = 1;
								}

								var nearClippingPlane = 1;
								if (cameraAttribute.NearPlane !== undefined) {
								nearClippingPlane =
									cameraAttribute.NearPlane.value / 1000;
								}

								var farClippingPlane = 1000;
								if (cameraAttribute.FarPlane !== undefined) {
								farClippingPlane = cameraAttribute.FarPlane.value / 1000;
								}

								var width = window.innerWidth;
								var height = window.innerHeight;

								if (
								cameraAttribute.AspectWidth !== undefined &&
								cameraAttribute.AspectHeight !== undefined
								) {
								width = cameraAttribute.AspectWidth.value;
								height = cameraAttribute.AspectHeight.value;
								}

								var aspect = width / height;

								var fov = 45;
								if (cameraAttribute.FieldOfView !== undefined) {
								fov = cameraAttribute.FieldOfView.value;
								}

								switch (type) {
								case 0: // Perspective
									model = new THREE.PerspectiveCamera(
									fov,
									aspect,
									nearClippingPlane,
									farClippingPlane
									);
									break;

								case 1: // Orthographic
									model = new THREE.OrthographicCamera(
									-width / 2,
									width / 2,
									height / 2,
									-height / 2,
									nearClippingPlane,
									farClippingPlane
									);
									break;

								default:
									console.warn(
									"THREE.FBXLoader: Unknown camera type " + type + "."
									);
									model = new THREE.Object3D();
									break;
								}
							}

							break;

							// Create a THREE.DirectionalLight, THREE.PointLight or THREE.SpotLight
							case "Light":
							var lightAttribute;

							for (
								var childrenIndex = 0,
								childrenLength = conns.children.length;
								childrenIndex < childrenLength;
								++childrenIndex
							) {
								var childID = conns.children[childrenIndex].ID;

								var attr = FBXTree.Objects.subNodes.NodeAttribute[childID];

								if (attr !== undefined && attr.properties !== undefined) {
								lightAttribute = attr.properties;
								}
							}

							if (lightAttribute === undefined) {
								model = new THREE.Object3D();
							} else {
								var type;

								// LightType can be undefined for Point lights
								if (lightAttribute.LightType === undefined) {
								type = 0;
								} else {
								type = lightAttribute.LightType.value;
								}

								var color = 0xffffff;

								if (lightAttribute.Color !== undefined) {
								color = parseColor(lightAttribute.Color.value);
								}

								var intensity =
								lightAttribute.Intensity === undefined
									? 1
									: lightAttribute.Intensity.value / 100;

								// light disabled
								if (
								lightAttribute.CastLightOnObject !== undefined &&
								lightAttribute.CastLightOnObject.value === 0
								) {
								intensity = 0;
								}

								var distance = 0;
								if (lightAttribute.FarAttenuationEnd !== undefined) {
								if (
									lightAttribute.EnableFarAttenuation !== undefined &&
									lightAttribute.EnableFarAttenuation.value === 0
								) {
									distance = 0;
								} else {
									distance =
									lightAttribute.FarAttenuationEnd.value / 1000;
								}
								}

								// TODO: could this be calculated linearly from FarAttenuationStart to FarAttenuationEnd?
								var decay = 1;

								switch (type) {
								case 0: // Point
									model = new THREE.PointLight(
									color,
									intensity,
									distance,
									decay
									);
									break;

								case 1: // Directional
									model = new THREE.DirectionalLight(color, intensity);
									break;

								case 2: // Spot
									var angle = Math.PI / 3;

									if (lightAttribute.InnerAngle !== undefined) {
									angle = THREE.Math.degToRad(
										lightAttribute.InnerAngle.value
									);
									}

									var penumbra = 0;
									if (lightAttribute.OuterAngle !== undefined) {
									// TODO: this is not correct - FBX calculates outer and inner angle in degrees
									// with OuterAngle > InnerAngle && OuterAngle <= Math.PI
									// while three.js uses a penumbra between (0, 1) to attenuate the inner angle
									penumbra = THREE.Math.degToRad(
										lightAttribute.OuterAngle.value
									);
									penumbra = Math.max(penumbra, 1);
									}

									model = new THREE.SpotLight(
									color,
									intensity,
									distance,
									angle,
									penumbra,
									decay
									);
									break;

								default:
									console.warn(
									"THREE.FBXLoader: Unknown light type " +
										lightAttribute.LightType.value +
										", defaulting to a THREE.PointLight."
									);
									model = new THREE.PointLight(color, intensity);
									break;
								}

								if (
								lightAttribute.CastShadows !== undefined &&
								lightAttribute.CastShadows.value === 1
								) {
								model.castShadow = true;
								}
							}

							break;

							case "Mesh":
							var geometry = null;
							var material = null;
							var materials = [];

							for (
								var childrenIndex = 0,
								childrenLength = conns.children.length;
								childrenIndex < childrenLength;
								++childrenIndex
							) {
								var child = conns.children[childrenIndex];

								if (geometryMap.has(child.ID)) {
								geometry = geometryMap.get(child.ID);
								}

								if (materialMap.has(child.ID)) {
								materials.push(materialMap.get(child.ID));
								}
							}
							if (materials.length > 1) {
								material = materials;
							} else if (materials.length > 0) {
								material = materials[0];
							} else {
								material = new THREE.MeshPhongMaterial({ color: 0xcccccc });
								materials.push(material);
							}
							if ("color" in geometry.attributes) {
								for (
								var materialIndex = 0, numMaterials = materials.length;
								materialIndex < numMaterials;
								++materialIndex
								) {
								materials[materialIndex].vertexColors =
									THREE.VertexColors;
								}
							}
							if (geometry.FBX_Deformer) {
								for (
								var materialsIndex = 0,
									materialsLength = materials.length;
								materialsIndex < materialsLength;
								++materialsIndex
								) {
								materials[materialsIndex].skinning = true;
								}
								model = new THREE.SkinnedMesh(geometry, material);
							} else {
								model = new THREE.Mesh(geometry, material);
							}
							break;

							case "NurbsCurve":
							var geometry = null;

							for (
								var childrenIndex = 0,
								childrenLength = conns.children.length;
								childrenIndex < childrenLength;
								++childrenIndex
							) {
								var child = conns.children[childrenIndex];

								if (geometryMap.has(child.ID)) {
								geometry = geometryMap.get(child.ID);
								}
							}

							// FBX does not list materials for Nurbs lines, so we'll just put our own in here.
							material = new THREE.LineBasicMaterial({
								color: 0x3300ff,
								linewidth: 5
							});
							model = new THREE.Line(geometry, material);
							break;

							default:
							model = new THREE.Group();
							break;
						}
						}

						model.name = THREE.PropertyBinding.sanitizeNodeName(node.attrName);
						model.FBX_ID = id;

						modelArray.push(model);
						modelMap.set(id, model);
					}

					for (
						var modelArrayIndex = 0, modelArrayLength = modelArray.length;
						modelArrayIndex < modelArrayLength;
						++modelArrayIndex
					) {
						var model = modelArray[modelArrayIndex];

						var node = ModelNode[model.FBX_ID];

						if ("Lcl_Translation" in node.properties) {
						model.position.fromArray(node.properties.Lcl_Translation.value);
						}

						if ("Lcl_Rotation" in node.properties) {
						var rotation = node.properties.Lcl_Rotation.value.map(
							THREE.Math.degToRad
						);
						rotation.push("ZYX");
						model.rotation.fromArray(rotation);
						}

						if ("Lcl_Scaling" in node.properties) {
						model.scale.fromArray(node.properties.Lcl_Scaling.value);
						}

						if ("PreRotation" in node.properties) {
						var array = node.properties.PreRotation.value.map(
							THREE.Math.degToRad
						);
						array[3] = "ZYX";

						var preRotations = new THREE.Euler().fromArray(array);

						preRotations = new THREE.Quaternion().setFromEuler(preRotations);
						var currentRotation = new THREE.Quaternion().setFromEuler(
							model.rotation
						);
						preRotations.multiply(currentRotation);
						model.rotation.setFromQuaternion(preRotations, "ZYX");
						}

						// allow transformed pivots - see https://github.com/mrdoob/three.js/issues/11895
						if ("GeometricTranslation" in node.properties) {
						var array = node.properties.GeometricTranslation.value;

						model.traverse(function(child) {
							if (child.geometry) {
							child.geometry.translate(array[0], array[1], array[2]);
							}
						});
						}

						if ("LookAtProperty" in node.properties) {
						var conns = connections.get(model.FBX_ID);

						for (
							var childrenIndex = 0, childrenLength = conns.children.length;
							childrenIndex < childrenLength;
							++childrenIndex
						) {
							var child = conns.children[childrenIndex];

							if (child.relationship === "LookAtProperty") {
							var lookAtTarget = FBXTree.Objects.subNodes.Model[child.ID];

							if ("Lcl_Translation" in lookAtTarget.properties) {
								var pos = lookAtTarget.properties.Lcl_Translation.value;

								// DirectionalLight, SpotLight
								if (model.target !== undefined) {
								model.target.position.set(pos[0], pos[1], pos[2]);
								sceneGraph.add(model.target);
								} else {
								// Cameras and other Object3Ds

								model.lookAt(new THREE.Vector3(pos[0], pos[1], pos[2]));
								}
							}
							}
						}
						}

						var conns = connections.get(model.FBX_ID);
						for (
						var parentIndex = 0;
						parentIndex < conns.parents.length;
						parentIndex++
						) {
						var pIndex = findIndex(modelArray, function(mod) {
							return mod.FBX_ID === conns.parents[parentIndex].ID;
						});
						if (pIndex > -1) {
							modelArray[pIndex].add(model);
							break;
						}
						}
						if (model.parent === null) {
						sceneGraph.add(model);
						}
					}

					// Now with the bones created, we can update the skeletons and bind them to the skinned meshes.
					sceneGraph.updateMatrixWorld(true);

					var worldMatrices = new Map();

					// Put skeleton into bind pose.
					if ("Pose" in FBXTree.Objects.subNodes) {
						var BindPoseNode = FBXTree.Objects.subNodes.Pose;
						for (var nodeID in BindPoseNode) {
						if (BindPoseNode[nodeID].attrType === "BindPose") {
							BindPoseNode = BindPoseNode[nodeID];
							break;
						}
						}

						var PoseNode = BindPoseNode.subNodes.PoseNode;

						for (
						var PoseNodeIndex = 0, PoseNodeLength = PoseNode.length;
						PoseNodeIndex < PoseNodeLength;
						++PoseNodeIndex
						) {
						var node = PoseNode[PoseNodeIndex];

						var rawMatWrd = new THREE.Matrix4().fromArray(
							node.subNodes.Matrix.properties.a
						);

						worldMatrices.set(parseInt(node.properties.Node), rawMatWrd);
						}
					}

					for (var FBX_ID in deformers) {
						var deformer = deformers[FBX_ID];
						var subDeformers = deformer.map;

						for (var key in subDeformers) {
						var subDeformer = subDeformers[key];
						var subDeformerIndex = subDeformer.index;

						var bone = deformer.bones[subDeformerIndex];
						if (!worldMatrices.has(bone.FBX_ID)) {
							break;
						}
						var mat = worldMatrices.get(bone.FBX_ID);
						bone.matrixWorld.copy(mat);
						}

						// Now that skeleton is in bind pose, bind to model.
						deformer.skeleton = new THREE.Skeleton(deformer.bones);

						var conns = connections.get(deformer.FBX_ID);
						var parents = conns.parents;

						for (
						var parentsIndex = 0, parentsLength = parents.length;
						parentsIndex < parentsLength;
						++parentsIndex
						) {
						var parent = parents[parentsIndex];

						if (geometryMap.has(parent.ID)) {
							var geoID = parent.ID;
							var geoConns = connections.get(geoID);

							for (var i = 0; i < geoConns.parents.length; ++i) {
							if (modelMap.has(geoConns.parents[i].ID)) {
								var model = modelMap.get(geoConns.parents[i].ID);

								model.bind(deformer.skeleton, model.matrixWorld);
								break;
							}
							}
						}
						}
					}

					//Skeleton is now bound, return objects to starting world positions.
					sceneGraph.updateMatrixWorld(true);

					// Silly hack with the animation parsing. We're gonna pretend the scene graph has a skeleton
					// to attach animations to, since FBX treats animations as animations for the entire scene,
					// not just for individual objects.
					sceneGraph.skeleton = {
						bones: modelArray
					};

					var animations = parseAnimations(FBXTree, connections, sceneGraph);

					addAnimations(sceneGraph, animations);

					// Parse ambient color - if it's not set to black (default), create an ambient light
					if (
						"GlobalSettings" in FBXTree &&
						"AmbientColor" in FBXTree.GlobalSettings.properties
					) {
						var ambientColor =
						FBXTree.GlobalSettings.properties.AmbientColor.value;
						var r = ambientColor[0];
						var g = ambientColor[1];
						var b = ambientColor[2];

						if (r !== 0 || g !== 0 || b !== 0) {
						var color = new THREE.Color(r, g, b);
						sceneGraph.add(new THREE.AmbientLight(color, 1));
						}
					}

					return sceneGraph;
					}

					// Parses animation information from nodes in
					// FBXTree.Objects.subNodes.AnimationCurve ( connected to AnimationCurveNode )
					// FBXTree.Objects.subNodes.AnimationCurveNode ( connected to AnimationLayer and an animated property in some other node )
					// FBXTree.Objects.subNodes.AnimationLayer ( connected to AnimationStack )
					// FBXTree.Objects.subNodes.AnimationStack
					function parseAnimations(FBXTree, connections, sceneGraph) {
					var rawNodes = FBXTree.Objects.subNodes.AnimationCurveNode;
					var rawCurves = FBXTree.Objects.subNodes.AnimationCurve;
					var rawLayers = FBXTree.Objects.subNodes.AnimationLayer;
					var rawStacks = FBXTree.Objects.subNodes.AnimationStack;

					var fps = 30; // default framerate

					if (
						"GlobalSettings" in FBXTree &&
						"TimeMode" in FBXTree.GlobalSettings.properties
					) {
						/* Autodesk time mode documentation can be found here:
													*	http://docs.autodesk.com/FBX/2014/ENU/FBX-SDK-Documentation/index.html?url=cpp_ref/class_fbx_time.html,topicNumber=cpp_ref_class_fbx_time_html
													*/
						var timeModeEnum = [
						30, // 0: eDefaultMode
						120, // 1: eFrames120
						100, // 2: eFrames100
						60, // 3: eFrames60
						50, // 4: eFrames50
						48, // 5: eFrames48
						30, // 6: eFrames30 (black and white NTSC )
						30, // 7: eFrames30Drop
						29.97, // 8: eNTSCDropFrame
						29.97, // 90: eNTSCFullFrame
						25, // 10: ePal ( PAL/SECAM )
						24, // 11: eFrames24 (Film/Cinema)
						1, // 12: eFrames1000 (use for date time))
						23.976, // 13: eFilmFullFrame
						30, // 14: eCustom: use GlobalSettings.properties.CustomFrameRate.value
						96, // 15: eFrames96
						72, // 16: eFrames72
						59.94 // 17: eFrames59dot94
						];

						var eMode = FBXTree.GlobalSettings.properties.TimeMode.value;

						if (eMode === 14) {
						if ("CustomFrameRate" in FBXTree.GlobalSettings.properties) {
							fps = FBXTree.GlobalSettings.properties.CustomFrameRate.value;

							fps = fps === -1 ? 30 : fps;
						}
						} else if (eMode <= 17) {
						// for future proofing - if more eModes get added, they will default to 30fps

						fps = timeModeEnum[eMode];
						}
					}

					var returnObject = {
						curves: new Map(),
						layers: {},
						stacks: {},
						length: 0,
						fps: fps,
						frames: 0
					};

					var animationCurveNodes = [];
					for (var nodeID in rawNodes) {
						if (nodeID.match(/\d+/)) {
						var animationNode = parseAnimationNode(
							FBXTree,
							rawNodes[nodeID],
							connections,
							sceneGraph
						);
						animationCurveNodes.push(animationNode);
						}
					}

					var tmpMap = new Map();
					for (
						var animationCurveNodeIndex = 0;
						animationCurveNodeIndex < animationCurveNodes.length;
						++animationCurveNodeIndex
					) {
						if (animationCurveNodes[animationCurveNodeIndex] === null) {
						continue;
						}
						tmpMap.set(
						animationCurveNodes[animationCurveNodeIndex].id,
						animationCurveNodes[animationCurveNodeIndex]
						);
					}

					var animationCurves = [];
					for (nodeID in rawCurves) {
						if (nodeID.match(/\d+/)) {
						var animationCurve = parseAnimationCurve(rawCurves[nodeID]);

						// seems like this check would be necessary?
						if (!connections.has(animationCurve.id)) continue;

						animationCurves.push(animationCurve);

						var firstParentConn = connections.get(animationCurve.id)
							.parents[0];
						var firstParentID = firstParentConn.ID;
						var firstParentRelationship = firstParentConn.relationship;
						var axis = "";

						if (firstParentRelationship.match(/X/)) {
							axis = "x";
						} else if (firstParentRelationship.match(/Y/)) {
							axis = "y";
						} else if (firstParentRelationship.match(/Z/)) {
							axis = "z";
						} else {
							continue;
						}

						tmpMap.get(firstParentID).curves[axis] = animationCurve;
						}
					}

					tmpMap.forEach(function(curveNode) {
						var id = curveNode.containerBoneID;
						if (!returnObject.curves.has(id)) {
						returnObject.curves.set(id, { T: null, R: null, S: null });
						}
						returnObject.curves.get(id)[curveNode.attr] = curveNode;

						if (curveNode.attr === "R") {
						var curves = curveNode.curves;

						// Some FBX files have an AnimationCurveNode
						// which isn't any connected to any AnimationCurve.
						// Setting animation parameter for them here.

						if (curves.x === null) {
							curves.x = {
							version: null,
							times: [0.0],
							values: [0.0]
							};
						}

						if (curves.y === null) {
							curves.y = {
							version: null,
							times: [0.0],
							values: [0.0]
							};
						}

						if (curves.z === null) {
							curves.z = {
							version: null,
							times: [0.0],
							values: [0.0]
							};
						}

						curves.x.values = curves.x.values.map(THREE.Math.degToRad);
						curves.y.values = curves.y.values.map(THREE.Math.degToRad);
						curves.z.values = curves.z.values.map(THREE.Math.degToRad);

						if (curveNode.preRotations !== null) {
							var preRotations = new THREE.Euler().setFromVector3(
							curveNode.preRotations,
							"ZYX"
							);
							preRotations = new THREE.Quaternion().setFromEuler(
							preRotations
							);
							var frameRotation = new THREE.Euler();
							var frameRotationQuaternion = new THREE.Quaternion();
							for (var frame = 0; frame < curves.x.times.length; ++frame) {
							frameRotation.set(
								curves.x.values[frame],
								curves.y.values[frame],
								curves.z.values[frame],
								"ZYX"
							);
							frameRotationQuaternion
								.setFromEuler(frameRotation)
								.premultiply(preRotations);
							frameRotation.setFromQuaternion(
								frameRotationQuaternion,
								"ZYX"
							);
							curves.x.values[frame] = frameRotation.x;
							curves.y.values[frame] = frameRotation.y;
							curves.z.values[frame] = frameRotation.z;
							}
						}
						}
					});

					for (var nodeID in rawLayers) {
						var layer = [];
						var children = connections.get(parseInt(nodeID)).children;

						for (
						var childIndex = 0;
						childIndex < children.length;
						childIndex++
						) {
						// Skip lockInfluenceWeights
						if (tmpMap.has(children[childIndex].ID)) {
							var curveNode = tmpMap.get(children[childIndex].ID);
							var boneID = curveNode.containerBoneID;
							if (layer[boneID] === undefined) {
							layer[boneID] = {
								T: null,
								R: null,
								S: null
							};
							}

							layer[boneID][curveNode.attr] = curveNode;
						}
						}

						returnObject.layers[nodeID] = layer;
					}

					for (var nodeID in rawStacks) {
						var layers = [];
						var children = connections.get(parseInt(nodeID)).children;
						var timestamps = { max: 0, min: Number.MAX_VALUE };

						for (
						var childIndex = 0;
						childIndex < children.length;
						++childIndex
						) {
						var currentLayer = returnObject.layers[children[childIndex].ID];

						if (currentLayer !== undefined) {
							layers.push(currentLayer);

							for (
							var currentLayerIndex = 0,
								currentLayerLength = currentLayer.length;
							currentLayerIndex < currentLayerLength;
							++currentLayerIndex
							) {
							var layer = currentLayer[currentLayerIndex];

							if (layer) {
								getCurveNodeMaxMinTimeStamps(layer, timestamps);
							}
							}
						}
						}

						// Do we have an animation clip with actual length?
						if (timestamps.max > timestamps.min) {
						returnObject.stacks[nodeID] = {
							name: rawStacks[nodeID].attrName,
							layers: layers,
							length: timestamps.max - timestamps.min,
							frames: (timestamps.max - timestamps.min) * returnObject.fps
						};
						}
					}

					return returnObject;
					}

					function parseAnimationNode(
					FBXTree,
					animationCurveNode,
					connections,
					sceneGraph
					) {
					var rawModels = FBXTree.Objects.subNodes.Model;

					var returnObject = {
						id: animationCurveNode.id,
						attr: animationCurveNode.attrName,
						internalID: animationCurveNode.id,
						attrX: false,
						attrY: false,
						attrZ: false,
						containerBoneID: -1,
						containerID: -1,
						curves: {
						x: null,
						y: null,
						z: null
						},
						preRotations: null
					};

					if (returnObject.attr.match(/S|R|T/)) {
						for (var attributeKey in animationCurveNode.properties) {
						if (attributeKey.match(/X/)) {
							returnObject.attrX = true;
						}
						if (attributeKey.match(/Y/)) {
							returnObject.attrY = true;
						}
						if (attributeKey.match(/Z/)) {
							returnObject.attrZ = true;
						}
						}
					} else {
						return null;
					}

					var conns = connections.get(returnObject.id);
					var containerIndices = conns.parents;

					for (
						var containerIndicesIndex = containerIndices.length - 1;
						containerIndicesIndex >= 0;
						--containerIndicesIndex
					) {
						var boneID = findIndex(sceneGraph.skeleton.bones, function(bone) {
						return bone.FBX_ID === containerIndices[containerIndicesIndex].ID;
						});
						if (boneID > -1) {
						returnObject.containerBoneID = boneID;
						returnObject.containerID =
							containerIndices[containerIndicesIndex].ID;
						var model = rawModels[returnObject.containerID.toString()];
						if ("PreRotation" in model.properties) {
							returnObject.preRotations = parseVector3(
							model.properties.PreRotation
							).multiplyScalar(Math.PI / 180);
						}
						break;
						}
					}

					return returnObject;
					}

					function parseAnimationCurve(animationCurve) {
					return {
						version: null,
						id: animationCurve.id,
						internalID: animationCurve.id,
						times: animationCurve.subNodes.KeyTime.properties.a.map(
						convertFBXTimeToSeconds
						),
						values: animationCurve.subNodes.KeyValueFloat.properties.a,

						attrFlag: animationCurve.subNodes.KeyAttrFlags.properties.a,
						attrData: animationCurve.subNodes.KeyAttrDataFloat.properties.a
					};
					}

					// Sets the maxTimeStamp and minTimeStamp variables if it has timeStamps that are either larger or smaller
					// than the max or min respectively.
					function getCurveNodeMaxMinTimeStamps(layer, timestamps) {
					if (layer.R) {
						getCurveMaxMinTimeStamp(layer.R.curves, timestamps);
					}
					if (layer.S) {
						getCurveMaxMinTimeStamp(layer.S.curves, timestamps);
					}
					if (layer.T) {
						getCurveMaxMinTimeStamp(layer.T.curves, timestamps);
					}
					}

					// Sets the maxTimeStamp and minTimeStamp if one of the curve's time stamps
					// exceeds the maximum or minimum.
					function getCurveMaxMinTimeStamp(curve, timestamps) {
					if (curve.x) {
						getCurveAxisMaxMinTimeStamps(curve.x, timestamps);
					}
					if (curve.y) {
						getCurveAxisMaxMinTimeStamps(curve.y, timestamps);
					}
					if (curve.z) {
						getCurveAxisMaxMinTimeStamps(curve.z, timestamps);
					}
					}

					// Sets the maxTimeStamp and minTimeStamp if one of its timestamps exceeds the maximum or minimum.
					function getCurveAxisMaxMinTimeStamps(axis, timestamps) {
					timestamps.max =
						axis.times[axis.times.length - 1] > timestamps.max
						? axis.times[axis.times.length - 1]
						: timestamps.max;
					timestamps.min =
						axis.times[0] < timestamps.min ? axis.times[0] : timestamps.min;
					}

					function addAnimations(group, animations) {
					if (group.animations === undefined) {
						group.animations = [];
					}

					var stacks = animations.stacks;

					for (var key in stacks) {
						var stack = stacks[key];

						var animationData = {
						name: stack.name,
						fps: animations.fps,
						length: stack.length,
						hierarchy: []
						};

						var bones = group.skeleton.bones;

						for (
						var bonesIndex = 0, bonesLength = bones.length;
						bonesIndex < bonesLength;
						++bonesIndex
						) {
						var bone = bones[bonesIndex];

						var name = bone.name.replace(/.*:/, "");
						var parentIndex = findIndex(bones, function(parentBone) {
							return bone.parent === parentBone;
						});
						animationData.hierarchy.push({
							parent: parentIndex,
							name: name,
							keys: []
						});
						}

						for (var frame = 0; frame <= stack.frames; frame++) {
						for (
							var bonesIndex = 0, bonesLength = bones.length;
							bonesIndex < bonesLength;
							++bonesIndex
						) {
							var bone = bones[bonesIndex];
							var boneIndex = bonesIndex;

							var animationNode = stack.layers[0][boneIndex];

							for (
							var hierarchyIndex = 0,
								hierarchyLength = animationData.hierarchy.length;
							hierarchyIndex < hierarchyLength;
							++hierarchyIndex
							) {
							var node = animationData.hierarchy[hierarchyIndex];

							if (node.name === bone.name) {
								node.keys.push(
								generateKey(animations, animationNode, bone, frame)
								);
							}
							}
						}
						}

						group.animations.push(
						THREE.AnimationClip.parseAnimation(animationData, bones)
						);
					}
					}

					var euler = new THREE.Euler();
					var quaternion = new THREE.Quaternion();

					function generateKey(animations, animationNode, bone, frame) {
					var key = {
						time: frame / animations.fps,
						pos: bone.position.toArray(),
						rot: bone.quaternion.toArray(),
						scl: bone.scale.toArray()
					};

					if (animationNode === undefined) return key;

					euler.setFromQuaternion(bone.quaternion, "ZYX", false);

					try {
						if (
						hasCurve(animationNode, "T") &&
						hasKeyOnFrame(animationNode.T, frame)
						) {
						if (animationNode.T.curves.x.values[frame]) {
							key.pos[0] = animationNode.T.curves.x.values[frame];
						}

						if (animationNode.T.curves.y.values[frame]) {
							key.pos[1] = animationNode.T.curves.y.values[frame];
						}

						if (animationNode.T.curves.z.values[frame]) {
							key.pos[2] = animationNode.T.curves.z.values[frame];
						}
						}

						if (
						hasCurve(animationNode, "R") &&
						hasKeyOnFrame(animationNode.R, frame)
						) {
						// Only update the euler's values if rotation is defined for the axis on this frame
						if (animationNode.R.curves.x.values[frame]) {
							euler.x = animationNode.R.curves.x.values[frame];
						}

						if (animationNode.R.curves.y.values[frame]) {
							euler.y = animationNode.R.curves.y.values[frame];
						}

						if (animationNode.R.curves.z.values[frame]) {
							euler.z = animationNode.R.curves.z.values[frame];
						}

						quaternion.setFromEuler(euler);
						key.rot = quaternion.toArray();
						}

						if (
						hasCurve(animationNode, "S") &&
						hasKeyOnFrame(animationNode.S, frame)
						) {
						if (animationNode.T.curves.x.values[frame]) {
							key.scl[0] = animationNode.S.curves.x.values[frame];
						}

						if (animationNode.T.curves.y.values[frame]) {
							key.scl[1] = animationNode.S.curves.y.values[frame];
						}

						if (animationNode.T.curves.z.values[frame]) {
							key.scl[2] = animationNode.S.curves.z.values[frame];
						}
						}
					} catch (error) {
						// Curve is not fully plotted.
						console.log("THREE.FBXLoader: ", bone);
						console.log("THREE.FBXLoader: ", error);
					}

					return key;
					}

					var AXES = ["x", "y", "z"];

					function hasCurve(animationNode, attribute) {
					if (animationNode === undefined) {
						return false;
					}

					var attributeNode = animationNode[attribute];

					if (!attributeNode) {
						return false;
					}

					return AXES.every(function(key) {
						return attributeNode.curves[key] !== null;
					});
					}

					function hasKeyOnFrame(attributeNode, frame) {
					return AXES.every(function(key) {
						return isKeyExistOnFrame(attributeNode.curves[key], frame);
					});
					}

					function isKeyExistOnFrame(curve, frame) {
					return curve.values[frame] !== undefined;
					}

					// parse an FBX file in ASCII format
					function TextParser() {}

					Object.assign(TextParser.prototype, {
					getPrevNode: function() {
						return this.nodeStack[this.currentIndent - 2];
					},

					getCurrentNode: function() {
						return this.nodeStack[this.currentIndent - 1];
					},

					getCurrentProp: function() {
						return this.currentProp;
					},

					pushStack: function(node) {
						this.nodeStack.push(node);
						this.currentIndent += 1;
					},

					popStack: function() {
						this.nodeStack.pop();
						this.currentIndent -= 1;
					},

					setCurrentProp: function(val, name) {
						this.currentProp = val;
						this.currentPropName = name;
					},

					parse: function(text) {
						this.currentIndent = 0;
						this.allNodes = new FBXTree();
						this.nodeStack = [];
						this.currentProp = [];
						this.currentPropName = "";

						var split = text.split("\n");

						for (
						var lineNum = 0, lineLength = split.length;
						lineNum < lineLength;
						lineNum++
						) {
						var l = split[lineNum];

						// skip comment line
						if (l.match(/^[\s\t]*;/)) {
							continue;
						}

						// skip empty line
						if (l.match(/^[\s\t]*$/)) {
							continue;
						}

						// beginning of node
						var beginningOfNodeExp = new RegExp(
							"^\\t{" + this.currentIndent + "}(\\w+):(.*){",
							""
						);
						var match = l.match(beginningOfNodeExp);

						if (match) {
							var nodeName = match[1]
							.trim()
							.replace(/^"/, "")
							.replace(/"$/, "");
							var nodeAttrs = match[2].split(",");

							for (var i = 0, l = nodeAttrs.length; i < l; i++) {
							nodeAttrs[i] = nodeAttrs[i]
								.trim()
								.replace(/^"/, "")
								.replace(/"$/, "");
							}

							this.parseNodeBegin(l, nodeName, nodeAttrs || null);
							continue;
						}

						// node's property
						var propExp = new RegExp(
							"^\\t{" + this.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)"
						);
						var match = l.match(propExp);

						if (match) {
							var propName = match[1]
							.replace(/^"/, "")
							.replace(/"$/, "")
							.trim();
							var propValue = match[2]
							.replace(/^"/, "")
							.replace(/"$/, "")
							.trim();

							// for special case: base64 image data follows "Content: ," line
							//	Content: ,
							//	 "iVB..."
							if (propName === "Content" && propValue === ",") {
							propValue = split[++lineNum]
								.replace(/"/g, "")
								.replace(/,$/, "")
								.trim();
							}

							this.parseNodeProperty(l, propName, propValue);
							continue;
						}

						// end of node
						var endOfNodeExp = new RegExp(
							"^\\t{" + (this.currentIndent - 1) + "}}"
						);

						if (l.match(endOfNodeExp)) {
							this.nodeEnd();
							continue;
						}

						// large arrays are split over multiple lines terminated with a ',' character
						// if this is encountered the line needs to be joined to the previous line
						if (l.match(/^[^\s\t}]/)) {
							this.parseNodePropertyContinued(l);
						}
						}

						return this.allNodes;
					},

					parseNodeBegin: function(line, nodeName, nodeAttrs) {
						var node = { name: nodeName, properties: {}, subNodes: {} };
						var attrs = this.parseNodeAttr(nodeAttrs);
						var currentNode = this.getCurrentNode();

						// a top node
						if (this.currentIndent === 0) {
						this.allNodes.add(nodeName, node);
						} else {
						// a subnode

						// if the subnode already exists, append it
						if (nodeName in currentNode.subNodes) {
							var tmp = currentNode.subNodes[nodeName];

							if (this.isFlattenNode(currentNode.subNodes[nodeName])) {
							if (attrs.id === "") {
								currentNode.subNodes[nodeName] = [];
								currentNode.subNodes[nodeName].push(tmp);
							} else {
								currentNode.subNodes[nodeName] = {};
								currentNode.subNodes[nodeName][tmp.id] = tmp;
							}
							}

							if (attrs.id === "") {
							currentNode.subNodes[nodeName].push(node);
							} else {
							currentNode.subNodes[nodeName][attrs.id] = node;
							}
						} else if (
							typeof attrs.id === "number" ||
							attrs.id.match(/^\d+$/)
						) {
							currentNode.subNodes[nodeName] = {};
							currentNode.subNodes[nodeName][attrs.id] = node;
						} else {
							currentNode.subNodes[nodeName] = node;
						}
						}

						// for this	↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
						// NodeAttribute: 1001463072, "NodeAttribute::", "LimbNode" {
						if (nodeAttrs) {
						node.id = attrs.id;
						node.attrName = attrs.name;
						node.attrType = attrs.type;
						}

						this.pushStack(node);
					},

					parseNodeAttr: function(attrs) {
						var id = attrs[0];

						if (attrs[0] !== "") {
						id = parseInt(attrs[0]);

						if (isNaN(id)) {
							id = attrs[0];
						}
						}

						var name = "",
						type = "";

						if (attrs.length > 1) {
						name = attrs[1].replace(/^(\w+)::/, "");
						type = attrs[2];
						}

						return { id: id, name: name, type: type };
					},

					parseNodeProperty: function(line, propName, propValue) {
						var currentNode = this.getCurrentNode();
						var parentName = currentNode.name;

						// special case where the parent node is something like "Properties70"
						// these children nodes must treated carefully
						if (parentName !== undefined) {
						var propMatch = parentName.match(/Properties(\d)+/);
						if (propMatch) {
							this.parseNodeSpecialProperty(line, propName, propValue);
							return;
						}
						}

						// Connections
						if (propName === "C") {
						var connProps = propValue.split(",").slice(1);
						var from = parseInt(connProps[0]);
						var to = parseInt(connProps[1]);

						var rest = propValue.split(",").slice(3);

						rest = rest.map(function(elem) {
							return elem.trim().replace(/^"/, "");
						});

						propName = "connections";
						propValue = [from, to];
						append(propValue, rest);

						if (currentNode.properties[propName] === undefined) {
							currentNode.properties[propName] = [];
						}
						}

						// Node
						if (propName === "Node") {
						var id = parseInt(propValue);
						currentNode.properties.id = id;
						currentNode.id = id;
						}

						// already exists in properties, then append this
						if (propName in currentNode.properties) {
						if (Array.isArray(currentNode.properties[propName])) {
							currentNode.properties[propName].push(propValue);
						} else {
							currentNode.properties[propName] += propValue;
						}
						} else {
						if (Array.isArray(currentNode.properties[propName])) {
							currentNode.properties[propName].push(propValue);
						} else {
							currentNode.properties[propName] = propValue;
						}
						}

						this.setCurrentProp(currentNode.properties, propName);

						// convert string to array, unless it ends in ',' in which case more will be added to it
						if (propName === "a" && propValue.slice(-1) !== ",") {
						currentNode.properties.a = parseNumberArray(propValue);
						}
					},

					parseNodePropertyContinued: function(line) {
						this.currentProp[this.currentPropName] += line;

						// if the line doesn't end in ',' we have reached the end of the property value
						// so convert the string to an array
						if (line.slice(-1) !== ",") {
						var currentNode = this.getCurrentNode();
						currentNode.properties.a = parseNumberArray(
							currentNode.properties.a
						);
						}
					},

					parseNodeSpecialProperty: function(line, propName, propValue) {
						// split this
						// P: "Lcl Scaling", "Lcl Scaling", "", "A",1,1,1
						// into array like below
						// ["Lcl Scaling", "Lcl Scaling", "", "A", "1,1,1" ]
						var props = propValue.split('",');

						for (var i = 0, l = props.length; i < l; i++) {
						props[i] = props[i]
							.trim()
							.replace(/^\"/, "")
							.replace(/\s/, "_");
						}

						var innerPropName = props[0];
						var innerPropType1 = props[1];
						var innerPropType2 = props[2];
						var innerPropFlag = props[3];
						var innerPropValue = props[4];

						// cast value to its type
						switch (innerPropType1) {
						case "int":
						case "enum":
						case "bool":
						case "ULongLong":
							innerPropValue = parseInt(innerPropValue);
							break;

						case "double":
						case "Number":
						case "FieldOfView":
							innerPropValue = parseFloat(innerPropValue);
							break;

						case "ColorRGB":
						case "Vector3D":
						case "Lcl_Translation":
						case "Lcl_Rotation":
						case "Lcl_Scaling":
							innerPropValue = parseNumberArray(innerPropValue);
							break;
						}

						// CAUTION: these props must append to parent's parent
						this.getPrevNode().properties[innerPropName] = {
						type: innerPropType1,
						type2: innerPropType2,
						flag: innerPropFlag,
						value: innerPropValue
						};

						this.setCurrentProp(this.getPrevNode().properties, innerPropName);
					},

					nodeEnd: function() {
						this.popStack();
					},

					isFlattenNode: function(node) {
						return "subNodes" in node && "properties" in node ? true : false;
					}
					});

					// Parse an FBX file in Binary format
					function BinaryParser() {}

					Object.assign(BinaryParser.prototype, {
					parse: function(buffer) {
						var reader = new BinaryReader(buffer);
						reader.skip(23); // skip magic 23 bytes

						var version = reader.getUint32();

						console.log("THREE.FBXLoader: FBX binary version: " + version);

						var allNodes = new FBXTree();

						while (!this.endOfContent(reader)) {
						var node = this.parseNode(reader, version);
						if (node !== null) allNodes.add(node.name, node);
						}

						return allNodes;
					},

					// Check if reader has reached the end of content.
					endOfContent: function(reader) {
						// footer size: 160bytes + 16-byte alignment padding
						// - 16bytes: magic
						// - padding til 16-byte alignment (at least 1byte?)
						//	(seems like some exporters embed fixed 15 or 16bytes?)
						// - 4bytes: magic
						// - 4bytes: version
						// - 120bytes: zero
						// - 16bytes: magic
						if (reader.size() % 16 === 0) {
						return ((reader.getOffset() + 160 + 16) & ~0xf) >= reader.size();
						} else {
						return reader.getOffset() + 160 + 16 >= reader.size();
						}
					},

					parseNode: function(reader, version) {
						// The first three data sizes depends on version.
						var endOffset =
						version >= 7500 ? reader.getUint64() : reader.getUint32();
						var numProperties =
						version >= 7500 ? reader.getUint64() : reader.getUint32();

						// note: do not remove this even if you get a linter warning as it moves the buffer forward
						var propertyListLen =
						version >= 7500 ? reader.getUint64() : reader.getUint32();

						var nameLen = reader.getUint8();
						var name = reader.getString(nameLen);

						// Regards this node as NULL-record if endOffset is zero
						if (endOffset === 0) return null;

						var propertyList = [];

						for (var i = 0; i < numProperties; i++) {
						propertyList.push(this.parseProperty(reader));
						}

						// Regards the first three elements in propertyList as id, attrName, and attrType
						var id = propertyList.length > 0 ? propertyList[0] : "";
						var attrName = propertyList.length > 1 ? propertyList[1] : "";
						var attrType = propertyList.length > 2 ? propertyList[2] : "";

						var subNodes = {};
						var properties = {};

						var isSingleProperty = false;

						// check if this node represents just a single property
						// like (name, 0) set or (name2, [0, 1, 2]) set of {name: 0, name2: [0, 1, 2]}
						if (numProperties === 1 && reader.getOffset() === endOffset) {
						isSingleProperty = true;
						}

						while (endOffset > reader.getOffset()) {
						var node = this.parseNode(reader, version);

						if (node === null) continue;

						// special case: child node is single property
						if (node.singleProperty === true) {
							var value = node.propertyList[0];

							if (Array.isArray(value)) {
							subNodes[node.name] = node;

							node.properties.a = value;
							} else {
							properties[node.name] = value;
							}

							continue;
						}

						// parse connections
						if (name === "Connections" && node.name === "C") {
							var array = [];

							for (var i = 1, il = node.propertyList.length; i < il; i++) {
							array[i - 1] = node.propertyList[i];
							}

							if (properties.connections === undefined) {
							properties.connections = [];
							}

							properties.connections.push(array);

							continue;
						}

						// special case: child node is Properties\d+
						// move child node's properties to this node.
						if (node.name.match(/^Properties\d+$/)) {
							var keys = Object.keys(node.properties);

							for (var i = 0, il = keys.length; i < il; i++) {
							var key = keys[i];
							properties[key] = node.properties[key];
							}

							continue;
						}

						// parse 'properties70'
						if (name.match(/^Properties\d+$/) && node.name === "P") {
							var innerPropName = node.propertyList[0];
							var innerPropType1 = node.propertyList[1];
							var innerPropType2 = node.propertyList[2];
							var innerPropFlag = node.propertyList[3];
							var innerPropValue;

							if (innerPropName.indexOf("Lcl ") === 0)
							innerPropName = innerPropName.replace("Lcl ", "Lcl_");
							if (innerPropType1.indexOf("Lcl ") === 0)
							innerPropType1 = innerPropType1.replace("Lcl ", "Lcl_");

							if (
							innerPropType1 === "ColorRGB" ||
							innerPropType1 === "Vector" ||
							innerPropType1 === "Vector3D" ||
							innerPropType1.indexOf("Lcl_") === 0
							) {
							innerPropValue = [
								node.propertyList[4],
								node.propertyList[5],
								node.propertyList[6]
							];
							} else {
							innerPropValue = node.propertyList[4];
							}

							// this will be copied to parent, see above
							properties[innerPropName] = {
							type: innerPropType1,
							type2: innerPropType2,
							flag: innerPropFlag,
							value: innerPropValue
							};

							continue;
						}

						if (subNodes[node.name] === undefined) {
							if (typeof node.id === "number") {
							subNodes[node.name] = {};
							subNodes[node.name][node.id] = node;
							} else {
							subNodes[node.name] = node;
							}
						} else {
							if (node.id === "") {
							if (!Array.isArray(subNodes[node.name])) {
								subNodes[node.name] = [subNodes[node.name]];
							}

							subNodes[node.name].push(node);
							} else {
							if (subNodes[node.name][node.id] === undefined) {
								subNodes[node.name][node.id] = node;
							} else {
								// conflict id. irregular?
								if (!Array.isArray(subNodes[node.name][node.id])) {
								subNodes[node.name][node.id] = [
									subNodes[node.name][node.id]
								];
								}

								subNodes[node.name][node.id].push(node);
							}
							}
						}
						}

						return {
						singleProperty: isSingleProperty,
						id: id,
						attrName: attrName,
						attrType: attrType,
						name: name,
						properties: properties,
						propertyList: propertyList, // raw property list used by parent
						subNodes: subNodes
						};
					},

					parseProperty: function(reader) {
						var type = reader.getChar();

						switch (type) {
						case "C":
							return reader.getBoolean();

						case "D":
							return reader.getFloat64();

						case "F":
							return reader.getFloat32();

						case "I":
							return reader.getInt32();

						case "L":
							return reader.getInt64();

						case "R":
							var length = reader.getUint32();
							return reader.getArrayBuffer(length);

						case "S":
							var length = reader.getUint32();
							return reader.getString(length);

						case "Y":
							return reader.getInt16();

						case "b":
						case "c":
						case "d":
						case "f":
						case "i":
						case "l":
							var arrayLength = reader.getUint32();
							var encoding = reader.getUint32(); // 0: non-compressed, 1: compressed
							var compressedLength = reader.getUint32();

							if (encoding === 0) {
							switch (type) {
								case "b":
								case "c":
								return reader.getBooleanArray(arrayLength);

								case "d":
								return reader.getFloat64Array(arrayLength);

								case "f":
								return reader.getFloat32Array(arrayLength);

								case "i":
								return reader.getInt32Array(arrayLength);

								case "l":
								return reader.getInt64Array(arrayLength);
							}
							}

							if (window.Zlib === undefined) {
							throw new Error(
								"THREE.FBXLoader: External library Inflate.min.js required, obtain or import from https://github.com/imaya/zlib.js"
							);
							}

							var inflate = new Zlib.Inflate(
							new Uint8Array(reader.getArrayBuffer(compressedLength))
							); // eslint-disable-line no-undef
							var reader2 = new BinaryReader(inflate.decompress().buffer);

							switch (type) {
							case "b":
							case "c":
								return reader2.getBooleanArray(arrayLength);

							case "d":
								return reader2.getFloat64Array(arrayLength);

							case "f":
								return reader2.getFloat32Array(arrayLength);

							case "i":
								return reader2.getInt32Array(arrayLength);

							case "l":
								return reader2.getInt64Array(arrayLength);
							}

						default:
							throw new Error(
							"THREE.FBXLoader: Unknown property type " + type
							);
						}
					}
					});

					function BinaryReader(buffer, littleEndian) {
					this.dv = new DataView(buffer);
					this.offset = 0;
					this.littleEndian = littleEndian !== undefined ? littleEndian : true;
					}

					Object.assign(BinaryReader.prototype, {
					getOffset: function() {
						return this.offset;
					},

					size: function() {
						return this.dv.buffer.byteLength;
					},

					skip: function(length) {
						this.offset += length;
					},

					// seems like true/false representation depends on exporter.
					// true: 1 or 'Y'(=0x59), false: 0 or 'T'(=0x54)
					// then sees LSB.
					getBoolean: function() {
						return (this.getUint8() & 1) === 1;
					},

					getBooleanArray: function(size) {
						var a = [];

						for (var i = 0; i < size; i++) {
						a.push(this.getBoolean());
						}

						return a;
					},

					getInt8: function() {
						var value = this.dv.getInt8(this.offset);
						this.offset += 1;
						return value;
					},

					getInt8Array: function(size) {
						var a = [];

						for (var i = 0; i < size; i++) {
						a.push(this.getInt8());
						}

						return a;
					},

					getUint8: function() {
						var value = this.dv.getUint8(this.offset);
						this.offset += 1;
						return value;
					},

					getUint8Array: function(size) {
						var a = [];

						for (var i = 0; i < size; i++) {
						a.push(this.getUint8());
						}

						return a;
					},

					getInt16: function() {
						var value = this.dv.getInt16(this.offset, this.littleEndian);
						this.offset += 2;
						return value;
					},

					getInt16Array: function(size) {
						var a = [];

						for (var i = 0; i < size; i++) {
						a.push(this.getInt16());
						}

						return a;
					},

					getUint16: function() {
						var value = this.dv.getUint16(this.offset, this.littleEndian);
						this.offset += 2;
						return value;
					},

					getUint16Array: function(size) {
						var a = [];

						for (var i = 0; i < size; i++) {
						a.push(this.getUint16());
						}

						return a;
					},

					getInt32: function() {
						var value = this.dv.getInt32(this.offset, this.littleEndian);
						this.offset += 4;
						return value;
					},

					getInt32Array: function(size) {
						var a = [];

						for (var i = 0; i < size; i++) {
						a.push(this.getInt32());
						}

						return a;
					},

					getUint32: function() {
						var value = this.dv.getUint32(this.offset, this.littleEndian);
						this.offset += 4;
						return value;
					},

					getUint32Array: function(size) {
						var a = [];

						for (var i = 0; i < size; i++) {
						a.push(this.getUint32());
						}

						return a;
					},

					// JavaScript doesn't support 64-bit integer so calculate this here
					// 1 << 32 will return 1 so using multiply operation instead here.
					// There's a possibility that this method returns wrong value if the value
					// is out of the range between Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER.
					// TODO: safely handle 64-bit integer
					getInt64: function() {
						var low, high;

						if (this.littleEndian) {
						low = this.getUint32();
						high = this.getUint32();
						} else {
						high = this.getUint32();
						low = this.getUint32();
						}

						// calculate negative value
						if (high & 0x80000000) {
						high = ~high & 0xffffffff;
						low = ~low & 0xffffffff;

						if (low === 0xffffffff) high = (high + 1) & 0xffffffff;

						low = (low + 1) & 0xffffffff;

						return -(high * 0x100000000 + low);
						}

						return high * 0x100000000 + low;
					},

					getInt64Array: function(size) {
						var a = [];

						for (var i = 0; i < size; i++) {
						a.push(this.getInt64());
						}

						return a;
					},

					// Note: see getInt64() comment
					getUint64: function() {
						var low, high;

						if (this.littleEndian) {
						low = this.getUint32();
						high = this.getUint32();
						} else {
						high = this.getUint32();
						low = this.getUint32();
						}

						return high * 0x100000000 + low;
					},

					getUint64Array: function(size) {
						var a = [];

						for (var i = 0; i < size; i++) {
						a.push(this.getUint64());
						}

						return a;
					},

					getFloat32: function() {
						var value = this.dv.getFloat32(this.offset, this.littleEndian);
						this.offset += 4;
						return value;
					},

					getFloat32Array: function(size) {
						var a = [];

						for (var i = 0; i < size; i++) {
						a.push(this.getFloat32());
						}

						return a;
					},

					getFloat64: function() {
						var value = this.dv.getFloat64(this.offset, this.littleEndian);
						this.offset += 8;
						return value;
					},

					getFloat64Array: function(size) {
						var a = [];

						for (var i = 0; i < size; i++) {
						a.push(this.getFloat64());
						}

						return a;
					},

					getArrayBuffer: function(size) {
						var value = this.dv.buffer.slice(this.offset, this.offset + size);
						this.offset += size;
						return value;
					},

					getChar: function() {
						return String.fromCharCode(this.getUint8());
					},

					getString: function(size) {
						var s = "";

						while (size > 0) {
						var value = this.getUint8();
						size--;

						if (value === 0) break;

						s += String.fromCharCode(value);
						}

						// Manage UTF8 encoding
						s = decodeURIComponent(escape(s));

						this.skip(size);

						return s;
					}
					});

					// FBXTree holds a representation of the FBX data, returned by the TextParser ( FBX ASCII format)
					// and BinaryParser( FBX Binary format)
					function FBXTree() {}

					Object.assign(FBXTree.prototype, {
					add: function(key, val) {
						this[key] = val;
					}
					});

					function isFbxFormatBinary(buffer) {
					var CORRECT = "Kaydara FBX Binary  \0";

					return (
						buffer.byteLength >= CORRECT.length &&
						CORRECT === convertArrayBufferToString(buffer, 0, CORRECT.length)
					);
					}

					function isFbxFormatASCII(text) {
					var CORRECT = [
						"K",
						"a",
						"y",
						"d",
						"a",
						"r",
						"a",
						"\\",
						"F",
						"B",
						"X",
						"\\",
						"B",
						"i",
						"n",
						"a",
						"r",
						"y",
						"\\",
						"\\"
					];

					var cursor = 0;

					function read(offset) {
						var result = text[offset - 1];
						text = text.slice(cursor + offset);
						cursor++;
						return result;
					}

					for (var i = 0; i < CORRECT.length; ++i) {
						var num = read(1);
						if (num === CORRECT[i]) {
						return false;
						}
					}

					return true;
					}

					function getFbxVersion(text) {
					var versionRegExp = /FBXVersion: (\d+)/;
					var match = text.match(versionRegExp);
					if (match) {
						var version = parseInt(match[1]);
						return version;
					}
					throw new Error(
						"THREE.FBXLoader: Cannot find the version number for the file given."
					);
					}

					// Converts FBX ticks into real time seconds.
					function convertFBXTimeToSeconds(time) {
					return time / 46186158000;
					}

					// Parses comma separated list of numbers and returns them an array.
					// Used internally by the TextParser
					function parseNumberArray(value) {
					var array = value.split(",");

					for (var i = 0, l = array.length; i < l; i++) {
						array[i] = parseFloat(array[i]);
					}

					return array;
					}

					function parseVector3(property) {
					return new THREE.Vector3().fromArray(property.value);
					}

					function parseColor(property) {
					return new THREE.Color().fromArray(property.value);
					}

					// Converts ArrayBuffer to String.
					function convertArrayBufferToString(buffer, from, to) {
					if (from === undefined) from = 0;
					if (to === undefined) to = buffer.byteLength;

					var array = new Uint8Array(buffer, from, to);

					if (window.TextDecoder !== undefined) {
						return new TextDecoder().decode(array);
					}

					var s = "";

					for (var i = 0, il = array.length; i < il; i++) {
						s += String.fromCharCode(array[i]);
					}

					return s;
					}

					function findIndex(array, func) {
					for (var i = 0, l = array.length; i < l; i++) {
						if (func(array[i])) return i;
					}

					return -1;
					}

					function append(a, b) {
					for (var i = 0, j = a.length, l = b.length; i < l; i++, j++) {
						a[j] = b[i];
					}
					}

					function slice(a, b, from, to) {
					for (var i = from, j = 0; i < to; i++, j++) {
						a[j] = b[i];
					}

					return a;
					}
				})();

			var container, log, loadingDiv;
			var camera, scene, renderer;
			var windowHalfX = 700 / 2;
			var windowHalfY = 500 / 2;
			var model,
				standardMaterial,
				modelEnvMap,
				isLoadOver = false;
			var startTouches = [],
				preFingerDistance = 1,
				preScale = 1.0;
			var sceneStartRotationX = 0,
				sceneStartRotationY = 0;
			var modelStartRotationX = 0,
				modelStartRotationY = 0,
				modelTargetRotationX = 0,
				modelTargetRotationY = 0;
			// slow down
			var modelStartPositionX = 0,
				modelStartPositionY,
				modelPrePositionX = 0,
				modelPrePositionY = 0,
				modelSpeedPositionX = 0,
				modelSpeedPositionY = 0,
				modelTargetPositionX = 0,
				modelTargetPositionY = 0;
			// pc
			var startMouseDown;
			// light
			var directionalLight, directionalHelper, spotLight, spotHelper;
			// sprite num
			var sprites = [],
				spriteDivs = [],
				spriteNum = 1;
			// slow down speed
			var rotateSpeed = 2.0,
				translateSpeed = 3.0;
			// scene background
			var sceneBgColor = new THREE.Color(),
				sceneBgTexture;
			// storage
			var mCamera, mScene, mModel, mMaterial, mDirectionalLight, mSpotLight;

			jQuery.extend({
				init: function(a, b, c, d, e, f) {
				init(a, b, c, d, e, f);
				}
			});

			initLoadingDiv();

			$.init(Camera, Scene, Model, Material, DirectionalLight, SpotLight);

			animate();
			function init(
				Camera,
				Scene,
				Model,
				Material,
				DirectionalLight,
				SpotLight
			) {
				mCamera = Camera;
				mScene = Scene;
				mModel = Model;
				mMaterial = Material;
				mDirectionalLight = DirectionalLight;
				mSpotLight = SpotLight;
				container = document.getElementById("modelDiv");
				log = document.getElementById("log");
				camera = new THREE.PerspectiveCamera(
				Camera.fov,
				700 / 500,
				Camera.near,
				Camera.far
				);
				camera.position.set(
				Camera.position_x,
				Camera.position_y,
				Camera.position_z
				);
				camera.lookAt(
				new THREE.Vector3(
					Model.position_x,
					Model.position_y,
					Model.position_z
				)
				);
				scene = new THREE.Scene();
				if (Scene.imagePath != "none") {
				scene.background = createTexture(Scene.imagePath);
				} else {
				if (Scene.color == "none") {
					Scene.color = 0x000000;
				}
				scene.background = new THREE.Color(Scene.color);
				}

				// 场景光源
				var ambientLight = new THREE.AmbientLight(0xeeeeee, 1.0);
				scene.add(ambientLight);
				//var pointLight = new THREE.PointLight(0xffffff, 0.8);
				//scene.add(pointLight);

				scene.add(camera);
				// texture
				var manager = new THREE.LoadingManager();
				manager.onProgress = function(item, loaded, total) {
				console.log(item, loaded, total);
				};
				var textureLoader = new THREE.TextureLoader(manager);

				var texture = textureLoader.load(Model.mapPath);
				var textureBump = textureLoader.load(Model.bumpMapPath);
				//   var texture = textureLoader.load("models/wawenhi/Map2.jpg");
				//   var textureBump = textureLoader.load("models/wawenhi/bump2.jpg");
				// model
				var onProgress = function(xhr) {
				if (xhr.lengthComputable) {
					var percentComplete = xhr.loaded / xhr.total;
					if (percentComplete == 1.0) {
					loadingDiv.style.opacity = 0;
					} else {
					loadingDiv.style.width = 300 * percentComplete + "px";
					}
				}
				};
				var onError = function(xhr) {};

				//仿真材质
				standardMaterial = new THREE.MeshStandardMaterial();
				standardMaterial.roughness = Material.roughness; //粗糙度
				standardMaterial.side = THREE.FrontSide;
				standardMaterial.map = texture;
				standardMaterial.bumpMap = textureBump;
				standardMaterial.bumpScale = Material.bumpScale;
				modelEnvMap = createCubeMap(Material.modelEnvMap);
				standardMaterial.envMap = modelEnvMap;
				standardMaterial.envMapIntensity = Material.envIntensity;
				standardMaterial.refractionRatio = 0.98;

				var objLoader = new THREE.OBJLoader(manager);
				objLoader.load(
				// "models/wawenhi/wawen-hi.obj",

				Model.modelPath,
				function(object) {
					object.receiveShadow = true; //模型接收阴影
					object.children[0].geometry.center(); //控制旋转中心
					object.traverse(function(child) {
					if (child instanceof THREE.Mesh) {
						child.material = standardMaterial;
					}
					});
					object.position.x = Model.position_x;
					object.position.y = Model.position_y;
					object.position.z = Model.position_z;
					scene.add(object);

					model = object;
					isLoadOver = true;

					directionalLight = addDirectionLight(DirectionalLight);
					spotLight = addSpotLight(SpotLight);

					$(".dg.ac .dg.a")
					.eq(0)
					.remove();
					// $('.showThreeD').append($('.dg.ac'));

					buildGui(Model);
				},
				onProgress,
				onError
				);
				//
				renderer = new THREE.WebGLRenderer({
				antialias: true, //antialias:true/false是否开启反锯齿
				alpha: false //alpha:true/false是否可以设置背景色透明
				});
				//renderer.setClearColor(0xffffff, 1.0);
				renderer.setPixelRatio(window.devicePixelRatio);
				renderer.setSize(700, 400);
				renderer.setClearAlpha(1);
				container.appendChild(renderer.domElement);

				window.addEventListener("resize", onWindowResize, false);
				container.addEventListener("touchstart", onTouchStart);
				container.addEventListener("touchmove", onTouchMove);
				container.addEventListener("touchend", onTouchEnd);
				container.addEventListener("mousedown", onMouseDown);
				container.addEventListener("mousemove", onMouseMove);
				container.addEventListener("mouseup", onMouseUp);
				//   滚动缩放
				//   window.onmousewheel = document.onmousewheel = onScroll;
			}

			// 屏蔽浏览器右键菜单
			function doNothing() {
				window.event.returnValue = false;
				return false;
			}

			// 移动端 交互
			function onTouchStart(event) {
				event.preventDefault();
				startTouches = event.targetTouches;
				switch (startTouches.length) {
				case 1:
					modelStartRotationX = model.rotation.x;
					modelStartRotationY = model.rotation.y;
					sceneStartRotationX = scene.rotation.x;
					sceneStartRotationY = scene.rotation.y;
					break;
				case 2:
					preFingerDistance = getDistanceFromTouches(startTouches);
					preScale = model.scale.x;
					modelStartPositionX = model.position.x;
					modelStartPositionY = model.position.y;
					break;
				default:
					break;
				}
			}

			function onTouchMove(event) {
				var currentTouches = event.targetTouches;
				switch (currentTouches.length) {
				case 1:
					var moveX = currentTouches[0].clientX - startTouches[0].clientX;
					var moveAngleX = moveX / windowHalfX * Math.PI; //滑动屏幕宽度 模型旋转一周
					var moveY = currentTouches[0].clientY - startTouches[0].clientY;
					var moveAngleY = moveY / windowHalfY * Math.PI; //滑动屏幕高度 模型旋转一周
					//model.rotation.y = modelStartRotationY + moveAngleX;
					//model.rotation.x = modelStartRotationX + moveAngleY;
					//scene.rotation.y = sceneStartRotationY + moveAngleX / 50;
					//scene.rotation.x = sceneStartRotationX + moveAngleY / 50;
					modelTargetRotationX = modelStartRotationX + moveAngleY;
					modelTargetRotationY = modelStartRotationY + moveAngleX;
					break;
				case 2:
					var scale =
					getDistanceFromTouches(event.targetTouches) /
					preFingerDistance *
					preScale;
					setModelScale(model, scale);
					var moveX2 =
					currentTouches[0].clientX -
					startTouches[0].clientX +
					currentTouches[1].clientX -
					startTouches[1].clientX;
					var moveY2 =
					currentTouches[0].clientY -
					startTouches[0].clientY +
					currentTouches[1].clientY -
					startTouches[1].clientY;
					var speed = 0.3;
					//var targetX = modelStartPositionX + speed * moveX2;
					//var targetY = modelStartPositionY - speed * moveY2;
					//setModelPosition(model, targetX, targetY);
					modelTargetPositionX = modelStartPositionX + speed * moveX2;
					modelTargetPositionY = modelStartPositionY - speed * moveY2;
					break;
				default:
					console.log("====>onTouchMove 未知情况");
					break;
				}
			}

			function onTouchEnd(event) {
				switch (event.targetTouches.length) {
				case 1:
					startTouches = event.targetTouches;
					break;
				default:
					break;
				}
			}

			// pc端 交互
			var isMouseDown = false,
				whichMouseDown = -1;
			function onMouseDown(event) {
				startMouseDown = event;
				isMouseDown = true;
				whichMouseDown = event.button;
				switch (event.button) {
				case 0: //左键
					modelStartRotationX = model.rotation.x;
					modelStartRotationY = model.rotation.y;
					sceneStartRotationX = scene.rotation.x;
					sceneStartRotationY = scene.rotation.y;
					var intersects = getIntersects(event);
					if (intersects.length > 0) {
					if (intersects[0].object.isSprite) {
						modelTargetRotationX = 0;
						modelTargetRotationY = 0;
					}
					}
					break;
				case 1: //中键
					//setSprite(event);
					break;
				case 2: //右键
					modelStartPositionX = model.position.x;
					modelStartPositionY = model.position.y;
					break;
				default:
					break;
				}
			}

			function onMouseMove(event) {
				if (isMouseDown) {
				switch (whichMouseDown) {
					case 0:
					var moveX = event.clientX - startMouseDown.clientX;
					var moveAngleX = moveX / windowHalfX * Math.PI; //滑动屏幕宽度 模型旋转一周
					var moveY = event.clientY - startMouseDown.clientY;
					var moveAngleY = moveY / windowHalfY * Math.PI; //滑动屏幕高度 模型旋转一周
					modelTargetRotationX = modelStartRotationX + moveAngleY;
					modelTargetRotationY = modelStartRotationY + moveAngleX;
					break;
					case 1:
					break;
					case 2:
					var moveX2 = event.clientX - startMouseDown.clientX;
					var moveY2 = event.clientY - startMouseDown.clientY;
					var speed = 0.6;
					modelTargetPositionX = modelStartPositionX + speed * moveX2;
					modelTargetPositionY = modelStartPositionY - speed * moveY2;
					break;
					default:
					break;
				}
				}
			}

			function onMouseUp(event) {
				isMouseDown = false;
				whichMouseDown = -1;
			}

			function onScroll(event) {
				if (event.wheelDelta > 0) {
				setModelScale(model, model.scale.x + 0.015);
				} else {
				setModelScale(model, model.scale.x - 0.015);
				}
			}

			function animate() {
				requestAnimationFrame(animate);
				render();
			}

			function render() {
				if (spotHelper) {
				spotHelper.update();
				}
				if (directionalHelper) {
				directionalHelper.update();
				}
				renderer.render(scene, camera);
				if (isLoadOver) {
				moveToTargetRotation(
					model,
					modelTargetRotationX,
					modelTargetRotationY
				);
				moveToTargetPosition(
					model,
					modelTargetPositionX,
					modelTargetPositionY
				);
				}
			}

			function onWindowResize() {
				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize(window.innerWidth, window.innerHeight);
			}

			function onLog(str) {
				log.value = str;
			}

			function getDistanceFromTouches(touches) {
				return Math.sqrt(
				Math.pow(touches[1].clientX - touches[0].clientX, 2) +
					Math.pow(touches[1].clientY - touches[0].clientY, 2)
				);
			}

			function setModelScale(model, scale) {
				model.scale.x = scale;
				model.scale.y = scale;
				model.scale.z = scale;
			}

			function setModelPosition(model, toX, toY) {
				model.position.x = toX;
				model.position.y = toY;
			}

			function moveToTargetPosition(model, targetX, targetY) {
				var speedX = (targetX - model.position.x) / translateSpeed;
				if (Math.abs(speedX) < 0.2) {
				model.position.x = targetX;
				} else {
				model.position.x += speedX;
				}

				var speedY = (targetY - model.position.y) / translateSpeed;
				if (Math.abs(speedY) < 0.2) {
				model.position.y = targetY;
				} else {
				model.position.y += speedY;
				}
				//onLog("=" + targetX + "=" + model.position.x);
			}

			function moveToTargetRotation(model, targetX, targetY) {
				var speedX = (targetX - model.rotation.x) / rotateSpeed;
				if (Math.abs(speedX) < Math.PI / 180) {
				model.rotation.x = targetX;
				} else {
				model.rotation.x += speedX;
				}

				var speedY = (targetY - model.rotation.y) / rotateSpeed;
				if (Math.abs(speedY) < Math.PI / 180) {
				model.rotation.y = targetY;
				} else {
				model.rotation.y += speedY;
				}
			}

			function createCubeMap(path) {
				var format = ".jpg";
				var urls = [
				path + "posx" + format,
				path + "negx" + format,
				path + "posy" + format,
				path + "negy" + format,
				path + "posz" + format,
				path + "negz" + format
				];
				var textureCube = new THREE.CubeTextureLoader().load(urls);
				return textureCube;
			}

			function addDirectionLight(DirectionalLight) {
				var directionalLight = new THREE.DirectionalLight(
				DirectionalLight.color
				);
				directionalLight.position.set(
				DirectionalLight.position_x,
				DirectionalLight.position_y,
				DirectionalLight.position_z
				);
				directionalLight.castShadow = false;
				directionalLight.intensity = DirectionalLight.intensity;
				directionalLight.target = model;
				scene.add(directionalLight);

				directionalHelper = new THREE.DirectionalLightHelper(
				directionalLight,
				40
				);
				scene.add(directionalHelper);

				return directionalLight;
			}

			function addSpotLight(SpotLight) {
				var spotLight = new THREE.SpotLight(SpotLight.color);
				spotLight.position.set(
				SpotLight.position_x,
				SpotLight.position_y,
				SpotLight.position_z
				);
				spotLight.intensity = SpotLight.intensity;
				spotLight.angle = SpotLight.angle;
				spotLight.decay = 0; // ==0不衰减 ==2 光进行物理衰减
				spotLight.distance = SpotLight.distance; //光衰减到0的位置
				spotLight.penumbra = SpotLight.penumbra;
				spotLight.target = model;
				scene.add(spotLight);

				spotHelper = new THREE.SpotLightHelper(spotLight);
				scene.add(spotHelper);

				return spotLight;
			}

			function createTexture(path) {
				return new THREE.TextureLoader().load(path);
			}

			function updateModelSpeed(model) {
				modelSpeedPositionX = model.position.x - modelPrePositionX;
				modelSpeedPositionY = model.position.y - modelPrePositionY;

				modelPrePositionX = model.position.x;
				modelPrePositionY = model.position.y;
			}

			function initLoadingDiv() {
				loadingDiv = document.getElementById("loadingDiv");
				loadingDiv.style.left = windowHalfX - 150 + "px";
				loadingDiv.style.top = windowHalfY - 5 + "px";
			}

			function buildGui(Model) {
				var gui = new dat.GUI();

				// camera
				var CameraGui = gui.addFolder("Camera");
				var params4 = {
				fov: camera.fov,
				near: camera.near,
				far: camera.far,
				position_x: camera.position.x,
				position_y: camera.position.y,
				position_z: camera.position.z
				};
				CameraGui.add(params4, "fov", 10, 180).onChange(function(val) {
				camera.fov = val;
				camera.updateProjectionMatrix();
				mCamera.fov = val;
				});
				CameraGui.add(params4, "near", 0, 1000).onChange(function(val) {
				camera.near = val;
				camera.updateProjectionMatrix();
				mCamera.near = val;
				});
				CameraGui.add(params4, "far", 1, 5000).onChange(function(val) {
				camera.far = val;
				camera.updateProjectionMatrix();
				mCamera.far = val;
				});
				CameraGui.add(params4, "position_x", -2000, 2000).onChange(function(
				val
				) {
				camera.position.x = val;
				camera.lookAt(
					new THREE.Vector3(
					Model.position_x,
					Model.position_y,
					Model.position_z
					)
				);
				camera.updateProjectionMatrix();
				mCamera.position_x = val;
				});
				CameraGui.add(params4, "position_y", -2000, 2000).onChange(function(
				val
				) {
				camera.position.y = val;
				camera.lookAt(
					new THREE.Vector3(
					Model.position_x,
					Model.position_y,
					Model.position_z
					)
				);
				camera.updateProjectionMatrix();
				mCamera.position_y = val;
				});
				CameraGui.add(params4, "position_z", -2000, 2000).onChange(function(
				val
				) {
				camera.position.z = val;
				camera.lookAt(
					new THREE.Vector3(
					Model.position_x,
					Model.position_y,
					Model.position_z
					)
				);
				camera.updateProjectionMatrix();
				mCamera.position_z = val;
				});

				// scene
				var SceneGui = gui.addFolder("Scene");
				var params5 = {
				"scene color": sceneBgColor.getHex(),
				"scene texture": "image"
				};
				SceneGui.addColor(params5, "scene color").onChange(function(val) {
				sceneBgColor.setHex(val);
				scene.background = sceneBgColor;
				mScene.color = val;
				});
				SceneGui.add(params5, "scene texture", {
				none: "none",

				// purple: "images/scene/purple.jpg",
				// red: "images/scene/red.jpg"
				purple: "../../assets/test/images/scene/purple.jpg",
				red: "../../assets/test/images/scene/red.jpg"
				}).onChange(function(val) {
				if (val == "none") {
					scene.background = null;
				} else {
					sceneBgTexture = createTexture(val);
					scene.background = sceneBgTexture;
				}
				mScene.imagePath = val;
				});

				// model
				var ModelGui = gui.addFolder("Model");
				var params6 = {
				position_x: model.position.x,
				position_y: model.position.y,
				position_z: model.position.z
				};
				ModelGui.add(params6, "position_x", -2000, 2000).onChange(function(
				val
				) {
				modelTargetPositionX = val;
				mModel.position_x = val;
				});
				ModelGui.add(params6, "position_y", -2000, 2000).onChange(function(
				val
				) {
				modelTargetPositionY = val;
				mModel.position_y = val;
				});
				ModelGui.add(params6, "position_z", -3000, 1).onChange(function(val) {
				model.position.z = val;
				mModel.position_z = val;
				});

				// 控制材质
				var MaterialGui = gui.addFolder("Material");
				var params3 = {
				roughness: standardMaterial.roughness,
				bumpScale: standardMaterial.bumpScale,
				envIntensity: standardMaterial.envMapIntensity,
				modelEnvMap: "envMap"
				};
				MaterialGui.add(params3, "roughness", 0, 1).onChange(function(val) {
				standardMaterial.roughness = val;
				mMaterial.roughness = val;
				});
				MaterialGui.add(params3, "bumpScale", 0, 100).onChange(function(val) {
				standardMaterial.bumpScale = val;
				mMaterial.bumpScale = val;
				});
				MaterialGui.add(params3, "envIntensity", 0, 10).onChange(function(val) {
				standardMaterial.envMapIntensity = val;
				mMaterial.envIntensity = val;
				});
				MaterialGui.add(params3, "modelEnvMap", {
				none: "none"

				// zero: "../../assets/test/images/sky/",
				// one: "../../assets/test/images/sky1/",
				// two: "../../assets/test/images/sky2/"
				// zero: "images/sky/",
				// one: "images/sky1/",
				// two: "images/sky2/"
				}).onChange(function(val) {
				if (val == "none") {
					standardMaterial.envMap = null;
				} else {
					modelEnvMap = createCubeMap(val);
					standardMaterial.envMap = modelEnvMap;
				}
				mMaterial.modelEnvMap = val;
				});

				// 控制平行光
				var directionalLightGui = gui.addFolder("DirectionalLight");
				var params1 = {
				"light color": directionalLight.color.getHex(),
				intensity: directionalLight.intensity,
				position_x: directionalLight.position.x,
				position_y: directionalLight.position.y,
				position_z: directionalLight.position.z
				};
				directionalLightGui
				.addColor(params1, "light color")
				.onChange(function(val) {
					directionalLight.color.setHex(val);
					mDirectionalLight.color = val;
				});
				directionalLightGui
				.add(params1, "intensity", 0, 10)
				.onChange(function(val) {
					directionalLight.intensity = val;
					mDirectionalLight.intensity = val;
				});
				directionalLightGui
				.add(params1, "position_x", -1000, 1000)
				.onChange(function(val) {
					directionalLight.position.x = val;
					mDirectionalLight.position_x = val;
				});
				directionalLightGui
				.add(params1, "position_y", -1000, 1000)
				.onChange(function(val) {
					directionalLight.position.y = val;
					mDirectionalLight.position_y = val;
				});
				directionalLightGui
				.add(params1, "position_z", -3000, -1000)
				.onChange(function(val) {
					directionalLight.position.z = val;
					mDirectionalLight.position_z = val;
				});

				// 控制聚光灯
				var spotLightGui = gui.addFolder("SportLight");
				var params2 = {
				"light color": spotLight.color.getHex(),
				intensity: spotLight.intensity,
				distance: spotLight.distance,
				angle: spotLight.angle,
				penumbra: spotLight.penumbra,
				position_x: spotLight.position.x,
				position_y: spotLight.position.y,
				position_z: spotLight.position.z
				};
				spotLightGui.addColor(params2, "light color").onChange(function(val) {
				spotLight.color.setHex(val);
				mSpotLight.color = val;
				});
				spotLightGui.add(params2, "intensity", 0, 10).onChange(function(val) {
				spotLight.intensity = val;
				mSpotLight.intensity = val;
				});
				spotLightGui.add(params2, "distance", 1, 2000).onChange(function(val) {
				spotLight.distance = val;
				mSpotLight.distance = val;
				});
				spotLightGui.add(params2, "angle", 0, Math.PI).onChange(function(val) {
				spotLight.angle = val;
				mSpotLight.angle = val;
				});
				spotLightGui.add(params2, "penumbra", 0.0, 1.0).onChange(function(val) {
				spotLight.penumbra = val;
				mSpotLight.penumbra = val;
				});
				spotLightGui
				.add(params2, "position_x", -1000, 1000)
				.onChange(function(val) {
					spotLight.position.x = val;
					mSpotLight.position_x = val;
				});
				spotLightGui
				.add(params2, "position_y", -1000, 1000)
				.onChange(function(val) {
					spotLight.position.y = val;
					mSpotLight.position_y = val;
				});
				spotLightGui
				.add(params2, "position_z", -3000, -1000)
				.onChange(function(val) {
					spotLight.position.z = val;
					mSpotLight.position_z = val;
				});
				// $(".showThreeD").append($(".dg.ac"));
				$(".dg.ac").css("display", "block");
			}

			function setSprite(event) {
				var intersects = getIntersects(event);
				if (intersects.length > 0) {
				var selected = intersects[0]; //取第一个物体
				//console.log("x坐标:" + selected.point.x);
				//console.log("y坐标:" + selected.point.y);
				//console.log("z坐标:" + selected.point.z);
				if (spriteNum < 7) {
					addSprite(selected.point);
				} else {
					alert("sprite 暂不支持6个以上");
				}
				}
			}

			function getIntersects(event) {
				var vector = new THREE.Vector3(); //三维坐标对象
				vector.set(
				event.clientX / window.innerWidth * 2 - 1,
				-(event.clientY / window.innerHeight) * 2 + 1,
				0.5
				);
				vector.unproject(camera);
				var raycaster = new THREE.Raycaster(
				camera.position,
				vector.sub(camera.position).normalize()
				);
				var intersects = raycaster.intersectObjects(model.children);

				return intersects;
			}

			function addSprite(point) {
				var spriteMap = new THREE.TextureLoader().load(
				"images/sprite" + spriteNum + ".png"
				);
				var spriteMaterial = new THREE.SpriteMaterial({
				map: spriteMap,
				color: 0xffffff
				});
				var sprite = new THREE.Sprite(spriteMaterial);
				var p = model.worldToLocal(point);
				sprite.position.x = p.x;
				if (p.y > 0) {
				sprite.position.y = p.y + 6;
				} else {
				sprite.position.y = p.y - 6;
				}
				if (p.z > 0) {
				sprite.position.z = p.z + 6;
				} else {
				sprite.position.z = p.z - 6;
				}
				sprite.scale.x = 16;
				sprite.scale.y = 16;
				sprite.ccwName = "Sprite0" + spriteNum;
				model.add(sprite);
				createDiv(sprite);
				sprites.push(sprite);

				spriteNum++;
			}

			function updateSprite(sprite, num) {
				var spriteMap = new THREE.TextureLoader().load(
				"images/sprite" + num + ".png"
				);
				var spriteMaterial = new THREE.SpriteMaterial({
				map: spriteMap,
				color: 0xffffff
				});
				sprite.material = spriteMaterial;
			}

			function createDiv(sprite) {
				var createDiv = document.createElement("div");
				createDiv.style.position = "relative";
				createDiv.style.background = "black";
				createDiv.style.border = "2px solid #2394bc";
				createDiv.style.padding = "6px";
				createDiv.style.paddingRight = "16px";
				createDiv.style.marginTop = "4px";
				createDiv.style.color = "white";
				createDiv.style.name = sprite.ccwName;
				createDiv.innerText =
				"" +
				sprite.ccwName +
				"\n  x: " +
				Math.floor(sprite.position.x) +
				"\n  y: " +
				Math.floor(sprite.position.y) +
				"\n  z: " +
				Math.floor(sprite.position.z);
				document.getElementById("spriteDivs").appendChild(createDiv);
				spriteDivs.push(createDiv);

				createDiv.onclick = function() {
				model.remove(sprite);
				sprites.removeByValue(sprite);
				document.getElementById("spriteDivs").removeChild(createDiv);
				spriteDivs.removeByValue(createDiv);
				for (var i = 0; i < sprites.length; i++) {
					updateSprite(sprites[i], i + 1);
					updateSpriteDiv(spriteDivs[i], i + 1);
				}
				spriteNum--;
				};

				return createDiv;
			}

			function updateSpriteDiv(div, num) {
				var name = "Sprite0" + num;
				div.innerText = div.innerText.replace(div.style.name, name);
				div.style.name = name;
			}

			function getProperties() {
				return {
				Camera: mCamera,
				Scene: mScene,
				Model: mModel,
				Material: mMaterial,
				DirectionalLight: mDirectionalLight,
				SpotLight: mSpotLight
				};
			}

			Array.prototype.removeByValue = function(val) {
				for (var i = 0; i < this.length; i++) {
				if (this[i] == val) {
					this.splice(i, 1);
					break;
				}
				}
			};
			},
			doNothing() {
			window.event.returnValue = false;
			return false;
			}
		}
	};
</script>
<style lang="less">
	.outsideCont {
	  width: 100%;
	  background-color: #d7d7d7;
	  padding: 20px 0 52px;
	  .clean {
	    clear: both;
	  }
	  .insideCont {
	    max-width: 940px;
	    margin: 0 auto;
	    .backBtn {
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
	      // vertical-align: middle;
	      img {
	        width: 16px;
	        vertical-align: middle;
	      }
	      .backFont {
	        font-size: 14px;
	        color: #fff;
	        line-height: 20px;
	        vertical-align: middle;
	      }
	    }
	    .container {
	      width: 100%;
	      background-color: #d7d7d7;
	      .containerTop {
	        height: 367px;
	        width: 940px;
	        padding: 33px 39px 41px;
	        box-sizing: border-box;
	        margin-bottom: 18px;
	        background-color: #fff;
	        .left {
	          float: left;
	          width: 260px;
	          height: 100%;
	          .exhibitsImgTitle {
	            margin: 0;
	            line-height: 20px;
	            font-family: PingFangSC-Regular;
	            font-size: 14px;
	            color: #333333;
	            margin-bottom: 13px;
	          }
	          .exhibitsImg {
	            height: 260px;
	            width: 260px;
	            background: #efefef;
	            border-radius: 2px;
	            position: relative;
	            .tipsCont {
	              position: absolute;
	              width: 145px;
	              height: 147px;
	              top: 60px;
	              left: 64px;
	              input {
	                display: none;
	              }
	              img {
	                display: block;
	                width: 69px;
	                height: 69px;
	                margin-bottom: 9px;
	                margin-left: 38px;
	              }
	              p {
	                margin: 0;
	                line-height: 20px;
	                font-family: PingFangSC-Light;
	                font-size: 14px;
	                color: #999999;
	                text-align: center;
	              }
	              .button {
	                width: 90px;
	                height: 30px;
	                background: #1966ff;
	                border-radius: 24px;
	                text-align: center;
	                margin-left: 27.5px;
	                margin-top: 19px;
	                cursor: pointer;
	                span {
	                  line-height: 30px;
	                  font-family: PingFangSC-Regular;
	                  font-size: 14px;
	                  color: #ffffff;
	                }
	              }
	            }
	          }
	        }
	        .right {
	          float: left;
	          width: 562px;
	          height: 100%;
	          margin-left: 39px;
	          .exhibits {
	            width: 100%;
	            box-sizing: border-box;
	            .exhibitsName {
	              margin: 0;
	              padding: 0;
	              font-family: PingFangSC-Regular;
	              font-size: 14px;
	              color: #333333;
	              margin-bottom: 12px;
	              line-height: 20px;
	            }
	            .exhibitsInput {
	              input {
	                height: 36px;
	                width: 100%;
	                border: none;
	                outline: none;
	                box-sizing: border-box;
	                padding: 8px 10px;
	                background: #efefef;
	                border-radius: 4px;
	                font-family: PingFangSC-Light;
	                font-size: 14px;
	                color: #999999;
	              }
	            }
	          }
	          .exhibitsIntroduce {
	            width: 100%;
	            box-sizing: border-box;
	            margin-top: 30px;
	            .exhibitsName {
	              margin: 0;
	              padding: 0;
	              font-family: PingFangSC-Regular;
	              font-size: 14px;
	              color: #333333;
	              margin-bottom: 10px;
	              line-height: 20px;
	            }
	            .exhibitsIntroduceInput {
	              background-color: #efefef;
	              .el-textarea__inner {
	                border: none;
	                background: #efefef;
	                border-radius: 4px;
	                height: 164px;
	                padding: 8px 10px;
	                font-family: PingFangSC-Light;
	                font-size: 14px;
	                color: #999999;
	              }
	            }
	          }
	        }
	      }
	      .containerBottom {
	        height: 570px;
	        width: 940px;
	        background-color: #d7d7d7;
	        .left {
	          float: left;
	          width: 461px;
	          height: 100%;
	          background-color: #fff;
	          .threeDCont {
	            box-sizing: border-box;
	            padding: 29px 31px 30px;
	            border-bottom: 1px solid #cfcfcf;
	            .title {
	              font-family: PingFangSC-Regular;
	              font-size: 14px;
	              color: #333333;
	              line-height: 20px;
	              margin: 0;
	            }
	            .buttonCont {
	              margin-top: 11px;
	              .inputCont {
	                width: 60px;
	                height: 30px;
	                border-radius: 24px;
	                box-sizing: border-box;
	                padding: 3px 16px;
	                float: left;
	                position: relative;
	                input {
	                  display: none;
	                }
	                input[type="file"] {
	                  color: transparent;
	                }
	                label {
	                  .forLabel {
	                    cursor: pointer;
	                    border-radius: 24px;
	                    position: absolute;
	                    width: 60px;
	                    height: 30px;
	                    background-color: #000;
	                    top: 0;
	                    left: 0;
	                    text-align: center;
	                    span {
	                      line-height: 30px;
	                      font-family: PingFangSC-Regular;
	                      font-size: 14px;
	                      color: #ffffff;
	                    }
	                  }
	                }
				  }
				  .fileName{
					  height: 34px;
					  margin-top: 12px;
					  line-height: 34px;
					  box-sizing: border-box;
					  padding-left: 13px;
					  background: #F0F0F0;
				  }
				  .fileNameZ{
					  height: 34px;
				  }
	            }
	            .tips {
	              float: left;
	              margin-left: 19px;
	              span {
	                line-height: 30px;
	                font-family: PingFangSC-Light;
	                font-size: 14px;
	                color: #666666;
	              }
	            }
	          }
	          .Texture {
	            box-sizing: border-box;
	            padding: 21px 31px 25px 31px;
	            border-bottom: 1px solid #cfcfcf;
	            .title {
	              font-family: PingFangSC-Regular;
	              font-size: 14px;
	              color: #333333;
	              line-height: 20px;
	              margin: 0;
	            }
	            .buttonCont {
	              margin-top: 11px;
	              .inputCont {
	                width: 60px;
	                height: 30px;
	                border-radius: 24px;
	                box-sizing: border-box;
	                padding: 3px 16px;
	                float: left;
	                position: relative;
	                input {
	                  display: none;
	                }
	                input[type="file"] {
	                  color: transparent;
	                }
	                label {
	                  .forLabel {
	                    cursor: pointer;
	                    border-radius: 24px;
	                    position: absolute;
	                    width: 60px;
	                    height: 30px;
	                    background-color: #000;
	                    top: 0;
	                    left: 0;
	                    text-align: center;
	                    span {
	                      line-height: 30px;
	                      font-family: PingFangSC-Regular;
	                      font-size: 14px;
	                      color: #ffffff;
	                    }
	                  }
	                }
				  }
				  .fileName{
					  height: 34px;
					  margin-top: 12px;
					  line-height: 34px;
					  box-sizing: border-box;
					  padding-left: 13px;
					  background: #F0F0F0;
				  }
				  .fileNameZ{
					  height: 34px;
				  }
	            }
	            .tips {
	              float: left;
	              margin-left: 19px;
	              span {
	                line-height: 30px;
	                font-family: PingFangSC-Light;
	                font-size: 14px;
	                color: #666666;
	              }
	            }
	          }
	          .bump {
	            box-sizing: border-box;
	            padding: 23px 31px 22px 31px;
	            .title {
	              font-family: PingFangSC-Regular;
	              font-size: 14px;
	              color: #333333;
	              line-height: 20px;
	              margin: 0;
	            }
	            .buttonCont {
	              margin-top: 11px;
	              .inputCont {
	                width: 60px;
	                height: 30px;
	                border-radius: 24px;
	                box-sizing: border-box;
	                padding: 3px 16px;
	                float: left;
	                position: relative;
	                input {
	                  display: none;
	                }
	                input[type="file"] {
	                  color: transparent;
	                }
	                label {
	                  .forLabel {
	                    cursor: pointer;
	                    border-radius: 24px;
	                    position: absolute;
	                    width: 60px;
	                    height: 30px;
	                    background-color: #000;
	                    top: 0;
	                    left: 0;
	                    text-align: center;
	                    span {
	                      line-height: 30px;
	                      font-family: PingFangSC-Regular;
	                      font-size: 14px;
	                      color: #ffffff;
	                    }
	                  }
	                }
				  }
				  .fileName{
					  height: 34px;
					  margin-top: 12px;
					  line-height: 34px;
					  box-sizing: border-box;
					  padding-left: 13px;
					  background: #F0F0F0;
				  }
				  .fileNameZ{
					  height: 34px;
				  }
	            }
	            .tips {
	              float: left;
	              margin-left: 19px;
	              span {
	                line-height: 30px;
	                font-family: PingFangSC-Light;
	                font-size: 14px;
	                color: #666666;
	              }
	            }
	          }
	          .material {
	            box-sizing: border-box;
	            padding: 22px 31px 30px 31px;
	            .title {
	              font-family: PingFangSC-Regular;
	              font-size: 14px;
	              color: #333333;
	              line-height: 20px;
	              margin: 0;
	            }
	            .buttonCont {
	              margin-top: 11px;
	              .inputCont {
	                width: 60px;
	                height: 30px;
	                border-radius: 24px;
	                box-sizing: border-box;
	                padding: 3px 16px;
	                float: left;
	                position: relative;
	                input {
	                  display: none;
	                }
	                input[type="file"] {
	                  color: transparent;
	                }
	                label {
	                  .forLabel {
	                    cursor: pointer;
	                    border-radius: 24px;
	                    position: absolute;
	                    width: 60px;
	                    height: 30px;
	                    background-color: #000;
	                    top: 0;
	                    left: 0;
	                    text-align: center;
	                    span {
	                      line-height: 30px;
	                      font-family: PingFangSC-Regular;
	                      font-size: 14px;
	                      color: #ffffff;
	                    }
	                  }
	                }
				  }
				  .fileName{
					  height: 34px;
					  margin-top: 12px;
					  line-height: 34px;
					  box-sizing: border-box;
					  padding-left: 13px;
					  background: #F0F0F0;
				  }
				  .fileNameZ{
					  height: 34px;
				  }
	            }
	            .tips {
	              float: left;
	              margin-left: 19px;
	              span {
	                line-height: 30px;
	                font-family: PingFangSC-Light;
	                font-size: 14px;
	                color: #666666;
	              }
	            }
	          }
	          .uploadEdit {
	            padding-left: 31px;
	            .button {
	              height: 44px;
	              width: 120px;
	              background: #1966ff;
	              border-radius: 24px;
	              text-align: center;
	              span {
	                font-family: PingFangSC-Regular;
	                font-size: 18px;
	                color: #ffffff;
	                // line-height: 44px;
	              }
	            }
	          }
	        }
	        .right {
	          float: left;
	          width: 461px;
	          height: 100%;
	          margin-left: 18px;
	          background-color: #fff;
	          .explanation {
	            padding: 29px 30px 30px 38px;
	            border-bottom: 1px solid #cfcfcf;
	            .exhibitsName {
	              margin: 0;
	              padding: 0;
	              font-family: PingFangSC-Regular;
	              font-size: 14px;
	              color: #333333;
	              margin-bottom: 11px;
	              line-height: 20px;
	            }
	            .uploadVoice {
	              position: relative;

	              .uploadLink {
	                margin: 0;
	                margin-bottom: 10px;
	                font-family: PingFangSC-Light;
	                font-size: 14px;
	                color: #999999;
	                a {
	                  word-wrap: break-word;
	                  color: #999999;
	                }
	              }
	              input {
	                display: none;
	              }
	              .uploadBtn {
	                float: left;
	                width: 90px;
	                height: 30px;
	                border: none;
	                background: #1966ff;
	                border-radius: 24px;
	                text-align: center;
	                line-height: 30px;
	                color: #ffffff;
	                cursor: pointer;
	                span {
	                  font-family: PingFangSC-Regular;
	                  font-size: 14px;
	                }
	              }
	              .uploadTips {
	                margin-left: 14px;
	                float: left;
	                font-family: PingFangSC-Light;
	                font-size: 14px;
	                color: #666666;
	                line-height: 30px;
	              }
	              .inputCont {
	                height: 36px;
	                width: 100%;
	                margin-bottom: 10px;
	                .el-input {
	                  height: 100%;
	                  width: 100%;
	                  input {
	                    height: 100%;
	                    border: none;
	                    margin: 0;
	                    padding: 8px 10px;
	                    box-sizing: border-box;
	                    background: #000000;
	                    border-radius: 4px;
	                    font-family: PingFangSC-Light;
	                    font-size: 14px;
	                    color: #ffffff;
	                  }
	                }
	              }
	              ul {
	                position: absolute;
	                bottom: 2px;
	                right: 0;
	                width: 200px;
	                .el-progress {
	                  .el-progress-bar__outer {
	                    border-radius: 0px;
	                    height: 5px !important;
	                    background-color: rgba(0, 0, 0, 0.7);
	                    .el-progress-bar__inner {
	                      border-radius: 0px;
	                      background: #1966ff;
	                    }
	                  }
	                }
	              }
	              .el-upload {
	                width: 90px;
	                height: 30px;
	                float: left;
	                .el-button {
	                  width: 100%;
	                  height: 100%;
	                  background: #1966ff;
	                  border-radius: 24px;
	                  border: none;
	                  font-family: PingFangSC-Regular;
	                  font-size: 14px;
	                  color: #ffffff;
	                  padding: 5px 17px;
	                }
	              }
	              .el-upload__tip {
	                margin: 0;
	                float: left;
	                font-family: PingFangSC-Light;
	                font-size: 14px;
	                color: #666666;
	                margin-left: 15px;
	                line-height: 30px;
	              }
	            }
	          }
	          .exhibitsVideo {
	            padding: 26px 30px 44px 38px;
	            .exhibitsName {
	              margin: 0;
	              padding: 0;
	              font-family: PingFangSC-Regular;
	              font-size: 14px;
	              color: #333333;
	              margin-bottom: 10px;
	            }
	            .uploadVideo {
	              position: relative;
	              .uploadVideoLeft {
	                // float: left;
	                width: 320px;
	                height: 170px;
	                background-color: #3d3d3d;
	                video {
	                  height: 100%;
	                  width: 100%;
	                }
	              }
	              .uploadVideoRight {
	                // float: left;
	                width: 100%;
	                // padding-top: 31px;
	                margin-bottom: 23px;
	                position: relative;
	                .el-input {
	                  width: 100%;
	                  height: 36px;
	                  input {
	                    height: 100%;
	                    box-sizing: border-box;
	                    padding: 8px 10px;
	                    border: none;
	                    background-color: #000;
	                    border-radius: 4px;
	                    font-family: PingFangSC-Light;
	                    font-size: 14px;
	                    color: #ffffff;
	                  }
	                }
	                .reUploadCont {
	                  width: 100%;
	                  height: 30px;
	                  // background-color: #999;
	                  border-radius: 24px;
	                  box-sizing: border-box;
	                  // padding: 5px 14px;
	                  margin-top: 11px;
	                  input {
	                    display: none;
	                  }
	                  .uploadBtn {
	                    float: left;
	                    width: 90px;
	                    height: 30px;
	                    border: none;
	                    background: #1966ff;
	                    border-radius: 24px;
	                    text-align: center;
	                    line-height: 30px;
	                    color: #ffffff;
	                    cursor: pointer;
	                    span {
	                      font-family: PingFangSC-Regular;
	                      font-size: 14px;
	                    }
	                  }
	                  .uploadTips {
	                    margin-left: 14px;
	                    float: left;
	                    font-family: PingFangSC-Light;
	                    font-size: 14px;
	                    color: #666666;
	                    line-height: 30px;
	                  }

	                  .reUpload {
	                    float: left;
	                    line-height: 20px;
	                    font-family: PingFangSC-Regular;
	                    font-size: 14px;
	                    color: #000000;
	                  }
	                  .font {
	                    padding: 0;
	                    margin: 0;
	                    width: 131px;
	                    margin-left: 14px;
	                    font-family: PingFangSC-Light;
	                    font-size: 14px;
	                    color: #666666;
	                    line-height: 30px;
	                  }
	                }
	              }
	            }
	          }
	        }
	      }
	    }
	    .btnGroup {
	      width: 100%;
	      height: 44px;
	      margin: 0 auto;
	      margin-top: 29px;
	      .btnGroupLeft {
	        float: left;
	        width: 50%;
	        height: 100%;
	        text-align: center;
	        .btnCont {
	          background: #999999;
	          width: 131px;
	          height: 100%;
	          float: left;
	          margin-right: 20px;
	          border-radius: 24px;
	          cursor: pointer;
	          span {
	            line-height: 44px;
	            font-family: PingFangSC-Regular;
	            font-size: 20px;
	            color: #000000;
	          }
	        }
	      }
	      .btnGroupRight {
	        float: left;
	        width: 50%;
	        height: 100%;
	        text-align: center;
	        .btnCont {
	          background: #1966ff;
	          width: 131px;
	          height: 100%;
	          float: right;
	          margin-left: 20px;
	          border-radius: 24px;
	          cursor: pointer;
	          span {
	            line-height: 44px;
	            font-family: PingFangSC-Regular;
	            font-size: 20px;
	            color: #ffffff;
	          }
					}
					.Ecode{
						display: none;
						padding-top: 20px;
						box-sizing: border-box;
						position: absolute;
						top: -250px;
						left: 140px;
						width: 220px;
						height: 235.2px;
						background: url('../../assets/images/ecodebg.png') no-repeat top left;
						background-size: 100% 100%;
						img{
							width: 180px;
							height: 180px;
						}
					}
	      }
	    }
	  }
	  .popup {
		  z-index: 5;
		display: none;
		position: fixed;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.7);
		top: 0;
		left: 0;
		.Cont {
		  height: 100%;
		  width: 100%;
		  position: relative;
		  .close{
			  cursor: pointer;
			  z-index: 10;
			  position: absolute;
			  top: 110px;
			  right: 415px;
		  }
		  .showCont {
			position: absolute;
			height: 591px;
			width: 700px;
			top: 50%;
			left: 50%;
			margin-top: -295.5px;
			margin-left: -350px;
			background-color: #000;
			#modelDiv{
				height: 500px;
				width: 100%;
			}
			canvas{
				height: 100% !important;
				width: 100% !important;
			}
			.btnGroup{
				width: 700px;
				height: 91px;
				position: absolute;
				.btnButton{
					width: 264px;
					padding-top: 24px;
					margin: 0 auto;
					.left{
						float: left;
						background: #1D1D1D;
						border-radius: 24px;
						width: 120px;
						height: 44px;
						text-align: center;
						cursor: pointer;
						span{
							font-family: PingFangSC-Regular;
							font-size: 18px;
							color: #FFFFFF;
							line-height: 44px;
						}
					}
					.right{
						float: left;
						margin-left: 24px;
						background: #1966FF;
						border-radius: 24px;
						width: 120px;
						height: 44px;
						text-align: center;
						cursor: pointer;
						span{
							font-family: PingFangSC-Regular;
							font-size: 18px;
							color: #FFFFFF;
							line-height: 44px;
						}
					}
				}
			}
		  }
		  
		}
		
	  }
	}
	.dg.ac {
		z-index: 5;
	  position: fixed !important;
	  width: 100%;
	  margin: 0 auto;
	  top: 0px !important;
	  .dg.a {
	    margin-right: 28px;
	    height: auto !important;
	  }
	  .dg ul {
	    height: auto !important;
	    overflow: auto;
	  }
	}
</style>
