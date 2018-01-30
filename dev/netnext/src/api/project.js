import fetch from '../utils/fetch.js'
import Qs from 'qs'

export function getProject(params){
    return fetch({
        url: '/Project/index',
        method: 'get',
        params,
    })
}

export function addProject(params){
    return fetch({
        url: '/Project/Add',
        method: 'post',
        data: Qs.stringify(params)
    })
}

export function uploadLogo(params){
    return fetch({
        url: '/Conn/upload',
        method: 'post',
        data: params,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

export function getCount(){
    return fetch({
        url: '/Project/ProjectAmount',
        method: 'get',
    })
}


// update
export function getProDetail(params){
    return fetch({
        url: '/Project/detailed',
        method: 'get',
        params
    })
}

export function editProduct(params){
    return fetch({
        url: '/Project/Edit',
        method: 'post',
        data: Qs.stringify(params)
    })
}
