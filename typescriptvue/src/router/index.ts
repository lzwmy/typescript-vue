import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name:"home",
      meta: {
        title: "首页",
        index:1
      },
      component: (): any => import('@/views/home/home.vue')
    },
    {
      path: '/category',
      name:"category",
      meta: {
        title: "分类",
        index:2
      },
      component: (): any => import('@/views/category/category.vue')
    },
    {
      path: '/cart',
      name:"cart",
      meta: {
        title: "购物车",
        index:3
      },
      component: (): any => import('@/views/cart/cart.vue')
    },
    {
      path: '/mine',
      name:"mine",
      meta: {
        title: "我的",
        index:4
      },
      component: (): any => import('@/views/mine/mine.vue')
    },
    {
      path: '/search',
      name:"search",
      meta: {
        title: "搜索框",
        index:4
      },
      component: (): any => import('@/common/search.vue')
    },
    {
      path: '/proDetail',
      name:"proDetail",
      meta: {
        title: "产品详情",
        index:5
      },
      component: (): any => import('@/components/proDetail/proDetail.vue')
    },
    {
      path: '*',
      redirect:"/home"
    }
  ]
})


