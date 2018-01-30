<template>
<div>
	<div>
		<uploadCom @result="getResult" class="first" id="file1" method="post" action="/Conn/upload" accept="audio/*" value="创建项目" :headers="headers"></uploadCom>
	</div>
	<span>{{fileResult}}</span>
	<div>
		<uploadCom class="aaa" id="file2" method="post" action="/Conn/upload" accept="video/*" value="video" :headers="headers"></uploadCom>
	</div>
	<div>
		<input type="file" name="testwebsocket" id="testwebsocket" @change="websock">
	</div>

	
</div>
</template>
<script>
import uploadCom from './uploadCom.vue'
export default {
	components:{
		uploadCom:uploadCom
	},
	data(){
		return{
			headers:{
				'Authorization':'',
				'Content-Type': 'multipart/form-data',
			},
			fileResult:'',
		}
	},
	created(){
		this.headers.Authorization = this.$store.getters.access_token;
	},
	methods:{
		getResult(msg){
			this.fileResult = msg.result.FileInfo.FilePath;
		},
		websock(){
			var file = document.getElementById('testwebsocket').files[0];
			console.log(file);
			var formdata = new FormData();
			formdata.append('data',file);
			// modeldisplay.ccw.lab/Conn/upload
			var socket = new WebSocket("ws://modeldisplay.ccw.lab/Conn/upload");
			var message = {
				data:formdata
			}
			socket.send(JSON.stringify(message));
		}
	}
}
</script>
<style scoped>
.first{
	width: 120px;
	height: 44px;
	background: #1966FF;
	border-radius: 24px;
	font-family: PingFangSC-Regular;
	font-size: 18px;
	color: #FFFFFF;
	text-align: center;
	line-height: 44px;
	cursor: pointer;
}
.aaa{
	display: block;
	width: 90px;
	height: 30px;
	text-align: center;
	color: red;
	font-size: 12px;
	line-height: 30px;
	background: #1966FF;
	border-radius: 24px;
	font-family: PingFangSC-Regular;
	font-size: 14px;
	color: #FFFFFF;
}
</style>
