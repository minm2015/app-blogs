import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home'
import article from '@/views/article'
import articleDetail from '@/views/article_detail'
import timeline from '@/views/timeline'
Vue.use(VueRouter)
const routes = [
  { path: '/home', component: home },
  { path: '/article', component: article },
  { path: '/article/:id', component: articleDetail},
  { path: '/timeline', component: timeline}
]
const router = new VueRouter({
  routes
})
export default router
