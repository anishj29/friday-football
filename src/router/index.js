import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import("@/views/Category.vue"),
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import("@/views/Detail.vue"),
  },
  {
    path: '/submit-articles',
    name: 'Submit Articles',
    component: () => import("@/views/SubmitArticles.vue"),
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
