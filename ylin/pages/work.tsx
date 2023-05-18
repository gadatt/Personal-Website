import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link  from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-12 ${inter.className}`}
    >
		
		<div className="relative font-bold text-2xl p-4 flex place-items-center">
       <p>Work History</p>
      </div>

	<div >
	  <p className={`mb-3 text-xl font-semibold`}>1. Pathway Plus Myanmar </p>
	  <li>
		Role - Web Development Team Leader
	  </li>
	  <li>
		Duration - June 2022 - April 2023
	  </li>
	  <li>Technologies Used - Typescript, Next JS, React, Tailwind CSS, Mongo DB, Vercel, Figma</li>
	  <li>Responsibilities : 
	  <p>1. Built a website for Pathway Plus users to book appointments, submit forms and see latest event updates</p>
	  <p>2. Building a website for the CEO to log in and input private information dynamically.</p>
		<p>3. Cooperate with UI/UX team in Figma to design the website</p>
		<p>4. Interview web development intern applicants</p>
		</li>
		<br />

	  <p className={`mb-3 text-xl font-semibold`}>2. Creative Tokyo</p>
	  <li>Role - Voluteer as a web developer and event facilitator.</li>
	  <li>Duration - Currently Working</li>
	  <li>Responsibilites - Help the web development team. Facilitate events organising according to my availibility.</li>
	  <br />

	  <li className={`mb-3 text-xl font-semibold`}>3. Corekara Kids</li>
	  <li>Role - Programming Tutor.</li>
	  <li>Duration - August 2022 - April 2023</li>
	  <li>Responsibilites -Teach Scratch, LEGO We Do & Minecraft and translate Japanese lesson materials into English. </li>
	<br />

	<Link
          href="/"
        >
          <h2 className={`mb-3 text-xs underline font-semibold`}>
          Home{' '}
          </h2>
        </Link>

	  </div>


    </main>
  )
}
