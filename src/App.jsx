import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from "./components/Button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      {/* Hero Section */}
      <header className="px-10 xl:pr-0 xl:pl-28  relative">
        <img src="/image/hero_bg.png" alt="Home" className="hidden xl:flex absolute h-full right-0 top-0"></img>
        <nav className='h-40 flex items-center'>
          <img src="/image/cv-logo.svg" alt="" />
        </nav>
        <div className='mb-20 mt-16'>
          <h1 className="text-4xl lg:text-6xl xl:text-7xl leading-snug font-bold mt-[5rem] lg:w-[25rem]">
            We build world class Tech talents
          </h1>
          <p className='max-w-lg mt-6 mb-10 text-lg xl:text-xl text-p-grey'>Join our next cohort to accelerate your dream of being a World Class Software Developer. No coding experience required.</p>
          <Button label="Enroll now" />

        </div>
        <div className='flex items-center space-x-6 mt-12 lg:mt-16 xl:mt-20'>
          <img src="/image/fb-icon.svg" alt="" />
          <img src="/image/tw-icon.svg" alt="" />
          <img src="/image/github-icon.svg" alt="" />
          <img src="/image/location.svg" alt="" />
        </div>
      </header>

      {/* Information Section */}

      <section className="px-6 lg:px-28 py-20 xl:py-32">
        <div className='flex flex-col mb-12 lg:flex-row lg:align-center lg:space-x-24 lg:mb-16'>
          <h1 className='text-3xl lg:text-5xl font-semibold lg:w-[30rem]'>State of The Art
            Ecosystem for Creatives</h1>
          <p className="lg:max-w-sm mt-6 lg:mt-0 text-p-grey leading-normal">Be a part of an all-inclusive technology hub where you learn, collaborate with tech creatives and join a team of support systems offering you the top tools and frameworks to build solutions and earn big.</p>
        </div>

        <img src="/image/cv-office.jpg" className='rounded-lg' alt="" />

        <aside className="flex flex-col lg:flex-row mt-12 gap-y-10 lg:space-x-20">
          <div className='flex gap-x-4 items-start'>
            <img src="/image/bookmark-circle.svg" alt="" />

            <div className='lg:w-[15rem]'>
              <p className='text-2xl mb-2'>Web & Mobile Development</p>
              <p className='text-p-grey'>We design and develop tech solutions for SMEs and Government Agency.</p>
            </div>
          </div>

          <div className='flex gap-x-4 items-start'>
            <img src="/image/tent-circle.svg" alt="" />

            <div className='w-[15rem]'>
              <p className='text-2xl mb-2'>Bootcamps & Trainings</p>
              <p className='text-p-grey'>We’re building the next generation of tech talents.</p>
            </div>
          </div>

          <div className='flex gap-x-4 items-start'>
            <img src="/image/workspace-circle.svg" alt="" />

            <div className='w-[16rem]'>
              <p className='text-2xl mb-2'>Workspaces & Tech Hub</p>
              <p className='text-p-grey'>Work and Connect with other Creatives. All in a fun and cozy environment.</p>
            </div>
          </div>
        </aside>
      </section>

      {/* call to action */}

      <section className='px-5 lg:px-28 py-20 flex items-center lg:space-x-20 flex-col lg:flex-row bg-[#eff2f6]'>
        <div>
          <h1 className='text-3xl lg:text-5xl font-semibold mb-4 leading-tight'>
            Learn Web & Mobile Development. Access the global job market.
          </h1>
          <p className='text-p-grey mb-8 leading-normal'>The world is constantly in need of technical talent supply pool. Tech is needed accross every sector. Your course of study doesn’t matter. All you need is the skill and experience.</p>
          <Button label="Learn more" />
        </div>


        <aside className="flex flex-col mt-12 lg:mt-0 lg:border-l border-gray-300 lg:pl-16  space-y-10">

          <article className='flex items-start gap-x-4'>
            <img src="/image/mail-white.svg" alt="" />
            <div>
              <p className='text-xl text-cv-green mb-1'>Program Schedule</p>
              <p className='font-medium'>6 months training +
                6months paid internship
                <span className='text-[#abafba]'>(there is a custom schedule for students)</span></p>
            </div>
          </article>

          <article className='flex items-start gap-x-4'>
            <img src="/image/group-white.svg" alt="" />
            <div>
              <p className='text-xl text-cv-green mb-1'>Our Curriculum</p>
              <p>It covers the fundamentals and advanced concepts of web & mobile development</p>
            </div>
          </article>

          <article className='flex items-start gap-x-4'>
            <img src="/image/group-white.svg" alt="" />
            <div>
              <p className='text-xl mb-1 text-cv-green'>Experiential Learning</p>
              <p>30+ Hands-on Projects &
                5+ Real World (Production Grade) Projects</p>
            </div>
          </article>

        </aside>
      </section>

      {/* Logos */}
      <section className="px-5 bg-[#f4f8f6] md:px-14 py-20 lg:py-32">
        <div className='text-center'>
          <h1 className='font-bold text-3xl lg:text-5xl mb-2'>Our Expertise</h1>
          <span className='text-lg max-w-2xl lg:text-xl mt-2 '>We have built several solutions from ground up using the following frameworks. Our world class expertise is enviable.</span>
        </div>

        <div className='svgs'>
          <img src="/image/andriod.svg" alt="" />
          <img src="/image/bootstrap.svg" alt="" />
          <img src="/image/aws.svg" alt="" />
          <img src="/image/heroku.svg" alt="" />
          <img src="/image/html5.svg" alt="" />
          <img src="/image/node.svg" alt="" />
          <img src="/image/github.svg" alt="" />
          <img src="/image/css.svg" alt="" />
          <img src="/image/gitlab.svg" alt="" />
          <img src="/image/react.svg" alt="" />
          <img src="/image/mysql.svg" alt="" />
          <img src="/image/mongodb.svg" alt="" />
          <img src="/image/python.svg" alt="" />
          <img src="/image/vue.svg" alt="" />
          <img src="/image/postgres.svg" alt="" />
          <img src="/image/js.svg" alt="" />
          <img src="/image/firebase.svg" alt="" />
          <img src="/image/redux.svg" alt="" />
          <img src="/image/tailwind.svg" alt="" />
          <img src="/image/ruby.svg" alt="" />
          <img src="/image/figma.svg" alt="" />
        </div>
      </section>

      {/* kids section */}

      <section className="px-10 lg:px-28 py-20 flex flex-col items-center text-center">
        <h1 className="text-3xl lg:text-5xl font-semibold text-v1gray mb-4 max-w-lg mx-auto">Codevillage Kids & Teens Code Classes</h1>
        <p className='lg:w-[47rem]'>Will your kids be able to build a tech solution? Yes, It’s possible. <br />
          “We catch them young” by introducing these fresh minds into how computer works and how to make it do what they want.</p>
        <div className='flex items-center font-medium gap-x-2 mt-2rem'>
          <span>Secure a spot for your kid now</span>
          <img src="/image/arrow-right.svg" alt="" />
        </div>
      </section>

      <footer className='px-12 lg:px-32 pt-24 pb-2 bg-[#f4f8f6] text-lg'>
        <div className="grid gap-y-14 lg:grid-cols-4 lg:gap-x-20">
          <div className='flex flex-col text-lg w-[13rem] gap-y-4'>
            <img src="/image/logo-footer.svg" />
            <span>Building the tech talents for the future of work.</span>
          </div>

          <div className='flex flex-col text-lg w-[13rem] gap-y-4'>
            <span className='font-bold'>Our Programs</span>
            <span>Fullstack Training</span>
            <span>Kids & Teens Code</span>
            <span>Classes</span>
          </div>

          <div className='flex flex-col text-lg w-[13rem] gap-y-4'>
            <span className='font-bold'>Links</span>
            <span>Careers</span>
            <span>Refund Policy</span>
            <span>Privacy Policy</span>
          </div>

          <div className='flex flex-col text-lg w-[13rem] gap-y-4'>
            <span className='font-bold'>Contacts</span>
            <span>Rasak Onilu Plaza (Middle Floor), Adjacent Niger Motel, Niger Road, Ilorin, Nigeria</span>
            <span className='font-bold'>08168861541 (Nigeria)</span>
            <span className='font-bold'>+1 (707) 681-1531 (International)</span>
            <span className='font-bold'>+1 (707) 681-1531 (Whatsapp)</span>
            <span className='font-bold'>hello@codevillage.ng</span>
          </div>
        </div>

        <hr className='mt-8' />

        <div className='flex flex-col gap-y-8 lg:flex-row lg:justify-between my-8'>
          <div>Copyright © 2020-2023 Codevillage Limited</div>

          <div className='flex gap-x-8'>
            <a target="_blank" href="http://facebook.com/codevillageL"><img src="/image/fb-icon.svg" /></a>
            <a target="_blank" href="http://twitter.com/codevillageL"><img src="/image/tw-icon.svg" /></a>
            <a target="_blank" href="http://github.com/codevillageL"><img src="/image/github-icon.svg" /></a>
            <img src="/image/location.svg" alt="" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
