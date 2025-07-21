import React from 'react';
import { Link } from 'react-router-dom';


function Welcometext(props) {
    const {title,desc,link,explore} = props;
    return (
        <div>
             <section className="text-center py-5 bg-light">
                <div className="container">
                    <h1 className="display-5 fw-bold">{title}</h1>
                    <p className="lead text-muted mt-3">
                    {desc}
                    </p>
                     <Link to={link} target='blank' className="btn btn-primary px-4 py-2 mt-3">
                     {explore}
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Welcometext;