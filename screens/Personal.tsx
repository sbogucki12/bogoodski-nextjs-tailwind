import type { NextPage } from 'next'

export interface Props {
  setScreen: Function
}

const Personal: NextPage<Props> = ({ setScreen }) => {

  return (
    <div >
      <div>
        <h1>Personal</h1>
      </div>
      <div >
        <button className="btn btn-success" onClick={() => setScreen('home')}>Home</button>
      </div>
    </div>)
}

export default Personal; 