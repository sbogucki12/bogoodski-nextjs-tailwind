import type { NextPage } from 'next'
import Image from 'next/image'
import solutionArchLogo from '../../public/images/solution-arch-logo.jpg'

export interface Props {

}

const SolutionArchitect: NextPage<Props> = () => {
  return (
    <div className="flex flex-row p-5 bg-[#180d5b]" >
      <div className="w-1/5">
        <Image src={solutionArchLogo} placeholder="blur" />
      </div>
      <div>
        <h1 className="text-center pb-2-">Solution Architect</h1>
        <p>I advise executive leadership within the Federal Aviation Administration, mostly focused on enterpise data management and system modernization and integration. </p>
        <br />
        <p>Current field of focus is enterprise data management, specifically data integration and transformation via knowledge graph-based data fabric.</p>
      </div>
    </div>)
}

export default SolutionArchitect; 