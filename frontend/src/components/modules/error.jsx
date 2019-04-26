import React from 'react';
import PropTypes from 'prop-types';

//Muestra error de servidor
const Error = (props) => {
    return (
        <div className="error">
            {props.error}
        </div>
    )
}

export default Error;

Error.propTypes = {
    error: PropTypes.string.isRequired
}