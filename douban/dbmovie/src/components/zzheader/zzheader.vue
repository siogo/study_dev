<template>
	<div class="headContent">
		<div class="TalionNav-primary">
			豆瓣
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.headContent{
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	z-index: 9999;
	background: #fff;
	.TalionNav-primary{
		display: flex;
		padding: 0 18px;
		background: #fff;
		border-bottom: 1px solid #f3f3f3;
		height: 47px;
		box-sizing: border-box;
		justify-content: space-between;
	}
}
</style>
