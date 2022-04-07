import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import PersonalContent from '../screens/Personal'

export interface Props {
    screen: {} | string
}

const Personal: NextPage = (screen: {} | string) => {
    const [selectedScreen, setSelectedScreen] = useState('personal');

    function setClass(utility: string) {
        window.location.pathname = "/" + utility;
        setSelectedScreen(utility);
    }

    return (
        <div className="min-h-min h-screen" data-theme="night">
            <Head>
                <title>BOGOODSKI | Personal</title>
            </Head>
            <div className="flex flex-col justify-center items-center h-full" >
                <PersonalContent setScreen={setClass} />
            </div>
        </div>

    )
}

export default Personal;
