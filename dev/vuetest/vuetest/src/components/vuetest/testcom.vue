<template>
    <div>
        <p>hello child</p>
        <p @click="show(fatherMessage)">{{fatherMessage}}</p>
    </div>
</template>

<script>
export default {
    props:{
        fatherMessage:{
            type: Object
        }
    },
    data(){
        return {}
    },
    methods:{
        show(obj){
            var str = {'name':'child','str':'return to father'};
            this.$emit('returnFather',str)
        }
    }
}
</script>


<style>

</style>
