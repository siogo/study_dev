import Cookies from 'js-cookie';

const user = {
    state:{
        access_token: Cookies.get('Token'),
        name: Cookies.get('UserName'),
        logo: Cookies.get('Logo'),
        occupation: Cookies.get('Occupation'),
        project_count: Cookies.get('Project_count'),
        exhibits_count: Cookies.get('Exhibits_count'),
    },
    mutations:{
        SET_TOKEN:(state,access_token) =>{
            state.access_token = access_token;
        },
        SET_USERNAME:(state,name) =>{
            state.name = name
        },
        SET_LOGO:(state,logo) =>{
            state.logo = logo
        },
        SET_OCCUPATION:(state,occupation) =>{
            state.occupation = occupation
        },
        SET_PROJECT_COUNT:(state,projectcount) =>{
            state.project_count = projectcount
        },
        SET_EXHIBITS_COUNT:(state, exhibitscount) => {
            state.exhibits_count = exhibitscount
        },
    },
    
}

export default user