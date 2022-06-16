import {HenrikDevValorantAPI} from '../src/index.js';
const API = new HenrikDevValorantAPI();

console.log(await API.getMMRByPUUID({puuid: '54942ced-1967-5f66-8a16-1e0dae875641', version: 'v2', region: 'eu'}));
