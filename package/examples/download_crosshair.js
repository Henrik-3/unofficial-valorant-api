import { writeFileSync } from 'fs'
import _VAPI from 'unofficial-valorant-api'

// Initialize API
const VAPI = new _VAPI()

// Download crosshair
const crosshair = await VAPI.getCrosshair("CROSSHAIR CODE HERE")

// Write crosshair to crosshair.png
writeFileSync(`crosshair.png`, crosshair.data)
