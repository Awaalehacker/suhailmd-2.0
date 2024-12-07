const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "SUHAIL_18_20_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODUsXG4gICAgICAgIDM1LFxuICAgICAgICA2NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIxLFxuICAgICAgICA2MSxcbiAgICAgICAgODIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExLFxuICAgICAgICA3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMixcbiAgICAgICAgMTExLFxuICAgICAgICAyMzEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgODIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA1LFxuICAgICAgICA2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDg5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NixcbiAgICAgICAgMTE3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM0LFxuICAgICAgICA1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDg4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIyLFxuICAgICAgICA0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDksXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDYzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkxLFxuICAgICAgICA2MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFROXpCQUpzckFWeUVoUUlGSXlaNzRLUVYybG4vOEszNUF5UlhXOWRqdTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZCYlJKQktDUVpxRE1yc3dvV0ZDZ0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmEyN2FiYmMtNDIxYS00ZWQ1LWFlMjQtNThhY2ZmY2U0N2UwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1LFxuICAgICAgMTg1LFxuICAgICAgNTUsXG4gICAgICAxODAsXG4gICAgICA5OSxcbiAgICAgIDExNCxcbiAgICAgIDQwLFxuICAgICAgMyxcbiAgICAgIDIyNyxcbiAgICAgIDI0OCxcbiAgICAgIDIyMCxcbiAgICAgIDE4NCxcbiAgICAgIDE3MSxcbiAgICAgIDI5LFxuICAgICAgMTYzLFxuICAgICAgMjcsXG4gICAgICAxNjYsXG4gICAgICAxOTIsXG4gICAgICA1OSxcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OCxcbiAgICAgIDY3LFxuICAgICAgMTkwLFxuICAgICAgNTQsXG4gICAgICAyMCxcbiAgICAgIDE5NCxcbiAgICAgIDIsXG4gICAgICAxODQsXG4gICAgICAyNTMsXG4gICAgICA5MixcbiAgICAgIDEwOSxcbiAgICAgIDI3LFxuICAgICAgMTQsXG4gICAgICAzOSxcbiAgICAgIDM5LFxuICAgICAgMTIzLFxuICAgICAgMjksXG4gICAgICA2MCxcbiAgICAgIDgwLFxuICAgICAgMTU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpWM0xTWFpBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTI5MDU2MjA4MTA6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU5Mzk1NjA2MDYxMjcxOjI0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05ENjc5RUZFTVNqMHJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibEltSUZSaEZhdVZwWExNajd6RHdsb2VRL3I1a2R1THZ1V1cvTm1RVGMyaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCNjUyYXBmS1FTSE5uN1ZYYkdrYXB5Nkw0YU0zT2FWaGpwZWp0YzQ1cXJJSWNjUVphNDVqaDFudGZxcWM1SzhIS1ZSTGs1UDJKY0lQdCtsUXB4WVpEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3QXNZcTNpZUNjTUZjQ1YxN29DY28rUDNwZzVxemVsZ1FSUm1pWXR3aGxzVFFmVW9EQldtWkh2VENPUFI1dmNWODdsektQdCtjT0IyWHEyVmY2eHpEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI5MDU2MjA4MTA6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNTk1NTkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRjR0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGNHQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCU0dsS1JUcGNPZ0FzbUNlTW1lVHlKbEhWVGpQZ2lyWi95Z3dITDd0N0dVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MTM4ODA5MTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM1OTU0NTc4MzZcIn0iCn0=", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "DalxoWww",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
