import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Landing from './screens/Landing'
import Personal from './screens/Personal'
import Professional from './screens/Professional'

export interface Props {
  screen: {} | string
}

const Home: NextPage = (screen: {} | string) => {  
  const [selectedScreen, setSelectedScreen] = useState('home');

  function setClass(utility: string) {
    let element: HTMLElement | null = document.getElementById('myDiv');
    if (element) {
      element.className += ' animate-fade-out';
    }
    
    setSelectedScreen(utility);
  }

  return (
    <div className="min-h-min h-screen" data-theme="night">
      <Head>
        <title>BOGOODSKI</title>
      </Head>
      <div className="flex flex-col justify-center items-center h-full" >
    
    {(() => {
          switch (selectedScreen) {
            case 'home':
              return <Landing setScreen={setClass} />
            case typeof ({}):
              return <Landing setScreen={setClass} />
            case 'personal':
              return <Personal setScreen={setClass} />
            case 'professional':
              return <Professional setScreen={setClass} />
            default:
              return <div><h1>Default</h1></div>
          }
        })()}
    
        
      </div>
    </div>

  )

}

export default Home
