
import "./Navigation.module.css"

function Navigation() {
  return (
   <header>
    <div className="container">
    <nav>
        <div>
            <a href="./index.html">
                <img src="./img/logo.svg" alt="" />
            </a>
        </div>
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>
    </div>
   </header>
  )
}

export default Navigation