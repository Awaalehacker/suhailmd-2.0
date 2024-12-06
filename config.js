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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "252905983623";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_00_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDU2LFxuICAgICAgICAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODksXG4gICAgICAgIDM4LFxuICAgICAgICA5NixcbiAgICAgICAgNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMxLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc2LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUzLFxuICAgICAgICA4NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU5LFxuICAgICAgICAwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDc0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTExLFxuICAgICAgICAzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDU3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ5LFxuICAgICAgICA2LFxuICAgICAgICAzMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkxLFxuICAgICAgICA4MixcbiAgICAgICAgMTcxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICA3NixcbiAgICAgICAgNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMCxcbiAgICAgICAgMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDM2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA3LFxuICAgICAgICA0NCxcbiAgICAgICAgODksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTksXG4gICAgICAgIDMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjF2RVdHZGlzbS80R3JJQnhlY0NSMWE4TUY5SVVCeDRLdTdYZ1MrcDh1T1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInVoeEc3cGU4VGtLdnhnNGlaa0k2eXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTNhMTlkODEtMWQ4Ny00Y2I5LTgwNDUtNmZkYTVmNzJlYjI2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NCxcbiAgICAgIDYzLFxuICAgICAgMjA4LFxuICAgICAgNyxcbiAgICAgIDg0LFxuICAgICAgNCxcbiAgICAgIDI0NSxcbiAgICAgIDE4OCxcbiAgICAgIDI3LFxuICAgICAgMjEsXG4gICAgICA5MixcbiAgICAgIDc5LFxuICAgICAgNzgsXG4gICAgICAxMjUsXG4gICAgICA0LFxuICAgICAgNjAsXG4gICAgICAxNDIsXG4gICAgICA4NSxcbiAgICAgIDEwLFxuICAgICAgMjQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOCxcbiAgICAgIDE2NSxcbiAgICAgIDQ4LFxuICAgICAgMixcbiAgICAgIDIxMCxcbiAgICAgIDE0MCxcbiAgICAgIDI1NCxcbiAgICAgIDEwNixcbiAgICAgIDI0LFxuICAgICAgMTYsXG4gICAgICA4MyxcbiAgICAgIDIyMyxcbiAgICAgIDExNSxcbiAgICAgIDEwMixcbiAgICAgIDI0NixcbiAgICAgIDE2OCxcbiAgICAgIDE3NCxcbiAgICAgIDUsXG4gICAgICAyMzQsXG4gICAgICAyMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWFpXVlpBMlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjkwNTk4MzYyMzo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ5MDQ0NDA4MDk5MDIzOjYwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0luQ3E2MEVFUFNpekxvR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTWZzYVRIOWVpWDVoTDIxdVcrR3BaVUFyTkpiTkhHTFVRSHdhZld5U2wyQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqZ2hsUDdDZkw4ejgwb3pGSW1lTllWbU83OFh3dkduN2V0eFNlOEI4eEtzcUpqTkFUMzRvdmIxWG9YNGoyN1FCRGdEOEdKbE1MSEVYdE45dGY3S2JCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtRnE2ejQxMU9LZlR5ays0U3o4Ny9oRnVOTzZpd3hrWUVUK0IvcVlrL3BaOExXVVJEbGx5d1FQRmxIN1dXVXF6S1pMRUwwUnpzdDlPS2grR2h4TFFDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI5MDU5ODM2MjM6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM0OTcyMDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEVE1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURUTS5qc29uIjogIntcImtleURhdGFcIjpcIm84VmVMb3I4RHJqRE1SWjlrQ2cwTmlPbGxrbDhmZXl4L0o4eXhaa3VnUlk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE2ODgyNjYzMSxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Dalxoww",


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
