
const routes = [
  {
    path: '/',
    
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'Login', path: '/login', component: () => import('pages/Login.vue') },
      { name: 'Records', path: '/records', component: () => import('src/pages/records/RecordsList.vue') },
      { name: 'RecordSingle', path: '/record/:id', component: () => import('src/pages/records/RecordSingle.vue') },
      { name: 'CreateRecord', path: '/record/new', component: () => import('src/pages/records/RecordForm.vue') },
      { name: 'EditRecord', path: '/record/:id/edit', component: () => import('src/pages/records/RecordForm.vue') },
      { name: 'Profile', path: '/profile/:id/edit', component: () => import('src/pages/ProfileForm.vue') },
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
