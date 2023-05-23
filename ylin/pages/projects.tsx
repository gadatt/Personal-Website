import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link  from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-12 ${inter.className}`}
    >
		
      <div className="relative font-bold text-2xl pb-4 flex place-items-center">
       <p>Projects</p>
      </div>
	
	  <div>
		<p className="font-bold pb-2">1. LINE Bot (Django, Mongo DB, Heroku)  </p>
		<div>
		<li>Returns train delay information of Tokyo in English and Japanese from REST API Key </li>
		<li>14 train operators are given IDs.</li>
		<li>User uses this ID to ask the bot the train delay information.</li>
		<li>If there is no delay, “Service on schedule ( 平常運転 )” is returned.</li>
		<li>If there is delay, starting time of the delay and the cause of the delay are returned.</li>
		<br />
		</div>
		</div>
	  	<div><Image src="/static/images/intro.svg" width={300} height={300} alt="Intro Message"></Image></div>
		  <br />
		<div><Image src="/static/images/delayed.svg" width={400} height={400} alt="Delayed Train"></Image></div>
		<br />

		<div>
			<p  className="font-bold pb-2">2. Prototype Of Business Website (Django, SQL, JavaScript, Bootstrap)</p>
			<li>The user can log in/sign up. An auto-generated confirmation mail is sent after signing up</li>
			<li>After the user is registered, he or she can write reviews for the business.</li>
			<li>The reviews can be deleted or edited after being posted.</li>
			<li>They can also comment on other reviews or give likes to them!</li>
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
