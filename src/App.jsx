import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/hompage/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Players from "./components/hompage/players/Players";
import { ToastContainer } from "react-toastify";
import Newsletter from "./components/hompage/newsletter/Newsletter";
import Footer from "./components/footer/Footer";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const playersPromise = fetchPlayer();

function App() {
  const [balance, setBalance] = useState(150);

  return (
    <div>
      <Navbar balance={balance}></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <Players
          playersPromise={playersPromise}
          balance={balance}
          setBalance={setBalance}
        ></Players>
      </Suspense>
      <Newsletter></Newsletter>
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;
