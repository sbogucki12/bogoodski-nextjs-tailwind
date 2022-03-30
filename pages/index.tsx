import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import profilePic from '../public/images/meForSlack.jpg'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BOGOODSKI</title>
      </Head>
      <div className="flex flex-col justify-center items-center h-screen :w-screen" data-theme="night">

        <div className='border-solid border-warning border-2 w-11/12 h-36 -skew-y-12 z-0 absolute' />

        <div className='flex flex-col justify-between border-solid border-neutral-content border-4 shadow-lg shadow-error z-10 bg-secondary-content rounded-box min-h-48'>

          <div className='border-solid border-accent border-2 rounded-box bg-secondary-content p-8 md:p-12 z-10 m-2'>

            <div className="flex justify-center items-center space-x-2 ">
              <div className="avatar">
                <div className="w-8 lg:w-12 mask mask-hexagon">
                  <Image src={profilePic} />
                </div>
              </div>
              <span className='text-3xl font-title'>BOGOODSKI</span>
            </div>
          </div>

          <div className="flex flex-row justify-evenly space-x-4 z-10 pb-2 lg:pl-2 lg:pr-2">
            <div>
              <Link href='/personal'>
                <a >
                  <button className="btn btn-success btn-xs md:btn-md lg:btn-lg hover:bg-error w-28 lg:w-36 hover:animate-bounce">Personal</button>
                </a>
              </Link>

            </div>
            <div>
              <Link href='/professional'>
                <a>
                  <button className='btn btn-warning btn-xs md:btn-md lg:btn-lg hover:bg-secondary w-28 lg:w-36 hover:animate-bounce'>Professional</button>
                </a>
              </Link>

            </div>
          </div>

        </div>



      </div>
    </div>

  )
}

export default Home
