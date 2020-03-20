<template>
    <div class="tab-control">
        <div class="tab-control-item" v-for="(item,index) in titles" :key="index" :class="{active:index===currentIndex}">
            <span @click="itemClick(index)">{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default:()=>[]
        }
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods:{
        itemClick(i){
            this.currentIndex=i
            this.$emit('tabClick',i)
        }
    }
}
</script>

<style scoped>
.tab-control{
    display: flex;
    font-size: 15px;
    text-align: center;
    background-color: #fff;
}
.tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
}
.tab-control-item span{
    padding: 4px;
}

.active{
    color: var(--color-high-text);
}
.active span{
    border-bottom: 3px solid var(--color-high-text);
}
</style>