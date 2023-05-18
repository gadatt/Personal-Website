import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-12 ${inter.className}`}
    >
		
		<div className="relative font-bold text-2xl p-4 flex place-items-center">
       <p>Certifications & Awards</p>
      </div>

	<div >
	  <p className={`mb-3 text-xl font-semibold`}>1. Japan's Venture Academy </p>
	  <li>
		Role - Participant
	  </li>
	  <li>
		Duration - April 2023 - June 2023
	  </li>
	  <li>Startup study program for ambitious university students. </li>
	  <li>Responsibilites - Come up with a business prototype for the chosen problem towards the end of the program. Attend weekly lectures, talk to target users iterate and modify your solution</li>
	  <li>LinkedIn: <a href = "https://www.linkedin.com/company/japansventureacademy/">https://www.linkedin.com/company/japansventureacademy/</a></li>
	  <li>Instagram: <a href = "https://instagram.com/japansventureacademy?igshid=NTc4MTIwNjQ2YQ==">https://instagram.com/japansventureacademy?igshid=NTc4MTIwNjQ2YQ==</a></li>
		<br />
		
	  <p className={`mb-3 text-xl font-semibold`}>2. World Robot Olympiad 2019</p>
	  <li>Roles - Team Leader</li>
	  <li>Awards - Winner Of National Competition. Certificate of Participation in International Final.</li>
	  <li>International Final Ranking - 28/34 </li>
	  <li>Responsibilites - Represent SMART Cities in an innovative manner with LEGO Mindstorm EV3.</li>
	  <br />

	  <li className={`mb-3 text-xl font-semibold`}>3. GIRLS STEAM 2019</li>
	  <li>Role - Participant</li>
	  <li>Awards - Design Award & Technology Award</li>
	  <li>Responsibilites - Build a protpotype related to biomimicry by using 3D printers and laser cutters. </li>
	<br />

	<li className={`mb-3 text-xl font-semibold`}>4. Myanmar STEM Competition 2019</li>
	  <li>Role - Participant</li>
	  <li>Awards - Robot Performance Award</li>
	  <li>Responsibilites - Come up with an innovative solution to solve trash problem with LEGO Mindstorm EV3. </li>
	<br />

	<a
          href="/"
        >
          <h2 className={`mb-3 text-xs underline font-semibold`}>
          Home{' '}
          </h2>
        </a>

	  </div>


    </main>
  )
}
