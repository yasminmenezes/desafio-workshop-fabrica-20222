import { Link, Outlet } from "react-router-dom";

function App() {
  
  return(
    <>
      <nav className="navBar">
        <ul className="navBar">
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/randomanimal">Random Animal</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default App;
