import fetch from '../utils/fetch.js';
import Qs from 'qs'

export function addExhibit(params) {
    return fetch({
        url: '/Exhibits/Add',
        method: 'post',
        data: Qs.stringify(params),
    })
}
export function exhibitDetail(data) {
    return fetch({
        url: '/Exhibits/detailed',
        method: 'get',
        params: data,
    })
}

export function editExhibit(params){
    return fetch({
        url: '/Exhibits/Edit',
        method: 'post',
        data: Qs.stringify(params),
    })
}

export function upload(params){
    return fetch({
        url: '/Conn/upload',
        method: 'post',
        data: params,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

export function Ecode(params){
    return fetch({
        url: 'preview/Qrcode',
        method: 'post',
        data: params,
    })
}

export function deleteE(params){
    return fetch({
        url: 'Exhibits/Del',
        method: 'post',
        data: params,
    })
}