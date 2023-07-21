import React from 'react';

function Alert(props) {
  return (
    <div style={{height:'50px'}}>
   { props.alert && <div className='container pt-3'>
        <div className="alert alert-warning" role="alert">
            <strong>{props.alert.msg}</strong>
        </div>
    </div>}
    </div>
  );
}

export default Alert;
