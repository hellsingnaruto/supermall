import request from "./request";

/*
//老师的方法，导出函数
export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}
*/

//我的写法,导出变量
let getHomeMultidata=request({
    url:'/home/multidata'
})

let getHomeGoods=function(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}

export {
    getHomeMultidata,
    getHomeGoods
}