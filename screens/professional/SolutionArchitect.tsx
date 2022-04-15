import type { NextPage } from 'next'
import Image from 'next/image'
import solutionArchLogo from '../../public/images/solution-arch-logo.jpg'

export interface Props {

}

const SolutionArchitect: NextPage<Props> = () => {
  return (
    <div className="flex flex-row p-5 bg-professional-bg-primary text-professional-text-primary rounded m-4 border-2 border-professional-text-primary " >
      <div className="w-1/5">
        <Image src={solutionArchLogo} placeholder="blur" />
      </div>
      <div>
        <h1 className="text-center pb-2-">Solution Architect</h1>
        <p>It all started as a kid, on my Gateway 233, FTP'ing HTML to geocities…</p>
        <p>In my current role, I share knowledge - mostly on topics of enterprise data management, system integrations and modernizations within my organization at the Federal Aviation Administration. </p>
        <p>Meanwhile, I try to remain active in the web development space, mostly working on React and .NET Core side projects.  I'm interested in data science, but am mostly still at the “clone Kaggle notebooks and work through them” level.  Professionally, I spend a lot of time studying from a system engineering / business analyst perspective as much as I can about:</p>
        <ul>
          <li>Knowledge Graphs</li>
          <li>Graph Databases</li>
          <li>Data Taxonomy and Ontology</li>
          <li>Data Fabrics</li>
          <li>Event Orchestration</li>
          <li>Semantic Metadata</li>
        </ul>
        <p>I don't know how to label what I do. I have this weird competitive sense that convinces me that I must try to keep at least conversational knowledge of every emerging technical trend within my space. That requirement, perceived or reality, is a thrill for me. I also have a unique opportunity to implement a vision that I deeply believe in for a technical project at enterprise scale. It is it's own type of excitement, and unique challenge, trying to compel decision-makers to trust in a plan that I so strongly believe in.</p>
        
        <p>That said, my growth in nerdom wasn't quite as linear as the journey above may contend…</p>

      </div>
    </div>)
}

export default SolutionArchitect; 