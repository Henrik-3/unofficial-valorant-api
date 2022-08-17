import { spawn } from "child_process"
import _VAPI from "../dist/index.js"
const VAPI = new _VAPI()

const clipboard = (data) => {
    const proc = spawn("pbcopy") 
    proc.stdin.write(data)
    proc.stdin.end()
}

const res = await VAPI.initUtils()

// const object = Object.keys(res.data).reduce((acc, cur) => {
//     if (Array.isArray(res.data[cur])) {
//         acc[cur] = res.data[cur].slice(0, 2)
//     } else {
//         acc[cur] = res.data[cur]
//     }
//     return acc
// }, {})
// console.log(object)
// clipboard(JSON.stringify(object))
