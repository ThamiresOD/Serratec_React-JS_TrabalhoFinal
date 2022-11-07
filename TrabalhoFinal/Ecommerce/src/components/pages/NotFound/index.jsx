import './style.css'
import whale from '../Images/whale-humpback-whale.gif'
import Header from '../../Header/header'
import Footer from '../../Footer/footer'

function NotFound() {
    return (
        <>
            <Header />
            <main className='notfound'>
                <div>
                    <h1>Error 404</h1>
                    <h2>Page Not Found</h2>
                    <h3><br></br>Ser rápido só tem interesse<br></br> se temos o azimute certo!</h3>
                </div>
                <div>
                    <img src={whale} alt="Gif da Baleia" />
                </div>
                <Footer />
            </main>
        </>
    )
}
export default NotFound