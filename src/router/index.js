import {createRouter, createWebHashHistory} from 'vue-router'

export default createRouter({
    history:createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'Index',
            component: ()=>import('../view/index')
        },
        {
            path: '/count',
            name: 'Count',
            component: ()=>import('../view/count')
        },
        {
            path: '/todo',
            name: 'Todo',
            component: ()=>import('../view/todo')
        },
        {
            path: '/login',
            name: 'Login',
            component: ()=>import('../view/login')
        }
    ]
})
