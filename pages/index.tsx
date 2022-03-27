import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../public/images/meForSlack.jpg'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex justify-center items-center">
        <div className="avatar pt-4">
          <div className="w-12 mask mask-hexagon">
            <Image src={profilePic} />
          </div>
        </div>
        <span className='text-7xl'>BOGOODSKI</span>
      </div>

      <div className="flex flex-row justify-between w-1/4 m-10">
        <div>
          <button className="btn btn-outline btn-success">Personal</button>
        </div>
        <div>
          <button className='btn btn-outline btn-warning'>Professional</button>
        </div>
      </div>

    </div>
  )
}

export default Home
