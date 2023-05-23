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
	   <p className={`mb-3 text-xl text-center font-semibold p-4`}> Mingalarbar!</p>

<p className={`mb-3 text-s text-left p-12`}>I am a passionate coder from Yangon, Myanmar. <br /> <br />

Currently, I am a third-year undergraduate student at Toyo University, where I am pursuing a degree in Information Networking for Innovation and Design. I feel incredibly fortunate to have received a full scholarship for my studies. <br />
<br />

My coding journey began in the 9th grade, and since then, I have been captivated by the world of programming. While in high school, I participated in robotics, which helped me realize that the software aspect fascinated me more. This realization led me to choose my current major.<br /><br />

Among the languages I have learned, Python stands out as my most proficient language. I have also taken the initiative to self-study JavaScript, expanding my skill set further.
<br /> <br />  As I look to the future, I am eager to connect with a network of professionals who can help me lay the groundwork for my upcoming career.

<br /> <br />I am excited about the opportunities that lie ahead and the potential to make a meaningful impact in the field of coding. Thank you for taking the time to learn about my journey! </p>
	   <p  className={`mb-3 text-xl text-center p-4`}> Explore below to know more about me!</p>
      
</div>

<br />

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
