<template>
    <div class="listContent">
        name:<input v-model="formname">
		age:<input v-bind="formage" @change="changetest($event,formage)">

		<div>
			{{formData}}
		</div>
		<button @click="submit">submit</button>
    </div>
</template>

<script>
export default {
    
    data(){
        return{
			formname:'',
			formage:'',
            formData:{
				name:'',
				age:''
			}
        }
	},
	watch:{
		changetest(val){
			console.log(val)
		}
	},
    methods:{
		submit(){
			console.log(this.formData)
		},
		changetest(e,item){
			console.log(e);
			console.log(e.target.value);
		}
	}
}
</script>

<style scope>

</style>
