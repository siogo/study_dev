<template>
	<div>
		<input type="file" :id="id" @change="upload" :accept="inputAccept">
		<label :for="id" class="label">
			<div>{{value}}</div>
		</label>
	</div>
</template>
<script>
import axios from 'axios';
export default {
	data(){
		return{
			index:1,
			uploadNum:1,
			block:0.5*1024*1024,
			totalblock:'',
			file:'',
			formData:'',
			axiosServer:'',
			// input canshu
		}
	},
	props:{
		id:{
			type:String
		},
		method:{
			type:String
		},
		action:{
			type:String
		},
		accept:{
			type:String
		},
		value:{
			type:String
		},
		headers:{
			type:Object
		}
	},
	created(){

		console.log(this.id);
		var server = axios.create({
			baseURL:process.env.BASE_API
		})
		
		server.interceptors.request.use(function(config){
			return config;
		},function(error){
			return Promise.reject(error);
		})

		this.axiosServer = server;
	},
	computed:{
		inputAccept(){
			return this.accept;
		}
	},
	methods:{
		axiosUpload(params){
			return this.axiosServer({
				url: this.action,
				method: this.method,
				data: params,
				headers:this.headers
			})
		},
		upload(){
			this.file = document.getElementById(this.id).files[0];
			this.totalblock = Math.ceil(this.file.size/this.block);
			var formData = new FormData();
			formData.append('fileName',this.file.name);
			formData.append('total',this.totalblock);
			formData.append('index',this.index);
			formData.append('uploadId',this.uploadNum);
			formData.append('data',null);
			this.formData = formData;
			this.UploadPost(this.file,formData,'');
		},
		UploadPost(file,formData,uploadId){
			var uploadBlock = this.file.slice((this.index-1)*this.block,this.index*this.block);
			formData.set('data',uploadBlock);
			formData.set('index',this.index);
			formData.set('uploadId',uploadId);
			this.uploadFilter(formData);
		},
		uploadFilter(params){
			this.axiosUpload(params).then(res =>{
				let {data} = res;
				this.index++;
				if(this.index <= this.totalblock){
					this.UploadPost(this.file,this.formData,data.result.UploadID);
				}else if(this.index > this.totalblock){
					console.log(data);
					this.$emit('result',data);
					this.index = 1;
				}
			})
		}
	}
}
</script>
<style scoped>
input{
	display: none;
}
.label{
	display: block;
	cursor: pointer;
}

</style>
