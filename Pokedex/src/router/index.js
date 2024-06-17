import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

import HabilidadesView from '@/views/HabilidadesView'
import SobreView from '@/views/SobreView'
import StatusView from '@/views/StatusView'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: Home,
    children: [
      { path: 'habilidades', component: HabilidadesView },
      { path: 'sobre', component: SobreView},
      { path: 'status', component: StatusView }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
