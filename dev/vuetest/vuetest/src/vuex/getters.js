import {mapGetters} from 'vuex'
export default{
    doneTodos: state => {
        return state.todos.filter(todo => todo.done)
    },
    showMsg: function(state){
        return state.START_PARMA.ck
    }
}