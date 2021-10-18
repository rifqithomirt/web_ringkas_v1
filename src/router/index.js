import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Invoice from '../views/Invoice.vue'
import Customer from '../views/Customer.vue'
import Category from '../views/Category.vue'
import Inventory from '../views/Inventory.vue'
import Bills from '../views/Bills.vue'
import Vendors from '../views/Vendors.vue'
import COA from '../views/COA.vue'
import ManualTransaction from '../views/ManualTransaction.vue'
import Neraca from '../views/Neraca.vue'
import UntungRugi from '../views/UntungRugi.vue'
import Create from '../views/Create.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/invoice',
  //   name: 'Invoice',
  //   component: Invoice
  // },
   {
     path: '/invoice',
     name: 'Create',
     component: Create
   },
  {
    path: '/customer',
    name: 'Customer',
    component: Customer
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: Inventory
  },
  {
    path: '/bills',
    name: 'Bills',
    component: Bills
  },
  {
    path: '/vendors',
    name: 'Vendors',
    component: Vendors
  },
  {
    path: '/coa',
    name: 'COA',
    component: COA
  },
  {
    path: '/manualtransaction',
    name: 'ManualTransaction',
    component: ManualTransaction
  },
  {
    path: '/neraca',
    name: 'Neraca',
    component: Neraca
  },
  {
    path: '/untungrugi',
    name: 'UntungRugi',
    component: UntungRugi
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
