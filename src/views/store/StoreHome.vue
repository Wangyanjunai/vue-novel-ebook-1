<template>
    <div>
        <div class="store-home">
            <search-bar></search-bar>
            <div v-if="random && random.bookId"><flap-card :data="random"></flap-card></div>
            <div v-else><cube-loading :size="40"></cube-loading></div>
            <scroll :top="scrollTop" :bottom="scrollBottom" @onScroll="onScroll" ref="scroll">
                    <div class="banner-wrapper">
                        <!--
                        <div v-if="(banner && banner.length > 0)" class="banner-img" :style="{backgroundImage:`url('${banner}')`}"></div>
                        <div v-else><cube-loading :size="40"></cube-loading></div>
                        -->
                        <div v-if="banners && banners.length !=0">
                            <cube-slide ref="slide" :data="banners" @change="changePage">
                                <cube-slide-item v-for="(item, index) in banners" :key="item.id" @click.native="clickHandler(item, index)">
                                    <div class="banner-img" :style="{backgroundImage:`url('${item.image}')`}"></div>
                                </cube-slide-item>
                            </cube-slide>
                        </div>
                        <div v-else><cube-loading :size="40"></cube-loading></div>
                    </div>
                    <div v-if="(guessYouLike && guessYouLike.length != 0)"><guess-you-like :data="guessYouLike"></guess-you-like></div>
                    <div v-else><cube-loading :size="40"></cube-loading></div>
                    <div v-if="(recommend && recommend.length != 0)"><recommend :data="recommend" class="recommend"></recommend></div>
                    <div v-else><cube-loading :size="40"></cube-loading></div>
                    <div v-if="(featured && featured.length != 0)"><featured :data="featured" :titleText="$t('home.featured')" :btnText="$t('home.seeAll')" class="featured"></featured></div>
                    <div v-else><cube-loading :size="40"></cube-loading></div>
                    <div v-if="(categoryList && categoryList.length != 0)" class="category-list-wrapper" v-for="(item, index) in categoryList" :key="index"><category-book :data="item"></category-book></div>
                    <div v-else><cube-loading :size="40"></cube-loading></div>
                    <div v-if="(categories && categories.length != 0)"><category :data="categories" class="categories" ></category></div>
                    <div v-else><cube-loading :size="40"></cube-loading></div>
                </scroll>
            <nav-bar></nav-bar>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { storeHomeMixin } from '../../utils/mixin'
    import { home } from '../../api/store'
    import SearchBar from '../../components/home/SearchBar'
    import Scroll from '../../components/common/Scroll'
    import FlapCard from '../../components/home/FlapCard'
    import GuessYouLike from '../../components/home/GuessYouLike'
    import Recommend from '../../components/home/Recommend'
    import Featured from '../../components/home/Featured'
    import CategoryBook from '../../components/home/CategoryBook'
    import Category from '../../components/home/Category'
    import NavBar from '../../components/common/NavBar'
    import { gotoBookDetail } from '../../utils/store'
    export default {
        mixins: [storeHomeMixin],
        components: {
            NavBar,
            Category,
            CategoryBook,
            Featured,
            Recommend,
            GuessYouLike,
            SearchBar,
            Scroll,
            FlapCard
        },
        data() {
            return {
                lists: null,
                scrollBottom: 55,
                scrollTop: 94,
                random: null,
                banner: '',
                banners: null,
                guessYouLike: null,
                recommend: null,
                featured: null,
                categoryList: null,
                categories: null,
                login: false,
                openid: null,
                error: null
            }
        },
        methods: {
            onScroll(offsetY) {
                this.setOffsetY(offsetY)
                if (offsetY > 0) {
                    this.scrollTop = 52
                    this.scrollBottom = 55
                } else {
                    this.scrollTop = 94
                    this.scrollBottom = 97
                }
                this.$refs.scroll.refresh()
            },
            getCookie(name) {
                return this.$cookies.get(name)
            },
            changePage(current) {
                // console.log('当前轮播图序号为:' + current)
            },
            clickHandler(item, index) {
                // console.log(item, index)
                gotoBookDetail(this, item)
            }
        },
        mounted() {
            const openid = this.$route.query.openid
            const toast = this.$createToast({
                txt: '登录中……',
                mask: true,
                zIndex: 5000
            })
            // 如果url里有openid, 设置进cookie
            if (typeof openid !== 'undefined') {
                let exp = new Date()
                exp.setTime(exp.getTime() + 3600 * 1000) // 过期时间60分钟
                this.$cookies.set('openid', openid, exp.toGMTString())
            }
            // 获取openid
            if (this.getCookie('openid') === null) {
                setTimeout(() => {
                    toast.show()
                }, 2000)
                location.href = process.env.VUE_APP_BASE_URL + '/wechat/authorize?returnUrl=' + encodeURIComponent(process.env.VUE_APP_HOME_NGINX_URL + '/#/')
                setTimeout(() => {
                    toast.hide()
                }, 2000)
            }
            home(this.openid).then(response => {
                if (response && response.status === 200 && response.data && response.data.err_no === 0) {
                    this.lists = response.data.data
                    const randomIndex = Math.floor(Math.random() * this.lists.random.length)
                    this.random = this.lists.random[randomIndex]
                    this.banner = this.lists.banner
                    this.banners = this.lists.banners
                    // console.log(this.banners)
                    this.guessYouLike = this.lists.guessYouLike
                    this.recommend = this.lists.recommend
                    this.featured = this.lists.featured
                    this.categoryList = this.lists.categoryList
                    this.categories = this.lists.categories
                }
            })
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../assets/styles/global";

    .store-loging {
        width: 100%;
        height: 100%;
        @include center;
    }

    .store-home {
        width: 100%;
        height: 100%;
        font-size: px2rem(18);

        .banner-wrapper {
            width: 100%;
            padding: px2rem(10);
            box-sizing: border-box;

            .banner-img {
                width: 100%;
                height: px2rem(150);
                background-repeat: no-repeat;
                background-size: 100% 100%;
            }
        }

        .recommend {
            margin-top: px2rem(20);
        }

        .featured {
            margin-top: px2rem(20);
        }

        .category-list-wrapper {
            margin-top: px2rem(20);
        }

        .categories {
            margin-top: px2rem(20);
        }
    }
</style>
