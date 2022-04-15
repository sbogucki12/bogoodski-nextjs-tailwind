import type { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import SolutionArchitect from './professional/SolutionArchitect'
import SoftwareEngineer from './professional/SoftwareEngineer'
import Military from './professional/Military'

export interface Props {
  setScreen: Function
}

const Professional: NextPage<Props> = ({ setScreen }) => {
  return (
    <div className="min-h-screen w-5/6 bg-neutral bg-fixed bg-cover " style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://bogoodski.blob.core.windows.net/bogoodski2022/moon-mountains.jpg')"
  }}>
      <div className="flex flex-col h-5/6 justify-center align-center relative">
        <SolutionArchitect />
        <div className='justify-self-end'>
          <FontAwesomeIcon icon={faAnglesDown} />
        </div>
      </div>
      <SoftwareEngineer setScreen={setScreen} />
      <div>
      <Military />
      </div>
      
      <p>
        <i>Solution Architect graphic courtesy <a href="http://www.freepik.com" target="_blank" rel="noreferrer noopener">fullvector / Freepik</a></i>.
      </p>
      <p>
        <i>Wave photo by <a href="https://unsplash.com/@silasbaisch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer noopener">Silas Baisch</a> on <a href="https://unsplash.com/backgrounds/cool?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></i>
      </p>
      <p>
        <i>Wave photo by <a href="https://unsplash.com/@vorosbenisop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer noopener">Benjamin Voros</a> on <a href="https://unsplash.com/backgrounds/cool?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></i>
      </p>

    </div>)
}

export default Professional; 