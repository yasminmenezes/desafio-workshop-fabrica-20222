import { Link, Outlet } from "react-router-dom";
import RandomAnimal from "./cards";

function App() {
  return(
    <>
      <nav className="navBar">
        <ul className="navBar">
          <li className="homePage">
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/randomanimal">Animals Cards</Link>
          </li>
          <li>
            <Link to="/gallery">Zoo Gallery</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default App;
