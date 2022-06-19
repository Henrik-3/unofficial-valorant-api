import {HenrikDevValorantAPI} from '../src/index.js';
import {writeFileSync} from 'fs';
const API = new HenrikDevValorantAPI();

const cc = await API.getVersion({
    region: 'eu',
});
