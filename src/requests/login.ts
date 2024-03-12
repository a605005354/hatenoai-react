import { request } from "@/utils/api";

export function signup(data){
    return request({
        url: '/api/v1/admin/signup',
        method: 'post',
        data: data
    });
}

export function loginUser(data){
    return request({
        url: '/api/v1/admin/login',
        method: 'post',
        data: data
    });
}

export function validateJwt(data){
    return request({
        url: '/api/v1/admin/validateJwt',
        method: 'post',
        data: data
    });
}
