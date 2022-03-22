import { Link } from "react-router-dom"
function Navbar() {
    return (
        <nav className="navbar">
            <h1>Blog</h1>
            <div className="links">
                <link to="/">Home</link>
                <link to="/create">New Blog</link>
            </div>
        </nav>
    )
}

export default Navbar