import type { NextPage } from 'next'

export interface Props {
    setScreen: Function
  }

const Personal: NextPage<Props> = ({setScreen}) => {

    return <div><h1>Personal</h1><button className="btn btn-success" onClick={() => setScreen('home')}>Home</button></div>
}

export default Personal; 