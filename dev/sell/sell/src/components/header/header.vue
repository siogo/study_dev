<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img width="64" height="64" :src="seller.avatar">
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="description">
					{{seller.description}}/{{seller.deliveryTime}}分钟送达
				</div>
				<div v-if="seller.supports" class="support">
					<span class="icon" :class="classMap[seller.supports[0].type]"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
			</div>
			<div v-if="seller.supports" class="support-count">
				<span class="count">{{seller.supports.length}}</span>
				<i class="icon-keyboard_arrow_right"></i>
			</div>
		</div>
		<div class="bulletin-wrapper"></div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default{
		props:{
			seller:{
				type: Object
			}
		},
		created(){
			this.classMap = ['decrease','discount','special','invoice','guarantee']
		}
	}
</script>


<style>
.header{
	color: #fff;
	background: #999;
}
.header .content-wrapper{
	padding: 24px 12px 18px 24px;
	font-size: 0;
	position: relative;
}
.header .content-wrapper .avatar{
	display: inline-block;
	vertical-align: top;
}
.header .content-wrapper .avatar img{
	border-radius: 2px;
}
.header .content-wrapper .content{
	display: inline-block;
	margin-left: 16px;
}
.header .content-wrapper .support-count{
	position: absolute;
	right: 12px;
	bottom: 18px;
	padding: 0 8px;
	height: 24px;
	line-height: 24px;
	border-radius: 14px;
	background-color: rgba(0,0,0,0.2);
	text-align: center;
}
.header .content-wrapper .count{
	font-size: 10px;
}
.header .content-wrapper .icon-keyboard_arrow_right{
	font-size: 10px;
}
.header .content-wrapper .content .title{
	margin: 2px 0 8px 0;
}
.header .content-wrapper .content .description{
	margin-bottom: 10px;
	line-height: 12px;
	font-size: 12px;
}
.header .content-wrapper .content .support{

}
.header .content-wrapper .content .support .icon{
	display: inline-block;
	width: 12px;
	height: 12px;
	margin-right: 4px;
	background-size: 12px 12px;
	background-repeat: no-repeat;
	vertical-align: top;
}
.header .content-wrapper .content .support .text{
	font-size: 10px;
	line-height: 12px;
}
@media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2){
	.header .content-wrapper .content .support .decrease{
		background-image: url('./decrease_1@2x.png');
	}
}
@media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
	.header .content-wrapper .content .support .decrease{
		background-image: url('./decrease_1@3x.png');
	}
}
@media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2){
	.header .content-wrapper .content .support .discount{
		background-image: url('./discount_1@2x.png');
	}
}
@media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
	.header .content-wrapper .content .support .discount{
		background-image: url('./discount_1@3x.png');
	}
}
@media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2){
	.header .content-wrapper .content .support .guarantee{
		background-image: url('./guarantee_1@2x.png');
	}
}
@media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
	.header .content-wrapper .content .support .guarantee{
		background-image: url('./guarantee_1@3x.png');
	}
}
@media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2){
	.header .content-wrapper .content .support .invoice{
		background-image: url('./invoice_1@2x.png');
	}
}
@media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
	.header .content-wrapper .content .support .invoice{
		background-image: url('./invoice_1@3x.png');
	}
}
@media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2){
	.header .content-wrapper .content .support .special{
		background-image: url('./special_1@2x.png');
	}
}
@media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
	.header .content-wrapper .content .support .special{
		background-image: url('./special_1@3x.png');
	}
}
.header .content-wrapper .content .title .brand{
	display: inline-block;
	width: 30px;
	height: 18px;
}
@media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
	.header .content-wrapper .content .title .brand{
		display: inline-block;
		width: 30px;
		height: 18px;
		background-image: url('./brand@3x.png');
		background-size: 30px 18px;
		background-repeat: no-repeat;
	}
}
.header .content-wrapper .content .title .brand{
	display: inline-block;
	vertical-align: top;
	width: 30px;
	height: 18px;
	background-image: url('./brand@2x.png');
	background-size: 30px 18px;
	background-repeat: no-repeat;
}
.header .content-wrapper .content .title .name{
	margin-left: 6px;
	font-size: 16px;
	line-height: 18px;
	font-weight: bold;
}


</style>

