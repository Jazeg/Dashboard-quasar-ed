const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/seguridad', component: () => import('pages/Seguridad.vue') },
      { path: '/registro', component: () => import('pages/Registro.vue') }
    ]
  },

  {
    path: '/login',
    component: () => import('pages/login.vue')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
