//import Header from './components/Header.vue';
import Home from './components/Home.vue';
import about from './components/user/about.vue';
import list from './components/user/list.vue';
// import about from './components/about.vue';
import aboutEdit from './components/user/aboutEdit.vue';


  export const routes = [
    //{path: '', component: Header},
    {path: '', component: Home, name: 'Home'},
    {path: '/list', component: list, name:'list'},
    {path: '/about', component: about, name: 'about'},
    {path: '/aboutEdit', component: aboutEdit, name: 'aboutEdit'},

    {path: '*', redirect:'/'}
  ];
