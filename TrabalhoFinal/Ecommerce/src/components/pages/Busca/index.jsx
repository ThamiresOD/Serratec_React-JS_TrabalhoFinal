import { useEffect } from "react"


function Busca({ value, onChange }) {
    const [item, setItem] = useState([])
    const [itemFiltrado, setFiltrado] = useState(item)
    const [busca, setBusca] = useState('')
    
    function handleChange(event) {
        onChange(event.target.value) 
    }

    
    

    return (
       <div className="container">
        <form className="d-flex" role="search">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
                value={value}
                onChange={handleChange}
            />
        </form>
       </div>
    )
}
export default Busca

// Home

