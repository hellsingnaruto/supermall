<template>
    <div class="recommend">
        <div class="recommend-item" v-for="item in recommends" :key="item.title">
            <a :href="item.link">
                <img :src="item.image">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        recommends:{
            type:Array,
            default:()=>[]
        }
    }
}
</script>

<style scoped>
.recommend{
    display: flex;
    padding: 10px 0 15px;
    border-bottom: 6px solid #eee;
}
.recommend-item{
    flex: 1;
    text-align: center;
    font-size: 12px;
}
.recommend-item img{
    width: 75px;
    height: 75px;
    margin-bottom: 5px;
}
</style>