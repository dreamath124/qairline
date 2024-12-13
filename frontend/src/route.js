import { createWebHistory, createRouter } from 'vue-router'
import AboutView from './components/archive/AboutView.vue'
import Ticket from './components/Ticket.vue'
import Login from './components/Login.vue'
import SeatManagement from './components/SeatManagement.vue'
import News from './components/Infomation.vue'
import Admin from './components/Admin.vue'
import Airplanes from './components/admin/Airplanes.vue'
import Flights from './components/admin/Flights.vue'
import Infomation from './components/admin/Infomation.vue'
import Tickets from './components/admin/Tickets.vue'

const routes = [
  { path: '/ticket', component: Ticket },
  { path: '/seatManagement', component: SeatManagement },
  { path: '/about', component: AboutView },
  { path: '/login', component: Login },
  { path: '/news', component: News },
  {
    path: '/admin', component: Admin,
    children: [
      { path: '/admin/airplanes', component: Airplanes },
      { path: '/admin/flights', component: Flights },
      { path: '/admin/infomation', component: Infomation },
      { path: '/admin/tickets', component: Tickets }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router