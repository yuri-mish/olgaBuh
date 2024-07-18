export const dynamic = 'force-dynamic';

export const fetchCache = 'force-no-store';

import { Bot, webhookCallback } from 'grammy';
//import { sql } from '@vercel/postgres';

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token)
  throw new Error('TELEGRAM_BOT_TOKEN environment variable not found.');

const bot = new Bot(token);

bot.command('start', async (ctx) => {
  //const message = ctx.update.message?.text ?? '';
  //const {id,first_name, username='', language_code='' } = ctx.update.message?.from;
  await bot.api.sendMessage(200000970, `Hi!:  ${JSON.stringify(ctx)}`);
  // if (message === '/start') {
  //   try {
  //     await sql`INSERT INTO tg-users (id,first_name, username, language_code ) VALUES (${id}, ${first_name},${username}, ${language_code} );`;
  //   } catch (error) {
  //     return bot.NextResponse.json({ error }, { status: 500 });
  //   }
  // }
});

bot.on('message:text', async (ctx) => {
  await ctx.reply(JSON.stringify(ctx)); //.message.text);
});

export const POST = webhookCallback(bot, 'std/http');
