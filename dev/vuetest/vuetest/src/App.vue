<template>
    <div id="app">
        <textcom :fatherMessage="message" @returnFather="fathershow"></textcom>
        <!-- <p>{{message}}</p> -->
    </div>
</template>

<script>
import textcom from './components/vuetest/testcom.vue';
export default {
    data(){
        return {
            'message':{'name':'haha','str':'this is father'}
        }
    },
    components:{
        'textcom':textcom
    },
    methods:{
        fathershow(str){
            this.message.name = str.name;
            console.log(this.message);
        }
    }
}
</script>

<style>

</style>
