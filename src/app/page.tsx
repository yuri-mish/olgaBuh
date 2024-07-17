'use client';

import * as React from 'react';
import '@/lib/env';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Banner from '@/components/Banner';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      <Banner />
      {/* <div className='layout relative flex flex-col items-center justify-center py-12 text-center'>


          <ButtonLink className='mt-6' href='/components' variant='light'>
            See all components
          </ButtonLink>

          <UnstyledLink
            href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter'
            className='mt-4'
          >

            <img
              width='92'
              height='32'
              src='https://vercel.com/button'
              alt='Deploy with Vercel'
            />
          </UnstyledLink>

          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
              Theodorus Clarence
            </UnderlineLink>
          </footer>
        </div> */}
    </>
  );
}
