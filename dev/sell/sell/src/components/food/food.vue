<template>
<transition name="fade">
	<div v-show="showFlag" class="food">
		<div class="food-content">
			<div class="image-header">
				<img :src="food.image">
				<div class="back" @click="hide">
					<i class="font">关闭</i>
				</div>
			</div>
			<div class="content">
				<h1 class="title">{{food.name}}</h1>
				<div class="detail">
					<span class="sell-count">月售{{food.sellCount}}份</span>
					<span class="rating">好评率{{food.rating}}%</span>
				</div>
				<div class="price">
					<span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
				</div>
			</div>
		</div>
	</div>
</transition>
</template>

<script>


export default {
	props:{
		food:{
			type:Object
		}
	},
	data(){
		return{
			showFlag: false
		}
	},
	methods:{
		show(){
			this.showFlag = true;
		},
		hide(){
			this.showFlag = false;
		}
	}
}
</script>

<style lang="less">
.fade-enter-active,.fade-leave-active {
    transition: all 0.2s linear;
    transform: translate3d(0, 0, 0);
}
.fade-enter,.fade-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.food{
	position: fixed;
	left: 0;
	top: 0;
	bottom: 48px;
	z-index: 30;
	width: 100%;
	background: #fff;
	.food-content{


		.image-header{
			position: relative;
			width: 100%;
			height: 0;
			padding-top: 100%;
			img{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
			.back{
				position: absolute;
				top: 10px;
				left: 10px;
				.font{
					display: block;
					color: #fff;
				}
			}
		}
		.content{
			padding: 18px;
			.title{
				font-weight: 700;
				line-height: 14px;
				margin-bottom: 8px;
				font-size: 14px;
				color: rgb(7,17,27);
			}
			.detail{
				margin-bottom: 18px;
				line-height: 10px;
				height: 10px;
				font-size: 0;
				.sell-count,.rating{
					font-size: 10px;
					color: rgb(147,153,159);
				}
				.sell-count{
					margin-right: 12px;
				}
			}
			.price{
				font-weight: 700;
				line-height: 24px;
				.now{
					color: rgb(240,20,20);
					margin-rigth: 18px;
					font-size: 14px;
				}
				.old{
					text-decoration: line-through;
					font-size: 10px;
					color: rgb(147,153,159);
				}
			}
		}
	}
}
</style>
