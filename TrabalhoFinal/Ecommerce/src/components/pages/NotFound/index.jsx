import './style.css'
import whale from '../Images/whale-humpback-whale.gif'
import Header from '../../Header/header'

function NotFound() {
    return (
        <main className='notfound'>
            <Header/>
            <h1>Eroor 404</h1>
            <h2>Page Not Found</h2>
            <div>
                <img src={whale} alt="Gif da Baleia" />
            </div>
        </main>
    )
}
export default NotFound