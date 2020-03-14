<template>
	<div class="tab-bar-item" v-on:click="itemClick">
		<slot v-if="isActive" name="item-icon">图标</slot>
		<slot v-else name="item-icon-active">活跃图标</slot>
		<div v-bind:style="activeStyle">
			<slot name="item-text">菜单</slot>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'red'
			}
		},
		methods:{
			itemClick(){
				if(this.isActive){
					this.$router.replace(this.path)
				}
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path)
			},
			activeStyle(){
				return !this.isActive?{color:this.activeColor}:{}
			}
		}
	}
</script>

<style scoped>
	.tab-bar-item{
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;
	}
	.tab-bar-item img{
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align: middle;
	}
</style>
