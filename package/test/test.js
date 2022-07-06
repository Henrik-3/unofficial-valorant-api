const VAPI = require('../src/index.js');
const VALORANTAPI = new VAPI();

(async () => {
    console.log(await VALORANTAPI.getAccount({name: 'Henrik3', tag: 'VALO'}));
})();
