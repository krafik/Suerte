import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import CatalogView from '../views/CatalogView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/catalog',
    name: 'catalog',
    // component: CatalogView
    component: () => import(/* webpackChunkName: "about" */ '../views/CatalogView.vue')
  },
  {
    path: '/catalog/:id',
    name: 'product-item',
    // component: CatalogView
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductItem.vue'),
    props: true
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return {y: 0}
  }
})

export default router
