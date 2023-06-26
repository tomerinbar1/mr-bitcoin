import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ContactsPage from '../views/ContactsPage.vue'
import ContactDetails from '../views/ContactDetails.vue'
import StatisticPage from '../views/StatisticPage.vue'
import About from '../views/About.vue'

const routerOptions = {
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/contact',
      name: 'Contacts',
      component: ContactsPage,
    },
    {
      path: '/contact/:id',
      name: 'ContactDetails',
      component: ContactDetails,
    },
    {
      path: '/statistic',
      name: 'Statistic',
      component: StatisticPage,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    }
  ],
}

const router = createRouter(routerOptions)

export default router