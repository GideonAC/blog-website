import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Oop!!!</h2>
            <p>Page Not found</p>
            <Link to='/'> Back to the Homepage...</Link>
        </div>
    );
}
 
export default NotFound;