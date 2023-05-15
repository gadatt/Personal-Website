import Image from 'next/image'
import Link from 'next/link';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <p>https://github.com/YadanarLin</p>
	  <p> https://github.com/gadatt</p>
	  <p>yadanarrlinn@gmail.com</p>
	  <p>080-7197-1517</p>
	  <p>linkedin.com/in/yadanarlin</p><a href="https://linkedin.com/in/yadanarlin"></a>
	  </div>

      <div className="relative flex place-items-center">
        <p className={`mb-3 text-2xl font-semibold`}>Yadanar Lin</p>
	</div>
		<div>
		<p>
			Mingalarbar!<br /> I am a girl from Yangon, Myanmar, with a huge heart for coding. <br />  Explore the contents below to know more about me. 
		</p>
		</div>
	
		<div>
		<p>
			Education: 3rd Year Computer Science Under graduate at Toyo University.
			<br /> A full scholarship recipient.
		</p>
		</div>
		
      
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/pages/projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Projects{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          </p>
        </Link>

        <Link
          href="/pages/work"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
           Work History{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>

        <Link
          href="/pages/awards"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
		  target="_blank"
          rel="noopener noreferrer">
          <h2 className={`mb-3 text-2xl font-semibold`}>
           Certifications & <br></br>
		   Awards{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          </p>
        </Link>

		<a
          href="https://www.facebook.com/profile.php?id=100084353844354"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
			Personal Blog
		   {' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          </p>
        </a>
      </div>
    </main>
  )
}
