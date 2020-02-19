import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/listStudent',
            name: 'listStudent',
            component: list
        }
    ]
})
