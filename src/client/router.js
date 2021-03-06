import Vue from 'vue';
import {
  createWebHistory,
  createWebHashHistory,
  createRouter,
} from 'vue-router';
import pages from './pages';

const router = createRouter({
  // base: '/',
  base: '/midifile-performer-web/',
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: pages.Home,
    },
    {
      path: '/first-steps',
      name: 'FirstSteps',
      component: pages.FirstSteps,
    },
    {
      path: '/midifile-performer',
      name: 'MidifilePerformer',
      component: pages.MidifilePerformer,
    },
    {
      path: '/guide',
      name: 'Guide',
      component: pages.Guide,
    },
    {
      path: '/look-for-scores',
      name: 'LookForScores',
      component: pages.LookForScores,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: pages.NotFound,
    }
  ],
});

export default router;