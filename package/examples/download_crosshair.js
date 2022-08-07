import HenrikDevValorantAPI from 'unofficial-valorant-api';
import {writeFileSync} from 'fs';
const VAPI = new HenrikDevValorantAPI();
async function download(crosshair_code) {
    const crosshair_data = await VAPI.getCrosshair({code: crosshair_code});
    writeFileSync(`${crosshair_code}.png`, crosshair_data.data);
}
download('0;P;c;5;t;3;o;1;f;0;m;1;0t;4;0l;5;0o;0;0a;1;0f;0;1t;8;1l;3;1o;0;1a;1;1m;0;1f;0');
