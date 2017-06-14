export default{
    // getParamsync(context,Object){
    //     // state.START_PARMA = Object
    //     setTimeout(()=>{
    //         context.commit('getParam',Object)
    //     },10000)
    // }
    incrementsync(context){
        context.commit('increment')
    }
}