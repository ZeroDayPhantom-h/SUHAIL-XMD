const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="badamasimuhammad359@gmail.com"
global.location="Abuja, Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://whatsapp.com/channel/0029VafpoEEBKfi6QcNtHD3k";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VafpoEEBKfi6QcNtHD3k";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VafpoEEBKfi6QcNtHD3k" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© ZeroDayPhantom" 


global.devs = "2348113204566" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348113204566";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2348113204566,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_27_09_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1LFxuICAgICAgICA1NixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDMzLFxuICAgICAgICA3MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDM4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NixcbiAgICAgICAgODUsXG4gICAgICAgIDkyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA4OCxcbiAgICAgICAgODgsXG4gICAgICAgIDcyLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU4LFxuICAgICAgICA1OCxcbiAgICAgICAgODQsXG4gICAgICAgIDY5LFxuICAgICAgICA0LFxuICAgICAgICA3NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNixcbiAgICAgICAgMTI4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDcyLFxuICAgICAgICA4NixcbiAgICAgICAgMjQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDkzLFxuICAgICAgICA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgODcsXG4gICAgICAgIDUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkppbmlWY0Y5ZnVrSnYxSU1kRi8wT0lTcTZGaStEV1ZtL1o1cFA2MzdZQjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNpNnFWa0NSVF9tdHZiUDFUVTRwUmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjkwOTVkZWMtMDBjMC00Zjc4LTg1MjMtNzhhZTRjYzc2YmJkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNyxcbiAgICAgIDg5LFxuICAgICAgOTUsXG4gICAgICAxMDQsXG4gICAgICAxMzgsXG4gICAgICAyMjQsXG4gICAgICAyNTEsXG4gICAgICA5NSxcbiAgICAgIDE1NixcbiAgICAgIDE2OCxcbiAgICAgIDIwMSxcbiAgICAgIDI1MyxcbiAgICAgIDI0NCxcbiAgICAgIDEzOSxcbiAgICAgIDEwLFxuICAgICAgMTQ0LFxuICAgICAgNDcsXG4gICAgICAxNzQsXG4gICAgICAzMSxcbiAgICAgIDE5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODIsXG4gICAgICAxNzQsXG4gICAgICA0MixcbiAgICAgIDE3MCxcbiAgICAgIDU1LFxuICAgICAgOSxcbiAgICAgIDU3LFxuICAgICAgOTcsXG4gICAgICAxNDQsXG4gICAgICAxNzIsXG4gICAgICA5OSxcbiAgICAgIDQsXG4gICAgICAyMDIsXG4gICAgICAyNTQsXG4gICAgICAzMyxcbiAgICAgIDc5LFxuICAgICAgMTAyLFxuICAgICAgMTk5LFxuICAgICAgMjQ2LFxuICAgICAgMTQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlY0OTVRTkxNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTEzMjA0NTY2OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5NDYzMTQ1MDY4MTU1NToyMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOM21pcDRHRU1xQ3M3Y0dHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlhwQzZtU2NZUnE3dnJ2NldvcVZvMXpOZ1ZkMTkxeXhQaWlINzBseG9OMVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiamxnSHpEQnhzdHkwcHJKK1loay94YS81YUJCVnlQWlZ2YVNieE9zalBxTHVZRVU0RERiL3l5bjJIbVJiYndKOHU4aitHdGhqUjlRMnVmSUVaekZKQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidTgzbVIxeTh1dk1ubndySk84UkRGYVdKQWY3N1pQN0w4VGpHeWR6SklGTFhLZ2VlWUMweXpVR1ZmUkkwZUpLSFNYNGNtandPUzBsUnRJalNuVG1BRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODExMzIwNDU2NjoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2NzkyMDE1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "ZeroDayPhantom",
  packname: process.env.PACK_NAME || "ZeroDayPhantom",
  botname : process.env.BOT_NAME  || "ZeroDayPhantom Bot",
  ownername:process.env.OWNER_NAME|| "ZeroDayPhantom",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "ZERODAYPHANTOM"  ).toUpperCase(),



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
