import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-12 ${inter.className}`}
    >
		
		<div className="relative font-bold text-xl pb-4 flex place-items-center">
       <p>Certifications & Awards</p>
      </div>
	

    </main>
  )
}
