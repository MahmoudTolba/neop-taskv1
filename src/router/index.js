import { createRouter, createWebHistory } from 'vue-router'
// import NavBar from '@/components/Navbar.vue'
import MainViews from '@/views/MainViews.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainViews, 
      
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
    },
  ],
})

export default router
