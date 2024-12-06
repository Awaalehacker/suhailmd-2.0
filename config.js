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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "252905620810";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_06_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NCxcbiAgICAgICAgNjksXG4gICAgICAgIDIxLFxuICAgICAgICAzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk2LFxuICAgICAgICAzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM3LFxuICAgICAgICA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDY3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3NixcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI3LFxuICAgICAgICA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxLFxuICAgICAgICA1NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYsXG4gICAgICAgIDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc5LFxuICAgICAgICA2OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMixcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieFJrdHlDeWxXRzE5YWhKNHhQN016MlVqaElpUFpROXdWb1JVcHZKNXE3cz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSUFCQ2NsZVlRN3FwSXNFbVdfS2tsd1wiLFxuICBcInBob25lSWRcIjogXCJkMmIyZDQ4Ni04Njk4LTQyZWMtYmY3Ny0wMWU1NDJjYzc5MjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE0LFxuICAgICAgMjI4LFxuICAgICAgOTcsXG4gICAgICAxNjcsXG4gICAgICAxMzcsXG4gICAgICA4MCxcbiAgICAgIDY3LFxuICAgICAgMjMsXG4gICAgICAyMixcbiAgICAgIDEwMSxcbiAgICAgIDIxMixcbiAgICAgIDkzLFxuICAgICAgOSxcbiAgICAgIDE4MSxcbiAgICAgIDI0MCxcbiAgICAgIDEzNixcbiAgICAgIDIwLFxuICAgICAgOTIsXG4gICAgICAyMzgsXG4gICAgICA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDMxLFxuICAgICAgMTIyLFxuICAgICAgMjI0LFxuICAgICAgMjUwLFxuICAgICAgMjEzLFxuICAgICAgMTYxLFxuICAgICAgNDAsXG4gICAgICA0NCxcbiAgICAgIDIxMyxcbiAgICAgIDU2LFxuICAgICAgMTUwLFxuICAgICAgMTYwLFxuICAgICAgMjA5LFxuICAgICAgNjEsXG4gICAgICAxODEsXG4gICAgICAyNDIsXG4gICAgICAyMzYsXG4gICAgICA4NyxcbiAgICAgIDE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpLSlRMSk04XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTI5MDU2MjA4MTA6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU5Mzk1NjA2MDYxMjcxOjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ016Njc5RUZFTkdsekxvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibEltSUZSaEZhdVZwWExNajd6RHdsb2VRL3I1a2R1THZ1V1cvTm1RVGMyaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrdTBRZlkvMDFsR1YrRCtnYWp3YU9FWk9RSk9sU1U4VTJHcC9nd21sZFVGQ1FkRUFsdFJ5S3RlSmlId0JXWjBMWTdLMW9xeDd5N2QxaXp5RWZCbXFBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBOHU3TE9mMDJpbHQ3ZnIvZmlqMXQxN3JDUXZLN21Idkg3aUhyZXVCMjltcTlrZzRRWmFKL1M4TnpIWTFvNkEzWmlEVmFWd1ZEYTJKbmN3OHJiYklpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI5MDU2MjA4MTA6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNDk3NTU4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRjRtXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGNG0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPdXFCWUxiWlh4UllwcjE1aFpsL29CRGdCS1VxMmtOMDNQV3p4LytEL1k0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MTM4ODA5MDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzMzODY2ODIzMjJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "firconoww",


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
