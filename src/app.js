import 'es6-promise/auto';
import Vue from 'vue';
import Minesweeper from './comps/Minesweeper';
import store from './store';

const vm = new Vue({
    store,
    el:'#minesweeper',
    render: (h) => h(Minesweeper)
});