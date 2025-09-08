import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';
import SignupPage from '@/views/SingupPage.vue';


Vue.use(VueRouter);

export default new VueRouter({
  routes: [ // Vue router에 의해서 컨트롤(제어)되는 페이지 정보를 담는 배열
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/signup',
      component: SignupPage
    }
  ], 
});
