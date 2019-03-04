<template>
  <div class="about">
    <h1>This is an about page</h1>
    age:<input id="age" v-model="age">
    <button @click="changeValue" id="btnChangeValue">submit</button>
	<button @click="cleanAge" id="btnCleanAge">clean age</button>
  </div>
</template>
<script>
export default {
	data(){
		return {
			age:''
		}
	},
	methods:{
		changeValue(){
			this.age = 100;
		},
		cleanAge(){
			this.age = '';
		}
	}
}
</script>
<style scoped>

</style>
