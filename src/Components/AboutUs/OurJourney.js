import React from 'react';

function OurJourney(props) {

    const detailStyle = {
        width: "900px",
        float: "right",
        backgroundColor: (props.mode === 'light') ? 'white' : '#6c757d',
        color: (props.mode === 'light') ? 'black' : 'white'
    }

    const imgStyle = {
        height: "-webkit-fill-available"
    }

  return (
    <div className="card mb-3" style={detailStyle}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src="../images/about-us-img.png" className="img-fluid rounded-start" alt="..." style={imgStyle}/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Welcome to TextUtils - Where Innovation Meets Passion!</h5>
                    <p className="card-text">We're on a mission to revolutionize content. With cutting-edge tech and a customer-centric approach, we're shaping a brighter tomorrow. Join us on this exciting journey!</p>
                    <p className="card-text">TextUtils Team</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default OurJourney;
