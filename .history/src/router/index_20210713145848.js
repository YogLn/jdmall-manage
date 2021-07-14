import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: '/',
        redirect: '/login'
    }, 
    {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                meta: {
                    title: '系统首页'
                },
                component: () => import( /* webpackChunkName: "dashboard" */ "../views/home/Dashboard.vue")
            },
            {
                path: "/goods",
                name: "goods",
                meta: {
                    title: '商品管理'
                },
                component: () => import( /* webpackChunkName: "table" */ "../views/goods/Goods.vue")
            },
            {
                path: "/audit",
                name: "audit",
                meta: {
                    title: '图表'
                },
                component: () => import( /* webpackChunkName: "charts" */ "../views/audit/Audit.vue")
            },
            {
                path: "/order",
                name: "order",
                meta: {
                    title: '订单查看'
                },
                component: () => import( /* webpackChunkName: "form" */ "../views/order/Show.vue")
            },
            {
                path: "/return",
                name: "permission",
                meta: {
                    title: '权限管理',
                    permission: true
                },
                component: () => import( /* webpackChunkName: "permission" */ "../views/errPage/Permission.vue")
            },
            {
                path: "/upload",
                name: "upload",
                meta: {
                    title: '上传插件'
                },
                component: () => import( /* webpackChunkName: "upload" */ "../views/form/Upload.vue")
            },
            {
                path: '/404',
                name: '404',
                meta: {
                    title: '找不到页面'
                },
                component: () => import(/* webpackChunkName: "404" */ '../views/errPage/404.vue')
            },
            {
                path: '/403',
                name: '403',
                meta: {
                    title: '没有权限'
                },
                component: () => import(/* webpackChunkName: "403" */ '../views/errPage/403.vue')
            },
            {
                path: '/user',
                name: 'user',
                meta: {
                    title: '个人中心'
                },
                component: () => import(/* webpackChunkName: "user" */ '../views/user/User.vue')
            }
        ]
    },
    {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import( /* webpackChunkName: "login" */ "../views/login/Login.vue")
    },
    {
        path: "/register",
        name: "Register",
        meta: {
            title: '注册'
        },
        component: () => import( /* webpackChunkName: "dashboard" */ "../views/login/Register.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from) => {
  
});

export default router;