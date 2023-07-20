import React from 'react';

function Alert(props) {
  return (
    props.alert && <div className='container mt-3'>
        <div className="alert alert-warning" role="alert">
            <strong>{props.alert.msg}</strong>
        </div>
    </div>
  );
}

export default Alert;
