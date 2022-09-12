import Home from './components/Home.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'Signup',
        component:Signup,
        path:'/Signup'
    },
    {
        name:'Login',
        component:Login,
        path:'/Login'
    },
    {
        name:'Add',
        component:Add,
        path:'/Add'
    },
    {
        name:'Update',
        component:Update,
        path:'/Update/:id'
    }
];
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;