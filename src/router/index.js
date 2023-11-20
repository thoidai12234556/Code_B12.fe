import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/admin/danh-muc',
        component: ()=>import('../components/DanhMuc/index.vue')
    },
    {
        path : '/admin/chuc-vu',
        component: ()=>import('../components/ChucVu/index.vue')
    },
    {
        path : '/admin/nhan-vien',
        component: ()=>import('../components/NhanVien/index.vue')
    },
    {
        path : '/admin/ban',
        component: ()=>import('../components/Ban/index.vue')
    },
    {
        path : '/admin/khu-vuc',
        component: ()=>import('../components/KhuVuc/index.vue')
    },
    {
        path : '/admin/nguyen-lieu',
        component: ()=>import('../components/NguyenLieu/index.vue')
    },
    {
        path : '/admin/nhap-kho',
        component: ()=>import('../components/NhapKho/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router