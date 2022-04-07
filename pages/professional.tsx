import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import ProfessionalContent from '../screens/Professional'

export interface Props {
    screen: {} | string
}

const Professional: NextPage = (screen: {} | string) => {
    const [selectedScreen, setSelectedScreen] = useState('professional');

    function setClass(utility: string) {
        window.location.pathname = "/" + utility;
        setSelectedScreen(utility);
    }

    return (
        <div className="min-h-min h-screen" data-theme="night">
            <Head>
                <title>BOGOODSKI | Professional</title>
            </Head>
            <div className="flex flex-col justify-center items-center h-full" >
                <ProfessionalContent setScreen={setClass} />
            </div>
        </div>

    )
}

export default Professional;