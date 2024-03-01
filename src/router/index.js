import { createRouter, createWebHistory } from 'vue-router'
import ChapterView from '../views/ChapterView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/chapter/:id',
      component: ChapterView
    }
  ]
});
