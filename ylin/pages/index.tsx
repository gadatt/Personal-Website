import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-12 ${inter.className}`}
    >
		<div  className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-center">
		<p>yadanarrlinn@gmail.com</p>
		<p>080-7197-1517</p>
		<a href="https://linkedin.com/in/yadanarlin"
		target="_blank"
		rel="noopener noreferrer"><p>LinkedIn</p></a>
		<a href="https://github.com/gadatt"
		target="_blank"
		rel="noopener noreferrer"><p>GitHub</p></a>
		</div>
		
       <div><h1 className={`p-12 text-4xl text-center font-semibold`}>Yadanar Lin</h1>
	   <p>Mingalarbar! </p><br></br> <br /> I am : <br /> <br />
	   <li> a girl from Myanmar with a huge heart for coding.</li><br />
	  <li> a third year undergraduate at Toyo University. </li><br />
	   <li>a full scholarship recipient. </li>
	   <br /> <p> I study Information Networking For Innovation And Design.</p>
	   <br /><p  className={`mb-3 text-xl text-center p-12`}> Explore below to know more about me!</p>
      
</div>


      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="/projects"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-xl font-semibold`}>
            Projects{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href="/work"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-xl font-semibold`}>
            Work History{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href="/awards"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-xl font-semibold`}>
		  Awards & Certifications{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
    
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100084353844354"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-xl font-semibold`}>
           Personal Blog{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
      </div>
    </main>
  )
}
