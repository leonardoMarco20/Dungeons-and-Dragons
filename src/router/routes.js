
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/login', component: () => import('pages/Login.vue') },
      { name: 'Records', path: '/records', component: () => import('src/pages/RecordsList.vue') },
      { path: '/register-record', component: () => import('pages/RegisterRecord.vue') },
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
