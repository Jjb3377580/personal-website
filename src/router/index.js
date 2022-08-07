import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('../views/blogsView.vue')
    },
    {
      path: '/videoPlayer',
      name: 'videoPlayer',
      component: () => import('../views/videoPlayerView.vue')
    }
  ]
})

export default router
