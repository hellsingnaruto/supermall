import Axios from "axios";

export default config=>{

    //创建 axios 实例
    const instance=Axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:3000
    })

    //请求拦截器
    instance.interceptors.request.use(config=>{
        //在发送请求之前做些什么
        return config
    },err=>{
        // 对请求错误做些什么,使用promise将错误传给catch
        return Promise.reject(err)
    })

    //响应拦截器
    instance.interceptors.response.use(res=>{
        // 对响应数据做点什么
        return res.data
    },err=>{
        // 对响应错误做点什么,使用promise将错误传给catch
        return Promise.reject(err)
    })

    return instance(config) //返回一个Promise
}