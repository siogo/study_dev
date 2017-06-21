<template>
<div>
	<p>{{this.$route.params.id}}</p>	
</div>  
</template>

<script>
export default {
	created(){
		console.log(this.$route.params);
	}
}
</script>

<style>

</style>
