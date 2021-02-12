import { FaShoppingCart } from 'react-icons/fa';
import {Link} from "react-router-dom"

function Header(){
return(
    <header className="header">
       <Link to="/"><h1>Pictures</h1></Link>
       <div className="cart-container">
        <span>CART</span>
       <Link to="/cart"><FaShoppingCart className={"cart-icon"} /></Link>
       </div>

    </header>
)
}

export default Header