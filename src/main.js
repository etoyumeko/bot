import { Telegraf } from "telegraf"
import * as dotenv from "dotenv"
dotenv.config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply('Welcom')
)

bot.help((ctx) => {
    
    console.log(ctx.message)

    ctx.reply("I dont know")
})

bot.command("hello", (ctx) => {
    ctx.reply("Hello")
})

bot.hears((ctx) => {
    ctx.reply(ctx.message.text)
})

bot.launch(() =>{
    console.log("Bot sterted")
})