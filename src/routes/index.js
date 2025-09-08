import Vue from 'vue';
import VueRouter from 'vue-router';
 
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history', // URL에 #이 제거
  routes: [ // Vue router에 의해서 컨트롤(제어)되는 페이지 정보를 담는 배열
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      // 코드 스틀리팅 적용 전, 후
      // component: LoginPage,
      component: () => import('@/views/LoginPage.vue')
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue')
    },
    {
      path: '*', // 위의 URL를 제외한 모든 페이지에서 반응
      component: () => import('@/views/NotFoundPage.vue')
    }
  ], 
});
