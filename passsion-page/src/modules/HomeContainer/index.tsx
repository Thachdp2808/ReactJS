import { passions } from '@src/constants/shop.constants';
import { portfolio } from '@src/constants/shop.constants';
import { contactMe } from '@src/constants/shop.constants';
export default function HomeContainer() {
  return (
    <div className='relative py-10'>
      <img
        src='/Background.png'
        className='absolute inset-0 w-full h-full object-cover -z-10'
        alt='Background'
      />

      <div className='container mx-auto md:flex justify-between items-center gap-10 hidden'>
        <div className='max-w-lg'>
          <h1 className='text-5xl font-bold tracking-wide text-primary-2 leading-tight'>
            Hi!&nbsp;I’m Muhamad Raul, <br /> a Front-End Developer.
          </h1>
          <p className='mt-4 text-lg tracking-wide text-gray-700'>
            Front-End developer based in Bekasi, Indonesia.&nbsp;I’m coding with
            a clean and beautiful problem-solving mindset.
          </p>
        </div>
        <img
          src='/heroImg.png'
          alt='Hero Image'
          className='w-[40%] object-contain drop-shadow-lg'
        />
      </div>

      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:hidden'>
        <img
          src='/heroImg.png'
          alt='Hero Image'
          className='w-3/4 object-contain drop-shadow-lg'
        />
        <div className='max-w-lg'>
          <h1 className='md:text-5xl text-2xl font-bold tracking-wide text-primary-2 leading-tight'>
            Hi!&nbsp;I’m Muhamad Raul, <br /> a Front-End Developer.
          </h1>
          <p className='mt-4 md:text-lg text-sm tracking-wide text-gray-700'>
            Front-End developer based in Bekasi, Indonesia.&nbsp;I’m coding with
            a clean and beautiful problem-solving mindset.
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center gap-16 py-16'>
        <h2 className='md:text-4xl text-2xl font-bold tracking-wide text-primary-3'>
          Additional <span className='text-primary-2'>Passions</span>
        </h2>
        <div className='flex flex-col md:flex-row justify-center items-center gap-12'>
          {passions.map((passion, index) => (
            <div
              key={index}
              className='px-6 py-2 rounded-xl flex flex-col justify-center items-center shadow-4xl bg-white transition-transform transform hover:scale-105 '>
              <img
                src={passion.img}
                alt={passion.title}
                className='w-70 h-70 object-contain'
              />
              <span className='text-lg font-semibold text-gray-800'>
                {passion.title}
              </span>
              <h1 className='text-gray-600 text-sm'>{passion.skills}</h1>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col justify-center items-center gap-6 py-16'>
        <h2 className='tmd:text-4xl text-2xl font-bold tracking-wide text-primary-3'>
          My <span className='text-primary-2'>Portfolio</span>
        </h2>
        <div className='flex flex-col md:flex-row  justify-center items-center'>
          {portfolio.map((item, index) => (
            <img
              src={item.img}
              alt={item.alt}
              className='transition-transform transform hover:scale-105 object-contain w-80 h-80'
            />
          ))}
        </div>
      </div>

      <div className='flex flex-col justify-center items-center gap-16 py-16'>
        <h2 className='md:text-4xl text-2xl font-bold tracking-wide text-primary-3'>
          Contact <span className='text-primary-2'>Me</span>
        </h2>
        <div className='flex flex-col md:flex-row justify-center items-center gap-12'>
          {contactMe.map((passion, index) => (
            <div
              key={index}
              className='px-6 py-2 rounded-xl flex flex-col justify-center items-center transform gap-6'>
              <img
                src='./public/contact-background.png'
                className='relative w-24 h-24'
              />
              <img
                src={passion.img}
                alt={passion.title}
                className='w-12 h-12 object-contain absolute bottom-1/2'
              />
              <span className='text-lg text-gray-800'>{passion.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
