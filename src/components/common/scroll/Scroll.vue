<template>
    <div ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    props:{
        probeType:{
            type:Number,
            default:0
        }
    },
    data(){
        return {
            scroll:null
        }
    },
    mounted(){
        //1.创建Bscroll对象
		this.scroll=new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probeType
        })

        //2.监听滚动的位置
        this.scroll.on('scroll',(position)=>{
            this.$emit('scroll',position)
        })
    },
    methods:{
        scrollTo(x,y,time=300){
            this.scroll.scrollTo(x,y,time)
        }
    }
}
</script>