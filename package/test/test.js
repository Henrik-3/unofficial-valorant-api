import {HenrikDevValorantAPI} from '../src/index.js';
const API = new HenrikDevValorantAPI();

console.log(await API.getAccount({name: 'Henrik3', tag: 'VALO', force: false}));
