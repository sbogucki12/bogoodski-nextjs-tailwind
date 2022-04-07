import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import LandingContent from './screens/Landing'

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

        window.location.pathname = "/" + utility;
        setSelectedScreen(utility);
    }

    return (
        <div className="min-h-min h-screen" data-theme="night">
            <Head>
                <title>BOGOODSKI | Home</title>
            </Head>
            <div className="flex flex-col justify-center items-center h-full" >
                <LandingContent setScreen={setClass} />
            </div>
        </div>

    )
}

export default Home;