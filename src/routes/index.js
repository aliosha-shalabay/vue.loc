import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Ad from '@/components/Ads/Ad'
import AdList from '@/components/Ads/AdList'
import NewAd from '@/components/Ads/NewAd'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Orders from '@/components/User/Orders'


Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            name: 'nome',
            path: '',
            component: Home
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'registration',
            path: '/registration',
            component: Registration
        },
        {
            name: 'orders',
            path: '/orders',
            component: Orders
        },
        {
            name: 'new',
            path: '/new',
            component: NewAd
        },
        {
            name: 'ad',
            path: '/ad/:id',
            component: Ad
        },
        {
            name: 'list',
            path: 'list',
            component: AdList
        },
    ],
    mode: 'history',
})