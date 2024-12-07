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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_13_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODksXG4gICAgICAgIDgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDgyLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0LFxuICAgICAgICAzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDU2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgsXG4gICAgICAgIDc3LFxuICAgICAgICAzNixcbiAgICAgICAgMTcxLFxuICAgICAgICA0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDc5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNixcbiAgICAgICAgMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDYzLFxuICAgICAgICA1NixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDQsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM0LFxuICAgICAgICAwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MixcbiAgICAgICAgOTQsXG4gICAgICAgIDczLFxuICAgICAgICAxOTQsXG4gICAgICAgIDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5LFxuICAgICAgICAwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI5LFxuICAgICAgICA3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDk4LFxuICAgICAgICAxODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY1LFxuICAgICAgICA3MixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgODgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxanZqcW1EY2sxQys1NUdYMEYzTkJ5MVVrQnM5bHVhNWZuY1lKZERUYmVNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0bkhLd0JmUFNES2lXN0oyRVNHV3l3XCIsXG4gIFwicGhvbmVJZFwiOiBcImYzZTUzNDQzLWExMjktNGJlYS1iNDg4LTMxMGFkYThhODU2OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICAxMzAsXG4gICAgICA2OCxcbiAgICAgIDE1OCxcbiAgICAgIDE3LFxuICAgICAgNzIsXG4gICAgICAyMzcsXG4gICAgICA3OCxcbiAgICAgIDI0NCxcbiAgICAgIDIwMixcbiAgICAgIDIxMyxcbiAgICAgIDE2OCxcbiAgICAgIDEyOSxcbiAgICAgIDY0LFxuICAgICAgMjM5LFxuICAgICAgMTcyLFxuICAgICAgNjksXG4gICAgICA4OSxcbiAgICAgIDkwLFxuICAgICAgMTY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDE4OCxcbiAgICAgIDEzOCxcbiAgICAgIDEzMixcbiAgICAgIDksXG4gICAgICA1OCxcbiAgICAgIDE0MyxcbiAgICAgIDExNyxcbiAgICAgIDE1MSxcbiAgICAgIDQwLFxuICAgICAgNDMsXG4gICAgICAxMjQsXG4gICAgICAxMTEsXG4gICAgICAyMjgsXG4gICAgICAxMzUsXG4gICAgICAyMjUsXG4gICAgICA0OSxcbiAgICAgIDEwMCxcbiAgICAgIDUyLFxuICAgICAgMTQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkU0OVM4MjE2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTI5MDU5ODM2MjM6NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0OTA0NDQwODA5OTAyMzo2MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJbkNxNjBFRU1HZzByb0dHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk1mc2FUSDllaVg1aEwyMXVXK0dwWlVBck5KYk5IR0xVUUh3YWZXeVNsMkE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUFoyRXdBZ2pMLzNyT3NxOS96aCthUFlhMmtwMmp2ZURmR214Sy80THJIMXo2N1pneVlPa015Wmc2cnFZaWIrb0pmeWwrUjNrTkVpQkZSZWxDUWh3Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibS9sRUhoRzJOZWZEb01jdWlWL2hlRm4xRVBQVVk4NWxKaTEwejBlSFd1SFJGVVF1TnZxSmVoTmhpUHo4K2VIVDZ2TjBrV25VdHJuMDIwNnBkbFF4QkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyOTA1OTgzNjIzOjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNTk1MjA3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFRNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEVE0uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

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
