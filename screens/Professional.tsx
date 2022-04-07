import type { NextPage } from 'next'

export interface Props {
  setScreen: Function
}

const Professional: NextPage<Props> = ({ setScreen }) => {
  return (
    <div className="min-h-screen bg-secondary w-5/6 fixed">
      <div className="bg-warning h-5/6">
        <h1>Professional</h1>
      </div>
      <div className="bg-error h-96">
        <button className="btn btn-success" onClick={() => setScreen('home')}>Home</button>
      </div>
    </div>)
}

export default Professional; 