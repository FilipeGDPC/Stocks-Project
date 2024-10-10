import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../components/MainLayout.vue'
import Home from '../components/Home.vue'
import Currencies from '../components/Currencies.vue'
import Exchanges from '../components/Exchanges.vue'
import GlocalStockMarket from '../components/GlobalStockMarket.vue'
import SplitsData from '../components/HistoricalData.vue'
import TimeZones from '../components/TimeZones.vue'
import Help from '../components/help.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: 'currencies',
        name: 'currencies',
        component: Currencies
      },
      {
        path: 'exchanges',
        name: 'exchanges',
        component: Exchanges
      },
      {
        path: 'glocal-stock-market',
        name: 'glocal-stock-market',
        component: GlocalStockMarket
      },
      {
        path: 'splits-data',
        name: 'splits-data',
        component: SplitsData
      },
      {
        path: 'timezones',
        name: 'timezones',
        component: TimeZones
      },
      {
        path: 'help',
        name: 'help',
        component: Help
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router