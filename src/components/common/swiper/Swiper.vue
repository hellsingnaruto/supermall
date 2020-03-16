<template>
    <div id="hy-swiper">

        <div class="swiper">
            <slot></slot>
        </div>

        <slot name="indicator"></slot>

        <div class="indicator">
            <slot name="indicator">
                <div class="indi-item"></div>
            </slot>
        </div>

    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
#hy-swiper{
    overflow: hidden;
    position: relative;
}

.swiper{
    display: flex;
}

.indicator{
    display: flex;
    justify-content: center;/* flex布局，水平居中多个div */
    position: absolute;
    width: 100%;
    bottom: 8px;
}

.indi-item{
    box-sizing: border-box; /* 盒子计算方式，盒子的宽和高将边框和padding计算在内 */
}
</style>