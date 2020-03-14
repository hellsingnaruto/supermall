import Vue from "vue"
import VueRouter from "vue-router"

//1. 安装路由插件
Vue.use(VueRouter)


//2. 创建路由对象
const router=new VueRouter({
    routes:[
        {
            path:'/home',
            component:()=>import('@/views/home/Home')
        },
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/cart',
            component:()=>import('@/views/cart/Cart')
        },
        {
            path:'/category',
            component:()=>import('@/views/category/Category')
        },
        {
            path:'/profile',
            component:()=>import('@/views/profile/Profile')
        }
    ],
    mode:'history'
})


//3. 导出路由对象
export default router