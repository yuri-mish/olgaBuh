'use client';

import * as React from 'react';
import '@/lib/env';

import 'react-international-phone/style.css';

// import Button from '@/components/buttons/Button';

export default function Services() {
  return (
    <div className='section flex flex-col min-h-main w-full px-5'>
      <div className='font-bold text-xl md:text-3xl leading-[1.76rem] pt-5'>
        Послуги
      </div>
      <div className='section services'>
        <div className='left-row'>
          <div className='services-card'>
            <span className='text-lg font-bold'>Бухгалтерські послуги</span>
            <ul>
              <li>віддалене бухгалтерське обслуговування</li>
              <li>
                підбір та налаштування бухгалтерських програмних продуктів
              </li>
              <li>відновлення обліку</li>
              <li>
                послуги з розрахунку заробітної плати (включаючи штат від 100 і
                більше працівників)
              </li>
            </ul>
          </div>

          <div className='services-card'>
            <span className='text-lg font-bold'>Податковий експрес аудит</span>
            <ul className='pt-1'>
              <li> перевірка загального стану бухгалтерського обліку</li>
              <li> закриття періоду</li>
            </ul>
          </div>
        </div>
        <div className='right-row'>
          <div className='services-card'>
            <span className='text-lg font-bold'>
              Управлінський та фінансовий консалтинг
            </span>
            <ul className='pt-1'>
              <li>отпимізація бізнес-процесів</li>
              <li>
                впровадження та формування управлінських звітів BS, CF P&L
              </li>
              <li>бюджетування</li>
              <li>розробка, налаштування та впровадження</li>
              <li>
                {' '}
                іноваційних технологічних, організаційних рішень для підвищення
                ефективності діяльності компанії
              </li>
              <li>
                консультування з питань комерційної діяльності і керування
              </li>
            </ul>
          </div>

          <div className='services-card'>
            <span className='text-lg font-bold'>
              Юридична підтримка бізнесу
            </span>
            <ul className='pt-1'>
              <li>реєстрація бізнесу</li>
              <li>договірна робота</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
