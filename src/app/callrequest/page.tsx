'use client';

import { PhoneNumberUtil } from 'google-libphonenumber';
import * as React from 'react';
import { PhoneInput } from 'react-international-phone';
import '@/lib/env';

import 'react-international-phone/style.css';

import Button from '@/components/buttons/Button';

import { createMessage } from '@/app/createMessage';

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

export default function CallRequest() {
  const [phone, setPhone] = React.useState('');
  const isValid = isPhoneValid(phone);

  return (
    <div className='flex flex-col min-h-main w-full px-5'>
      <div className='font-bold text-xl md:text-3xl leading-[1.76rem] pt-5'>
        Замовлення дзвінка
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData();
          formData.append('phone', phone);
          createMessage({ phone });
        }}
        className='flex flex-col gap-y-2 items-center justify-center pt-10'
      >
        <PhoneInput
          name='phone'
          defaultCountry='ua'
          value={phone}
          onChange={(phone) => setPhone(phone)}
        />
        {!isValid && (
          <div style={{ color: 'red' }}>Номер телефону некоректний</div>
        )}

        <Button disabled={!isValid} type='submit' className='border-2'>
          Надіслати
        </Button>
      </form>
    </div>
  );
}
