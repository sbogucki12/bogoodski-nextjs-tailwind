import type { NextPage } from 'next'

export interface Props {
  setScreen: Function
}

const SoftwareEngineer: NextPage<Props> = ({ setScreen }) => {
  return (
        <div className="bg-error h-96">
          <div>
            <h1>Software Engineering</h1>
            <p>In previous roles, I oversaw the technical implementation of Okta for Identity and Access Management.  I led an Agile cross-functional team as a development team manager, delivering a federal government software application.  I was a full-stack web developer. I remain active in web develoment, mostly working with .NET Core, JavaScript (React), and various data storage tools on Azure .</p>

          </div>
          <button className="btn btn-success" onClick={() => setScreen('home')}>Home</button>
        </div>
)
}

export default SoftwareEngineer; 