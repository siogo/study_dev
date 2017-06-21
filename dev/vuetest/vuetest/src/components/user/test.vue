<template>
<div>
	i am a test
	<button @click="submit">提交</button>
</div>
</template>

<script>
export default {
	methods:{
		submit(){
			this.$router.push({path:'/user/foo'})
		}
	}
}
</script>

<style>

</style>
