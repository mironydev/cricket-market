import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/hompage/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Players from './components/hompage/players/Players'
import { ToastContainer } from 'react-toastify'

const fetchPlayer = async () => {
  const res = await fetch('/data.json');
  return res.json();
}
const playersPromise = fetchPlayer();

function App() {

  const [balance, setBalance] = useState(10000);

  return (
    <div>
      <Navbar balance={balance}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Players playersPromise={playersPromise} balance={balance} setBalance={setBalance}></Players>
      </Suspense>

      <ToastContainer/>
    </div>
  )
}

export default App
