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
    <div className="min-h-screen w-5/6 bg-neutral ">
      <div className="flex flex-col h-5/6 justify-center align-center relative">
        <SolutionArchitect />
        <div className='justify-self-end'>
          <FontAwesomeIcon icon={faAnglesDown} />
        </div>
      </div>
      <SoftwareEngineer setScreen={setScreen} />
      <Military />
      <p>
        <i>Solution Architect graphic courtesy <a href="http://www.freepik.com" target="_blank" rel="noreferrer noopener">fullvector / Freepik</a></i>.
      </p>

    </div>)
}

export default Professional; 