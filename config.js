himconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_58_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgODMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyOCxcbiAgICAgICAgOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTksXG4gICAgICAgIDExNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjksXG4gICAgICAgIDg4LFxuICAgICAgICAyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTksXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0OCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMixcbiAgICAgICAgMjA2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjksXG4gICAgICAgIDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTksXG4gICAgICAgIDcyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDU0LFxuICAgICAgICA5MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MyxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUwLFxuICAgICAgICA5NixcbiAgICAgICAgMTI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjExLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiazRBY3hUVGd2MTVvMU5yWVB4OXZGK3lCUndDNm1TdkNyUllsaW9DUHBUYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTU4NzMxMzA1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3MDRBN0Y4NDE5QjRGRUQ3RUM2QzUwQzdENkUxODJBMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIxODU4ODFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMFYxMnlEMDZUYk9KbjRoT1R1V3U4d1wiLFxuICBcInBob25lSWRcIjogXCI2M2NjYmM0OC1kZmM5LTQyNDQtOWMxMy00MWRiMDYyOTA2ZWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgyLFxuICAgICAgMjUsXG4gICAgICAyNTUsXG4gICAgICAyMDQsXG4gICAgICAxODEsXG4gICAgICAyMTUsXG4gICAgICAxNTMsXG4gICAgICAxOTEsXG4gICAgICAxNjUsXG4gICAgICA4LFxuICAgICAgMjUxLFxuICAgICAgNDYsXG4gICAgICAxMzQsXG4gICAgICAxMTQsXG4gICAgICAxNjIsXG4gICAgICAxMixcbiAgICAgIDE2LFxuICAgICAgMTQ3LFxuICAgICAgMTMsXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICAxNDYsXG4gICAgICAyMzMsXG4gICAgICA1NixcbiAgICAgIDkwLFxuICAgICAgMTI4LFxuICAgICAgNSxcbiAgICAgIDEwMixcbiAgICAgIDg2LFxuICAgICAgMjE0LFxuICAgICAgNDUsXG4gICAgICAxNDcsXG4gICAgICAxODIsXG4gICAgICAxNyxcbiAgICAgIDI0OCxcbiAgICAgIDc1LFxuICAgICAgNzIsXG4gICAgICAxODcsXG4gICAgICAyNDYsXG4gICAgICAxNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1ZCNzY2WENcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTg3MzEzMDU6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI4Njk4OTU1NDUyNjcwOjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1g0c2ZBSEVKRHhtYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKVUN0MnByKzEyOUNFSTVuTVJ2MERQdXpaTTdia1I4ZCtVM1BIUjRPZnlRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZrUXlXbklkT1p5VHdkTTZMaThyM0RXZHh4MHVsMFdNbVpyMkgydWpVSDZCOUkxMEF5dGlYb09iMy9nNTVNZ3Z5WGdlUDVnRnBiQXVjemw0UGF5WENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBmR0dadHZUUUFFZWdGc3Ntb00rMkprWE5GaXdrVms2cXNFbWJKa1I2RHR0eWJ3V1ljdlRtb21Sa2hqZnlxRDVuZnlwWVcvSmpnSEF1MGIzUG50bGhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTg3MzEzMDU6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxODU4NzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCeWNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJ5Yy5qc29uIjogIntcImtleURhdGFcIjpcInlTTnYzTlUyQmRzM0NyUUoydHdJOENMWjV3RjFZU1R2d3NQbGNlMXJkTWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjExNDc0NzQ5MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjE2Nzc3NDQ3NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
