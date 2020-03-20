<template>
	<div id="home">

		<nav-bar class="home-nav">
			<template v-slot:center>购物街</template>
		</nav-bar>

		<home-swiper :banners="banners" />
		<recommend-view :recommends="recommends" />
		<feature-view />
		<tab-control @tabClick="tabClick" class="tab-control" :titles="['流行','新款','精选']" />
		<goods-list :goods="showGoods" />

	</div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import {getHomeMultidata,getHomeGoods} from '@/network/home'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'

export default{
	data(){
		return {
			banners:[],
			recommends:[],
			goods:{
				pop:{page:0,list:[]},
				new:{page:0,list:[]},
				sell:{page:0,list:[]}
			},
			currentType:'pop'
			//keywords:{},
			//dKeywords:{}
		}
	},
	components:{
		NavBar,
		HomeSwiper,
		RecommendView,
		FeatureView,
		TabControl,
		GoodsList
	},
	created(){
		//1.请求轮播数据
		this.getHomeMultidataFct()

		//2.请求商品数据
		this.getHomeGoodsFct('pop')
		this.getHomeGoodsFct('new')
		this.getHomeGoodsFct('sell')
	},
	computed:{
		showGoods(){
			return this.goods[this.currentType].list
		}
	},
	methods:{
		/**
		 * 网络请求相关方法
		*/
		getHomeMultidataFct(){
			getHomeMultidata.then(res=>{
				this.banners=res.data.banner.list
				this.recommends=res.data.recommend.list
				//this.keywords=res.data.keywords.list
				//this.dKeywords=res.data.dKeyword.list
			})
		},
		getHomeGoodsFct(type){
			const page=this.goods[type].page+1
			getHomeGoods(type,page).then(res=>{
				this.goods[type].list.push(...res.data.list)
				this.goods[type].page+=1
			})
		},

		/**
		 * 事件监听相关的方法
		*/
		tabClick(i){
			switch(i){
				case 0:
					this.currentType='pop'
					break
				case 1:
					this.currentType='new'
					break
				case 2:
					this.currentType='sell'
					break
			}
		}
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
	z-index: 9;
}
</style>>

</style>
