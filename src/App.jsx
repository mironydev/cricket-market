import { Suspense } from 'react'
import './App.css'
import Banner from './components/hompage/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Players from './components/hompage/players/Players'

const fetchPlayer = async () => {
  const res = await fetch('/data.json');
  return res.json();
}
const playersPromise = fetchPlayer();

function App() {


  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </div>
  )
}

export default App
