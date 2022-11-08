import './style.css'
import whale from '../Images/whale-humpback-whale.gif'
import Header from '../../Header/header'
import Footer from '../../Footer/footer'
import WaterBg from '../Videos/WaterBg.mp4'

function NotFound() {
    return (
        <>
            <Header />
            <main className='notfound'>
                <div>
                    <h1>Error 404</h1>
                    <h2>Page Not Found</h2>
                    <h3 className='fraseDeEfeito'><br></br>Ser rápido só tem interesse<br></br> se temos o azimute certo!</h3>
                </div>
                <div>
                    <img src={whale} alt="Gif da Baleia" />
                </div>
            </main>
            <div className='videobg'>
                <video src={WaterBg} autoPlay loop muted />
            </div>
            <Footer />
        </>
    )
}
export default NotFound