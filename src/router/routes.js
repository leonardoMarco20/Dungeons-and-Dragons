
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'Login', path: '/login', component: () => import('pages/Login.vue') },
      { name: 'Records', path: '/records', component: () => import('src/pages/RecordsList.vue') },
      { name: 'CreateRecord', path: '/record/new', component: () => import('pages/FormRecord.vue') },
      { name: 'SingleRecord', path: '/record/:id', component: () => import('pages/SingleRecord.vue') },
      { name: 'EditRecord', path: '/record/:id/edit', component: () => import('pages/FormRecord.vue') },
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
