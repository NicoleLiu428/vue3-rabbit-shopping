import http from '@/utils/http/index'
export function getCategoryAPI(){
    return http({
        url:'home/category/head'
    })
}