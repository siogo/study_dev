<template>
	<div id="app" style="height:100%;">
	
		<div class="indexContainer">
			<div class="indexLogo">
				<div class="logoContainer">
					<img src="./assets/loginIcon.png">
				</div>
			</div>
			<div class="indexNav">
				<div class="navContainer">
					<div class="navItem">
						<img class="home" src="./assets/home.png">
						<span>首页</span>
					</div>
					<div class="navItem">
						<img class="newRecord" src="./assets/newRecord.png">
						<span>新建记录</span>
					</div>
					<div class="navItem">
						<img class="record" src="./assets/record.png">
						<span>拜访记录</span>
					</div>
					<div class="navItem">
						<img class="myImfo" src="./assets/myImfo.png">
						<span>我的信息</span>
					</div>
				</div>
			</div>
			<div class="mainContainer">
				<div class="containerData">
					<div class="recordData">
						<div class="leftData">
							<p class="monthRecord">
								<img src="./assets/quarterly.png">
								<span>本月记录</span>
							</p>
							<p class="company">拜访客户公司：<span>3</span> 家</p>
							<p class="num">拜访客户次数：<span>5</span> 次</p>
						</div>
						<div class="rightData">
							<p class="monthRecord">
								<img src="./assets/quarterly.png">
								<span>本季度记录</span>
							</p>
							<p class="company">拜访客户公司：<span>3</span> 家</p>
							<p class="num">拜访客户次数：<span>5</span> 次</p>
						</div>
					</div>
					<div class="canlendarCont">
						<calendar-input :limit="limit" :choosed="choosed"></calendar-input>
					</div>
				</div>
			</div>
			<div class="footer">
				<img src="./assets/loginCoperight.png">
			</div>
		</div>
	</div>
</template>

<script>
	import Hello from './components/Hello'
	import calendarInput from '../node_modules/calendar-plugin/calendar-input.vue';

	export default {
		name: 'app',
		components: {
			Hello,
			calendarInput
		},
		data() {
			return {
				limit: {  //日期可选范围
					type: Object,
					default() {
						return {
							minYear: 1900,
							minMonth: 1,
							minDay: 1,
							maxYear: 2030,
							maxMonth: 3,
							maxDay: 20
						}
					}
				},
				choosed:[9,12,15]
			}
		}
	}
</script>

<style lang="less">
	html,
	body {
		margin: 0;
		padding: 0;
		height: 100%;
	}
	
	.indexContainer {
		height: 100%;
		position: relative;
		.indexLogo {
			width: 100%;
			height: 79px;
			.logoContainer {
				box-sizing: border-box;
				max-width: 1024px;
				margin: 0 auto;
				height: 100%;
				padding-top: 20px;
			}
		}
		.indexNav {
			width: 100%;
			height: 62px;
			background: #e60029;
			.navContainer {
				max-width: 1024px;
				margin: 0 auto;
				overflow: hidden;
				height: 100%;
				color: #fff;
				.navItem {
					width: 25%;
					float: left;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					cursor: pointer;
					span {
						margin-left: 13px;
					}
				}
			}
		}
		.mainContainer {
			position: absolute;
			width: 100%;
			top: 141px;
			bottom: 47px;
			left: 0;
			right: 0;
			background: #f1f1f1;
			.containerData {
				padding: 44.5px 70.3px 0px;
				position: relative;
				height: 100%;
				box-sizing: border-box;
				max-width: 1024px;
				margin: 0 auto;
				background: #fff;
				.recordData {
					display: flex;
					justify-content: space-between;
					.leftData,
					.rightData {
						width: 47.88%;
						height: 193px;
						border: 1px solid #d9d9d9;
						border-radius: 3px;
						padding: 20px 14px 0;
						box-sizing: border-box;
						background: linear-gradient(#ffffff, #f8f8f8);
						box-shadow: 0px 4px 10px #eeeeee;
						.monthRecord {
							display: flex;
							align-items: center;
							justify-content: center;
							margin: 0;
							padding-bottom: 13px;
							border-bottom: 1px solid #c1c1c1;
							span {
								margin-left: 16px;
								font-size: 23px;
								color: #e60129;
							}
						}
						.company {
							text-align: center;
							margin: 0;
							margin-top: 21px;
							color: #5c5c5c;
							span {
								font-size: 24px;
								color: #e60129;
							}
						}
						.num {
							text-align: center;
							margin: 0;
							margin-top: 16px;
							color: #5c5c5c;
							span {
								font-size: 24px;
								color: #e60129;
							}
						}
					}
				}
				.canlendarCont {
					position: absolute;
					top: 264px;
					left: 70.3px;
					right: 70.3px;
					bottom: 20px;
					border-radius: 2%;
				}
			}
		}
		.footer{
			position: absolute;
			height: 47px;
			background: #f1f1f1;
			width: 100%;
			bottom: 0;
			box-sizing: border-box;
			padding-top: 19px;
			img{
				display: block;
				margin: 0 auto;
			}
		}
	}
	
	
	@media screen and (max-width: 1024px) {
		.indexContainer {
			.indexLogo {
				height: 44px;
				box-sizing: border-box;
				
				.logoContainer {
					padding-top: 14px;
					img {
						width: 86px;
						display: block;
						margin-left: 15px;
					}
				}
			}
			.indexNav {	
				height: 44px;	
				.navContainer {	
					.navItem {
						display: flex;
						flex-direction: column;
						span {
							margin-left: 0px;
							font-size: 12px;
							margin-top: 3px;
						}
						.home {
							width: 17px;
						}
						.newRecord {
							width: 14px;
						}
						.record {
							width: 15px;
						}
						.myImfo {
							width: 17px;
						}
					}
				}
			}
			.mainContainer {
				top: 88px;
				bottom: 55px;
				left: 0;
				right: 0;
				.containerData {
					padding: 16px 15px 0px;
					max-width: 640px;
					margin: 0 auto;
					.recordData {
						.leftData,
						.rightData {
							padding: 13px 9px 0;
							height: 152px;
							.monthRecord {
								img {
									width: 18px;
								}
								span {
									margin-left: 5px;
									font-size: 16px;
								}
							}
							.company {	
								margin-top: 16px;
								font-size: 14px;
								span {
									font-size: 20px;
								}
							}
							.num {
								font-size: 14px;
								margin-top: 11px;
								span {
									font-size: 20px;
								}
							}
						}
					}
					.canlendarCont {
						position: absolute;
						top: 187px;
						left: 15px;
						right: 15px;
						bottom: 0;
					}
				}
			}
			.footer{
				height: 40px;
				background: #fff;	
				box-sizing: border-box;
				padding-top: 10px;
				img{
					display: block;
					margin: 0 auto;
					width: 40%;
				}
			}
		}
	}
	
	@media screen and (max-width: 339px) {
		.indexContainer {
			.mainContainer {
				.containerData {
					.recordData {
						.leftData,
						.rightData {
							.company {
								margin-top: 16px;
								font-size: 12px;
								span {
									font-size: 19px;
								}
							}
							.num {
								font-size: 12px;
								margin-top: 11px;
								span {
									font-size: 19px;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
