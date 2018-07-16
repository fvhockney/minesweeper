import lodash from "lodash";

window._ = lodash;

import 'es6-promise/auto';
import Vue from 'vue';
import Minesweeper from './comps/minesweeper';
import store from './store';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

const vm = new Vue({
    store,
    el:'#minesweeper',
    render: (h) => h(Minesweeper)
});