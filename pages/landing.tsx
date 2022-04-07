import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import LandingContent from '../screens/Landing'

const Landing: NextPage = () => {
    const [selectedScreen, setSelectedScreen] = useState('landing');

    function setClass(utility: string) {
        window.location.pathname = "/" + utility;
        setSelectedScreen(utility);
    }

    return (
        <div className="min-h-min h-screen" data-theme="night">
            <Head>
                <title>BOGOODSKI | Landing</title>
            </Head>
            <div className="flex flex-col justify-center items-center h-full" >
                <LandingContent setScreen={setClass} />
            </div>
        </div>

    )
}

export default Landing;