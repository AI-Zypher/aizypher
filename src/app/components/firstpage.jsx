import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      <Head>
        <title>Video Background</title>
        <meta name="description" content="Video background with Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/path-to-your-video.mp4"
        autoPlay
        loop
        muted
      ></video>

      <div className="relative flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <h1 className="text-white text-4xl font-bold">Welccome to AI-ZYPHER  2024</h1>
      </div>
    </div>
  )
}
