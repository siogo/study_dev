<template>
	<div class="cartcontrol">
		<div class="cart-dec" v-show="food.count>0" @click.stop.prevent="decCart">
			<transition name="move"><span class="inner icon-remove_circle_outline"></span></transition>
		</div>
		<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
		<div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
	</div>
</template>

<script>
import Vue from 'vue';
export default{

	props:{
		food:{
			type: Object
		}
	},
	methods:{
		addCart(event){
			if(!event._constructed){
				return '';
			}
			if(!this.food.count){
				Vue.set(this.food,'count',1);
			}else{
				this.food.count++;
			}
		},
		decCart(event){
			if(!event._constructed){
				return '';
			}
			if(this.food.count){
				this.food.count--;
			}
		}
	}
}
</script>

<style>
@import "../../common/css/font.css";
.cartcontrol{
	font-size: 0;
	display: block;
}

.cartcontrol .cart-dec{
	display: inline-block;
	padding: 6px;
	/*transition: all 0.4s linear;*/
}

.move-enter-active,.move-leave-active{
	transition: all 0.4s linear;
	transform: rotate(0);
}

/*.move-leave-active{
	opacity: 1;
	transform: translate3d(0,0,0);
}*/
.move-enter,.move-leave-active{
	opacity: 0;
	transform: translate3d(24px,0,0);
}

.cartcontrol .move-transition{
	opacity: 1;
	transform: translate3d(0,0,0);
}

.cartcontrol .cart-dec .inner{
	font-size: 24px;
	line-height: 24px;
	color: rgb(0,160,220);
}

.cartcontrol .move-enter,.cartcontrol .move-leave{
	opacity: 0;
	transform: translate3d(24px,0,0);
}

.cartcontrol .cart-count{
	display: inline-block;
	vertical-align: top;
	width: 12px;
	padding-top: 6px;
	line-height: 24px;
	text-align: center;
	font-size: 10px;
	color: rgb(147,153,159);
}

.cartcontrol .cart-add{
	display: inline-block;
	padding: 6px;
	font-size: 24px;
	line-height: 24px;
	color: rgb(0,160,220);
}
</style>
