'use client';

import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-white'>
      <nav
        aria-label='Global'
        className='bg-white mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8  w-full top-0 z-50'
      >
        <div className='flex lg:flex-1 items-center gap-4'>
          <a
            href='/'
            className='-m-1.5 p-1.5'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Your Company</span>
            <Image
              alt=''
              src='/favicon/favicon-96x96.png'
              width='64'
              height={64}
              className='h-8 w-auto'
            />
          </a>
          <div className='italic h3'>Бухгалтерські послуги</div>
        </div>
        <div className='flex md:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon aria-hidden='true' className='h-6 w-6' />
          </button>
        </div>
        <PopoverGroup className='hidden md:flex md:gap-x-12'>
          <a
            href='/#section1'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Основна
          </a>
          <a
            href='/#section2'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Послуги
          </a>
          <a
            href='/#sectionContact'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Контакти
          </a>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className='md:hidden'
      >
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='/#section1' className='-m-1.5 p-1.5'>
              {/* <span className="sr-only">Your Company</span> */}
              <Image
                alt=''
                src='/favicon/favicon-96x96.png'
                width='64'
                height='64'
                className='h-8 w-auto'
              />
            </a>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon aria-hidden='true' className='h-6 w-6' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <a
                  href='/#section2'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Послуги
                </a>
                <a
                  href='/#sectionContact'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Контакти
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
