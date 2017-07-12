import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../views/Layout'
import Home from '../views/Home'
import Grade from '../views/Grade'
import Userseting from '../views/Userseting'
import Kechenglist from '../views/Kechenglist'
import Kcinfo from '../views/Kcinfo'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/pages/'
        },
        {
            path: '/pages',
            component: Layout,
            children: [
                {
                    path: '',
                    redirect: '/pages/home'
                },
                {
                    path: 'home',
                    name: 'HomeView',
                    component: Home
                },
                {
                    path: 'grade',
                    name: 'GradeView',
                    component: Grade
                },
                {
                    path: 'userseting',
                    name: 'UsersetingView',
                    component: Userseting
                },
                {
                    path: 'kechenglist',
                    name: 'kechenglist',
                    component: Kechenglist
                },
                {
                    path: 'kcinfo',
                    name: 'kcinfo',
                    component: Kcinfo
                }
            ]
        },
        //其他默认url
        {
            path: '*',
            redirect: '/pages/'
        }
    ]
})
