
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      //LOGIN
      { path: '/login', component: () => import('pages/Login.vue') },

      //PRODUTO
      { path: '/list', component: () => import('pages/List.vue') },
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
