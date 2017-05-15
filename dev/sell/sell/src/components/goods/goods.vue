<template>
	<div class="goods">
		<div class="menu-wrapper" ref="menuWrapper">
			<ul>
				<li v-for="(item,index) in goods" class="menu-item" :class="{'current':currentIndex=== index}" @click="selectMenu(index,$event)">
					<span class="text">
						<span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
					</span>
				</li>
			</ul>
		</div>
		<div class="foods-wrapper" ref="foodsWrapper">
			<ul>
				<li v-for="item in goods" class="food-list food-list-hook">
					<h1 class="title">{{item.name}}</h1>
					<ul>
						<li @click="selectFood(food,$event)" v-for="food in item.foods" class="food-item">
							<div class="icon">
								<img width="57" height="57" :src="food.icon">
							</div>
							<div class="content">
								<h2 class="name">{{food.name}}</h2>
								<p class="desc">{{food.description}}</p>
								<div class="extra">
									<span class="count">月售{{food.sellCount}}</span><span>好评率{{food.rating}}%</span>
								</div>
								<div class="price">
									<span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
								</div>
								<div class="cartcontrol-wrapper">
									<cartcontrol :food='food'></cartcontrol>
								</div>
							</div>

						</li>
					</ul>
				</li>
			</ul>
		</div>
		<shopcart :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shopcart>
		<food :food="selectedFood" ref="food"></food>
	</div>

</template>

<script type="text/ecmascript-6">
	import BScroll from "better-scroll";
	import shopcart from "../shopcart/shopcart.vue";
	import cartcontrol from "../cartcontrol/cartcontrol.vue";
	import food from "../food/food.vue"

	const ERR_OK = 0;

	export default{
		props:{
			seller:{
				type: Object
			}
		},
		data(){
			return {
				goods:[],
				listHeight: [],
				scrollY: 0,
				selectedFood: {}
			}
		},
		computed:{
			currentIndex(){
				for(let i = 0;i<this.listHeight.length;i++){
					let height1 = this.listHeight[i];
					let height2 = this.listHeight[i+1];
					if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)){
						return i;
					}
				}
				return 0;
			},
			selectFoods(){
				let foods = [];
				// 第一层拿到每个分类
				this.goods.forEach((good)=>{
					// 第二层拿到每个food
					good.foods.forEach((food)=>{
						if(food.count){
							foods.push(food);
						}
					})
				})
				return foods;
			}
		},
		created(){
			this.classMap = ['decrease','discount','special','invoice','guarantee'];
      		this.$http.get('/api/goods').then((response) => {
        		response = response.body;
        		if(response.errno === ERR_OK){
          			// this.seller 是data中的seller
          			this.goods = response.data;
          			this.$nextTick(()=>{
          				this._initSrcoll();
          				this._calculateHeight();
          			});
        		}
      		});
    	},
    	methods:{
    		_initSrcoll(){
    			this.menuSrcoll = new BScroll(this.$refs.menuWrapper,{
    				click:true
    			});
    			this.foodSrcoll = new BScroll(this.$refs.foodsWrapper,{
    				probeType: 3,
    				click: true
    			});
    			// 实时监听scroll的位置并记录scrollY
    			this.foodSrcoll.on('scroll',(pos)=>{
    				this.scrollY = Math.abs(Math.round(pos.y));
    			})
    		},
    		_calculateHeight(){
    			// 将每个food-list的高度push进listHeight
    			let height = 0;
    			this.listHeight.push(height);
    			let foodlist = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
    			for (let i = 0; i < foodlist.length; i++) {
    				height = height + foodlist[i].clientHeight;
    				this.listHeight.push(height);
    			}
    		},
    		selectMenu(index, event){
    			if(!event._constructed){
    				return;
    			}
    			let foodlist = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
    			let el = foodlist[index];
    			this.foodSrcoll.scrollToElement(el,300);
    		},
    		selectFood(food, event){
    			if(!event._constructed){
    				return;
    			}
    			this.selectedFood = food;
    			this.$refs.food.show();
    		}
    	},
    	components:{
    		shopcart,
    		cartcontrol,
    		food
    	}
	}
</script>

<style lang="less">
.goods{
	position: absolute;
	width: 100%;
	top: 174px;
	bottom: 46px;
	display: flex;
	overflow: hidden;
	.menu-wrapper{
		flex: 0 0 80px;
		width: 80px;
		background: #f3f5f7;
		.menu-item{
			display: table;
			height: 54px;
			width: 56px;
			line-height: 14px;
			padding: 0 12px;
			.icon{
				display: inline-block;
				width: 12px;
				height: 12px;
				margin-right: 2px;
				background-size: 12px 12px;
				background-repeat: no-repeat;
				vertical-align: top;

			}
			@media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2){
				.decrease{
					background-image: url('./decrease_3@2x.png');
				}
				.discount{
					background-image: url('./discount_3@2x.png');
				}
				.guarantee{
					background-image: url('./guarantee_3@2x.png');
				}
				.invoice{
					background-image: url('./invoice_3@2x.png');
				}
				.special{
					background-image: url('./special_3@2x.png');
				}
			}
			@media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
				.decrease{
					background-image: url('./decrease_3@3x.png');
				}
				.discount{
					background-image: url('./discount_3@3x.png');
				}
				.guarantee{
					background-image: url('./guarantee_3@3x.png');
				}
				.invoice{
					background-image: url('./invoice_3@3x.png');
				}
				.special{
					background-image: url('./special_3@3x.png');
				}
			}
			.text{
				font-size: 12px;
				display: table-cell;
				width: 56px;
				vertical-align: middle;
				border-bottom: 1px rgba(7, 17, 27, 0.1) solid;
			}
		}
		.current{
			position: relative;
			margin-top: 1px;
			z-index: 10;
			background-color: #fff;
			font-weight: 700;
			.text{
				border: none;
			}
		}
		.menu-item:last-child{
			.text{
				border: none;
			}
		}
	}
	.foods-wrapper{
		flex: 1;
		.title{
			padding-left: 14px;
			height: 26px;
			line-height: 26px;
			border-left: 2px solid #d9dde1;
			font-size: 12px;
			color: rgb(147,153,159);
			background-color: #f3f5f7;
		}
		.food-item{
			display: flex;
			position: relative;
			margin: 18px;
			padding-bottom: 18px;
			border-bottom: 1px rgba(7, 17, 27, 0.1) solid;
		}
		.food-item:last-child{
			border: none;
			margin-bottom: 0px;
		}
		.icon{
			flex:0 0 57px;
			margin-right: 10px;
		}
		.content{
			flex:1;
			.name{
				margin: 2px 0 8px 0;
				height: 14px;
				line-height: 14px;
				font-size: 14px;
				color: rgb(7,17,27);
			}
			.desc,.extra{
				line-height: 10px;
				font-size: 10px;
				color: rgb(147,153,159);
			}
			.desc{
				margin-bottom: 8px;
				line-height: 12px;
			}
			.extra{
				.count{
					margin-right: 12px;
				}
			}
			.count{
					margin-right: 12px;
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
			.cartcontrol-wrapper{
				position: absolute;
				right: 0;
				bottom: 12px;
			}
		}
	}
}
</style>
