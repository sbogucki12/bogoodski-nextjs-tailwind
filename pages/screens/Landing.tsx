import type { NextPage } from 'next'
import Image from 'next/image'
import profilePic from '../../public/images/meForSlack.jpg'

export interface Props {
    setScreen: Function
  }

const Landing: NextPage<Props> = ({setScreen}) => {
  function setClass(utility: string) {
    let element: HTMLElement | null = document.getElementById('myDiv');
    if (element) {
      element.className += ' animate-fade-out animate-spin';    
    }
    
    setTimeout(() => {
      setScreen(utility)
    }, (900))
      
  }
    return <>
    <div className='border-solid border-warning border-2 w-11/12 h-36 -skew-y-12 z-0 absolute' />

    <div id="myDiv" className='flex flex-col justify-between border-solid border-neutral-content border-4 shadow-lg shadow-error z-10 bg-secondary-content rounded-box min-h-48'>

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
          <button onClick={() => setClass('personal')} className='btn btn-success btn-xs md:btn-md lg:btn-lg hover:bg-error w-32 lg:w-36 hover:animate-wiggle'>Personal</button>
        </div>
        <div>
            <button onClick={() => setClass('professional')} className='btn btn-warning btn-xs md:btn-md lg:btn-lg hover:bg-secondary w-32 lg:w-36 hover:animate-wiggle'>Professional</button>
        </div>
      </div>

    </div>
  </>
}

export default Landing; 