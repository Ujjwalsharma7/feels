import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#121212] flex justify-center items-center text-white">
      <div className="w-full max-w-[650px] mx-auto">
        <h1 className=" text-6xl mb-4">The Best Journal App, period.</h1>
        <p className=" text-2xl text-white/60 mb-4">
          This is the best app for tracking how you feel throughout your life.
          All you have to do is be honest.
        </p>
        <div>
          <Link href="/journal">
            <button className=" bg-blue-600 p-4 rounded-lg text-xl hover:bg-blue-600/30">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
