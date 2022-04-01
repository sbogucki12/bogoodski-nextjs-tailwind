import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Landing from './screens/Landing'

export interface Props {
  screen: string
}

var display: JSX.Element = <div><h1>TEST</h1></div>


const Home: NextPage = (screen) => {
  function setClass(utility: string) {
    let element: HTMLElement | null = document.getElementById('myDiv');
    if (element) {
      element.className += utility;
    }
  }

    const [screen1, setScreen] = useState('home');
    
    if (screen1 == 'home') {
      display = <Landing setScreen={setScreen} />
    }
    
    

    if(screen1 == 'personal')
    {
      display = <div><h1>Personal</h1><button className="btn btn-success" onClick={() => setScreen('home')}>Home</button></div>
    }

  

  return (
    <div>
      <Head>
        <title>BOGOODSKI</title>
      </Head>
      <div id='myDiv' className="flex flex-col justify-center items-center h-screen :w-screen" data-theme="night">

        {display}

      </div>
    </div>

  )

}

export default Home
