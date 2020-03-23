<template>
	<div id="home">

		<nav-bar class="home-nav">
			<template v-slot:center>购物街</template>
		</nav-bar>

		<scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll" :pullUpLoad="true" @pullingUp="loadMore">
			<div>
				<home-swiper :banners="banners" />
				<recommend-view :recommends="recommends" />
				<feature-view />
				<tab-control class="tab-control" @tabClick="tabClick" :titles="['流行','新款','精选']" />
				<goods-list :goods="showGoods" />
			</div>
		</scroll>

		<back-top @click.native="backClick" v-show="isShowBackTop" />

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
import Scroll from '@/components/common/scroll/Scroll'
import BackTop from '../../components/content/backTop/BackTop'
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
			currentType:'pop',
			isShowBackTop:false
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
		GoodsList,
		Scroll,
		BackTop
	},
	created(){
		//1.请求轮播数据
		this.getHomeMultidataFct()

		//2.请求商品数据
		this.getHomeGoodsFct('pop')
		this.getHomeGoodsFct('new')
		this.getHomeGoodsFct('sell')

		//3.监听item中图片加载完成
		
		this.$bus.$on('itemImageLoad',()=>{
			this.$refs.scroll && this.$refs.scroll.refresh()//这个容易出bug，所以先判断
		})
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
				this.goods[type].page=page
				
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
		},
		backClick(){//回到顶部
			this.$refs.scroll.scrollTo(0,0)
		},
		contentScroll(position){//回到顶部是否显示
			this.isShowBackTop= position.y<-1000
		},
		loadMore(){
			console.log('上拉加载更多')
			this.getHomeGoodsFct(this.currentType)
			this.$refs.scroll.finishPullUp()
		}
	}
}
</script>

<style scoped>
#home{
	padding-top: 44px;
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
	z-index: 2;
    font-size: 15px;
}

.content{
	height: 100vh;
}
.content>div{
	padding-bottom: 100px;
}
</style>
