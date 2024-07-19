'use server';
import { sql } from '@vercel/postgres';
import { Bot } from 'grammy';

interface FormData {
  text?: string;
  phone: string;
}

const token = process.env.TELEGRAM_BOT_TOKEN ?? '';

// eslint-disable-next-line unused-imports/no-unused-vars
export const createMessage = async ({ phone, text = '' }: FormData) => {
  // await new Promise((resolve) => setTimeout(resolve, 250));

  // const text = formData.get('text') as string;
  //console.log(phone,text)

  const bot = new Bot(token);
  const message = `<b>Повідомлення з сайту </b>

Замовлення дзвінка
Телефон: <b>${phone}</b>
Текст: <b>${text}</b>
`;

  const users = await sql`SELECT * FROM "tg-users";`;
  users.rows.forEach((r) => {
    //console.log('row: ',r)
    return bot.api.sendMessage(<number>r.id, message, { parse_mode: 'HTML' });
  });
};
