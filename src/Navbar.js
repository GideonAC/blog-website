import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Funky-Tales Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                }}>New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;