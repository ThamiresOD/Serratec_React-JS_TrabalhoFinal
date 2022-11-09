import Header from "../../Header/header";

import WaterBg from '../Videos/WaterBg.mp4';

import Navbar from '../../Navbar'


function FinalizarCompra() {
  return (
    <>
      <Header />
      <Navbar/>

      <div>
        <h1>Em construção ⚒️</h1>
      </div>

      <div className='videobg'>
        <video src={WaterBg} autoPlay loop muted />
      </div>
    </>
  );
}
export default FinalizarCompra;