export const dynamic = 'force-dynamic';

export const fetchCache = 'force-no-store';

import { sql } from '@vercel/postgres';
import { Bot, webhookCallback } from 'grammy';

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token)
  throw new Error('TELEGRAM_BOT_TOKEN environment variable not found.');

const bot = new Bot(token);

bot.command('start', async (ctx) => {
  //const message = ctx.update.message?.text ?? '';
  const {
    id,
    first_name,
    username = '',
    language_code = '',
  } = ctx.update.message?.from ?? {};

  //  await bot.api.sendMessage(<number>200000970, `${JSON.stringify(ctx)}`);

  try {
    await sql`INSERT INTO "tg-users" (id,first_name, username, language_code ) VALUES (${id}::bigint, ${first_name},${username}, ${language_code} );`;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(
      'error inserting',
      error,
      id,
      first_name,
      username,
      language_code,
    );
    return;
  }
  await bot.api.sendMessage(<number>id, `Hi!: ${first_name}`);
});

bot.on('message:text', async (ctx) => {
  await ctx.reply(JSON.stringify(ctx.message.text));
});

export const POST = webhookCallback(bot, 'std/http');
