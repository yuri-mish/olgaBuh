import Link from 'next/link';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';

const Banner = () => {
  return (
    <div className='slides flex flex-col max-h-[calc(100vh-57px)] overflow-y-scroll '>
      <section id='section1' className='section items-center overflow-hidden '>
        <div className='slide'>
          <div className='max-w-3xl'>
            <div className='s-header '>
              Стомилися самостійно сплачувати податки і подавати звітність?
            </div>
            <p className='s-text'>
              Надаємо послуги професійного бухгалтерського супроводу малих,
              середніх та великих підприємств а також ФОП. Подача звітностів в
              контролюючі органи. Ведення обліку за національними та
              міжнародними стандартами а також надаємо власникам бізнесу
              безцінну інформацію щодо розробки, налаштування та впровадження
              іноваційних , технологічних та організаційних рішень для
              підвищення ефективності діяльності компаніі, зорієнтуємо в
              складному податковому законодавстві
            </p>
            {/* <Button className='hidden md:flex mt-11'>
              Explore Now
            </Button> */}
          </div>
          <div className='flex mt-0 md:mt-7 w-full'>
            <NextImage
              useSkeleton
              className='w-[100%] md:h-[75%] lg:w-full'
              src='/images/banner.png'
              width='714'
              height='568'
              alt='Icon'
            />
          </div>
        </div>
      </section>

      <section id='section2' className='section items-center overflow-hidden'>
        <div className='slide'>
          <div className=''>
            {/* <div className='s-header '>
            Важливо!!! <br/> Під час воєнного стану
            </div> */}
            <p className='s-text'>
              Ми вміємо “робити” бухгалтерію якісно та швидко, незалежно від
              масштабу Вашого підприємства. З нами ви будете почуватися в повній
              безпеці. Команда бухгалтерів, фінансистів та юристів забезпечує
              комплексний підхід у вирішенні поточних та стратегічних завдань.
            </p>
          </div>
          <div className='flex mt-0 md:mt-7 w-full'>
            <NextImage
              useSkeleton
              className='w-[100%] md:h-[75%] lg:w-full'
              src='/images/second.png'
              width='714'
              height='568'
              alt='Icon'
            />
          </div>
        </div>
      </section>

      <section
        id='sectionMilitary'
        className='section items-center overflow-hidden'
      >
        <div className='slide'>
          <div className='max-w-3xl'>
            <div className='s-header'>
              Важливо!!! <br /> Під час воєнного стану
            </div>
            <p className='s-text'>
              Наша команда і наша компанія працює і працюватиме у звичному
              режимі, за винятком перерви в роботи офісів під час повітряної
              тривоги.
              <br /> Компанія забезпечена засобами безперебійного
              електроживлення, резервними каналами інтернету і хмарними засобами
              зберігання даних. Вся взаємодія з вами може здійснюватися
              безпосередньо в офісі або дистанційно, телефоном, онлайн, через
              електронний документообіг та електронні цифрові підписи, адресну
              поштову доставку кореспонденції. У випадку повітряної тривоги або
              іншої загрози життю чи здоров’ю людей, офіси компанії не будуть
              безпосередньо приймати відвідувачів з міркувань безпеки.
            </p>
          </div>
          <div className='flex mt-0 md:mt-7 w-full'>
            <NextImage
              useSkeleton
              className='w-[100%] md:h-[75%] lg:w-full'
              src='/images/charger.png'
              width='714'
              height='568'
              alt='Icon'
            />
          </div>
        </div>
      </section>
      <section
        id='sectionContact'
        className='section items-center overflow-hidden'
      >
        <div className='slide'>
          <div className=''>
            <div className='s-header'>
              Час роботи офісів і контакт-центру для взаємодії з клієнтами:
            </div>
            <p className='s-text'>
              Пон-П'ят – з 8:30 до 18:30 без перерви <br />
              Субота - в телефонному режимі <br />
              Неділя – зачинено
              <br />
              <br />
              Онлайн-візити / Послуги на місці
              <br />
            </p>
            <div className='flex items-center gap-5'>
              <HiOutlinePhone /> 095 541 98 10{' '}
            </div>
            <div className='flex items-center gap-5'>
              <HiOutlineMail /> olganik2477@gmail.com{' '}
            </div>

            <Button className=' md:flex mt-11'>
              <Link href='/callrequest'>Замовити дзвінок </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
