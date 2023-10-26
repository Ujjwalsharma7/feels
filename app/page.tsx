import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className=" text-6xl mb-4">The best journal app, period.</h1>
        <p className=" text-2xl text-white/60 mb-4">
          This is the best app for tracking how you feel throughout your life.
          All you have to do is be honest.
        </p>
        <div>
          <button className="bgblue600">get started</button>
        </div>
      </div>
    </div>
  )
}
