import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
    {
      path: '',
      name: 'index',
      component: (resolve) => require(['@page/index.vue'], resolve),
    },
    {
      path: '',
      component: (resolve) => require(['@page/index.vue'], resolve),
      name: 'index',
      children: [
        {
          path: '/home/findMusic',
          name: 'findMusic',
          redirect: '/index/findMusic/find',
          component: resolve => require(['@page/findMusic/index.vue'], resolve),
          children: [
            {
              path: '/home/findMusic/find',
              name: 'find',
              component: resolve =>
                require(['@page/findMusic/find.vue'], resolve)
            },
          ]
        },
      ]
    },
    {
      path: '',
      component: (resolve) => require(['@page/index.vue'], resolve),
      name: 'index',
      children: [
        {
          path: '/home/qqMusic',
          name: 'qqMusic',
          redirect: '/index/qqMusic/testSearch',
          component: resolve => require(['@page/qqMusic/index.vue'], resolve),
          children: [
            {
              path: '/home/qqMusic/qqSearch',
              name: 'qqSearch',
              component: resolve =>
                require(['@page/qqMusic/testSearch.vue'], resolve)
            },
          ]
        },
      ]
    },
    {
      path: '',
      component: (resolve) => require(['@page/index.vue'], resolve),
      name: 'index',
      children: [
        {
          path: '/home/searchMusic',
          name: 'searchMusic',
          redirect: '/index/search/searchPage',
          component: resolve => require(['@page/search/index.vue'], resolve),
          children: [
            {
              path: '/home/searchMusic/search',
              name: 'search',
              component: resolve =>
                require(['@page/search/searchPage.vue'], resolve)
            },
          ]
        },
      ]
    },
  ]

const router = new Router({
    mode: 'history',
    routes,
  })

  router.afterEach(() => {
    window.scrollTo(0, 0)
  })

  export default router