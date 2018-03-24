import fetch from '../utils/fetch.js';
import Qs from 'qs'
export function login(params){
    return fetch({
        url:'/Login/Login',
        method:'post',
        data:params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        transformRequest: [function (data) {
            data = Qs.stringify(data);
            return data;
        }],
    })
}

export function getCode(){
    return fetch({
        url:'/Login/VerificationCode',
        method:'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
}

// export function login(params) {
//     return fetch.post('/Login/Login', Qs.stringify(params), { 
//         headers:{
//             'Content-Type': 'application/x-www-form-urlencoded',
//         }
//     });
// }

// export function getCode() {
//     return fetch.post('/Login/VerificationCode')
// }
