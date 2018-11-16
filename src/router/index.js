import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SingleFileComponent from '@/components/component/SingleFileComponent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/component',
      name: 'SingleFileComponent',
      component: SingleFileComponent
    }
  ]
})
