import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/Home.vue'
import CurrenciesView from '../components/Currencies.vue'
import ExchangesView from '../components/Exchanges.vue'
import GlocalStockMarketView from '../components/GlobalStockMarket.vue'
import SplitsDataView from '../components/SplitsData.vue'
import TimeZonesView from '../components/TimeZones.vue'
import HelpView from '../components/help.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/currencies',
    name: 'currencies',
    component: CurrenciesView
  },
  {
    path: '/exchanges',
    name: 'exchanges',
    component: ExchangesView
  },
  {
    path: '/glocal-stock-market',
    name: 'glocal-stock-market',
    component: GlocalStockMarketView
  },
  {
    path: '/splits-data',
    name: 'splits-data',
    component: SplitsDataView
  },
  {
    path: '/timezones',
    name: 'timezones',
    component: TimeZonesView
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
