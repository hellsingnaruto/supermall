<template>
	<div id="home">

		<nav-bar class="home-nav">
			<template v-slot:center>购物街</template>
		</nav-bar>

		<home-swiper :banners="banners" />
		<recommend-view :recommends="recommends" />
		<feature-view />
		<tab-control class="tab-control" :titles="['流行','新款','精选']" />
		<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

	</div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import {getHomeMultidata} from '@/network/home'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import TabControl from '@/components/content/tabControl/TabControl'

export default{
	data(){
		return {
			banners:[],
			recommends:[],
			//keywords:{},
			//dKeywords:{}
		}
	},
	components:{
		NavBar,
		HomeSwiper,
		RecommendView,
		FeatureView,
		TabControl
	},
	created(){
		getHomeMultidata.then(res=>{
			this.banners=res.data.banner.list
			this.recommends=res.data.recommend.list
			//this.keywords=res.data.keywords.list
			//this.dKeywords=res.data.dKeyword.list
		})
	}
}
</script>

<style scoped>
#home{
	padding: 44px 0 49px;
}
.home-nav{
	background-color: var(--color-tint);
	color: white;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 9;
}

.tab-control{
	position: sticky;
	top: 44px;
}
</style>>

</style>
