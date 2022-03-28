import type { NextPage } from 'next'
import Image from 'next/image'
import profilePic from '../public/images/meForSlack.jpg'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen :w-screen" data-theme="night">
      
      <div className='border-solid border-accent border-4 rounded-box shadow-xl bg-secondary-content p-4 lg:p-8'>
        
        <div className="flex justify-center items-center w-full ">
          <div className="avatar">
            <div className="w-8 lg:w-12 mask mask-hexagon">
              <Image src={profilePic} />
            </div>
          </div>
          <span className='text-lg sm:text-xl lg:text-7xl lg:p-4'>BOGOODSKI</span>
        </div>

        <div className="flex flex-row justify-between ">
          <div>
            <button className="btn btn-outline btn-success btn-xs md:btn-md lg:btn-lg">Personal</button>
          </div>
          <div>
            <button className='btn btn-outline btn-warning btn-xs md:btn-md lg:btn-lg'>Professional</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home
