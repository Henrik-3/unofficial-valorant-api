import _VAPI from "../src/index.js"
const VAPI = new _VAPI()

const res = await VAPI.getMMR("jameslinimk", "8868", "na")
console.log(res)
