import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notfound">
            <p>Esta página no existe</p>
            <Link to="/">Volver al inicio</Link>
        </div>
    );
}

export default NotFound;