import type { NextPage } from 'next'
import Image from 'next/image'
import solutionArchLogo from '../public/images/solution-arch-logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

export interface Props {
  setScreen: Function
}

const Professional: NextPage<Props> = ({ setScreen }) => {
  return (
    <div className="min-h-screen bg-[#180d5b] w-5/6 ">
      <div className="flex flex-col h-5/6 justify-center align-center relative">
        <div className="flex flex-row p-5">
          <div className="w-1/5">
            <Image src={solutionArchLogo} placeholder="blur" />
          </div>
          <div>
            <h1 className="text-center pb-2">Solution Architect</h1>
            <p>I advise executive leadership of the Federal Aviation Administration's Aircraft Certification Service on matters of data and automation. </p>
            <br />
            <p>I am currently architecting the division's enterprise data management plan, designing our implementation of a knowledge graph-based data fabric.  And am familiar with various vendor solutions in the space including:</p>
            <ul className='ml-10 mt-1'>
              <li>Palantir</li>
              <li>Stardog</li>
              <li>Cambridge Semantics</li>
              <li>Neo4j</li>
            </ul>
          </div>
        </div>

        <div className='justify-self-end'>
          <FontAwesomeIcon icon={faAnglesDown} />
        </div>
      </div>
      <div className="bg-error h-96">
        <button className="btn btn-success" onClick={() => setScreen('home')}>Home</button>
      </div>

      <div>
        <p>
          <i>Solution Architect graphic courtesy <a href="http://www.freepik.com" target="_blank" rel="noreferrer noopener">fullvector / Freepik</a></i>.
        </p>
      </div>
    </div>)
}

export default Professional; 