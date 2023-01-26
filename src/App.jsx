import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <img src="/image/cv-logo.svg" alt="" />
        <h1 className="tech">
          We build world class Tech talents
        </h1>
        <p className='hero'>Join our next cohort to accelerate your dream of being a World Class Software Developer. No coding experience required.</p>

        <button className="btn">Enrol now</button>

        <div className='icons'>
          <img src="/image/fb-icon.svg" alt="" />
          <img src="/image/tw-icon.svg" alt="" />
          <img src="/image/github-icon.svg" alt="" />
          <img src="/image/location.svg" alt="" />
        </div>
      </header>


      <section className="first">
        <div className='intro'>
          <h1 className='eco'>State of The Art
            Ecosystem for Creatives</h1>
          <p className="sent">Be a part of an all-inclusive technology hub where you learn, collaborate with tech creatives and join a team of support systems offering you the top tools and frameworks to build solutions and earn big.</p>
        </div>

        <img src="/image/cv-office.jpg" alt="" />

        <aside className="article">
          <div className='content'>
            <img src="/image/bookmark-circle.svg" alt="" />

            <div className='desc'>
              <p className='hed'>Web & Mobile Development</p>
              <p className='function'>We design and develop tech solutions for SMEs and Government Agency.</p>
            </div>
          </div>

          <div className='content'>
            <img src="/image/tent-circle.svg" alt="" />

            <div className='desc'>
              <p className='hed'>Bootcamps & Trainings</p>
              <p className='function'>We’re building the next generation of tech talents.</p>
            </div>
          </div>

          <div className='content'>
            <img src="/image/workspace-circle.svg" alt="" />

            <div className='desc'>
              <p className='hed'>Workspaces & Tech Hub</p>
              <p className='function'>Work and Connect with other Creatives. All in a fun and cozy environment.</p>
            </div>
          </div>
        </aside>
      </section>

      <section className='second'>
        <div className='kp'>
          <h1 className='big'>
            Learn Web & Mobile Development. Access the global job market.
          </h1>
          <p className='word'>The world is constantly in need of technical talent supply pool. Tech is needed accross every sector. Your course of study doesn’t matter. All you need is the skill and experience.</p>
          <button className="btns">Learn more</button>
        </div>

        <div className='line'></div>

        <aside className="side">

          <article className='program'>
            <img src="/image/mail-white.svg" alt="" />
            <div className='group'>
              <p className='head'>Program Schedule</p>
              <p className='subhead'>6 months training +
                6months paid internship
                <span className='in'>(there is a custom schedule for students)</span></p>
            </div>
          </article>

          <article className='program'>
            <img src="/image/group-white.svg" alt="" />
            <div className='group'>
              <p className='head'>Our Curriculum</p>
              <p className='subhead'>It covers the fundamentals and advanced concepts of web & mobile development</p>
            </div>
          </article>

          <article className='program'>
            <img src="/image/group-white.svg" alt="" />
            <div className='group'>
              <p className='head'>Experiential Learning</p>
              <p className='subhead'>30+ Hands-on Projects &
                5+ Real World (Production Grade) Projects</p>
            </div>
          </article>

        </aside>
      </section>

      <section className="code">
        <div className='svghead'>
          <h1 className='exp'>Our Expertise</h1>
          <span className='built'>We have built several solutions from ground up using the following frameworks. Our world class expertise is enviable.</span>
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

      <section className="action">
        <h1 className="exp">Codevillage Kids & Teens Code Classes</h1>
        <p className='kid'>Will your kids be able to build a tech solution? Yes, It’s possible. <br />
          “We catch them young” by introducing these fresh minds into how computer works and how to make it do what they want.</p>
        <div className='spot'>
          <span>Secure a spot for your kid now</span>
          <img src="/image/arrow-right.svg" alt="" />
        </div>
      </section>

      <footer>
        <div className="comment">
          <div className='sect'>
            <img src="/image/logo-footer.svg" className='footlogo' />
            <span>Building the tech talents for the future of work.</span>
          </div>

          <div className='sect'>
            <span className='heavy'>Our Programs</span>
            <span>Fullstack Training</span>
            <span>Kids & Teens Code</span>
            <span>Classes</span>
          </div>

          <div className='sect'>
            <span className='heavy'>Links</span>
            <span>Careers</span>
            <span>Refund Policy</span>
            <span>Privacy Policy</span>
          </div>

          <div className='sect'>
            <span className='heavy'>Contacts</span>
            <span>Rasak Onilu Plaza (Middle Floor), Adjacent Niger Motel, Niger Road, Ilorin, Nigeria</span>
            <span className='heavy'>08168861541 (Nigeria)</span>
            <span className='heavy'>+1 (707) 681-1531 (International)</span>
            <span className='heavy'>+1 (707) 681-1531 (Whatsapp)</span>
            <span className='heavy'>hello@codevillage.ng</span>
          </div>
        </div>

        <hr />

        <div className='copyright'>
          <div>Copyright © 2020-2023 Codevillage Limited</div>

          <div className='footicon'>
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
