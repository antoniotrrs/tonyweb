import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { page_title: 'Tony home' }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: { page_title: 'Resume' }
  }
]



const router = new createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  const { page_title } = to.meta
  const gtag = window.gtag || undefined

  if (gtag && page_title) {
    gtag('event', 'page_view', {
      page_title,
      page_path: to.fullPath,
      page_location: window.location.href
    })
  }
})

export default router
