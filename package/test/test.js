const VAPI = require('../src/index.js');
const VALORANTAPI = new VAPI();

(async () => {
    console.log(await VALORANTAPI.getLeaderboard({version: 'v1', region: 'eu', season: 'e2a1'}));
})();
