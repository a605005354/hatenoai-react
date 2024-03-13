import { request } from "@/utils/api";

export function signup(data: {username?:string, email:string, password:string} ){
    return request({
        url: '/api/v1/admin/signup',
        method: 'post',
        data: data
    });
}

export function loginUser(data: {email:string, password:string}){
    return request({
        url: '/api/v1/admin/login',
        method: 'post',
        data: data
    });
}

export function validateJwt(data: {token:string}){
    return request({
        url: '/api/v1/admin/validateJwt',
        method: 'post',
        data: data
    });
}
