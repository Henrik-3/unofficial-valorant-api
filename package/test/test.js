const VAPI = require('../src/index.js');
const VALORANTAPI = new VAPI();

(async () => {
    console.log(await VALORANTAPI.getCrosshair({code: '0;P;c;5;t;3;o;1;f;0;m;1;0t;4;0l;5;0o;0;0a;1;0f;0;1t;8;1l;3;1o;0;1a;1;1m;0;1f;0', size: 128}));
})();
