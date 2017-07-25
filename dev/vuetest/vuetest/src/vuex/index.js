import Vuex from 'vuex'
import Vue from 'vue'

state:{
    list:['afwefefdsaergdsa','fefafaa','faefsdfaefaeffdaef','fefaefef','fefsf'],
    showChildComponent:true,
    message:'给各个组件的消息'
},
mutations:{
    add(state,data){
        state.list.push(data);
    }
},
actions:{
    add({commit,state},data){
        setTimeout(function(){
            commit('add',data);
        },2000);
    }
},
getters:{
    filterList(state){
        let len = state.list.length,
        newList;
        for(let i=0;i<len;i++){
            let element = state.list[i];
            element.length>10?newList.push(element):null;
        }
        return newList;
    }
}