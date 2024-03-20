import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChapterView from '../views/ChapterView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: HomeView},
    {path: '/chapter/:id', component: ChapterView},  
  ]
});
