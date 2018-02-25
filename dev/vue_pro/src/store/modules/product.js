import Cookies from 'js-cookie';
const product = {
    state:{
        projectId: Cookies.get('projectId'),
        nowPage:1,
    },
    mutations:{
        SET_PRODUCT_ID:(state,id)=>{
            state.projectId = id;
        },
        SET_NOWPAGE:(state,nowpage) =>{
            state.nowPage = nowpage;
        }
    },
    getters:{
        getProjectId:state => state.projectId,
        getNowPage:state => state.nowPage,
    }
}

export default product