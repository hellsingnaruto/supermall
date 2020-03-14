<template>
	<div id="home">
		<nav-bar class="home-nav">
			<template v-slot:center>购物街</template>
		</nav-bar>
	</div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import {getHomeMultidata} from '@/network/home'
export default{
	data(){
		return {
			banners:{},
			recommends:{},
			keywords:{},
			dKeywords:{}
		}
	},
	components:{
		NavBar
	},
	created(){
		getHomeMultidata.then(res=>{
			this.banners=res.data.banner.list
			this.recommends=res.data.recommend.list
			this.keywords=res.data.keywords.list
			this.dKeywords=res.data.dKeyword.list
		})
	}
}
</script>

<style scoped>
.home-nav{
	background-color: var(--color-tint);
	color: white;
}
</style>>

</style>
