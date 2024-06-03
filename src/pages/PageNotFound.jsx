
import { Link } from 'react-router-dom';


const PageNotFound = () => {

   

    return (
       
            <section className="page-not-found-section">
		        <h2>404 ... : </h2>
		        <p>Page not found.</p>
		        <p>Go to <Link to="/">Home</Link> page.</p>
	        </section>
       
    );
    
};

export default PageNotFound;